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
      <Text  style={styles.pageButton} onPress={(event) => props.handleFormValueChange("currentStep", currentStep-1)}>
        Previous
      </Text>
    )
  }
  return null;
}

function NextButton(props){
  let currentStep = props.currentStep;
  if(currentStep < 3){
    return (
    <Text style={styles.pageButton} onPress={(event) => props.handleFormValueChange("currentStep", currentStep+1)}>
      Next
    </Text>       
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '85%'
  },
  formFieldText: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
    width: '95%'
  },
  labelText: {
    fontSize: 20,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10
  },
  pageButton: {
    width: '70%',
    padding: 12,
    margin: 18,
    backgroundColor: '#79D677',
    textAlign: 'center',
    borderRadius: 8,
    color: 'white',
    fontSize: 18
  }


})

export default FormField;