import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import {
  createChildTask,
  createParentTask,
} from "../../Backend/Store/taskAction.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Backend/firebase.js";
import { createChild, createParent } from "../../Backend/backend";
import styles from "../styles/SubmitButtonStyles.js";

class SubmitButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: props.currentStep,
      props: props,
      navigation: props.navigation,
    };
  }

  render() {
    let currentStep = this.state.currentStep;
    return (
      <Text
        style={styles.pageButton}
        onPress={() => {
          signup(this.props);
        }}
      >
        Signup
      </Text>
    );
  }
}

async function signup(props) {
  console.log("Signup", props.username + "@SMKCPP.com", props.password);
  createUserWithEmailAndPassword(
    auth,
    props.username + "@SMKCPP.com",
    props.password
  )
    .then((data) => {
      console.log("Account created");
      if (!props.isParent) {
        createChild(
          props.username,
          data.user.uid,
          props.firstName,
          props.lastName,
          props.birthday
        ).then((res) => {
          props.createChildTask(res);
          props.navigation.navigate("HomePage");
        });
      } else {
        createParent(props.username, data.user.uid).then((res) => {
          props.createParentTask(res);
          props.navigation.navigate("HomePage");
        });
      }
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/weak-password":
          props.handleError(
            "Password is too weak. Please choose a password greater than 6 characters."
          );
          break;

        case "auth/email-already-in-use":
          props.handleError(
            "Username is already in use. Please choose another one."
          );
          break;

        case "auth/invalid-email":
          props.handleError("Username is invalid. Please choose another one.");
          break;

        default:
          props.handleError("Something went wrong. Please try again later.");
          break;
      }
    });
}

const mapDispatchToProps = {
  createChildTask,
  createParentTask,
};

export default connect(null, mapDispatchToProps)(SubmitButton);
