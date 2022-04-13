import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
//import styles from '../styles/GoalContainerStyles';

class GoalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>{this.props.name}</View>
        );
    }
}

export default GoalContainer;