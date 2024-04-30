import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { RadioisotopeData } from './RadiosotopeData';

export default function TherapeuticRadio() {

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const navigateToElementDetail = (element) => {
        navigation.navigate('Details', { element });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <ChevronLeftIcon size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Therapeutic Radioisotope elements</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={RadioisotopeData[1].elements}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[styles.element, { backgroundColor: '#87CEEB', width: 300 }]}
                            onPress={() => navigateToElementDetail(item)}
                        >
                            <Text style={styles.elementText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
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
        left: 10,
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
    element: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    elementText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});