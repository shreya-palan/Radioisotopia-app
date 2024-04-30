import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export default function HalfLife() {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const navigateTe = () => {
        navigation.navigate('Te');
    }

    const navigateTb = () => {
        navigation.navigate('Tb');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <ChevronLeftIcon size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Calculate Biological Half Life</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button} onPress={navigateTe}>
                        <Text style={styles.buttonText}>Calculate Te</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, styles.secondButton]} onPress={navigateTb}>
                        <Text style={styles.buttonText}>Calculate Tb</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
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
        paddingVertical: 70,
        paddingHorizontal: 50,
    },
    backButton: {
        position: 'absolute',
        left: -17,
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
        marginTop: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#87CEEB',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'flex-start',
        width: 300,
    },
    secondButton: {
        backgroundColor: '#87CEEB',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textAlign: 'left'
    },
});