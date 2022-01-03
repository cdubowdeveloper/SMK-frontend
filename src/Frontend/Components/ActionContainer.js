import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from '../styles/ActionContainerStyles'


class ActionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            imageName: props.imageName,
            handlePress: props.handlePress
        };
    } 
  
   render() {
      return (
        <TouchableOpacity
            onPress={this.state.handlePress}>
            
            <View style={styles.actionContainerView}>
                <Image source={require('../../../assets/'+this.state.imageName)} style={styles.icon}/>

                <Text style={styles.containerTitleText}>
                    {this.state.name}
                </Text> 
            </View>
        </TouchableOpacity>
      )
    }
  }


export default ActionContainer;