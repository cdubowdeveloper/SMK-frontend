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
        left: '5.77%',
        right: '70.85%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',     
        color: '#ffffff'
    },

    containerBalanceText: {
        position: 'absolute',
        top: '40%',
        bottom: '40%',
        alignSelf: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '33px',     
        color: '#ffffff',
        textAlign: 'center'
    },

    totalBalanceText:{
        position: 'absolute',
        top: '70%',
        bottom: '20%',
        alignSelf: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',     
        color: '#ffffff',
        textAlign: 'center'
    },

    saveContainerView:{
        width:312,
        height:141,
        backgroundColor: '#A0D2CD',
        borderRadius: '10px',
        marginBottom: 26,
    }
});

export default styles;