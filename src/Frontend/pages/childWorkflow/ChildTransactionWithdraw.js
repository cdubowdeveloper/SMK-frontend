import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {BUTTON_TITLES} from "../enums/enums.js"
import styles from '../../styles/ChildAnyTransactionStyles';
import HeaderContainer from '../../Components/HeaderContainer.js';
import { Image, StyleSheet, TextInput, Text , View, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'


function ChildTransactionWithdraw({ route, navigation }) {
    const { action } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleTxt}>Withdraw</Text>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelTxt}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.headerContainer}>
                <Image style={styles.icon} source={require('../../../../assets/withdraw.png')}/>
                <TextInput
                    style={styles.AmtTxtField}
                    placeholder="$0"
                    placeholderTextColor="#8B8B8B"
                />
            </View>
            
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyTxt}>What's it for?</Text>
                <TextInput
                    style={styles.descriptionTxtInput}
                    placeholder="ex. found a dollar on the ground"
                    placeholderTextColor="#8B8B8B"
                    multiline={true}
                />
                <Text style={styles.bodyTxt}>To</Text>
                <SelectDropdown
                    data={["Save", "Spend", "Transfer"]}
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
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                      }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                    rowTextForSelection={(item, index) => {
                        return item;
                      }}
                
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.withdrawBtn}>Withdraw</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ChildTransactionWithdraw;