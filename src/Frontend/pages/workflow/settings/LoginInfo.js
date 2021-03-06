import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../../../styles/LoginInfoStyles";
import HeaderContainer from "../../../Components/HeaderContainer";
import { connect } from "react-redux";

class LoginInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderContainer
          name="Login Information"
          handleBack={() => navigation.goBack()}
        />
        <Text style={styles.userTxt}>Username</Text>
        <TextInput style={styles.userBox} value="gracejeong22" />
        <Text style={styles.passTxt}>Change Password</Text>
        <TextInput
          style={styles.currentBox}
          placeholder="Current Password"
          placeholderTextColor="#9A9A9A"
        />
        <TextInput
          style={styles.newBox}
          placeholder="New Password"
          placeholderTextColor="#9A9A9A"
        />
        <TextInput
          style={styles.confirmBox}
          placeholder="Confirm Password"
          placeholderTextColor="#9A9A9A"
        />
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.goBack() /*save to redux store */}
        >
          <Text style={styles.btnTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { isParent, kids } = state;
  return {
    isParent: isParent,
    kids: kids,
  };
}
export default connect(mapStateToProps)(LoginInfo);
