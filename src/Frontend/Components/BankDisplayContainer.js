import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
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
                    <Text style={[styles.containerTitleText, {color: textColor(this.state.name)}]}>
                        {name}
                    </Text>


                <Text style={styles.containerBalanceText}>
                    ${balance}
                </Text>

                <Text style={[styles.totalBalanceText, {color: textColor(this.state.name)}]}>
                    total balance
                </Text>

                <Icons name={this.state.name}/>
                
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


function Icons(props) {
    console.log(props)
    switch(props.name){
        case 'Save':
            return (
                <View style={styles.iconView}>
                    <Image style={styles.sprite} source={require('../../../assets/saveHero.png')}/>

                </View>
            )
        case 'Spend':
            return (
                <View style={styles.iconView}>
                    <Image style={styles.sprite} source={require('../../../assets/spendHero.png')}/>
                    
                </View>
            )
        case 'Share':
            return (
                <View style={styles.iconView}>
                    <Image style={styles.sprite} source={require('../../../assets/shareHero.png')}/>
                    
                </View>
            )
        default:
            return (
                <View style={styles.iconView}>
                    <Image style={styles.sprite} source={require('../../../assets/saveHero.png')}/>
                    
                </View>
            )
    }
}

  function containerStyle(props) {
    switch(props){
        case 'Save':
            return {
                width:312,
                height:141,
                backgroundColor: '#D4F8E7',
                borderRadius: '10px',
                marginBottom: 26,
            }
        case 'Spend':
            return {
                width:312,
                height:141,
                backgroundColor: '#FAECFF',
                borderRadius: '10px',
                marginBottom: 26,
            }
        case 'Share':
            return {
                width:312,
                height:141,
                backgroundColor: '#FFE6DF',
                borderRadius: '10px',
                marginBottom: 26
            }
        default:
            return {
                width:312,
                height:141,
                backgroundColor: '#FFE6DF',
                borderRadius: '10px',
                marginBottom: 26,
                
            }
    }
}

function textColor(props) {
    switch(props){
        case 'Save':
            return '#51946D';
        case 'Spend':
            return '#9A6ABF';
        case 'Share':
            return '#C77354';
        default:
            return '#C77354';
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
