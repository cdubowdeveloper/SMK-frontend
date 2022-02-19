import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

    welcomeView: {
      width: "70%",
    },
   
    inputView: {
      backgroundColor: '#FFFFFF',
      border: '1px solid #EAEAEA',
      borderRadius: 11,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "left",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 0,
      marginLeft: 0,
      outlineStyle: 'none',
      textAlign: 'left',
      marginLeft: 10,

      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      color: '#979797',

    },

    welcomeText: {
      color: "#FFFFFF",
      textAlign: 'left',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 28,
      color: '#444444',
      marginBottom: 8,
    },

    subText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 18,
      color: '#7B7B7B',
      marginBottom: 27,
    },


    HerIcon: {
       resizeMode: "contain",
       marginBottom: 10,
       width: '100%',
       height: 297,
       
    },

    sprite:{
      resizeMode: "contain",
      height: "80%",
      left: "23%",
  },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "70%",
      borderRadius: 11,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom:37,
      backgroundColor: "#79D677",
    },
    registerBtn: {
      width: "70%",
      borderRadius: 11,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 37,
      
      borderWidth: 1,
      borderColor: "#60B75E",
    },

    registerText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 20,
      color: '#60B75E',
    },


    loginText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 20,
      color: '#FFFFFF',
    },

  });

  export default styles;