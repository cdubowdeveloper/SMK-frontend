import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    BackButton: {
        position: 'absolute',
        left: '0%',
        height: 10,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    
    },
    TransactionsContainer:{
        width:312,
    },
    TransactionsTxt: {
        
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: "left"
    }

    
});

export default styles;