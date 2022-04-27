import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/TransactionContainerStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../../Backend/Store/taskAction";
import NotificationContainer from "./NotificationContainer";
import {
  getTransactionByChildFireId,
  approveTransaction,
} from "../../Backend/backend";

class NotificationTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: props.bank,
      notifications: [],
      approvedNotifications: [],
    };
  }

  getAllNotifications(kids) {
    var notifications = [];
    for (var i = 0; i < kids.length; i++) {
      getTransactionByChildFireId(kids[i].fireID).then((res) => {
        //console.log(res.data);
        for (var a = 0; a < res.data.transactions.length; a++) {
          let notification = {
            name: res.data.username,
            date: res.data.transactions[a].timestamp,
            amount: res.data.transactions[a].value,
            bank: res.data.transactions[a].category,
            transactionId: res.data.transactions[a]._id,
            description: res.data.transactions[a].message,
            status: res.data.transactions[a].status,
          };
          console.log(notification);
          notifications.push(notification);
        }
        console.log(notifications);
        this.setState({ notifications: notifications });
      });
    }
  }

  componentDidMount() {
    this.getAllNotifications(this.props.kids);
  }

  render() {
    let notifications = this.state.notifications;
    return (
      <View style={styles.TransactionsContainer}>
        {notifications.map((object, i) => {
          console.log(object);
          if (!object.status) {
            return (
              <NotificationContainer
                name={object.name}
                date={object.date}
                type={object.type}
                amount={object.amount}
                bank={object.bank}
                description={object.description}
                id={object.transactionId}
                handleApprove={() => {
                  console.log("Approve notification");
                  approveTransaction(object.transactionId);
                  this.setState({
                    notifications: this.state.notifications.filter(
                      (_, ind) => i !== ind
                    ),
                  });
                  console.log(this.state.notifications);
                }}
                handleDeny={() => {
                  console.log("Deny notification");
                  this.setState({
                    notifications: this.state.notifications.filter(
                      (_, ind) => i !== ind
                    ),
                  });
                  console.log(this.state.notifications);
                }}
              />
            );
          }
        })}

        {/* <NotificationContainer
          name="Caleb"
          date="Mon, Oct 25"
          type="withdraw"
          amount="3.67"
          bank="Spend"
          description="money for ice cream"
        />
        <NotificationContainer
          name="Caleb"
          date="Mon, Oct 25"
          type="withdraw"
          amount="3.67"
          bank="Spend"
          description="money for ice cream"
        />
        <NotificationContainer
          name="Caleb"
          date="Mon, Oct 25"
          type="withdraw"
          amount="3.67"
          bank="Spend"
          description="money for ice cream"
        /> */}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { kids } = state;
  return {
    kids: kids,
  };
}
const mapDispatchToProps = {
  loadChildTask,
  loadParentTask,
  loadSelectedChildTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationTableContainer);
