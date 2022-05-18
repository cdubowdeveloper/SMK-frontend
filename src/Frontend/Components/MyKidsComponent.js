import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/SettingsStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../../Backend/Store/taskAction";

class MyKidsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      code: props.code,
    };
  }

  render() {
    return (
      <View style={styles.myKidsItemContainer}>
        <Text style={styles.myKidsItemNameTxt}> {this.state.name} </Text>
        <Text style={styles.myKidsItemCodeTxt}> {this.state.code} </Text>
      </View>
    );
  }
}

export default MyKidsComponent;
