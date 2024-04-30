import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Guideline() {

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const tableHead = ['Sl no', 'Unsealed source', 'Unsealed sources', 'Dose limit type1', 'Dose limit type2', 'Dose limit type3'];
    const tableData = [
        [' 1', ' group1', ' U-232, U-234, AC-227, Th-227', 'Equal to or <5µci', 'Equal to or <5mci', '<5mci'],
        [' 2', ' group2', ' I-131, Na-22, Ac-56, Y-91', 'Equal to or <50µci', 'Equal to or <50mci', '<50mci'],
        [' 3', ' group3', ' Co-57, Ba-1, u-177, F-18, Tc-99, Mo99', 'Equal to or <500µci', 'Equal to or <500mci', '<500mci'],
        [' 4', ' group4', ' Y-91M, Cs-135, H-3, O-15, Tc-99m', 'Equal to or <500µci', 'Equal to or <500mci', '<500mci'],
    ];

  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <ChevronLeftIcon size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Guideline for unsealed sources</Text>
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
