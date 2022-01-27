import React, { Component } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from '../styles/BankDisplayContainerStyles'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../../Backend/Store/taskAction'


class BankDisplayBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            handlePress: props.handlePress,
        };
    } 
  
   render() {
     const {name, handlePress} = this.props;
     let balance = this.getBalance();


      return (
        <TouchableOpacity
            onPress={handlePress}>
            
            <View style={containerStyle(this.state.name)}>
                <View style={styles.containerTitleView}>
                    <Text style={styles.containerTitleText}>
                        {name}
                    </Text>
                </View>

                <Text style={styles.containerBalanceText}>
                    ${balance}
                </Text>

                <Text style={styles.totalBalanceText}>
                    total balance
                </Text>
                
            </View>
        </TouchableOpacity>
      )
    }

    
getBalance = () => {
    switch (this.state.name) {
        case "Save":
            return this.props.saveBalance
            break;
        case "Spend":
            return this.props.spendBalance
            break;
        case "Share":
            return this.props.shareBalance
            break;
        default:
            return "ERROR"
            break;
    }
}

}


  function containerStyle(props) {
    switch(props){
        case 'Save':
            return {
                width:312,
                height:141,
                backgroundColor: '#A0D2CD',
                borderRadius: '10px',
                marginBottom: 26,
            }
        case 'Spend':
            return {
                width:312,
                height:141,
                backgroundColor: '#8D5AB5',
                borderRadius: '10px',
                marginBottom: 26,
            }
        case 'Share':
            return {
                width:312,
                height:141,
                backgroundColor: '#ED8762',
                borderRadius: '10px',
                marginBottom: 26
            }
        default:
            return {
                width:312,
                height:141,
                backgroundColor: '#FFF000',
                borderRadius: '10px',
                marginBottom: 26,
            }
    }
}



function mapStateToProps(state) {
    const { saveBalance, shareBalance, spendBalance } = state;
    return {
        spendBalance: spendBalance,
        saveBalance: saveBalance,
        shareBalance: shareBalance,
    }
}

export default connect(mapStateToProps) (BankDisplayBox);
