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
            editingType: "Save"
        };

        this.handleEditing = this.handleEditing.bind(this);
    }

    handleEditing(event) {
        console.log("Firing");
        const type = event.target.name;
        this.setState({
            editing: true,
            editingType: type
        });
    }

    render() {
        if(!this.state.editing) {
            return (
                <View style={styles.container}>
                    <Text style={styles.goalTitle}>My Goals:</Text>
                    
                    <View style={styles.goalContainer}>
                        <GoalContainer handlePress={this.handleEditing} name="Save" status="unset"></GoalContainer>
                        <GoalContainer handlePress={this.handleEditing} name="Spend" status="complete" goalVal={30} goalDate="15 April, 2022"></GoalContainer>
                        <GoalContainer handlePress={this.handleEditing} name="Share" status="active" goalVal={30} soFarVal={20} goalDate="15 April, 2022"></GoalContainer>
                    </View>
                </View>
            );
        } else {
            <GoalEditing type={this.state.editingType}/>
        }
    }
}

export default Goals;