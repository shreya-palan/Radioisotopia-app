import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export default function AboutScreen() {

  const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ChevronLeftIcon size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>About Application</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Welcome to Radioisotope app! Go to the hub for radioisotope related calculation and unit conversions. Dive into our intuitive tools, ensuring
          accurate results for your scientific endeavors. Explore our extensive radioisotope library, tailored for professional, researcher and student
          enthusiasts. Empower yur work with seamless calulations and compressive resources. Data is taken from the most recent and realiable source (Isotiope 
          browser by IAEA, AERB, etc.) and optimal search and retrieve performance is achieved with an embedded data base meaning that no network connection
          is required. Thanks to the dedicated efforts of the AROHA GROUP PVT. LTD. for bringinng innovations and excellence to your fingertips.
        </Text>
        <Text style={styles.textHead}>COOKIES AND PRIVACY POLICY</Text>
        <Text style={styles.textLast}>Note that this app is provided under specific licensing terms. For recirculation, adhere to the outlined
        software details and ensure responsible use. Any misuse or unauthorized redistribution may result in legal action. Respect the terms and 
        condition to maintain a fair and secure environment for all users. By using the app, you signify yor agreement to be bound ny RADIOISOTOPE's 
        condition. For any queries or issues related to RADIOISOTOPE, you can contact us by radioisotopia@gmail.com</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
},
header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 50,
},
backButton: {
    position: 'absolute',
    left: -50,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
},
title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
},
textContainer: {
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 20,
},
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'justify',
  },
  textHead: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingEnd: 60,
  },
  textLast: {
    fontSize: 15,
    color: 'black',
    textAlign: 'justify',
    paddingTop: 20,
  }
})