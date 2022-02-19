import React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';

const FormField = (props) => {
  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.formFieldText}
        onChange={(event) => props.handleFormValueChange(props.formKey, event.nativeEvent.text)}
        {...props.textInputProps}
      />
      <NextButton
        currentStep = {props.currentStep}
        handleFormValueChange={props.handleFormValueChange}
      />
      <PreviousButton
        currentStep = {props.currentStep}
        handleFormValueChange={props.handleFormValueChange}
      />
    </View>
  )
}

/*
* the functions for our button
*/
function PreviousButton(props) {
  let currentStep = props.currentStep;
  if(currentStep !==1){
    return (
      <Button 
        style={styles.loginButton}
        onPress={(event) => props.handleFormValueChange("currentStep", currentStep-1)}
        title="Previous"
      />
    )
  }
  return null;
}

function NextButton(props){
  let currentStep = props.currentStep;
  if(currentStep < 3){
    return (
      <Button 
        style={styles.loginButton}
        title="Next"
        onPress={(event) => props.handleFormValueChange("currentStep", currentStep+1)}
      />        
    )
  }
  return null;
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  formFieldWrapper: {
  },
  formFieldText: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12
  },
  labelText: {
    fontSize: 20,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10
  },
  loginButton: {
    marginTop: 80,
    width: 140,
    backgroundColor: '#FFFFFF',
    textAlign: 'center'
  }


})

export default FormField;