import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../../styles/styles.js';
import { Button, Text, View } from 'react-native';


function ParentHomePage({ navigation }) {
    return (
    <View style={styles.container}>
        <Text>Banks:</Text>
      
        <Button 
            style={styles.saveButton}
            title="Save"
            onPress={() => navigation.navigate('ParentSaveBank')}
        />
        <Button 
            style={styles.spendButton}
            title="Spend"
            onPress={() => navigation.navigate('ParentSpendBank')}
        />
        <Button 
            style={styles.shareButton}
            title="Share"
            onPress={() => navigation.navigate('ParentShareBank')}
        />    
        </View>
    )
}



export default ParentHomePage;