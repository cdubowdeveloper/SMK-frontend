import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {BUTTON_TITLES} from "../enums/enums.js"
import HeaderContainer from '../../Components/HeaderContainer.js';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function AnyTransaction({ route, navigation }) {
    const { action } = route.params;
    return (
    <View>
        <HeaderContainer
            name={action}
            handleBack={() => navigation.goBack()} 
        />
         
        </View>
    )
}
export default AnyTransaction;