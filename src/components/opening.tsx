import { StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

async function loadFonts() {
  try {
    await Font.loadAsync({
      'ChrustyRock-ORLA': require('../../assets/fonts/ChrustyRock-ORLA.ttf'),
    });
  } catch (error) {
    console.error('Error loading fonts:', error);
  }
}
const Opening = (props: any) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFontsAsync() {
      await loadFonts();
      setFontsLoaded(true);
    }

    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image source={require("../../assets/project-management-icon-flat-design-GP43TY.jpg")} style={styles.logo} />
      <Text style={styles.text}>Task Genius</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainerSignup} onPress={() => props.navigation.navigate('Signup')}>
        <Text style={styles.buttonSignupText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Opening

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
    fontFamily: 'ChrustyRock-ORLA',

  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 12,
    height: 50,
    width: 200,
    backgroundColor: "rgb(85, 12, 206)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonContainerSignup: {
    marginTop: 10,
    height: 50,
    width: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "black",
  },
  buttonSignupText: {
    color: "rgb(85, 12, 206)",
    fontSize: 18,
  },
})
