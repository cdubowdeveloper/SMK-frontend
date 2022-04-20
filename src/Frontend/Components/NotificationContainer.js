import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/NotificationContainerStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../../Backend/Store/taskAction";
import moment from "moment";
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
      transactionId: props.transactionId,
      handleApprove: props.handleApprove,
      handleDeny: props.handleDeny,
    };
  }

  render() {
    let date = moment(this.state.date).format("ddd, MMM Do");
    let action = this.state.amount < 0 ? "withdraw" : "deposit";
    return (
      <View style={styles.containerView}>
        <View style={styles.textContainer}>
          <Text style={styles.dateTxt}> {date} </Text>
          <Text style={styles.titleTxt}>
            {" "}
            {this.state.name} would like to {action} $
            {Math.abs(this.state.amount)} to the {this.state.bank} bank:
          </Text>

          <Text style={styles.descriptionTxt}>
            {" "}
            "{this.state.description}"{" "}
          </Text>
        </View>
        <View style={styles.selectionContainer}>
          <TouchableOpacity
            style={styles.yesButton}
            onPress={this.state.handleApprove}
          >
            <Image
              style={styles.buttonIcon}
              source={require("../../../assets/notifications-yes.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.noButton}
            onPress={this.state.handleDeny}
          >
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
