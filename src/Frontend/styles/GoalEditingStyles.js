import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    editingContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: "39px",
        marginTop: "65px",
        marginRight: "39px",
    },

    editingNavBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "37px"
    },

    editingBack: {
        width: "20px",
        height: "16px"
    },

    editingTitle: {
        fontSize: "20px",
        fontWeight: 600,
        color: "#444444",
        marginLeft: "80px"
    },

    editingBlurb: {
        marginBottom: "35px",
        fontSize: "17px",
        fontWeight: 500,
        color: "#585858"
    },

    subTitle: {
        fontSize: "18px",
        fontWeight: 600,
        color: "#000000",
        marginBottom: "19px"
    },

    editInput: {
        width: "342px",
        height: "56px",
        backgroundColor: "#FCFCFC",
        borderRadius: "9px",
        paddingLeft: "30px",
        marginBottom: "43px"
    }


})

export default styles;