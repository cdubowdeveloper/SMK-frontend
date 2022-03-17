import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    code_container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    code_sub_container: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D4D4D4",
        padding: 4,
        borderRadius: 10
    },

    char_container: {
        padding: 15,
        margin: 8,
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: "white",
        color: "#000000",
        textAlign: "center",
        borderRadius: 10
    }
});

export default styles;