import React from 'react';
import styles from '../../styles/ChildAnyBankStyles';
import { Button, Text, View } from 'react-native';
import BankDisplayBox from '../../Components/BankDisplayContainer.js';

function ChildAnyBank({ route, navigation }) {
    const { name, balance } = route.params;
    return (
    <View style={styles.container}>
         <Button 
            style={styles.BackButton}
            title="<--"
            onPress={() => navigation.goBack()}
        />
        <Text>{name} Bank:</Text>
        
        <BankDisplayBox
            name={name}
            balance={balance}
        />

        <Text>Past Transactions:</Text>
        <Text>Tooth fairy money +$4.00</Text>
        <Text>Grandma gave me money for being nice +$2.00</Text>
        <Text>Mom took away money for cursing -$5.00</Text>
    
        </View>
    )
}


export default ChildAnyBank;