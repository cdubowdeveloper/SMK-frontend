import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {BUTTON_TITLES} from "../pages/enums/enums.js"
import styles from '../styles/ChildAnyTransactionStyles';
import HeaderContainer from './HeaderContainer.js';
import { Image, StyleSheet, TextInput, Text , View, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { connect } from 'react-redux';
import { withdrawTask } from '../../Backend/Store/taskAction.js';



class ChildWithdrawContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            description: "",
            bank: "",
            handleBack: props.handleBack
        };
    } 

    render(){
        const {bank, amount, handleBack, depositTask} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTxt}>Withdraw</Text>
                    <TouchableOpacity style={styles.cancelBtn} onPress={handleBack}>
                        <Text style={styles.cancelTxt}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerContainer}>
                    <Image style={styles.icon} source={require('../../../assets/withdraw.png')}/>
                    <TextInput
                        style={styles.AmtTxtField}
                        placeholder="$0"
                        placeholderTextColor="#8B8B8B"
                        onChangeText={(amt) => this.setState({ amount: amt})}
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
                        data={["Save", "Spend", "Share"]}
                        buttonStyle={styles.dropDownBtn}
                        buttonTextStyle={styles.dropDownBtnTxt}
                        rowStyle={styles.dropDownRow}
                        rowTextStyle={styles.dropDownRowTxt}
                        defaultButtonText="Select Bank"
                        renderDropdownIcon={() => {
                            return (
                                <Image style={styles.dropDownIcon} source={require('../../../assets/dropDownIcon.png')}/>
                            );
                        }}
                        onSelect={(selectedItem, index) => this.setState({bank: selectedItem})}
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
                        console.log(this.state);
                        this.props.withdrawTask(this.state.bank, (Number)(this.state.amount), this.state.description);
                        handleBack();
                    }}
                >
                    <Text style={styles.withdrawBtn}>Withdraw</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = {
    withdrawTask,
};
   
export default connect(null, mapDispatchToProps)(ChildWithdrawContainer);
