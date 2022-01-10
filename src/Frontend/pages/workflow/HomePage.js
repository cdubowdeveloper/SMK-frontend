import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles/HomePageStyles.js';
import BankDisplayBox from '../../Components/BankDisplayContainer.js';
import ActionContainer from '../../Components/ActionContainer';
import {USER} from '../enums/enums'
import { Text, View } from 'react-native';


function HomePage({ navigation }) {
    const {name, userType, saveBalance, spendBalance, shareBalance} = pullFromDb();

    return (
        <View style={styles.container}>
            <Text style={styles.banksTxt}>{name}'s Banks:</Text>
            {
                userType == USER.CHILD &&
                <View style={styles.actionContainer}>
                    <ActionContainer 
                        name='Deposit'
                        imageName='deposit.png'
                        handlePress = {() => navigation.navigate('AnyTransaction', {action: 'Deposit'})}
                    />
                    <ActionContainer 
                        name='Withdraw'
                        imageName='withdraw.png'
                        handlePress = {() => navigation.navigate('AnyTransaction', {action: 'Withdraw'})}
                    />
                    <ActionContainer 
                        name='Transfer'
                        imageName='transfer.png'
                        handlePress = {() => navigation.navigate('AnyTransaction', {action: 'Transfer'})}
                    />
                </View>
            }

            <BankDisplayBox
                name='Save'
                balance={saveBalance}
                handlePress = {() => navigation.navigate('AnyBank', {name: 'Save', balance: saveBalance})}
            />

            <BankDisplayBox
                name='Spend'
                balance={spendBalance}
                handlePress = {() => navigation.navigate('AnyBank', {name: 'Spend', balance: spendBalance})}
            />

            <BankDisplayBox
                name='Share'
                balance={shareBalance}
                handlePress = {() => navigation.navigate('AnyBank', {name: 'Share', balance: shareBalance})}
            />
        </View>
    )
}

function pullFromDb(){
    //Do cool database stuff here but imma just return some values for now
    // should probably use a cache or global state to avoid extra database calls 
    return {
        name: "Grace",
        userType: "Child",
        saveBalance:  10,
        spendBalance: 20,
        shareBalance: 30,
    };
}

export default HomePage;