import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';

const FormField = (props) => {
  let [type, setType] = useState('');
  if (props.type == "TextInput"){
    return (
      <View style={styles.formFieldWrapper}>
        <Text style={styles.labelText}>{props.label}</Text>
        <TextInput
          placeholder={props.placeholder}
          style={styles.formFieldText}
          onChange={(event) => props.handleFormValueChange(props.formKey, event.nativeEvent.text)}
          {...props.textInputProps}
        />

        <PreviousButton
          currentStep = {props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />

        <NextButton
          currentStep = {props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />
      </View>
    )
  } else if (props.type == "Buttons"){
      let childBtnStyle = (type=="Kid") ? "accountTypeBtnSelected" : "accountTypeBtnDeselected";
      let parentBtnStyle = (type=="Parent") ? "accountTypeBtnSelected" : "accountTypeBtnDeselected";
      
        return (
          <View style={styles.formFieldWrapper}>
            <Text style={styles.labelText}>{props.label}</Text>
            <View style={{display: "flex", flexDirection:"row"}}>
              <Text style={styles[childBtnStyle]} onPress={() => {
                props.handleFormValueChange(props.formKey, false);
                setType("Kid");
              }
                }>Kid</Text>
              <Text style={styles[parentBtnStyle]} onPress={() => {
                props.handleFormValueChange(props.formKey, true);
                setType("Parent");
              }}>Parent</Text>
            </View>
          <PreviousButton
            currentStep = {props.currentStep}
            handleFormValueChange={props.handleFormValueChange}
          />
  
          <NextButton
            currentStep = {props.currentStep}
            handleFormValueChange={props.handleFormValueChange}
          />
          </View>
          
        )
  } else if (props.type == "DatePicker"){
    return (
      <View style={styles.formFieldWrapper}>
        <Text style={styles.labelText}>{props.label}</Text>
        

      <PreviousButton
        currentStep = {props.currentStep}
        handleFormValueChange={props.handleFormValueChange}
      />

      <NextButton
        currentStep = {props.currentStep}
        handleFormValueChange={props.handleFormValueChange}
      />
      </View>
      
    )
  }
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
  if(currentStep < 5){
    return (
    <Text style={styles.pageButton} onPress={(event) => props.handleFormValueChange("currentStep", currentStep+1)}>
      Next
    </Text>       
    )
  }
  return null;
}



const styles = StyleSheet.create({
  accountTypeBtnSelected: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
    width: 130,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
    backgroundColor: '#79D677',
    borderColor: '#DCDCDC'
    },
    accountTypeBtnDeselected: {
      fontSize: 20,
      borderRadius: 15,
      borderWidth: 1,
      padding: 12,
      width: 130,
      marginLeft: 16,
      marginRight: 16,
      textAlign: 'center',
      backgroundColor: 'white',
      borderColor: '#DCDCDC'
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