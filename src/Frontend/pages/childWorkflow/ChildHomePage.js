import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles/HomePageStyles.js';
import BankDisplayBox from '../../Components/BankDisplayContainer.js';
import { Button, StyleSheet, Text, View } from 'react-native';


function ChildHomePage({ navigation }) {
    let {saveBalance, spendBalance, shareBalance} = pullFromDb();

    return (
    <View style={styles.container}>
        <Text style={styles.banksTxt}>Child's Banks:</Text>
        <View style={styles.actionContainer}>

        </View>


        <BankDisplayBox
            name='Save'
            balance={saveBalance}
            handlePress = {() => navigation.navigate('ChildAnyBank', {name: 'Save', balance: saveBalance})}
        />

        <BankDisplayBox
            name='Spend'
            balance={spendBalance}
            handlePress = {() => navigation.navigate('ChildAnyBank', {name: 'Spend', balance: spendBalance})}
        />

        <BankDisplayBox
            name='Share'
            balance={shareBalance}
            handlePress = {() => navigation.navigate('ChildAnyBank', {name: 'Share', balance: shareBalance})}
        />
        </View>
    )
}

function pullFromDb(){
    //Do cool database stuff here
    return {
        saveBalance:  10,
        spendBalance: 20,
        shareBalance: 30,
    };
}

export default ChildHomePage;