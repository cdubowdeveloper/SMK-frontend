import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const FormField = (props) => {
  let [type, setType] = useState("");
  if (props.type == "TextInput") {
    let nextButtonStyle = 
      type == "" ? "pageButtonDisabled" : "pageButtonEnabled";
    return (
      <View style={styles.formFieldWrapper}>
        <View style={styles.textView}>
          <Text style={styles.stepText}>Step {props.currentStep}/5</Text>
          <Text style={styles.titleText}>{props.label}</Text>
        </View>

        <View style={styles.contentContainer}>
          <TextInput
            placeholder={props.placeholder}
            style={styles.formFieldText}
            onChange={(event) => {
              setType(event.nativeEvent.text)
              props.handleFormValueChange(props.formKey, event.nativeEvent.text)
            }}
            {...props.textInputProps}
          />
        </View>

        <PreviousButton
          style={styles.pageButtonEnabled}
          currentStep={props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />

        <NextButton
          style={styles[nextButtonStyle]}
          currentStep={props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />
      </View>
    );
  } else if (props.type == "TextInputDouble") {
    let nextButtonStyle = 
      type == "" ? "pageButtonDisabled" : "pageButtonEnabled";
  
    return (
      <View style={styles.formFieldWrapper}>
        <View style={styles.textView}>
          <Text style={styles.stepText}>Step {props.currentStep}/5</Text>
          <Text style={styles.titleText}>{props.label}</Text>
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            placeholder={props.placeholder1}
            style={styles.formFieldText}
            onChange={(event) => {
              setType(event.nativeEvent.text)
              props.handleFormValueChange(
                props.formKey1,
                event.nativeEvent.text
              )
            }}
            {...props.textInputProps1}
          />

          <TextInput
            placeholder={props.placeholder2}
            style={styles.formFieldText}
            onChange={(event) => {
              setType(event.nativeEvent.text)
              props.handleFormValueChange(
                props.formKey2,
                event.nativeEvent.text
              )
            }}
            {...props.textInputProps2}
          />
        </View>

        <PreviousButton
          style={styles.pageButtonEnabled}
          currentStep={props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />

        <NextButton
          style={styles[nextButtonStyle]}
          currentStep={props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />
      </View>
    );
  } else if (props.type == "Buttons") {
    let childBtnStyle =
      type == "Kid" ? "accountTypeBtnSelected" : "accountTypeBtnDeselected";
    let parentBtnStyle =
      type == "Parent" ? "accountTypeBtnSelected" : "accountTypeBtnDeselected";
    let nextButtonStyle = 
      type == "" ? "pageButtonDisabled" : "pageButtonEnabled";
    
    return (
      <View style={styles.formFieldWrapper}>
        <View style={styles.textView}>
          <Text style={styles.stepText}>Step {props.currentStep}/5</Text>
          <Text style={styles.titleText}>{props.label}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View
            style={{ display: "flex", flexDirection: "row", marginBottom: 100 }}
          >
            <Text
              style={styles[childBtnStyle]}
              onPress={() => {
                props.handleFormValueChange(props.formKey, false);
                setType("Kid");
              }}
            >
              Kid
            </Text>
            <Text
              style={styles[parentBtnStyle]}
              onPress={() => {
                props.handleFormValueChange(props.formKey, true);
                setType("Parent");
              }}
            >
              Parent
            </Text>
          </View>
        </View>
        <PreviousButton
          style={styles.pageButtonEnabled}
          currentStep={props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />

        <NextButton
           style={styles[nextButtonStyle]}
          currentStep={props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />
      </View>
    );
  } else if (props.type == "DatePicker") {
    let nextButtonStyle = 
      type == "" ? "pageButtonDisabled" : "pageButtonEnabled";
    return (
      <View style={styles.formFieldWrapper}>
        <View style={styles.textView}>
          <Text style={styles.stepText}>Step {props.currentStep}/5</Text>
          <Text style={styles.titleText}>{props.label}</Text>
        </View>
        <View style={styles.contentContainer}>

          
        </View>
        <PreviousButton
          style={styles.pageButtonEnabled}
          currentStep={props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />

        <NextButton
          style={styles[nextButtonStyle]}
          currentStep={props.currentStep}
          handleFormValueChange={props.handleFormValueChange}
        />
      </View>
    );
  }
};

/*
 * the functions for our button
 */
function PreviousButton(props) {
  let currentStep = props.currentStep;
  if (currentStep !== 1) {
    return (
      <Text
        style={props.style}
        onPress={(event) =>
          props.handleFormValueChange("currentStep", currentStep - 1)
        }
      >
        Previous
      </Text>
    );
  }
  return null;
}

function NextButton(props) {
  let currentStep = props.currentStep;
  if (currentStep < 5) {
    return (
      <Text
        style={props.style}
        onPress={(event) =>
          props.handleFormValueChange("currentStep", currentStep + 1)
        }
      >
        Next
      </Text>
    );
  }
  return null;
}



const styles = StyleSheet.create({
  textView: {
    marginTop: 20,
    width: "85%",
  },
  contentContainer: {
    height: 300,
    alignContent: "center",
    width: "85%",
    justifyContent: "center",
  },
  stepText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "17px",
    color: "#444444",
    marginBottom: 13,
  },
  titleText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "27px",
    color: "#444444",
  },
  accountTypeBtnSelected: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
    width: 130,
    marginLeft: 16,
    marginRight: 16,
    textAlign: "center",
    backgroundColor: "#79D677",
    color: "#747474",
    borderColor: "#DCDCDC",
  },
  accountTypeBtnDeselected: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
    width: 130,
    marginLeft: 16,
    marginRight: 16,
    textAlign: "center",
    backgroundColor: "white",
    color: "#747474",
    borderColor: "#DCDCDC",
  },
  formFieldWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  formFieldText: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#DBDBDB",
    padding: 12,
    marginTop: 25,
    width: "95%",
  },
  labelText: {
    fontSize: 20,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
  pageButtonDisabled: {
    width: "70%",
    padding: 12,
    margin: 18,
    backgroundColor: "#79D67750",

    textAlign: "center",
    borderRadius: 8,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  pageButtonEnabled: {
    width: "70%",
    padding: 12,
    margin: 18,
    backgroundColor: "#79D677",

    textAlign: "center",
    borderRadius: 8,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default FormField;
