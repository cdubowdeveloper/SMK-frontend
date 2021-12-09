import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import FormField from '../Extra/FormField';
import { formData } from '../Extra/formData';
import { auth } from "../Backend/firebase.js";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NavigationType } from 'react-router';


function RegisterForm( { navigation } ) {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    email: '',
    name: '',
    password: '',
    currentStep: 1
  })
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 24,
        textAlign: 'center',
        fontWeight: "300",
        paddingBottom: 30
      }}>Signup</Text>
      <Step1
        currentStep={formValues.currentStep} 
        value={formValues.email} 
        handleFormValueChange={handleFormValueChange}
      />
      <Step2
        currentStep={formValues.currentStep} 
        value={formValues.name} 
        handleFormValueChange={handleFormValueChange}
      />

       <Step3
        currentStep={formValues.currentStep} 
        value={formValues.password} 
        handleFormValueChange={handleFormValueChange}
      />



      <SubmitButton
        currentStep={formValues.currentStep} 
        name={formValues.name} 
        email={formValues.email} 
        password={formValues.password}
        navigation = {navigation} 
      />

      {/* <Text style={styles.header}>Values in Hook: </Text>
      <View>
        <Text style={styles.formText}>Username is : {formValues.username}</Text>
        <Text style={styles.formText}>Name is: {formValues.name}</Text>
        <Text style={styles.formText}>Password is: {formValues.password}</Text>
        <Text style={styles.formText}>Step is: {formValues.currentStep}</Text>
      </View> */}
    </View>
  )
}

function SubmitButton(props){
    let currentStep = props.currentStep;
    if(currentStep == 3){
      return (
        <Button 
            style={styles.loginButton}
            onPress={() => {
              
              signup(props);
            }
          }

          title="Signup"
        />        
      )
    }
    return null;
  }


async function signup(props) {
  console.log("Signup", props.email, props.password);
  createUserWithEmailAndPassword(auth, props.email,props.password)
  .then(() => {
    console.log("Account created");
    props.navigation.navigate('HomePage');
  })
  .catch((error) => {
    console.log(error.message);
  });
}



function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
        <FormField
        label='Email'
        formKey='email'
        
        placeholder='Your email'
        textInputProps={{
          autoCapitalize: "none",
          value: props.value
        }}
        handleFormValueChange={props.handleFormValueChange}
        currentStep={props.currentStep}
      />
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
        <FormField
        
        label='Name'
        formKey='name'
        placeholder='Your name'
        textInputProps={{
          autoCapitalize: "none",
          value: props.value
        }}
        handleFormValueChange={props.handleFormValueChange}
        currentStep={props.currentStep}
      />
    );
}


function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
        <FormField
        label='Password'
        formKey='password'
        placeholder='Your password'
        textInputProps={{
          secureTextEntry:true,
          autoCapitalize: "none",
          value: props.value
        }}
        handleFormValueChange={props.handleFormValueChange}
        currentStep={props.currentStep}
      />
    );
}
  

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 20,
  },
  header: {
    fontSize: 20,
    paddingTop: 30
  },
  formText: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 0
  },
  loginButton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center'
  }
});

export default RegisterForm;