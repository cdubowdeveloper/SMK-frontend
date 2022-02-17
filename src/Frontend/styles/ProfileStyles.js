import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    nameText: {
        position: 'absolute',
        width: 48,
        height: 21,
        left: 39,
        top: 134,

        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 21
    },
    firstNameBox:{
        position: 'absolute',
        width: 148,
        height: 47,
        left: 39,
        top: 175,

        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 20
    },
    lastNameBox:{
        position: 'absolute',
        width: 148,
        height: 47,
        left: 203,
        top: 175,

        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 20
    },
    birthText: {
        position: 'absolute',
        width: 69,
        height: 21,
        left: 39,
        top: 268,

        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 21
    },
    birthBox:{
        position: 'absolute',
        width: 312,
        height: 47,
        left: 39,
        top: 309,

        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 20
    },
    saveBtn: {
        position: 'absolute',
        left: 117,
        top: 508,

        width: 156,
        height: 56,
        backgroundColor: "#79D677",
        
        borderRadius: 9,
    },
    btnTxt: {
        color: "#FFFFFF",
        textAlign: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        paddingTop: 15
    }
})
 
export default styles;