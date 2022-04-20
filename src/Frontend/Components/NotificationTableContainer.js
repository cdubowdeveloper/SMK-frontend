import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/TransactionContainerStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../../Backend/Store/taskAction";
import NotificationContainer from "./NotificationContainer";

class NotificationTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: props.bank,
    };
  }

  render() {
    return (
      <View style={styles.TransactionsContainer}>
        {/* {this.props.transactions.map((object, i) => {
                if (object.bank == this.state.bank){
                    return (                
                    <NotificationContainer
                        
                        date={object.date}
                        amount= {object.amt}
                        description= {object.description}
                    />)
                }
            

            }
            
            )} */}
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
        />
        <NotificationContainer
          name="Caleb"
          date="Mon, Oct 25"
          type="withdraw"
          amount="3.67"
          bank="Spend"
          description="money for ice cream"
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { transactions } = state;
  return {
    transactions: transactions,
  };
}

export default connect(mapStateToProps)(NotificationTableContainer);
