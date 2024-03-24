import React, { useState } from 'react';
import { ScrollView, Image, View, TextInput, Pressable, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import axios, { AxiosError } from 'axios'; 
import { API_BASE_URL } from './config';

const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/Login`, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const { email, name, phone } = response.data.data;

        if (email) {
          props.navigation.navigate('Home', {
            user: {
              email: email as string,
              name: name as string,
              phone: phone as string,
            },
          });
          console.log('Login successful');
        } else {
          Alert.alert('Login Failed', 'Invalid email or password');
        }
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        if (axiosError.response?.status === 401) {
          Alert.alert('Login Failed', 'Invalid email or password');
        } else {
          console.error('Error during login:', error);
          Alert.alert('Login Failed', 'An error occurred during login');
        }
      } else {
        console.error('Error during login:', error);
        Alert.alert('Login Failed', 'An error occurred during login');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image source={require("../../assets/project-management-icon-flat-design-GP43TY.jpg")} style={styles.logo} />
      <Text style={styles.text}>Welcome Back </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Pressable onPress={() => props.navigation.navigate("ForgetPassword")} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forget your password?</Text>
      </Pressable>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Pressable onPress={() => props.navigation.navigate("Signup")} style={styles.signupButton}>
        <Text style={styles.signupText}>Don't have an account? <Text style={styles.signupLink}>Signup</Text></Text>
      </Pressable>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "#38759E",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 12,
    height: 50,
    width: 200,
    backgroundColor: "#6529C9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: 300,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  forgotPasswordText: {
    color: "#38759E",
    paddingBottom: 10,
    paddingRight: 40
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end'
  },
  signupText: {
    paddingTop: 10
  },
  signupLink: {
    color: "#6529C9",
    fontWeight: "bold"
  },
  signupButton: {
    marginTop: 10
  }
});
