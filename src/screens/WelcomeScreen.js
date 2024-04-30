import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image 
      source={require('../../assets/welcome.jpeg')}
      style={styles.image}
      />
      <Text style={styles.text1}>Welcome to</Text>
      <Text style={styles.text2}>Radioisotopia</Text>
      <Text style={styles.tag1}>Get to the hub for radioisotope related to</Text>
      <Text style={styles.tag2}>radiation based calculation and Conversions!</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
    backgroundColor: '#fff',
  },
  image: {
    width: 320,
    height: 200,
    marginBottom: 20,
  },
  text1: {
    fontSize: 44,
    marginBottom: -6,
    letterSpacing: 2,
  },
  text2: {
    fontSize: 60,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#87CEEB',
    marginBottom: 30,
  },
  tag1: {
    fontSize:14,
    letterSpacing: 1,
    color: 'gray',
    fontWeight: 'bold',
  },
  tag2: {
    fontSize:14,
    letterSpacing: 1,
    color: 'gray',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#87CEEB',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});