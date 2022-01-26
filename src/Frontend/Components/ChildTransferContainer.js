import { StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {BUTTON_TITLES} from "../pages/enums/enums.js"
import styles from '../styles/ChildAnyTransactionStyles';
import HeaderContainer from './HeaderContainer.js';
import { Image, StyleSheet, TextInput, Text , View, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { connect } from 'react-redux';
import { depositTask, withdrawTask } from '../../Backend/Store/taskAction.js';



class ChildTransferContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            toBank: "",
            fromBank: "",
            handleBack: props.handleBack
        };
    } 

    render(){
        const {bank, amount, handleBack, depositTask} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTxt}>Transfer</Text>
                    <TouchableOpacity style={styles.cancelBtn} onPress={handleBack}>
                        <Text style={styles.cancelTxt}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerContainer}>
                    <Image style={styles.icon} source={require('../../../assets/transfer.png')}/>
                    <TextInput
                        style={styles.AmtTxtField}
                        placeholder="$0"
                        placeholderTextColor="#8B8B8B"
                        onChangeText={(amt) => this.setState({ amount: amt})}
                    />
                </View>
                
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyTxt}>From</Text>
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
                        onSelect={(selectedItem, index) => this.setState({fromBank: selectedItem})}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item;
                        }}
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
                                <Image style={styles.dropDownIcon} source={require('../../../assets/dropDownIcon.png')}/>
                            );
                        }}
                        onSelect={(selectedItem, index) => this.setState({toBank: selectedItem})}
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
                        this.props.depositTask(this.state.toBank, (Number)(this.state.amount));
                        this.props.withdrawTask(this.state.fromBank, (Number)(this.state.amount));
                        

                        handleBack();
                    }}
                >
                    <Text style={styles.transferBtn}>Transfer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapDispatchToProps = {
    depositTask,
    withdrawTask
};
   
export default connect(null, mapDispatchToProps)(ChildTransferContainer);