import React, { useState, useEffect, Component } from "react";
import styles from "../../styles/HomePageStyles.js";
import codeStyles from "../../styles/AddKidStyles";
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
import { loadSelectedChildTask } from "../../../Backend/Store/taskAction.js";
import { getChildByFireId } from "../../../Backend/backend.js";

class HomePage extends Component {
  // hardcode whether child owned by parent
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSelectedChild(props) {
    console.log(props);
    getChildByFireId(props.fireID).then((res) => loadSelectedChildTask(res));
  }

  render() {
    let isLinked = this.props.isLinked;
    let isParent = this.props.isParent;
    let navigation = this.props.navigation;

    if (isParent) {
      //create parent navbar with dropdown
      // taken from list of objects (objects include childname, save/spend/share values, )
      // dropbox is already in project. See SelectDropdown element in ChildDepositContainer.js
      if (this.props.kids.length == 0) {
        return (
          <View style={styles.box}>
            <HeaderContainer />
            <Text style={codeStyles.instructionTitle}>
              You haven't added any kids!
            </Text>
            <Text style={codeStyles.instructionSub}>
              Ask your kid for their code!
            </Text>
            <Text style={codeStyles.instructionBlurb}>
              <Text style={codeStyles.blurbHighlight}>
                Add your kid below with their code. .
              </Text>
              The code can be found after a kid creates their own account
            </Text>
            <Text
              style={styles.pageButton}
              onPress={() => {
                navigation.navigate("AddKid");
              }}
            >
              Add New Kid
            </Text>
          </View>
        );
      } else {
        console.log(this.props.kids);
        return (
          <View style={styles.box}>
            <HeaderContainer />
            <SelectDropdown
              data={this.props.kids}
              buttonStyle={styles.dropDownBtn}
              defaultValueByIndex={0}
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
              onSelect={(selectedItem, index) =>
                this.getSelectedChild(selectedItem)
              }
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.firstName;
              }}
              rowTextForSelection={(item, index) => {
                return item.firstName;
              }}
            />
            <div style={{ marginBottom: 10 }}>
              <View style={styles.titleRow}>
                <Text style={styles.banksTxt}>My Banks:</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("NotificationsPage")}
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
      }
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

// function handleDropDown(props) {
//   if (props.kids.length == 0) {
//     return null;
//   } else {
//     return (
//       <SelectDropdown
//         data={this.props.kids}
//         buttonStyle={styles.dropDownBtn}
//         defaultValueByIndex={0}
//         buttonTextStyle={styles.dropDownBtnTxt}
//         rowStyle={styles.dropDownRow}
//         rowTextStyle={styles.dropDownRowTxt}
//         defaultButtonText="Select Account"
//         renderDropdownIcon={() => {
//           return (
//             <Image
//               style={styles.dropDownIcon}
//               source={require("../../../../assets/dropDownIcon.png")}
//             />
//           );
//         }}
//         onSelect={() => console.log("set redux state")}
//         buttonTextAfterSelection={(selectedItem, index) => {
//           return selectedItem.name;
//         }}
//         rowTextForSelection={(item, index) => {
//           return item.name;
//         }}
//       />
//     );
//   }
// }

function mapStateToProps(state) {
  const { firstName, isLinked, isParent, linkcode, kids, selectedKid } = state;
  return {
    firstName: firstName,
    isLinked: isLinked,
    isParent: isParent,
    linkcode: linkcode,
    kids: kids,
    selectedKid: selectedKid,
  };
}

const mapDispatchToProps = {
  loadSelectedChildTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
