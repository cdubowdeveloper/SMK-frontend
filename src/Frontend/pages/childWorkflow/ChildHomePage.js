import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Button, StyleSheet, Text, View } from 'react-native';


function ChildHomePage({ navigation }) {
    return (
    <View style={styles.container}>
        <Text>Child's Banks:</Text>
      
        <Button 
            style={styles.saveButton}
            title="Save"
            onPress={() => navigation.navigate('ChildSaveBank')}
        />
        <Button 
            style={styles.spendButton}
            title="Spend"
            onPress={() => navigation.navigate('ChildSpendBank')}
        />
        <Button 
            style={styles.shareButton}
            title="Share"
            onPress={() => navigation.navigate('ChildShareBank')}
        />    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },

    spendButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },

    shareButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    }
});

export default ChildHomePage;