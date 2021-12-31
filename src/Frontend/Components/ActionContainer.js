import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from '../styles/ActionContainerStyles'


class ActionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            imageName: props.imageName,
            handlePress: props.handlePress
        };
    } 
  
   render() {
      return (
        <TouchableOpacity
            onPress={this.state.handlePress}>
            
            <View style={styles.actionContainerView}>
                <Image source={require('../../../assets/'+this.state.imageName)} style={styles.icon}/>

                <Text style={styles.containerTitleText}>
                    {this.state.name}
                </Text> 
            </View>
        </TouchableOpacity>
      )
    }
  }

//   function containerStyle(props) {
//     switch(props.name){
//         case 'Save':
//             return {
//                 width:312,
//                 height:141,
//                 backgroundColor: '#A0D2CD',
//                 borderRadius: '10px',
//                 marginBottom: 26,
//             }
//         case 'Spend':
//             return {
//                 width:312,
//                 height:141,
//                 backgroundColor: '#8D5AB5',
//                 borderRadius: '10px',
//                 marginBottom: 26,
//             }
//         case 'Share':
//             return {
//                 width:312,
//                 height:141,
//                 backgroundColor: '#ED8762',
//                 borderRadius: '10px'
//             }
//         default:
//             return {
//                 width:312,
//                 height:141,
//                 backgroundColor: '#FFFFFF',
//                 borderRadius: '10px',
//                 marginBottom: 26,
//             }
//     }
// }

export default ActionContainer;