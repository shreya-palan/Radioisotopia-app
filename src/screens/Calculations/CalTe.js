import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export default function CalTe() { 
    const navigation = useNavigation();
    const [t05, setT05] = useState('');
    const [tb, setTb] = useState('');
    const [te, setTe] = useState('');
    const [result, setResult] = useState(null);

    const handleBack = () => {
        navigation.goBack();
    };

    const handleReset = () => {
        setT05('');
        setTb('');
        setTe('');
        setResult(null);
    };

    const handleCalculate = () => {
        const t05Value = parseFloat(t05);
        const tbValue = parseFloat(tb);
        const teValue = parseFloat(te);
        
        if (!isNaN(t05Value) && !isNaN(tbValue) && !isNaN(teValue)) {
            const calculatedTe = (t05Value * tbValue) / (t05Value + tbValue);
            setResult(calculatedTe.toFixed(2));
        } else {
            setResult(null); // Reset result if any input is invalid
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <ChevronLeftIcon size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Calculate Te</Text>
            </View>
            <View style={styles.captionContainer}>
                <Text style={styles.caption}>Half-Life (\(t_0.5\)):</Text>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter (\(t_0.5\)) value"
                    value={t05}
                    onChangeText={setT05}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.captionContainer2}>
                <Text style={styles.caption}>Total Time (\(t_b\)):</Text>
            </View>
            <View style={styles.textInputContainer2}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter (\(t_b\)) value"
                    value={tb}
                    onChangeText={setTb}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.captionContainer3}>
                <Text style={styles.caption}>Elapsed Time (\(t_e\)):</Text>
            </View>
            <View style={styles.textInputContainer3}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter (\(t_e\)) value"
                    value={te}
                    onChangeText={setTe}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
                    <Text style={styles.buttonText1}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCalculate} style={styles.calculateButton}>
                    <Text style={styles.buttonText2}>Calculate Te</Text>
                </TouchableOpacity>
            </View>
            {result !== null && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Decay Time (\(T_e)): {result}</Text>
                </View>
            )}
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
        left: -57,
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
    captionContainer: {
        position: 'absolute',
        left: 25,
        top: 150, 
    },
    caption: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 1,
    },
    textInputContainer: {
        width: '100%',
        paddingHorizontal: 25,
        marginTop: 20,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '100%',
    },
    captionContainer2: {
        position: 'absolute',
        left: 25,
        top: 230, 
    },
    textInputContainer2: {
        width: '100%',
        paddingHorizontal: 25,
        marginTop: 40,
    },
    captionContainer3: {
        position: 'absolute',
        left: 25,
        top: 310, 
    },
    textInputContainer3: {
        width: '100%',
        paddingHorizontal: 25,
        marginTop: 40,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginTop: 40,
        width: '100%',
    },
    resetButton: {
        backgroundColor: '#CCE5FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    calculateButton: {
        backgroundColor: '#87CEEB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText1: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    buttonText2: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
    },
    resultContainer: {
        paddingTop: 50,
    },
    resultText: {
        textAlign: 'left',
        marginLeft: -100 ,
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
    }
});
