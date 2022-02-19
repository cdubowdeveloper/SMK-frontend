import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from '../styles/TransactionContainerStyles'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../../Backend/Store/taskAction'
import TransactionContainer from "./TransactionContainer";

class TransactionTableContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bank: props.bank
        };
    } 
  
   render() {
      return (
        <View style={styles.TransactionsContainer}>

            <Text style={styles.TransactionsTxt}>Transactions</Text>
            
            {this.props.transactions.map((object, i) => 
            
                <TransactionContainer
                    date={object.date}
                    amount= {object.amt}
                    description= {object.description}
                />
            
            )}
{/*             
            <TransactionContainer
                date= "Mon, Oct 25"
                type= "withdraw"
                amount= "3.67"
                description="money for ice cream"
            />
            <TransactionContainer
                date= "Mon, Oct 25"
                type= "transfer"
                amount= "1.45"
                description="transferred from spend bank"
            />
            <TransactionContainer
                date= "Mon, Oct 25"
                type= "deposit"
                amount= "0.25"
                description="found a quarter on the ground"
            /> */}

        </View>
      )
    }
  }

function mapStateToProps(state) {
    const { transactions } = state;
    return {
        transactions: transactions,
    }
}

export default connect(mapStateToProps) (TransactionTableContainer);

