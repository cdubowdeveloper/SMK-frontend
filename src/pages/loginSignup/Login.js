import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../assets/styles';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {BUTTON_TITLES} from "./enums"

function LoginPage({ navigation }) {
    return (
    <View style={styles.container}>

      <Text>Login</Text>
      <TextInput
        placeholder= {BUTTON_TITLES.USERNAME}
        style={styles.username}
      />
      <TextInput  
        placeholder= {BUTTON_TITLES.PASSWORD}
        style={styles.password}
        secureTextEntry={true}
      />

      <Button 
        style={styles.loginButton}
        title = {BUTTON_TITLES.LOGIN}
        onPress={() => navigation.navigate(BUTTON_TITLES.HOMEPAGE)}
      />

      <StatusBar style="auto" />
    </View>
    )
}

export default LoginPage;
