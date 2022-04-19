import React, { Component } from "react";
import {View, Text} from "react-native";
import codeStyles from '../styles/PairCodeDisplayStyles'


class PairCodeDisplay extends Component {
  
    render() {
        return (

            <View style={codeStyles.code_container}>
                <Text style={codeStyles.instructionTitle}>Link your account</Text>
                <Text style={codeStyles.instructionSub}>Ask a parent for this step!</Text>
                <Text style={codeStyles.instructionBlurb}>Your account must be linked to a parent account before being used. To unlock the features of the app, 
                <Text style={codeStyles.blurbHighlight}> ask your parent to enter your personal code below into their account.</Text></Text>
                <View style={codeStyles.code_sub_container}>
                    <Text style={codeStyles.char_container}>{this.props.paircode[0]}</Text>
                    <Text style={codeStyles.char_container}>{this.props.paircode[1]}</Text>
                    <Text style={codeStyles.char_container}>{this.props.paircode[2]}</Text>
                    <Text style={codeStyles.char_container}>{this.props.paircode[3]}</Text>
                    <Text style={codeStyles.char_container}>{this.props.paircode[4]}</Text>
                </View>
            </View>
            
        )
    }
  }

export default PairCodeDisplay;

