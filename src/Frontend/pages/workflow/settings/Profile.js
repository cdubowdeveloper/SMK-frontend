import React from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../../../styles/ProfileStyles";
import HeaderContainer from "../../../Components/HeaderContainer";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderContainer name="Profile" handleBack={() => navigation.goBack()} />
      <Text style={styles.nameText}>Name</Text>
      <TextInput style={styles.firstNameBox} value="Caleb" />
      <TextInput style={styles.lastNameBox} value="Dubow" />
      <Text style={styles.birthText}>Birthday</Text>
      <TextInput style={styles.birthBox} value="NA NA, NA" />
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => navigation.goBack() /*save to redux store*/}
      >
        <Text style={styles.btnTxt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
