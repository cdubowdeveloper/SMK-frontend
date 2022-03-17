import React, { Component } from "react";
import {View} from "react-native";
import codeStyles from '../styles/PairCodeDisplayStyles'


class PairCodeDisplay extends Component {
  
    render() {
        return (

            <View style={codeStyles.code_container}>
                <View style={codeStyles.instruction}>This is a placeholder for instructions for using the code.</View>
                <View style={codeStyles.code_sub_container}>
                    <View style={codeStyles.char_container}>{this.props.paircode[0]}</View>
                    <View style={codeStyles.char_container}>{this.props.paircode[1]}</View>
                    <View style={codeStyles.char_container}>{this.props.paircode[2]}</View>
                    <View style={codeStyles.char_container}>{this.props.paircode[3]}</View>
                    <View style={codeStyles.char_container}>{this.props.paircode[4]}</View>
                </View>
            </View>
            
        )
    }
  }

export default PairCodeDisplay;