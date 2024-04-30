import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export default function UnitScreen() {

  const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const navigateConversions = () => {
      navigation.navigate('Convert');
  };

  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <ChevronLeftIcon size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Unit Conversion</Text>
            </View>
            <ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]} onPress={navigateConversions}>
                    <Text style={styles.elementText}>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}>
                    <Text style={styles.elementText}>Absorbed Dose</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}>
                    <Text style={styles.elementText}>Equivalent Dose, Effective Dose</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}>
                    <Text style={styles.elementText}>Exposure Dose</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}>
                    <Text style={styles.elementText}>Energy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}>
                    <Text style={styles.elementText}>Weight</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}>
                    <Text style={styles.elementText}>Height</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}>
                    <Text style={styles.elementText}>Temperature</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}>
                    <Text style={styles.elementText}>Liquid</Text>
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