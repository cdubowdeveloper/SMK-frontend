import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from '../styles/TransactionContainerStyles'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../../Backend/Store/taskAction'


class TransactionContainer extends Component {
    constructor(props) {
        super(props);

        let type = "";
        if (props.amount > 0){
            type = "withdraw"
        } else{
            type = "deposit";
           
        };

        
        this.state = {
            date: props.date,
            amount: props.amount,
            description: props.description,
            type: type
        };
    } 
  
   render() {

      return (
        <View style={styles.containerView}>
            <Image source={require('../../../assets/'+this.state.type+'.png')} style={styles.icon}/>
            <Text style={styles.dateTxt}> {this.state.date} </Text>
            <Text style={styles.descriptionTxt}> {this.state.description} </Text>
            <Text style={amountTxtStyle(this.state)}> ${Math.abs(this.state.amount)} </Text>
        </View>
      )
    }
  }

  
  function amountTxtStyle(props) {
    switch(props.type){
        case 'withdraw':
            return {
                position: 'absolute',
                right: 5,
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'right',
                color: '#892020'
            }
        case 'deposit':
            return {
                position: 'absolute',
                right: 5,
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'right',
                color: '#257C2E'
            }
        case 'transfer':
            return {
                position: 'absolute',
                right: 5,
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'right',
                color: '#395794'
                
            }
        default:
            return {
                position: 'absolute',
                right: 5,
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'right'
            }
    }
}

export default TransactionContainer;