import React, { Component } from "react";
import {View} from "react-native";
import codeStyles from '../styles/PairCodeDisplayStyles'


class PairCodeDisplay extends Component {
  
    render() {
        return (

            <View style={codeStyles.code_container}>
                <View style={codeStyles.instructionTitle}>Link your account</View>
                <View style={codeStyles.instructionSub}>Ask a parent for this step!</View>
                <View style={codeStyles.instructionBlurb}>Your account must be linked to a parent account before being used. To unlock the features of the app, <View style={codeStyles.blurbHighlight}>ask your parent to enter your personal code below into their account.</View></View>
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

