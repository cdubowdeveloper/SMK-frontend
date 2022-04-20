import React, { useState, useEffect, Component } from "react";
import styles from "../../styles/HomePageStyles.js";
import BankDisplayBox from "../../Components/BankDisplayContainer.js";
import ActionContainer from "../../Components/ActionContainer";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HeaderContainer from "../../Components/HeaderContainer.js";
import SelectDropdown from "react-native-select-dropdown";
import PairCodeDisplay from "../../Components/PairCodeDisplay";
import { reloadData } from "../../../Backend/Store/taskReducer.js";
import { useSelector, useDispatch, connect } from "react-redux";
import { render } from "react-dom";

class HomePage extends Component {
  // hardcode whether child owned by parent
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let isLinked = this.props.isLinked;
    let isParent = this.props.isParent;
    let navigation = this.props.navigation;
    if (isParent) {
      //create parent navbar with dropdown
      // taken from list of objects (objects include childname, save/spend/share values, )
      // dropbox is already in project. See SelectDropdown element in ChildDepositContainer.js
      return (
        <View style={styles.container}>
          <HeaderContainer handleReload={() => reloadData()} />
          <SelectDropdown
            data={[
              {
                name: "Grace",
                save: 10,
                spend: 20,
                share: 15,
              },
              {
                name: "Caleb",
                save: 32,
                spend: 20,
                share: 10,
              },
            ]}
            buttonStyle={styles.dropDownBtn}
            buttonTextStyle={styles.dropDownBtnTxt}
            rowStyle={styles.dropDownRow}
            rowTextStyle={styles.dropDownRowTxt}
            defaultButtonText="Select Account"
            renderDropdownIcon={() => {
              return (
                <Image
                  style={styles.dropDownIcon}
                  source={require("../../../../assets/dropDownIcon.png")}
                />
              );
            }}
            onSelect={() => console.log("set redux state")}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.name;
            }}
            rowTextForSelection={(item, index) => {
              return item.name;
            }}
          />
          <div style={{ marginBottom: 10 }}>
            <View style={styles.titleRow}>
              <Text style={styles.banksTxt}>My Banks:</Text>
              <TouchableOpacity
                onPress={() => console.log("check notifications")}
              >
                <View style={styles.notificationsButton}>
                  <Image
                    style={styles.notificationsIcon}
                    source={require("../../../../assets/notificationsIcon.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </div>
          <View>
            <BankDisplayBox
              name="Save"
              handlePress={() =>
                navigation.navigate("AnyBank", { name: "Save" })
              }
            />

            <BankDisplayBox
              name="Spend"
              handlePress={() =>
                navigation.navigate("AnyBank", { name: "Spend" })
              }
            />

            <BankDisplayBox
              name="Share"
              handlePress={() =>
                navigation.navigate("AnyBank", { name: "Share" })
              }
            />
          </View>
        </View>
      );
    } else {
      // if child
      // if not ownder, need to link
      if (!isLinked) {
        return (
          <View style={styles.box}>
            <HeaderContainer />
            <PairCodeDisplay paircode={this.props.linkcode}></PairCodeDisplay>
          </View>
          // hardcode until set up with backend:

          // once backend plugged in:
          // <PairCodeDisplay paircode={props.child.linkcode}></PairCodeDisplay>
        );
      } else {
        return (
          <View style={styles.box}>
            <HeaderContainer />
            <View style={styles.container}>
              <Text style={styles.banksTxt}>My Banks:</Text>
              <View style={styles.actionContainer}>
                <ActionContainer
                  name="Deposit"
                  imageName="deposit.png"
                  handlePress={() =>
                    navigation.navigate("AnyTransaction", { action: "Deposit" })
                  }
                />
                <ActionContainer
                  name="Withdraw"
                  imageName="withdraw.png"
                  handlePress={() =>
                    navigation.navigate("AnyTransaction", {
                      action: "Withdraw",
                    })
                  }
                />
                <ActionContainer
                  name="Transfer"
                  imageName="transfer.png"
                  handlePress={() =>
                    navigation.navigate("AnyTransaction", {
                      action: "Transfer",
                    })
                  }
                />
              </View>
            </View>

            <View>
              <BankDisplayBox
                name="Save"
                handlePress={() =>
                  navigation.navigate("AnyBank", { name: "Save" })
                }
              />

              <BankDisplayBox
                name="Spend"
                handlePress={() =>
                  navigation.navigate("AnyBank", { name: "Spend" })
                }
              />

              <BankDisplayBox
                name="Share"
                handlePress={() =>
                  navigation.navigate("AnyBank", { name: "Share" })
                }
              />
            </View>
          </View>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  const { firstName, isLinked, isParent, linkcode } = state;
  return {
    firstName: firstName,
    isLinked: isLinked,
    isParent: isParent,
    linkcode: linkcode,
  };
}

export default connect(mapStateToProps)(HomePage);
