import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titleContainer: {
        height: 150,
        width: 312,
        alignItems: 'center',
        flexDirection: "row",
    },
    titleTxt: {
        position: 'absolute',
        left: '0%',
        
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
    },
    cancelBtn: {
        position: 'absolute',
        right: '0%',
    },
    cancelTxt: {
        
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 15,
        color: '#476DCF'
    },
    headerContainer: {
        height: 120,
        width: 312,
        alignItems: 'center',
        flexDirection: "row",
    },
    icon: {
        position: 'absolute',
        width: 56,
        height: 56,
        left: '0%'
    },
    AmtTxtField: {
        position: 'absolute',
        width: 220,
        height: 56,
        right: '0%',
        backgroundColor: "#F5F5F5",
        borderRadius: 9,
        
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 25,
        paddingLeft: 15
    },
    bodyContainer: {
        width: 312,
    },
    bodyTxt: {
        
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 12
    },
    descriptionTxtInput: {
        width: '100%',
        height: 68,
        backgroundColor: '#F5F5F5',
        borderRadius: 9,
        textAlignVertical: 'top',
        paddingTop: 15,
        paddingLeft:15,
        marginBottom: 28
    },
    dropDownBtn:{
        borderRadius: 9,
        backgroundColor: '#F5F5F5',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 15,
        marginBottom: 28
    },
    dropDownBtnTxt: {
        
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 17,
        textAlign: 'left',
        color: '#8B8B8B',
    },
    dropDownIcon: {
        width:20,
        height:13
    },
    dropDownRow: {
        backgroundColor: '#F5F5F5',
        paddingLeft: 10,
    },
    dropDownRowTxt: {
        
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 17,
        textAlign: 'left',
        color: '#000000',
        paddingTop: 15,
        paddingBottom: 15
    },
    depositBtn: {
        width: 156,
        height: 56,
        backgroundColor: "#257C2E",
        color: "#FFFFFF",
        textAlign: 'center',
        paddingTop:15,
        borderRadius: 9,
        marginTop:20,
        
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
    },
    withdrawBtn: {
        width: 156,
        height: 56,
        backgroundColor: "#9F1D1D",
        color: "#FFFFFF",
        textAlign: 'center',
        paddingTop:15,
        borderRadius: 9,
        marginTop:20,
        
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
    },
    transferBtn: {
        width: 156,
        height: 56,
        backgroundColor: "#395794",
        color: "#FFFFFF",
        textAlign: 'center',
        paddingTop:15,
        borderRadius: 9,
        marginTop:20,
        
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
    }
});

export default styles;