import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/NotificationContainerStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../../Backend/Store/taskAction";

class NotificationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: props.date,
      name: props.name,
      amount: props.amount,
      description: props.description,
      type: props.type,
      bank: props.bank,
    };
  }

  render() {
    return (
      <View style={styles.containerView}>
        <View style={styles.textContainer}>
          <Text style={styles.dateTxt}> {this.state.date} </Text>
          <Text style={styles.titleTxt}>
            {" "}
            {this.state.name} would like to {this.state.type} $
            {this.state.amount} to the {this.state.bank} bank:
          </Text>

          <Text style={styles.descriptionTxt}>
            {" "}
            "{this.state.description}"{" "}
          </Text>
        </View>
        <View style={styles.selectionContainer}>
          <TouchableOpacity style={styles.yesButton}>
            <Image
              style={styles.buttonIcon}
              source={require("../../../assets/notifications-yes.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.noButton} onPress>
            <Image
              style={styles.buttonIcon}
              source={require("../../../assets/notifications-no.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NotificationContainer;
