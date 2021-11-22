import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../assets/styles';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function LoginPage({ navigation }) {
    return (
    <View style={styles.container}>

      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        style={styles.username}
      />
      <TextInput  
        placeholder="Password"
        style={styles.password}
        secureTextEntry={true}
      />

      <Button 
        style={styles.loginButton}
        title="Login"
        onPress={() => navigation.navigate('ParentHomePage')}
      />

      <StatusBar style="auto" />
    </View>
    )
}

export default LoginPage;