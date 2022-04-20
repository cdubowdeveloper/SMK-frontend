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
  loadChildTask,
  loadParentTask,
} from "../../Backend/Store/taskAction.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Backend/firebase.js";
import { getChildByFireId, getParentByFireId } from "../../Backend/backend";
import styles from "../styles/LoginStyles";

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      password: props.password,
      navigation: props.navigation,
    };
  }

  render() {
    return (
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          onPress={() => {
            console.log("login", this.state.email, this.state.password);
            login(
              this.props.email,
              this.props.password,
              this.props.navigation,
              this.props.loadChildTask,
              this.props.loadParentTask
            );
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    );
  }
}

async function login(
  email,
  password,
  navigation,
  loadChildTask,
  loadParentTask
) {
  console.log(email, password);
  signInWithEmailAndPassword(auth, email + "@SMKCPP.com", password)
    .then((data) => {
      console.log("Account signed in");

      getChildByFireId(data.user.uid)
        .then((res) => loadChildTask(res))
        .catch((error) => {
          getParentByFireId(data.user.uid).then((res) => loadParentTask(res));
        });
      navigation.navigate("HomePage");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

const mapDispatchToProps = {
  loadChildTask,
  loadParentTask,
};

export default connect(null, mapDispatchToProps)(LoginButton);
