import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import styles from '../../styles/HomePageStyles.js';
import BankDisplayBox from '../../Components/BankDisplayContainer.js';
import ActionContainer from '../../Components/ActionContainer';
import getWithdrawBalance from '../../Extra/AppData';
import { ChildDataModel } from '../../../Backend/DataModels/ChildDataModel.js';

import { Text, View } from 'react-native';




function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}


function ChildHomePage({ navigation }) {
    const [ {dataModel}, setDataModel] = useState(pullFromDb())

    const isFocused = useIsFocused();
    let [saveBalance, spendBalance, shareBalance] = [dataModel.getSaveBalance(),dataModel.getSpendBalance(),dataModel.getShareBalance()];
 

    return (
        <View style={styles.container}>
            <Text style={styles.banksTxt}>{dataModel.getSaveBalance()}'s Banks:</Text>
            <View style={styles.actionContainer}>
                <ActionContainer 
                    name='Deposit'
                    imageName='deposit.png'
                    handlePress = {() => navigation.navigate('ChildTransactionDeposit', {userModel: dataModel, setUserModel: setDataModel})}
                />
                <ActionContainer 
                    name='Withdraw'
                    imageName='withdraw.png'
                    handlePress = {() => navigation.navigate('ChildTransactionWithdraw', {userModel: dataModel})}
                />
                <ActionContainer 
                    name='Transfer'
                    imageName='transfer.png'
                    handlePress = {() => navigation.navigate('ChildTransactionTransfer', {userModel: dataModel})}
                />
            </View>


            <BankDisplayBox
                name='Save'
                balance={dataModel.getSaveBalance()}
                handlePress = {() => navigation.navigate('ChildAnyBank', {name: 'Save', balance: dataModel.getSaveBalance()})}
                handleBalanceChange = {() => dataModel.getSaveBalance()}
            />

            <BankDisplayBox
                name='Spend'
                balance={spendBalance}
                handlePress = {() => navigation.navigate('ChildAnyBank', {name: 'Spend', balance: dataModel.getSpendBalance()})}
            />

            <BankDisplayBox
                name='Share'
                balance={dataModel.getShareBalance()}
                handlePress = {() => navigation.navigate('ChildAnyBank', {name: 'Share', balance: dataModel.getShareBalance()})}
            />
        </View>
    )
}

function pullFromDb(){
    //Do cool database stuff here but imma just return some values for now
    let dataModel = new ChildDataModel('Caleb', 'Dubow', '<INSERT HERE>', 10, 20, 30);
    return {
        dataModel
    };
}

export default ChildHomePage;