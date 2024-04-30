import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Discharge() {

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const tableHead = ['Sl no', 'Character', 'Dose limit', 'Unit'];
    const tableData = [
        [' 1', ' Radioactivite disposal to the sewerage system', ' 100', ' µSv/y'],
        [' 2', ' Radiation dose rate at any point on the sewerage-line', ' > 1', ' µSv/hr'],
    ];

  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <ChevronLeftIcon size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Discharge and disposal limits</Text>
            </View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#87CEEB' }}>
                <Row data={tableHead} style={[styles.tableHeader, styles.headerText]} />
                <Rows data={tableData} style={styles.rowText} />
            </Table>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
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
        left: -10,
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
    tableHeader: {
        height: 40,
        backgroundColor: '#B0E0E6',
        height: 60,
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    rowText: {
        height: 100,
    },
});
