import React, { Component } from "react";
import {View, Text, Image, TextInput} from "react-native";
import styles from '../styles/GoalEditingStyles';

class GoalEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goalVal: 0,
            goalDate: ""
        };
    }

    render() {
        return (
            <View style={styles.editingContainer}>
                <View style={styles.editingNavBar}>
                    <Image source={require('../../../assets/backButton.png')}/>
                    <Text>{this.props.type} Bank Goal</Text>
                </View>
                <Text>Enter in how much you want to save in your {this.props.type} Bank and when you want to save it by to set a new goal!</Text>
                <View style={styles.edit}>
                    <Text style={styles.subTitle}>How much?</Text>
                    <TextInput style={styles.editInput} placeholder="$0.00"/>
                </View>
                <View style={styles.edit}>
                    <Text style={styles.subTitle}>By when?</Text>
                    <TextInput style={styles.editInput} placeholder="Select Date"/>
                </View>
            </View>
        );
    }
}

export default GoalEditing;