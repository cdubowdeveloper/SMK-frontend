import React, { Component } from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import styles from '../styles/GoalEditingStyles';

class GoalEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goalVal: this.props.goal.goalVal ? this.props.goal.goalVal : "0.00",
            goalDate: this.props.goal.goalDate ? this.props.goal.goalDate : "Enter Date"
        };

        this.goalButtonStyle = this.goalButtonStyle.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleNewValue = this.handleNewValue.bind(this);
        this.handleNewDate = this.handleNewDate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    goalButtonStyle(type) {
        switch(type) {
            case("Save"):
                return {
                    width: "190px",
                    height: "57px",
                    marginTop: "66px",
                    textAlign: "center",
                    borderRadius: "11px",
                    backgroundColor: "#79D677",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "20px",
                    paddingTop: "17px",
                    marginLeft: "76px"
                };
            case("Spend"):
                return {
                    width: "190px",
                    height: "57px",
                    marginTop: "66px",
                    textAlign: "center",
                    borderRadius: "11px",
                    backgroundColor: "#9A6ABF",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "20px",
                    paddingTop: "17px",
                    marginLeft: "76px"
                };
            case("Share"):
                return {
                    width: "190px",
                    height: "57px",
                    marginTop: "66px",
                    textAlign: "center",
                    borderRadius: "11px",
                    backgroundColor: "#C77354",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "20px",
                    paddingTop: "17px",
                    marginLeft: "76px"
                };
        }
    }

    handleUpdate() {
        const newGoal = {
            status: "active",
            soFarVal: 0,
            goalVal: parseInt(this.state.goalVal),
            goalDate: this.state.goalDate
        }
        this.props.update(this.props.type, newGoal);
        this.props.exit();
    }

    handleNewValue(value) {
        this.setState({
            goalVal: value
        })
    }

    handleNewDate(date) {
        this.setState({
            goalDate: date
        })
    }

    handleDelete() {
        this.props.delete(this.props.type);
        this.props.exit();
    }

    render() {
        return (
            <View style={styles.editingContainer}>
                <View style={styles.editingNavBar}>
                    <TouchableOpacity onPress={this.props.exit}><Image style={styles.editingBack} source={require('../../../assets/backButton.png')}/></TouchableOpacity> 
                    <Text style={styles.editingTitle}>{this.props.type} Bank Goal</Text>
                </View>
                <Text style={styles.editingBlurb}>Enter in how much you want to save in your {this.props.type} Bank and when you want to save it by to set a new goal!</Text>
                <View style={styles.edit}>
                    <Text style={styles.subTitle}>How much?</Text>
                    <TextInput id="newValue" onChangeText={this.handleNewValue} style={styles.editInput} placeholder={"$"+this.state.goalVal}/>
                </View>
                <View style={styles.edit}>
                    <Text style={styles.subTitle}>By when?</Text>
                    <TextInput id="newDate" onChangeText={this.handleNewDate} style={styles.editInput} placeholder={this.state.goalDate}/>
                </View>
                <TouchableOpacity onPress={this.handleUpdate}><Text style={this.goalButtonStyle(this.props.type)}>Set Goal</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.handleDelete}><Text style={styles.deleteText}>Delete Goal</Text></TouchableOpacity>
            </View>
        );
    }
}

export default GoalEditing;