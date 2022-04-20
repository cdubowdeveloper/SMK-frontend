import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/LoginStyles.js";
import { auth } from "../../../Backend/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginButton from "../../Components/LoginButton.js";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.HerIcon}
        source={require("../../../../assets/heroesIcon.png")}
      ></Image>

      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subText}>Let's get you signed in.</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#979797"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#979797"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <LoginButton email={email} password={password} navigation={navigation} />

      <View
        style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#C6C6C6" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center", color: "#C6C6C6" }}>
            OR
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#C6C6C6" }} />
      </View>

      <TouchableOpacity style={styles.registerBtn}>
        <Text
          style={styles.registerText}
          onPress={() => {
            navigation.navigate("RegisterPage");
          }}
        >
          Create an Account
        </Text>
      </TouchableOpacity>
      <Text
        onPress={() => {
          navigation.navigate("HomePage");
        }}
      >
        Dev login
      </Text>
    </View>
  );
}

export default Login;
