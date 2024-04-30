import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export default function DoseScreen() {

  const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const navigateOccup = () => {
        navigation.navigate('Occupational');
      };

      const navigateAppren = () => {
        navigation.navigate('Apprentice');
      };

      const navigatePublic = () => {
        navigation.navigate('Public');
      };

      const navigateGuide = () => {
        navigation.navigate('Guide');
      };

      const navigateRadio = () => {
        navigation.navigate('Radio');
      };

      const navigateRadiation = () => {
        navigation.navigate('Radiation');
      };

      const navigateDispose = () => {
        navigation.navigate('Dispose');
      };

  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <ChevronLeftIcon size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Acceptable Dose Limit Info</Text>
            </View>
            <ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]} onPress={navigateOccup}>
                    <Text style={styles.elementText}>Occupational Dose Limit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]} onPress={navigateAppren}>
                    <Text style={styles.elementText}>Apprentices and trainees between 16-18 year age</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]} onPress={navigatePublic}>
                    <Text style={styles.elementText}>Dose Limit for public</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]} onPress={navigateGuide}>
                    <Text style={styles.elementText}>Guideline for unsealed sources</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]} onPress={navigateRadio}>
                    <Text style={styles.elementText}>Radiological safety criteria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]} onPress={navigateRadiation}>
                    <Text style={styles.elementText}>Radiation Handling activity limits</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]} onPress={navigateDispose}>
                    <Text style={styles.elementText}>Discharge and disposal limits</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
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
        left: -15,
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
    buttonContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    element: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    elementText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
