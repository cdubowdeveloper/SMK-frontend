import React, { useState, useEffect } from 'react';
import styles from '../../styles/HomePageStyles.js';
import BankDisplayBox from '../../Components/BankDisplayContainer.js';
import ActionContainer from '../../Components/ActionContainer';
import { Text, View } from 'react-native';


function ChildHomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.banksTxt}>My Banks:</Text>
            <View style={styles.actionContainer}>
                <ActionContainer 
                    name='Deposit'
                    imageName='deposit.png'
                    handlePress = {() => navigation.navigate('AnyTransaction', {action: "Deposit"})}
                />
                <ActionContainer 
                    name='Withdraw'
                    imageName='withdraw.png'
                    handlePress = {() => navigation.navigate('AnyTransaction', {action: "Withdraw"})}
                />
                <ActionContainer 
                    name='Transfer'
                    imageName='transfer.png'
                    handlePress = {() => navigation.navigate('AnyTransaction', {action: "Transfer"})}
                />
            </View>


            <BankDisplayBox
                name='Save'
                handlePress = {() => navigation.navigate('AnyBank', {name: 'Save'})}
            />

            <BankDisplayBox
                name='Spend'
                handlePress = {() => navigation.navigate('AnyBank', {name: 'Spend'})}
            />

            <BankDisplayBox
                name='Share'
                handlePress = {() => navigation.navigate('AnyBank', {name: 'Share'})}
            />
        </View>
    )
}


export default ChildHomePage;