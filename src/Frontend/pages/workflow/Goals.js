import React, { Component } from "react";
import { Text, View } from 'react-native';
import GoalContainer from "../../Components/GoalContainer";
import GoalEditing from "../../Components/GoalEditing";
import styles from "../../styles/GoalsPageStyles";

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            editingType: "",
            saveGoal: {
                status: "unset",
                soFarVal: 0,
                goalVal: 0,
                goalDate: "",
            },
            spendGoal: {
                status: "complete",
                soFarVal: 20,
                goalVal: 20,
                goalDate: "April 20th, 2022",
            },
            shareGoal: {
                status: "active",
                soFarVal: 10,
                goalVal: 30,
                goalDate: "April 23rd, 2022",
            }
        };

        this.handleEditingSave = this.handleEditingSave.bind(this);
        this.handleEditingSpend = this.handleEditingSpend.bind(this);
        this.handleEditingShare = this.handleEditingShare.bind(this);
        this.handleEditingExit = this.handleEditingExit.bind(this);
        this.handleSaveUpdate = this.handleSaveUpdate.bind(this);
        this.handleSpendUpdate = this.handleSpendUpdate.bind(this);
        this.handleShareUpdate = this.handleShareUpdate.bind(this);
        this.getCurrent = this.getCurrent.bind(this);
        this.handleGoalUpdate = this.handleGoalUpdate.bind(this);
        this.handleGoalDelete = this.handleGoalDelete.bind(this);
    }

    handleEditingSave() {
        this.setState({
            editing: true,
            editingType: "Save"
        });
    }

    handleEditingSpend() {
        this.setState({
            editing: true,
            editingType: "Spend"
        });
    }

    handleEditingShare() {
        this.setState({
            editing: true,
            editingType: "Share"
        });
    }

    handleEditingExit() {
        this.setState({
            editing: false
        })
    }

    handleSaveUpdate(goalObject) {
        this.setState({
            saveGoal: goalObject
        })
    }

    handleSpendUpdate(goalObject) {
        this.setState({
            spendGoal: goalObject
        })
    }

    handleShareUpdate(goalObject) {
        this.setState({
            shareGoal: goalObject
        })
    }

    getCurrent(type) {
        switch(type) {
            case "Save":
                return this.state.saveGoal;
            case "Spend":
                return this.state.spendGoal;
            case "Share":
                return this.state.shareGoal;
        }
    }

    handleGoalUpdate(type, goalObject) {
        // Change in BACKEND

        switch(type) {
            case "Save":
                this.handleSaveUpdate(goalObject);
                break;
            case "Spend":
                this.handleSpendUpdate(goalObject);
                break;
            case "Share":
                this.handleShareUpdate(goalObject);
                break;
        }
    }

    handleGoalDelete(type) {
        // Change in BACKEND

        switch(type) {
            case "Save":
                this.setState({
                    saveGoal: {status: "unset"}
                });
                break;
            case "Spend":
                this.setState({
                    spendGoal: {status: "unset"}
                });
                break;
            case "Share":
                this.setState({
                    shareGoal: {status: "unset"}
                });
                break;
        }
    }

    render() {
        if(!this.state.editing) {
            return (
                <View style={styles.container}>
                    <Text style={styles.goalTitle}>My Goals:</Text>
                    
                    <View style={styles.goalContainer}>
                        <GoalContainer handlePress={this.handleEditingSave} name="Save" goal={this.state.saveGoal}></GoalContainer>
                        <GoalContainer handlePress={this.handleEditingSpend} name="Spend" goal={this.state.spendGoal}></GoalContainer>
                        <GoalContainer handlePress={this.handleEditingShare} name="Share" goal={this.state.shareGoal}></GoalContainer>
                    </View>
                </View>
            );
        } else {
            return (<GoalEditing delete={this.handleGoalDelete} update={this.handleGoalUpdate} exit={this.handleEditingExit} goal={this.getCurrent(this.state.editingType)} type={this.state.editingType}/>);
        }
    }
}

export default Goals;