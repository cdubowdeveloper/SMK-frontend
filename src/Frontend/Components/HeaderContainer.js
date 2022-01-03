import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from '../styles/HeaderContainerStyles'


class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            handlePress: props.handleBack
        };
    } 
  
   render() {
      return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.BackButton} onPress={this.state.handlePress}>
                <Image source={require('../../../assets/backButton.png')} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.banksTxt}>{this.state.name}</Text>
        </View>
        
      )
    }
  }

export default HeaderContainer;