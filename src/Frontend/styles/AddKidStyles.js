import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  code_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },

  code_sub_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
    padding: 15,
    borderRadius: 10,
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
    fontStyle: "normal",
    fontWeight: "bold",
  },

  instructionTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 0,
    marginLeft: 80,
    textAlign: "left",
    width: "100%",
    fontStyle: "normal",
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
    fontWeight: 300,
  },

  blurbHighlight: {
    color: "#79D677",
    display: "inline",
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #EAEAEA",
    borderRadius: 11,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "left",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 0,
    marginLeft: 0,
    outlineStyle: "none",
    textAlign: "left",
    marginLeft: 10,
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    color: "#979797",
  },
  pageButton: {
    padding: 12,
    marginTop: 100,
    backgroundColor: "#79D677",
    textAlign: "center",
    width: "70%",
    borderRadius: 8,
    color: "white",
    fontSize: 20,
    fontWeight: 200,
  },
});

export default styles;
