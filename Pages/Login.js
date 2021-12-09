import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { formData } from '../Extra/formData';
import FormField from '../Extra/FormField';
import {auth} from '../Backend/firebase';

function LoginPage({ navigation }) {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    isParent: false,
    email: '',
    password: '',
    currentStep: 1
  })
    return (
    <View style={styles.container}>

      <Text>Login</Text>

      <Step1
        currentStep={formValues.currentStep} 
        value={formValues.isParent}
        handleFormValueChange={handleFormValueChange}
      />

      <Step2
        currentStep={formValues.currentStep} 
        username={formValues.username}
        password={formValues.password}
        handleFormValueChange={handleFormValueChange}
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


async function login(email, password) {
  try {
    if (email !== '' && password !== '') {
      await signInWithEmailAndPassword(auth, email, password);
    }
  } catch (error) {
    alert(error.message);
  }
}


function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
      <View>
        <Button
          title="I'm a Parent"
        />
        <Button
          title="I'm a Kid"
        />
      </View>
  );
}


function Step2(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
      <View>
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
        onPress={login}
          
      />
      </View>
  );
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