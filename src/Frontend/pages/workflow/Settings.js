import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../../styles/SettingsStyles'
import SettingsButton from '../../Components/SettingsButton';
export default function Settings({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleTxt}>Settings</Text>
            </View>

            <SettingsButton name="Profile" navigation={navigation}/>
            <div style={{marginTop: 20}}>
                <SettingsButton name="Login Information" navigation={navigation}/>
            </div>
            
            <TouchableOpacity onPress={() => console.log("Logged out")}>
                <Text style={styles.logoutBtn}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}