import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {BUTTON_TITLES} from "../enums/enums.js"
import styles from '../../styles/ChildAnyTransactionStyles';
import HeaderContainer from '../../Components/HeaderContainer.js';
import { Image, StyleSheet, TextInput, Text , View, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'


function ChildTransactionDeposit({ route, navigation }) {
    const { userModel, setUserModel } = route.params;
    const [amt, setAmt] = useState(0);
    const [description, setDescription] = useState("");
    const [bank, setBank] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleTxt}>Deposit</Text>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelTxt}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.headerContainer}>
                <Image style={styles.icon} source={require('../../../../assets/deposit.png')}/>
                <TextInput
                    style={styles.AmtTxtField}
                    placeholder="$0"
                    placeholderTextColor="#8B8B8B"
                    onChangeText={(amt) => setAmt(amt)}
                />
            </View>
            
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyTxt}>Where's it from?</Text>
                <TextInput
                    style={styles.descriptionTxtInput}
                    placeholder="ex. found a dollar on the ground"
                    placeholderTextColor="#8B8B8B"
                    multiline={true}
                    onChangeText={(description) => setDescription(description)}
                />
                <Text style={styles.bodyTxt}>To</Text>
                <SelectDropdown
                    data={['Save', 'Spend', 'Transfer']}

                    buttonStyle={styles.dropDownBtn}
                    buttonTextStyle={styles.dropDownBtnTxt}
                    rowStyle={styles.dropDownRow}
                    rowTextStyle={styles.dropDownRowTxt}
                    defaultButtonText="Select Bank"
                    renderDropdownIcon={() => {
                        return (
                            <Image style={styles.dropDownIcon} source={require('../../../../assets/dropDownIcon.png')}/>
                        );
                    }}
                    onSelect={(selectedItem, index) => setBank(selectedItem)}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                    rowTextForSelection={(item, index) => {
                        return item;
                      }}
                
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    userModel.depositBalance(bank, amt, description);
                    
                    navigation.goBack();
                }}
            >
                <Text style={styles.depositBtn}>Deposit</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ChildTransactionDeposit;