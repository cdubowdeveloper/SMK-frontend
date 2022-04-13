import React from "react";
import { Image, Text, View, TouchableOpacity} from 'react-native';
import GoalContainer from "../../Components/GoalContainer";
import styles from "../../styles/GoalsPageStyles";

function Goals({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.goalTitle}>My Goals:</Text>
            
            <View style={styles.goalContainer}>
                <GoalContainer name="Save" status="unset"></GoalContainer>
                <GoalContainer name="Spend" status="complete" goalVal={30} goalDate="15 April, 2022"></GoalContainer>
                <GoalContainer name="Share" status="active" goalVal={30} soFarVal={20} goalDate="15 April, 2022"></GoalContainer>
            </View>
        </View>
    )
}

export default Goals;