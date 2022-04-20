import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../../../styles/SettingsStyles";
import SettingsButton from "../../../Components/SettingsButton";
import { connect } from "react-redux";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let isParent = this.props.isParent;
    let navigation = this.props.navigation;
    if (!isParent) {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTxt}>Settings</Text>
          </View>

          <SettingsButton name="Profile" navigation={navigation} />
          <div style={{ marginTop: 20 }}>
            <SettingsButton name="Login Information" navigation={navigation} />
          </div>

          <TouchableOpacity onPress={() => console.log("Logged out")}>
            <Text style={styles.logoutBtn}>Log Out</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTxt}>Settings</Text>
          </View>

          <SettingsButton name="Profile" navigation={navigation} />
          <div style={{ marginTop: 20 }}>
            <SettingsButton name="Login Information" navigation={navigation} />
          </div>
          <div style={{ marginTop: 20 }}>
            <SettingsButton name="My Kids" navigation={navigation} />
          </div>

          <TouchableOpacity onPress={() => console.log("Logged out")}>
            <Text style={styles.logoutBtn}>Log Out</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  const { isParent } = state;
  return {
    isParent: isParent,
  };
}
export default connect(mapStateToProps)(Settings);
