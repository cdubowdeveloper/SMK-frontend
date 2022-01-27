import React from 'react';
import styles from '../../styles/AnyBankStyles';
import { Button, Text, View, TouchableOpacity, Image } from 'react-native';
import BankDisplayBox from '../../Components/BankDisplayContainer.js';
import HeaderContainer from '../../Components/HeaderContainer.js';
import TransactionContainer from '../../Components/TransactionContainer';

function ChildAnyBank({ route, navigation }) {
    const { name, balance } = route.params;
    return (
    <View style={styles.container}>
        <HeaderContainer
            name={name + ' Bank'}
            handleBack={() => navigation.goBack()} 
        />
        
        <BankDisplayBox
            name={name}
            balance={balance}
        />

        <View style={styles.TransactionsContainer}>

            <Text style={styles.TransactionsTxt}>Transactions</Text>
            <TransactionContainer
                date= "Mon, Oct 25"
                type= "withdraw"
                amount= "3.67"
                description="money for ice cream"
            />
            <TransactionContainer
                date= "Mon, Oct 25"
                type= "transfer"
                amount= "1.45"
                description="transferred from spend bank"
            />
            <TransactionContainer
                date= "Mon, Oct 25"
                type= "deposit"
                amount= "0.25"
                description="found a quarter on the ground"
            />

        </View>
        </View>
    )
}


export default ChildAnyBank;