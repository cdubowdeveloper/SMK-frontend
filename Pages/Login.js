import { StatusBar } from 'expo-status-bar';
import React from 'react';

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
        onPress={() => navigation.navigate('HomePage')}
      />
      <Button 
        style={styles.loginButton}
        title="Signup"
        onPress={() => navigation.navigate('SignupPage')}
      />



      <StatusBar style="auto" />
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

  username: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlign: 'center'
  },

  password: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center'
  },

  loginButton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center'
  }
});

export default LoginPage;