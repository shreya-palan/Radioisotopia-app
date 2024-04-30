import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SplashScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Welcome');
    },1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    
      <View style={styles.container}>
        <View style={styles.animatedView}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>R</Text>
          </View>
          <Text style={styles.text}>Radioisotopia</Text>
        </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EOFFFF',
  },
  animatedView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
   width: 30,
   height: 30,
   borderRadius: 50,
   backgroundColor: '#87CEEB',
   alignItems: 'center',
   justifyContent: 'center', 
   marginRight: 7,
  },
  circleText: {
    
    fontSize:24,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 42,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#87CEEB',
  },
})
