import React, { useState, useEffect } from 'react';
import styles from '../../styles/HomePageStyles.js';
import BankDisplayBox from '../../Components/BankDisplayContainer.js';
import ActionContainer from '../../Components/ActionContainer';
import { Image, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown'
import PairCodeDisplay from '../../Components/PairCodeDisplay';

function HomePage({ navigation }) {
    // hardcode whether child owned by parent
    let linked = false
    let isParent = false;

    if (isParent){
        //create parent navbar with dropdown
        // taken from list of objects (objects include childname, save/spend/share values, )
        // dropbox is already in project. See SelectDropdown element in ChildDepositContainer.js
        return (
            <View style = {styles.container}>
                <SelectDropdown
                    data={[{
                        name: "Grace",
                        save: 10,
                        spend: 20,
                        share: 15,
                    },{
                        name: "Caleb",
                        save: 32,
                        spend: 20,
                        share: 10
                    }]}

                    buttonStyle={styles.dropDownBtn}
                    buttonTextStyle={styles.dropDownBtnTxt}
                    rowStyle={styles.dropDownRow}
                    rowTextStyle={styles.dropDownRowTxt}
                    defaultButtonText="Select Account"
                    renderDropdownIcon={() => {
                        return (
                            <Image style={styles.dropDownIcon} source={require('../../../../assets/dropDownIcon.png')}/>
                        );
                    }}
                    onSelect={() => console.log("set redux state")}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.name;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.name;
                    }}
                
                />
                <div style = {{marginBottom: 10}}>
                    <View style={styles.titleRow}>
                        <Text style={styles.banksTxt}>My Banks:</Text>
                        <TouchableOpacity onPress = {() => console.log('check notifications')}>
                            <View style = {styles.notificationsButton}>
                                <Image style = {styles.notificationsIcon} source = {require('../../../../assets/notificationsIcon.png')} />
                            </View>
                            
                        </TouchableOpacity>
                    </View>    
                </div>      
                 <View >
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
            </View>
        )   
    }
    else { // if child
        // if not ownder, need to link
        if (!linked){
            return (
                // hardcode until set up with backend:
                <PairCodeDisplay paircode={"FILLS"}></PairCodeDisplay>
                // once backend plugged in:
                // <PairCodeDisplay paircode={props.child.linkcode}></PairCodeDisplay>
            )
        }
        else {
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

                        <View>
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
                    </View>
                    )
            }
        }
}

export default HomePage;