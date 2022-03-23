import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    userTxt: {
        position: 'absolute',
        width: 83,
        height: 21,
        left: 39,
        top: 134,

        
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 21
    },
    userBox: {
        position: 'absolute',
        width: 312,
        height: 47,
        left: 39,
        top: 175,
        padding: 20,
        
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
    passTxt: {
        position: 'absolute',
        width: 148,
        height: 21,
        left: 39,
        top: 268,

        
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 21
    },
    currentBox: {
        position: 'absolute',
        width: 312,
        height: 47,
        left: 39,
        top: 309,
        padding: 20,
        
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
    newBox: {
        position: 'absolute',
        width: 312,
        height: 47,
        left: 39,
        top: 387,
        padding: 20,
        
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
    confirmBox: {
        position: 'absolute',
        width: 312,
        height: 47,
        left: 39,
        top: 448,
        padding: 20,
        
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
    saveBtn: {
        position: 'absolute',
        width: 156,
        height: 57,
        left: 117,
        top: 550,
        backgroundColor: '#79D677',
        borderRadius: 10,
       
    },
    btnTxt: {
        color: "#FFFFFF",
        textAlign: 'center',
        
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        paddingTop:15,
    }
})

export default styles;