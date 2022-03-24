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
        fontFamily: "Inter"
    },

    instructionTitle: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: "Inter",
        marginTop: 20,
        marginLeft: 80,
        textAlign: "left",
        width: "100%"
    },

    instructionSub: {
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "Inter",
        textAlign: "left",
        width: "100%",
        marginTop: 55,
        marginLeft: 80,
    },
    
    instructionBlurb: {
        fontSize: 16,
        fontFamily: "Inter",
        textAlign: "left",
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30
    },

    blurbHighlight: {
        color: "green",
        display: "inline"
    }
});

export default styles;