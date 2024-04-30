import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon, BackspaceIcon } from 'react-native-heroicons/outline';


export default function Conversions() {

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
                <Text style={styles.title}>Activity Conversion</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter value"
                    keyboardType="numeric"
                // onChangeText={text => setValue(text)}
                // value={value}
                />
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <BackspaceIcon size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow2}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow2}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow2}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow2}>
                    <TouchableOpacity style={styles.button3}>
                        <Text style={styles.buttonText2}>Convert</Text>
                    </TouchableOpacity>
                </View>
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
    inputContainer: {
        marginTop: 20,
        paddingHorizontal: 48,
        width: '50%',
        marginEnd: 220,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    buttonRow: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#CCE5FF',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: '3%',
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    buttonRow2: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button2: {
        backgroundColor: '#CCE5FF',
        width: '115%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: '3%',
    },
    button3: {
        backgroundColor: 'navy',
        width: '360%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: '3%',
    },
    buttonText2: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
})