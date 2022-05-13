import React, { Component } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import codeStyles from "../../../styles/AddKidStyles";
import { addChildToParent } from "../../../../Backend/backend";
import { connect } from "react-redux";
class AddKid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    };
  }

  render() {
    return (
      <View style={codeStyles.code_container}>
        <Text style={codeStyles.instructionTitle}>Enter Code</Text>
        <Text style={codeStyles.instructionSub}>
          Ask your kid for their code!
        </Text>
        <Text style={codeStyles.instructionBlurb}>
          <Text style={codeStyles.blurbHighlight}>
            Enter your kid's personal code below. .
          </Text>
          The code can be found after a kid creates their own account
        </Text>

        <View style={codeStyles.inputView}>
          <TextInput
            style={codeStyles.TextInput}
            placeholder="A4E32"
            placeholderTextColor="#979797"
            onChangeText={(code) => this.setState({ code: code })}
          />
        </View>

        <Text
          style={codeStyles.pageButton}
          onPress={() => {
            addChildToParent(this.props.fireId, this.state.code);
            this.props.navigation.goBack();
          }}
        >
          Enter
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { fireId } = state;
  return {
    fireId: fireId,
  };
}
export default connect(mapStateToProps)(AddKid);
