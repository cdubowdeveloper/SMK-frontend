import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../../../styles/SettingsStyles";
import { connect } from "react-redux";
import HeaderContainer from "../../../Components/HeaderContainer";

class MyKids extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderContainer
          name="My Kids"
          handleBack={() => navigation.goBack()}
        />
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
  }
}

function mapStateToProps(state) {
  const { isParent, kids } = state;
  return {
    isParent: isParent,
    kids: kids,
  };
}
export default connect(mapStateToProps)(MyKids);
