import React from "react";
import { Image, Text, View, TouchableOpacity} from 'react-native';
import GoalContainer from "../../Components/GoalContainer";
import styles from "../../styles/HomePageStyles";

function Goals({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.goalTitle}>My Goals:</Text>
            <View style={styles.goalContainer}>
                <GoalContainer name="Save"></GoalContainer>
                <GoalContainer name="Spend"></GoalContainer>
                <GoalContainer name="Share"></GoalContainer>
            </View>
        </View>
    )
}

export default Goals;