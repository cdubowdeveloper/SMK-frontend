import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import DropdownAlert from "react-native-dropdownalert";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/LoginStyles.js";
import { auth } from "../../../Backend/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginButton from "../../Components/LoginButton.js";
import {
  loadChildTask,
  loadParentTask,
} from "../../../Backend/Store/taskAction.js";
import { connect } from "react-redux";
import { DropDownHolder } from "../../Extra/DropDownHolder.js";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    let navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          style={styles.HerIcon}
          source={require("../../../../assets/heroesIcon.png")}
        ></Image>

        <View style={styles.welcomeView}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.subText}>Let's get you signed in.</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#979797"
            onChangeText={(email) => this.setState({ email: email })}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#979797"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password: password })}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => {
              console.log("login", this.state.email, this.state.password);
              login(
                this.state.email,
                this.state.password,
                this.props.navigation,
                this.props.loadChildTask,
                this.props.loadParentTask,
                this.state.dropDownAlertRef
              );
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <View
          style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#C6C6C6" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center", color: "#C6C6C6" }}>
              OR
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#C6C6C6" }} />
        </View>

        <TouchableOpacity style={styles.registerBtn}>
          <Text
            style={styles.registerText}
            onPress={() => {
              navigation.navigate("RegisterPage");
            }}
          >
            Create an Account
          </Text>
        </TouchableOpacity>
        <Text
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          Dev login
        </Text>
        <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)} />
      </View>
    );
  }
}
async function login(
  email,
  password,
  navigation,
  loadChildTask,
  loadParentTask,
  dropDownAlertRef
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
      DropDownHolder.dropDown.alertWithType(
        "error",
        "Error",
        "We didn't recognize the username or password you entered. Please try again."
      );
    });
}

const mapDispatchToProps = {
  loadChildTask,
  loadParentTask,
};

export default connect(null, mapDispatchToProps)(Login);
