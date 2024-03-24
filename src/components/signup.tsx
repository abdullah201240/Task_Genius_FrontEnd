import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, TouchableOpacity, View, TextInput } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from './config'; 
const Signup = (props: any) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        name: name,
        phone: phone,
        email: email,
        password: password,
      });


      props.navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image source={require('../../assets/project-management-icon-flat-design-GP43TY.jpg')} style={styles.logo} />
      <Text style={styles.text}>Create Account</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
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

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signupButton}>
        <Text style={styles.signupText}>
          Already have an account?{' '}
          <Text style={styles.signupLink} onPress={() => props.navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;

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
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#38759E',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 12,
    height: 50,
    width: 200,
    backgroundColor: '#6529C9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: 350,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  signupText: {
    paddingTop: 10,
  },
  signupLink: {
    color: '#6529C9',
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 10,
  },
});
