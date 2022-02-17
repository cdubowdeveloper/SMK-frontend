import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
      height: 100,
      width: '100%',
      backgroundColor: "#fff",
      flexDirection:'row', 
      justifyContent: 'space-evenly',
      alignItems:'center',
      borderTopColor: '#CBCBCB',
      borderTopWidth: 1
    },

   icon: {
       width: 30,
       height: 30,
       resizeMode:'contain',
       alignSelf: 'center',
   },
   title:{
       marginTop:10,
       textAlign: 'center',
       width: '100%',
       fontFamily: 'Inter',
       fontStyle: 'normal',
       fontWeight: '500',
       fontSize: 16,
   }
    
  });

  export default styles;