import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {BUTTON_TITLES} from "./enums"

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function ChildAnyTransaction({ navigation }, typeOfBank) {
    return (
    <View style={styles.container}>
         <Button 
            style={styles.BackButton}
            title={BUTTON_TITLES.LEFTARROW}
            onPress={() => navigation.goBack()}
        />
        <Text>Enter Transaction in {typeOfBank} Bank:</Text>
        <TextInput
            placeholder= {BUTTON_TITLES.AMOUNT}
            style={styles.transactionAmount}
        />
        <TextInput
            placeholder= {BUTTON_TITLES.DESCRIPTION}
            style={styles.transactionDescription}
        />
      
        <Button 
            style={styles.Deposit}
            title={BUTTON_TITLES.DEPOSITMONEY}
            //onPress={() => navigation.navigate('EnterShareTransaction')}
            //i think this should not pop up to a new page but rather a notification
            //kinda like venmo how it goes chaching for deposit and vibrate for withraw
        />
        <Button 
            style={styles.Withdraw}
            title={BUTTON_TITLES.WITHDRAWMONEY}
            //onPress={() => navigation.navigate('EnterShareTransaction')}
            //i think this should not pop up to a new page but rather a notification
            //kinda like venmo how it goes chaching for deposit and vibrate for withraw
        />
        </View>
    )
}
export default ChildAnyTransaction;