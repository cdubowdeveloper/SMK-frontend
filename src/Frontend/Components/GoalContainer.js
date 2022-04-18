import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from '../styles/GoalContainerStyles';

class GoalContainer extends Component {
    constructor(props) {
        super(props);

        this.renderCorrectContainer = this.renderCorrectContainer.bind(this);
        this.renderProgress = this.renderProgress.bind(this);
        this.goalContainerStyle = this.goalContainerStyle.bind(this);
        this.goalSubTitleStyle = this.goalSubTitleStyle.bind(this);
        this.goalButtonStyle = this.goalButtonStyle.bind(this);
    }

    handlePress() {
        // Navigate to goal create/edit/delete window
    }

    render() {
        return (
               <TouchableOpacity onPress={this.props.handlePress} style={this.goalContainerStyle(this.props.name)}>
                   <Text style={this.goalSubTitleStyle(this.props.name)}>{this.props.name} Bank</Text>
                   {this.renderCorrectContainer()}
               </TouchableOpacity>
        );
    }

    renderCorrectContainer() {
        switch(this.props.status) {
            case "unset":
                return (
                    <View style={styles.goalSub}>
                        <Text style={styles.goalMessage}>Currently no goal set.</Text>
                        <Text style={this.goalButtonStyle(this.props.name)}>Set a Goal</Text>
                    </View>
                );
            case "complete":
                return (
                    <View style={styles.goalSub}>
                        <Text style={styles.goalMessage}>Congratulations! You've reached your goal of ${this.props.goalVal} by {this.props.goalDate}!</Text>
                        <Text style={this.goalButtonStyle(this.props.name)}>Set New Goal</Text>
                    </View>
                );
            case "active":
                const progress = this.props.soFarVal / this.props.goalVal;
                return (
                    <View style={styles.goalSub}>
                        <Text style={styles.goalMessage}>Save ${this.props.goalVal} by {this.props.goalDate}. You've saved ${this.props.soFarVal} and need ${this.props.goalVal - this.props.soFarVal} more.</Text>
                        <Image style={this.progressIconStyle(progress)} source={require('../../../assets/progressIcon.png')}/>
                        {this.renderProgress(progress)}
                    </View>
                );
        }
    }

    renderProgress(progress) {
        return (
            <View style={styles.progressContainer}>
                <View style={this.progressBarStyle(progress, this.props.name)}></View>
            </View>
        )
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

    progressBarStyle(progress, type) {
        const width = (262 * progress) + "px";

        switch (type) {
            case("Save"):
                return {
                    width: width,
                    height: "17px",
                    backgroundColor: "#79D677",
                    borderRadius: "10.5px"
                }
            case("Spend"):
                return {
                    width: width,
                    height: "17px",
                    backgroundColor: "#9A6ABF",
                    borderRadius: "10.5px"
                }
            case("Share"):
                return {
                    width: width,
                    height: "17px",
                    backgroundColor: "#C77354",
                    borderRadius: "10.5px"
                }
        }
        
    }

    progressIconStyle(progress) {
        const shift = (262 * progress - 17) + "px";
        return {
            marginLeft: shift,
            visibility: "visible",
            marginBottom: "0px",
            marginTop: "0px"
        };
    }
}

export default GoalContainer;