import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/HeaderContainerStyles";
import { getChildByFireId, getParentByFireId } from "../../Backend/backend";
import { connect } from "react-redux";
import {
  loadChildTask,
  loadParentTask,
  loadSelectedChildTask,
} from "../../Backend/Store/taskAction";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      handleBack: props.handleBack,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <BackButton handlePress={this.state.handleBack} />
        <Text style={styles.banksTxt}>{this.state.name}</Text>
        <ReloadButton
          handlePress={() => {
            if (this.props.isParent) {
              getParentByFireId(this.props.fireId).then((res) =>
                this.props.loadParentTask(res)
              );
              getChildByFireId(this.props.kids[0].fireID).then((res) =>
                this.props.loadSelectedChildTask(res)
              );
            } else {
              getChildByFireId(this.props.fireId).then((res) =>
                this.props.loadChildTask(res)
              );
            }
          }}
        />
      </View>
    );
  }
}
class BackButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handlePress: props.handlePress,
    };
  }

  render() {
    if (this.state.handlePress == null) {
      return null;
    } else {
      return (
        <TouchableOpacity
          style={styles.BackButton}
          onPress={this.state.handlePress}
        >
          <Image
            source={require("../../../assets/backButton.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      );
    }
  }
}

class ReloadButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handlePress: props.handlePress,
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.ReloadButton}
        onPress={this.state.handlePress}
      >
        <Image
          source={require("../../../assets/refresh.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(state) {
  const { firstName, fireId, isParent, kids } = state;
  return {
    firstName: firstName,
    fireId: fireId,
    isParent: isParent,
    kids: kids,
  };
}

const mapDispatchToProps = {
  loadChildTask,
  loadParentTask,
  loadSelectedChildTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
