import { StyleSheet, Text, ScrollView, Image, TouchableOpacity, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Login = (props: any) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image source={require("../../assets/project-management-icon-flat-design-GP43TY.jpg")} style={styles.logo} />
      <Text style={styles.text}>Create Account </Text>


      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setEmail(text)}
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

      <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Pressable onPress={() => props.navigation.navigate("Login")} style={styles.signupButton}>
        <Text style={styles.signupText}>Already  have an account? <Text style={styles.signupLink}>Login</Text></Text>
      </Pressable>
    </ScrollView>
  )
}

export default Login

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
    width: 350,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  forgotPasswordText: {
    color: "#38759E",
    paddingBottom: 10,
    paddingRight:40

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
})
