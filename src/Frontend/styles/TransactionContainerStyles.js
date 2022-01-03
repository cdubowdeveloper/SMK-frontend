import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: '#F5F5F5',
        borderRadius: '9px',
        width: 312,
        height: 72,
        justifyContent: 'center',
        marginTop: 8
    },
    icon: {
        position: 'absolute',
        width: '38px',
        height: '38px',
        marginLeft:15,
    },
    dateTxt: {
        position: 'absolute',
        left: 68,
        top: 17,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        textAlign: 'left'
    },
    descriptionTxt: {
        position: 'absolute',
        left: 68,
        top: 40,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        textAlign: 'left'
    },
    amountTxt: {
        position: 'absolute',
        right: 5,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right'
    }
}
);

export default styles;