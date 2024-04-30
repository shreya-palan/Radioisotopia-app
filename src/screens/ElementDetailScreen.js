// ElementDetailScreen.js

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView  } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

export default function ElementDetailScreen({ route }) {
    const { element } = route.params;

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
                <Text style={styles.title}>{element.name} details</Text>
            </View>
            <ScrollView>
            <View style={styles.containerDetails}>
                <Text style={styles.detail}>Symbol: {element.symbol}</Text>
                <Text style={styles.detail}>Period: {element.period}</Text>
                <Text style={styles.detail}>Group: {element.group}</Text>
                <Text style={styles.detail}>Atomic Number: {element.atomicNumber}</Text>
                <Text style={styles.detail}>Atomic Weight: {element.atomicWeight}</Text>
                <Text style={styles.detail}>Half Life: {element.halfLife}</Text>
                <Text style={styles.detail}>Production Method: {element.productionMethod}</Text>
                <Text style={styles.detail}>Energy: {element.energy}</Text>
                <Text style={styles.detail}>Energy Type: {element.energyType}</Text>
                <Text style={styles.detail}>Oxidation State: {element.oxidationstate}</Text>
                <Text style={styles.detail}>Parent Radionuclide: {element.parentRadionuclide}</Text>
                <Text style={styles.detail}>Decay Product: {element.decayproduct}</Text>
                <Text style={styles.detail}>Natural Structure: {element.naturalstructure}</Text>
                {/* <Image source={element.decayimage} style={styles.image} />  */}
                </View>
            </ScrollView>
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
    containerDetails: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'left',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 1,
    },
    detail: {
        fontSize: 18,
        marginTop: 20,
        marginStart: 30,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain', // Adjust the image size and resizeMode as needed
        marginBottom: 20,
    },
});
