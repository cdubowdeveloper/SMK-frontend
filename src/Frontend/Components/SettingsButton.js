import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/SettingsStyles';

export default function SettingsButton(props){
    return(
        <TouchableOpacity style={styles.btnContainer}  onPress={() => props.navigation.navigate(props.name)}>
            <Text style={styles.btnText}>{props.name}</Text>
            <Image source={require('../../../assets/Vector.png')} style={styles.vector}/>
        </TouchableOpacity>
    )
}