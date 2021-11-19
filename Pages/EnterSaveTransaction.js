import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function EnterSaveTransaction({ navigation }) {
    return (
    <View style={styles.container}>
         <Button 
            style={styles.BackButton}
            title="<--"
            onPress={() => navigation.goBack()}
        />
        <Text>Enter Transaction in SAVE Bank:</Text>
        <TextInput
            placeholder="Amount: $"
            style={styles.transactionAmount}
        />
        <TextInput
            placeholder="Description"
            style={styles.transactionDescription}
        />
      
        <Button 
            style={styles.Deposit}
            title="Deposit Money"
            //onPress={() => navigation.navigate('EnterShareTransaction')}
            //i think this should not pop up to a new page but rather a notification
            //kinda like venmo how it goes chaching for deposit and vibrate for withraw
        />
        <Button 
            style={styles.Withdraw}
            title="Withdraw Money"
            //onPress={() => navigation.navigate('EnterShareTransaction')}
            //i think this should not pop up to a new page but rather a notification
            //kinda like venmo how it goes chaching for deposit and vibrate for withraw
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BackButton: {
        position: 'absolute',
        left: 5,
        top: 5,
        height: 10,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
    transactionAmount: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
    transactionDescription: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
    Deposit: {
        position: 'absolute',
        left: 5,
        bottom: 5,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
    Withdraw: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
});

export default EnterSaveTransaction;