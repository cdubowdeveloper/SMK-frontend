import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text,View,Image,TextInput,Button,TouchableOpacity} from "react-native";
import styles from '../../styles/LoginStyles.js';
import { auth } from "../../../Backend/firebase.js";
import { signInWithEmailAndPassword } from 'firebase/auth';
 
function Login( {navigation} ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text 
          style={styles.forgot_button}
          onPress={() => {
            console.log("Account created");
            navigation.navigate('RegisterPage');
          }}
          >Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text 
        style={styles.loginText}
        onPress={() => {
          console.log("Signup", email, password);
          login(email, password, navigation);
        }
        }>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

async function login(email, password, navigation) {
  console.log(email, password);
  signInWithEmailAndPassword(auth, email,password)
  .then(() => {
    console.log("Account signed in");
    navigation.navigate('ChildHomePage');
  })
  .catch((error) => {
    console.log(error.message);
  });
}

export default Login;