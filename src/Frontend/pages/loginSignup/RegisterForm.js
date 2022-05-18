import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import FormField from "../../Extra/FormField";
import { formData } from "../../Extra/formData";
import { NavigationType } from "react-router";
import { WHEN_UNLOCKED_THIS_DEVICE_ONLY } from "expo-secure-store";
import { connect, useDispatch } from "react-redux";
import {
  createChildTask,
  createParentTask,
} from "../../../Backend/Store/taskAction";
import SubmitButton from "../../Components/SubmitButton";
import styles from "../../styles/RegisterFormStyles";
import DropdownAlert from "react-native-dropdownalert";
import { DropDownHolder } from "../../Extra/DropDownHolder.js";

function RegisterForm({ navigation }) {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    isParent: false,
    username: "",
    birthday: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    currentStep: 1,
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          fontWeight: "600",
          paddingBottom: 30,
          marginTop: 30,
        }}
      >
        Create an account
      </Text>

      <Step1Progress currentStep={formValues.currentStep} />
      <Step2Progress currentStep={formValues.currentStep} />
      <Step3Progress currentStep={formValues.currentStep} />
      <Step4Progress currentStep={formValues.currentStep} />
      <Step5Progress currentStep={formValues.currentStep} />

      <Step1
        currentStep={formValues.currentStep}
        value={formValues.isParent}
        handleFormValueChange={handleFormValueChange}
      />

      <Step2
        currentStep={formValues.currentStep}
        value={{
          firstName: formValues.firstName,
          lastName: formValues.lastName,
        }}
        handleFormValueChange={handleFormValueChange}
      />

      <Step3
        currentStep={formValues.currentStep}
        value={formValues.birthday}
        handleFormValueChange={handleFormValueChange}
      />
      <Step4
        currentStep={formValues.currentStep}
        value={formValues.username}
        handleFormValueChange={handleFormValueChange}
      />

      <Step5
        currentStep={formValues.currentStep}
        value={{
          password: formValues.password,
          confirmPassword: formValues.confirmPassword,
        }}
        handleFormValueChange={handleFormValueChange}
        username={formValues.username}
        firstName={formValues.firstName}
        lastName={formValues.lastName}
        birthday={formValues.birthday}
        isParent={formValues.isParent}
        name={formValues.name}
        password={formValues.password}
        confirmPassword={formValues.confirmPassword}
        navigation={navigation}
      />

      <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)} />
    </View>
  );
}

function Step1Progress(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <View style={styles.progress}>
      <View style={styles.activeProgressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
    </View>
  );
}

function Step2Progress(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <View style={styles.progress}>
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.activeProgressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
    </View>
  );
}

function Step3Progress(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <View style={styles.progress}>
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.activeProgressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
    </View>
  );
}

function Step4Progress(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <View style={styles.progress}>
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.activeProgressDot} className="progress-dot" />
      <View style={styles.progressBar} className="progress-bar" />
      <View style={styles.progressDot} className="progress-dot" />
    </View>
  );
}

function Step5Progress(props) {
  if (props.currentStep !== 5) {
    return null;
  }
  return (
    <View style={styles.progress}>
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.completeProgressDot} className="progress-dot" />
      <View style={styles.completeProgressBar} className="progress-bar" />
      <View style={styles.activeProgressDot} className="progress-dot" />
    </View>
  );
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <FormField
      type="Buttons"
      label="Who Are You?"
      formKey="isParent"
      handleFormValueChange={props.handleFormValueChange}
      currentStep={props.currentStep}
    />
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <FormField
      type="TextInputDouble"
      label="What is your name?"
      formKey1="firstName"
      formKey2="lastName"
      placeholder1="type first name"
      placeholder2="type last name"
      textInputProps1={{
        autoCapitalize: "none",
        value: props.value.firstName,
      }}
      textInputProps2={{
        autoCapitalize: "none",
        value: props.value.lastName,
      }}
      handleFormValueChange={props.handleFormValueChange}
      currentStep={props.currentStep}
    />
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <FormField
      type="DateTextInput"
      label="When is your birthday?"
      formKey="birthday"
      placeholder="mm/dd/yy"
      textInputProps={{
        autoCapitalize: "none",
        value: props.value,
      }}
      handleFormValueChange={props.handleFormValueChange}
      currentStep={props.currentStep}
    />
  );
}
function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <FormField
      type="TextInput"
      label="Create a username"
      formKey="username"
      placeholder="type username"
      textInputProps={{
        autoCapitalize: "none",
        value: props.value,
      }}
      handleFormValueChange={props.handleFormValueChange}
      currentStep={props.currentStep}
    />
  );
}

function Step5(props) {
  let copy = "";
  if (props.currentStep !== 5) {
    return null;
  }
  return (
    <View style={styles.box}>
      <FormField
        type="TextInputDouble"
        label="Create a password"
        formKey1="password"
        formKey2="confirmPassword"
        placeholder1="type password"
        placeholder2="type it one more time"
        textInputProps1={{
          secureTextEntry: true,
          autoCapitalize: "none",
          value: props.value.password,
        }}
        textInputProps2={{
          secureTextEntry: true,
          autoCapitalize: "none",
          value: props.value.confirmPassword,
        }}
        handleFormValueChange={props.handleFormValueChange}
        currentStep={props.currentStep}
      />

      <SubmitButton
        currentStep={props.currentStep}
        username={props.username}
        firstName={props.firstName}
        lastName={props.lastName}
        birthday={props.birthday}
        isParent={props.isParent}
        name={props.name}
        password={props.password}
        confirmPassword={props.confirmPassword}
        navigation={props.navigation}
        handleError={(message) =>
          DropDownHolder.dropDown.alertWithType("error", "Error", message)
        }
      />
    </View>
  );
}

export default RegisterForm;
