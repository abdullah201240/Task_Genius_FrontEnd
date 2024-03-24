import { StyleSheet, Text, ScrollView, Image, TouchableOpacity, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const ForgetPasswordCode = (props: any) => {
  const [code, setCode] = useState("");
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image source={require("../../assets/project-management-icon-flat-design-GP43TY.jpg")} style={styles.logo} />
      <Text style={styles.text}>Restore Password </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Code"
          value={code}
          onChangeText={(text) => setCode(text)}
        />
        <Text style={styles.forgotPasswordText}>Enter the code. which is given in your email </Text>
        
      </View>
      
      

      <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('ForgetPasswordFinal')}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      
    </ScrollView>
  )
}

export default ForgetPasswordCode

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
    fontSize: 30,
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
    height: 60,
    width: 200,
    backgroundColor: "#6529C9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: 350,
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
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
