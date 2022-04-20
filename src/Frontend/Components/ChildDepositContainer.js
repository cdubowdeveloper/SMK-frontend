import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BUTTON_TITLES } from "../pages/enums/enums.js";
import styles from "../styles/ChildAnyTransactionStyles";
import HeaderContainer from "./HeaderContainer.js";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { connect } from "react-redux";
import { depositTask } from "../../Backend/Store/taskAction";
import { startTransaction } from "../../Backend/backend.js";

class ChildDepositContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      description: "",
      bank: "",
      handleBack: props.handleBack,
    };
  }
  render() {
    const { bank, amount, handleBack } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTxt}>Deposit</Text>
          <TouchableOpacity style={styles.cancelBtn} onPress={handleBack}>
            <Text style={styles.cancelTxt}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/deposit.png")}
          />
          <TextInput
            style={styles.AmtTxtField}
            placeholder="$0"
            placeholderTextColor="#8B8B8B"
            onChangeText={(amt) => this.setState({ amount: amt })}
          />
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTxt}>Where's it from?</Text>
          <TextInput
            style={styles.descriptionTxtInput}
            placeholder="ex. found a dollar on the ground"
            placeholderTextColor="#8B8B8B"
            multiline={true}
            onChangeText={(description) =>
              this.setState({ description: description })
            }
          />
          <Text style={styles.bodyTxt}>To</Text>
          <SelectDropdown
            data={["Save", "Spend", "Share"]}
            buttonStyle={styles.dropDownBtn}
            buttonTextStyle={styles.dropDownBtnTxt}
            rowStyle={styles.dropDownRow}
            rowTextStyle={styles.dropDownRowTxt}
            defaultButtonText="Select Bank"
            renderDropdownIcon={() => {
              return (
                <Image
                  style={styles.dropDownIcon}
                  source={require("../../../assets/dropDownIcon.png")}
                />
              );
            }}
            onSelect={(selectedItem, index) =>
              this.setState({ bank: selectedItem })
            }
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log(this.state);
            this.props.depositTask(
              this.state.bank,
              Number(this.state.amount),
              this.state.description
            );

            startTransaction(
              this.state.description,
              this.state.bank.toUpperCase(),
              this.state.amount,
              this.props.fireId
            );

            handleBack();
          }}
        >
          <Text style={styles.depositBtn}>Deposit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  depositTask,
};
function mapStateToProps(state) {
  const { fireId } = state;
  return {
    fireId: fireId,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildDepositContainer);
