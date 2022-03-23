import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionContainer: {
        width:312,
        height:141,
        borderRadius: '10px',
        marginBottom: 26,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveContainer: {
        width:312,
        height:141,
        backgroundColor: '#A0D2CD',
        borderRadius: '10px',
        marginBottom: 26,
    },
    banksTxt: {
        width: 312,
        height: 36,
        
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 36,
        textAlign: "left"
    },
    spendContainer: {
        width:312,
        height:141,
        backgroundColor: '#8D5AB5',
        borderRadius: '10px',
        marginBottom: 26,
    },
    shareContainer: {
        width:312,
        height:141,
        backgroundColor: '#ED8762',
        borderRadius: '10px'
    },
});

export default styles;