import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

const Home = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Task Genius</Text>
        <View style={styles.iconContainer}>
          <Icon name="sign-out" size={30} color="white" />
        </View>
      </View>

      <View style={styles.middleContainer}>
        <Text>Content Goes Here</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Icon name="briefcase" size={30} color="white" />
        <Icon name="tasks" size={30} color="white" />
        <Icon name="plus" size={30} color="white" />
        <Icon name="bell" size={30} color="white" />
        <Icon name="user" size={30} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#38759E', 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'ChrustyRock-ORLA',
    color: 'white',
    ...Platform.select({
      android: {
        paddingTop: Platform.OS === 'android' ? 30 : 0, 
      },
    }),
  },
  iconContainer: {
    marginLeft: 'auto',
    ...Platform.select({
      android: {
        paddingTop: Platform.OS === 'android' ? 30 : 0, 
      },
    }),
  },
  middleContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#38759E', 
  },
});
