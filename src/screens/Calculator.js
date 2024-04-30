import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export default function Calculator() {

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
                <Text style={styles.cardText}>Calculator options</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/half.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Biological Half Life</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/sensitivity.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Sensitivity</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/pediatric.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Pediatric Dose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/cardiac.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Cardiac Functions</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/sheilding.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Shielding</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/decay factor.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Decay factor</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/endo.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Endocrine</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/gastro.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Gastrointestina</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/genito.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Genitourinary</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/pet.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Pet Oncology</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/infection.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Infection and Inflamation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={require('../../assets/concen.jpg')} style={styles.image} />
                        </View>
                        <Text style={styles.text}>Concentration</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 50,
    },
    backButton: {
        marginRight: 10,
        paddingStart: 20,
    },
    cardText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        paddingStart: 80,
      },
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 60,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 40,
    },
    text: {
        fontSize: 15,
        width: 107,
        letterSpacing: 1,
        marginStart: 40,
    },
});
