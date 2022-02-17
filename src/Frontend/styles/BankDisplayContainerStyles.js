import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    containerTitleView: {
        backgroundColor: 'rgba(0, 0, 0, 0.09)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTitleText: {
        position: 'absolute',
        left: '7.05%',
        right: '70.85%',
        bottom: '71%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'Bold',
        fontSize: '17px',     
        
    },

    containerBalanceText: {
        position: 'absolute',
        top: '40%',
        left: '7.05%',
        alignSelf: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '33px',     
        textAlign: 'center'
    },

    totalBalanceText:{
        position: 'absolute',
        top: '70%',
        bottom: '20%',
        left: '12.82%',
        alignSelf: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',     
        textAlign: 'center'
    },

    iconView:{
        width:312,
        height:141,
        justifyContent: 'center'
    },

    sprite:{
        resizeMode: "contain",
        height: "80%",
        left: "23%",
    }
});

export default styles;