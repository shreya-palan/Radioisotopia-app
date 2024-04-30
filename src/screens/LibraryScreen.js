import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export default function LibraryScreen() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const navigateDiag = () => {
    navigation.navigate('Diagnostic');
  };

  const navigateTherap = () => {
    navigation.navigate('Therapeutic');
  };

  const navigateTherag = () => {
    navigation.navigate('Theragnostic');
  };

  const navigateNon = () => {
    navigation.navigate('Nonclinical');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ChevronLeftIcon size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Radioisotope Library</Text>
      </View>
      <View style={styles.headerContent}>
        <Image source={require('../../assets/diag.jpg')} style={styles.icon} />
        <TouchableOpacity style={styles.textContainer} onPress={navigateDiag}>
          <Text style={styles.subtitle}>Diagnostic Radioisotope</Text>
          <Text style={styles.tagline}>General</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerContent}>
        <Image source={require('../../assets/therap.jpg')} style={styles.icon} />
        <TouchableOpacity style={styles.textContainer} onPress={navigateTherap}>
          <Text style={styles.subtitle}>Therapeutic Radioisotope</Text>
          <Text style={styles.tagline}>General</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerContent}>
        <Image source={require('../../assets/therag.jpg')} style={styles.icon} />
        <TouchableOpacity style={styles.textContainer} onPress={navigateTherag}>
          <Text style={styles.subtitle}>Theragnostic Radioisotope</Text>
          <Text style={styles.tagline}>General</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerContent}>
        <Image source={require('../../assets/non.jpg')} style={styles.icon} />
        <TouchableOpacity style={styles.textContainer} onPress={navigateNon}>
          <Text style={styles.subtitle}>Non Clinical Radioisotope</Text>
          <Text style={styles.tagline}>General</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 15,
    paddingTop: 20,
    marginBottom: 30,
  },
  icon: {
    width: 54,
    height: 54,
    marginRight: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 2,
  },
  tagline: {
    fontSize: 12,
    color: 'grey',
    marginTop: 2,
    paddingTop: 7,
  },
  
});
