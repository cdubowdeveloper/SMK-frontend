import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    code_container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%"
    },

    code_sub_container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4F4F4",
        padding: 15,
        borderRadius: 10
    },

    char_container: {
        margin: 8,
        fontSize: 20,
        fontWeight: 700,
        width: 45,
        paddingBottom: 16,
        paddingTop: 16,
        backgroundColor: "white",
        color: "#000000",
        textAlign: "center",
        borderRadius: 10,
        fontStyle: 'normal',
        fontWeight: 'bold',
    },

    instructionTitle: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 20,
        marginLeft: 80,
        textAlign: "left",
        width: "100%",
        fontStyle: 'normal',
    },

    instructionSub: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: "left",
        width: "100%",
        marginTop: 55,
        marginLeft: 80,
    },
    
    instructionBlurb: {
        fontSize: 16,
        textAlign: "left",
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30,
        fontWeight: 300
    },

    blurbHighlight: {
        color: "#79D677",
        display: "inline"
    }
});

export default styles;