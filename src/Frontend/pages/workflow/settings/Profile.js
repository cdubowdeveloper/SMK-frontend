import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../../../styles/ProfileStyles";
import { connect } from "react-redux";
import HeaderContainer from "../../../Components/HeaderContainer";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer
          name="Profile"
          handleBack={() => navigation.goBack()}
        />
        <Text style={styles.nameText}>Name</Text>
        <Text style={styles.firstNameBox} value={this.props.firstName} />
        <Text style={styles.lastNameBox} value={this.props.lastName} />
        <Text style={styles.birthText}>Birthday</Text>
        <Text style={styles.birthBox} value={this.props.birthday} />
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.goBack() /*save to redux store*/}
        >
          <Text style={styles.btnTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { firstName, lastName, birthday } = state;
  return {
    firstName: firstName,
    lastName: lastName,
    birthday: birthday,
  };
}
export default connect(mapStateToProps)(Profile);
