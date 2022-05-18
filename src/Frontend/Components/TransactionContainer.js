import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/TransactionContainerStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../../Backend/Store/taskAction";
import moment from "moment";

class TransactionContainer extends Component {
  constructor(props) {
    super(props);

    let type = "";
    if (props.value > 0) {
      type = "deposit";
    } else {
      type = "withdraw";
    }

    console.log(props.approved);

    this.state = {
      date: moment(props.date).format("ddd, MMM Do"),
      amount: props.amount,
      description: props.description,
      type: type,
      approved: props.approved,
    };
  }

  render() {
    return (
      <View style={styles.containerView}>
        <Image
          source={require("../../../assets/" + this.state.type + ".png")}
          style={styles.icon}
        />
        <Text style={styles.dateTxt}>
          {this.state.date} <IsApprovedLabel status={this.state.approved} />
        </Text>
        <Text style={styles.descriptionTxt}> {this.state.description} </Text>
        <Text style={amountTxtStyle(this.state)}>
          {" "}
          ${Math.abs(this.state.amount).toFixed(2)}{" "}
        </Text>
      </View>
    );
  }
}

function IsApprovedLabel(props) {
  if (props.status) {
    return <Text style={styles.approvedTxt}> Approved</Text>;
  } else {
    return <Text style={styles.unapprovedTxt}> Unapproved</Text>;
  }
}

function amountTxtStyle(props) {
  switch (props.type) {
    case "withdraw":
      return {
        position: "absolute",
        right: 5,

        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "right",
        color: "#892020",
      };
    case "deposit":
      return {
        position: "absolute",
        right: 5,

        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "right",
        color: "#257C2E",
      };
    case "transfer":
      return {
        position: "absolute",
        right: 5,

        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "right",
        color: "#395794",
      };
    default:
      return {
        position: "absolute",
        right: 5,

        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "right",
      };
  }
}

export default TransactionContainer;
