import React, { Component } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from '../styles/BankDisplayContainerStyles'


class BankDisplayBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            balance: props.balance,
            handlePress: props.handlePress
        };
    } 
  
   render() {
      return (
        <TouchableOpacity
            onPress={this.state.handlePress}>
            
            <View style={containerStyle(this.state)}>
                <View style={styles.containerTitleView}>
                    <Text style={styles.containerTitleText}>
                        {this.state.name}
                    </Text>
                </View>

                <Text style={styles.containerBalanceText}>
                    ${this.state.balance}
                </Text>

                <Text style={styles.totalBalanceText}>
                    total balance
                </Text>
                
            </View>
        </TouchableOpacity>
      )
    }
  }

  function containerStyle(props) {
    switch(props.name){
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
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                marginBottom: 26,
            }
    }
}

export default BankDisplayBox;

// const styles = StyleSheet.create({
// saveContainer: {
//     width:312,
//     height:141,
//     backgroundColor: '#A0D2CD',
//     borderRadius: '10px',
//     marginBottom: 26,
// },
// spendContainer: {
//     width:312,
//     height:141,
//     backgroundColor: '#8D5AB5',
//     borderRadius: '10px',
//     marginBottom: 26,
// },
// shareContainer: {
//     width:312,
//     height:141,
//     backgroundColor: '#ED8762',
//     borderRadius: '10px'
// }
// });