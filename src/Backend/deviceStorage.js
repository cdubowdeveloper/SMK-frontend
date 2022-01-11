import { AsyncStorage } from "react-native";
import * as SecureStore from "expo-secure-store";

export async function saveItem(key, value) {
    console.log("SAVE ITEM");
    try {
        await AsyncStorage.setItem(
          key,
          value
        );
      } catch (error) {
        // Error saving data
      }
}

export async function getItem(key) {
    console.log("GET ITEM");
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
        // We have data!!
        console.log(value);
        return value;
        }
    } catch (error) {
        // Error retrieving data
    }
}