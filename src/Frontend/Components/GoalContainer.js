import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from '../styles/GoalContainerStyles';

class GoalContainer extends Component {
    constructor(props) {
        super(props);

        this.renderCorrectContainer = this.renderCorrectContainer.bind(this);
        this.goalContainerStyle = this.goalContainerStyle.bind(this);
        this.goalSubTitleStyle = this.goalSubTitleStyle.bind(this);
        this.goalButtonStyle = this.goalButtonStyle.bind(this);
    }

    handlePress() {
        // Navigate to goal create/edit/delete window
    }

    render() {
        return (
               <View style={this.goalContainerStyle(this.props.name)}>
                   <Text style={this.goalSubTitleStyle(this.props.name)}>{this.props.name} Bank</Text>
                   {this.renderCorrectContainer()}
               </View>
        );
    }

    renderCorrectContainer() {
        switch(this.props.status) {
            case "unset":
                return (
                    <View style={styles.goalSub}>
                        <Text style={styles.goalMessage}>Currently no goal set.</Text>
                        <View style={this.goalButtonStyle(this.props.name)}>Set a Goal</View>
                    </View>
                );
            case "complete":
                return (
                    <View style={styles.goalSub}>
                        <Text style={styles.goalMessage}>Congratulations! You've reached your goal of ${this.props.goalVal} by {this.props.goalDate}!</Text>
                        <View style={this.goalButtonStyle(this.props.name)}>Set New Goal</View>
                    </View>
                );
            case "active":
                return (
                    <View style={styles.goalSub}>
                        <Text style={styles.goalMessage}>Save ${this.props.goalVal} by {this.props.goalDate}. You've saved ${this.props.soFarVal} and need ${this.props.goalVal - this.props.soFarVal} more.</Text>
                        {this.renderProgress()}
                    </View>
                );
        }
    }

    goalContainerStyle(type) {
        switch(type) {
            case("Save"):
                return {
                    width: "312px",
                    height: "170px",
                    borderRadius: "14px",
                    border: "2px solid #51946D",
                    marginBottom: "26px"
                };
            case("Spend"):
                return {
                    width: "312px",
                    height: "170px",
                    borderRadius: "14px",
                    border: "2px solid #9A6ABF",
                    marginBottom: "26px"
                };
            case("Share"):
                return {
                    width: "312px",
                    height: "170px",
                    borderRadius: "14px",
                    border: "2px solid #C77354",
                    marginBottom: "26px"
                };
        }
    }

    goalSubTitleStyle(type) {
        switch(type) {
            case("Save"):
                return {
                    width: "86px",
                    height: "21px",
                    marginTop: "20px",
                    marginLeft: "25px",
                    color: "#51946D",
                    fontWeight: "600",
                };
            case("Spend"):
                return {
                    width: "86px",
                    height: "21px",
                    marginTop: "20px",
                    marginLeft: "25px",
                    color: "#9A6ABF",
                    fontWeight: "600",
                };
            case("Share"):
                return {
                    width: "86px",
                    height: "21px",
                    marginTop: "20px",
                    marginLeft: "25px",
                    color: "#C77354",
                    fontWeight: "600",
                };
        }
    }

    goalButtonStyle(type) {
        switch(type) {
            case("Save"):
                return {
                    width: "202px",
                    height: "42px",
                    paddingTop: "12px",
                    marginTop: "28px",
                    marginLeft: "30px",
                    textAlign: "center",
                    borderRadius: "9px",
                    backgroundColor: "#79D677",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "15px",
                    shadowOffset: "0px 3px 0px -1px",
                    shadowColor: "#79D677"
                };
            case("Spend"):
                return {
                    width: "202px",
                    height: "42px",
                    paddingTop: "12px",
                    marginTop: "28px",
                    marginLeft: "30px",
                    textAlign: "center",
                    borderRadius: "9px",
                    backgroundColor: "#9A6ABF",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "15px",
                    shadowOffset: "0px 3px 0px -1px",
                    shadowColor: "#9A6ABF"
                };
            case("Share"):
                return {
                    width: "202px",
                    height: "42px",
                    paddingTop: "12px",
                    marginTop: "28px",
                    marginLeft: "30px",
                    textAlign: "center",
                    borderRadius: "9px",
                    backgroundColor: "#C77354",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "15px",
                    shadowOffset: "0px 3px 0px -1px",
                    shadowColor: "#C77354"
                };
        }
    }
}

export default GoalContainer;