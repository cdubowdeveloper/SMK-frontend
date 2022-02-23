import React from 'react';
import styles from '../../styles/AnyBankStyles';
import { Button, Text, View, TouchableOpacity, Image } from 'react-native';
import BankDisplayBox from '../../Components/BankDisplayContainer.js';
import HeaderContainer from '../../Components/HeaderContainer.js';
import TransactionContainer from '../../Components/TransactionContainer';
import TransactionTableContainer from '../../Components/TransactionTableContainer';

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
        
        <TransactionTableContainer
            bank={name}
        />
        
        </View>
    )
}




export default ChildAnyBank;