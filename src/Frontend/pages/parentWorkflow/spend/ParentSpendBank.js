import React from 'react';
import styles from '../../../styles/styles.js';
import { Button, Text, View } from 'react-native';


function ParentSpendBank({ navigation }) {
    return (
    <View style={styles.container}>
         <Button 
            style={styles.BackButton}
            title="<--"
            onPress={() => navigation.goBack()}
        />
        <Text>Spend Bank:</Text>
      
        <Text>Past Transactions:</Text>
        <Text>Tooth fairy money +$4.00</Text>
        <Text>Grandma gave me money for being nice +$2.00</Text>
        <Text>Mom took away money for cursing -$5.00</Text>
    
        </View>
    )
}

export default ParentSpendBank;