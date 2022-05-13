import React, { useState, useEffect, Component } from "react";
import styles from "../../styles/NotificationsPageStyles";
import { Image, Text, View, TouchableOpacity } from "react-native";
import HeaderContainer from "../../Components/HeaderContainer.js";
import NotificationTableContainer from "../../Components/NotificationTableContainer";
class NotificationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.box}>
        <HeaderContainer
          name="Notifications"
          handleBack={() => this.props.navigation.goBack()}
        />

        <View style={styles.contentView}>
          <NotificationTableContainer />
        </View>
      </View>
    );
  }
}

export default NotificationsPage;
