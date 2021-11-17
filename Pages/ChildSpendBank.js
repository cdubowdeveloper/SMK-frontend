import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Button, StyleSheet, Text, View } from 'react-native';


function ChildSpendBank({ navigation }) {
    return (
    <View style={styles.container}>
         <Button 
            style={styles.BackButton}
            title="<--"
            onPress={() => navigation.goBack()}
        />
        <Text>Spend Bank:</Text>
      
        <Button 
            style={styles.NewSpendTransaction}
            title="New Transaction"
            onPress={() => navigation.navigate('EnterSpendTransaction')}
        />
        <Text>Past Transactions:</Text>
        <Text>Tooth fairy money +$4.00</Text>
        <Text>Grandma gave me money for being nice +$2.00</Text>
        <Text>Mom took away money for cursing -$5.00</Text>
    
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
    NewSpendTransaction: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
});

export default ChildSpendBank;