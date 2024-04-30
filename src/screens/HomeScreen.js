import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronRightIcon, HomeIcon, InformationCircleIcon, SquaresPlusIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
  const navigation = useNavigation();

  const navigateLibrary = () => {
    navigation.navigate('Library');
  };

  const navigateUnit = () => {
    navigation.navigate('Unit');
  };

  const navigateDose = () => {
    navigation.navigate('Dose');
  };

  const navigateAbout = () => {
    navigation.navigate('About');
  };

  const navigateCalculator = () => {
    navigation.navigate('Calculate');
  };

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  const navigateHalf = () => {
    navigation.navigate('Half');
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.animatedView}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>R</Text>
            </View>
            <Text style={styles.text}>Radioisotopia</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card} onPress={navigateLibrary}>
              <Text style={styles.cardText}>Radioisotope Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={navigateUnit}>
              <Text style={styles.cardText}>Unit Conversion</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card} onPress={navigateDose}>
              <Text style={styles.cardText}>Acceptable Dose Limit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={navigateAbout}>
              <Text style={styles.cardText}>About Application</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.calculatorHeading}>Calculator</Text>
          </View>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={styles.horizontalContent}>
              <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.imgContainer} onPress={navigateHalf}>
                  <Image source={require('../../assets/half.jpg')} style={styles.image} />
                </TouchableOpacity>
              </View>
              <Text style={styles.captions}>Biological Half Life</Text>
            </View>
            <View style={styles.horizontalContent}>
              <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.imgContainer}>
                  <Image source={require('../../assets/sensitivity.jpg')} style={styles.image} />
                </TouchableOpacity>
              </View>
              <Text style={styles.captions}>Sensitivity</Text>
            </View>
            <View style={styles.horizontalContent}>
              <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.imgContainer}>
                  <Image source={require('../../assets/pediatric.jpg')} style={styles.image} />
                </TouchableOpacity>
              </View>
              <Text style={styles.captions}>Paediatric Dose</Text>
            </View>
            <View style={styles.horizontalContent}>
              <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.imgContainer} onPress={navigateCalculator}>
                  <Image source={require('../../assets/more.jpg')} style={styles.image} />
                </TouchableOpacity>
              </View>
              <Text style={styles.captions}>   More</Text>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.fullWidthCard}>
            <Text style={styles.fullWidthCardTitle}>Unit Conversion</Text>
            <Text style={styles.fullWidthCardText}>Enter a value below to perform a conversion</Text>
            <TouchableOpacity style={styles.fullWidthCardButton}>
              <View style={styles.buttonContent} >
                <Text style={styles.fullWidthCardButtonText} onPress={navigateUnit}>Click here </Text>
                <ChevronRightIcon size={24} color="#fff" onPress={navigateUnit}/>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateHome}>
          <HomeIcon style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateLibrary}>
          <SquaresPlusIcon style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateAbout}>
          <InformationCircleIcon style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  animatedView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  circleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#87CEEB',
    fontStyle: 'italic',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#CCE5FF',
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  calculatorHeading: {
    fontSize: 22,
    color: 'black',
    marginTop: 20,
    paddingEnd: 200,
  },
  scrollContainer: {
    marginTop: 30,
  },
  horizontalContent: {
    marginRight: 10,
  },

  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 35,
  },
  captions: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
    letterSpacing: 1,
    width: 80,
    marginStart: 7,
  },
  fullWidthCard: {
    backgroundColor: '#CCE5FF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    width: '95%',
    marginTop: 30,
  },
  fullWidthCardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  fullWidthCardText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
    marginTop: 10,
  },
  fullWidthCardButton: {
    backgroundColor: '#87CEEB',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 130,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidthCardButtonText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
  },
  icon: {
    width: 30,
    height: 50,
    color: 'black',
  },
});