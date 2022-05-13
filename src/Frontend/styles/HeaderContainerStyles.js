import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    //backgroundColor: '#FF0000',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  BackButton: {
    position: "absolute",
    left: "0%",
    width: 20,
    height: 16,
    marginLeft: 20,
  },
  ReloadButton: {
    position: "absolute",
    right: "0%",
    width: 30,
    height: 26,
    marginRight: 20,
  },

  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  banksTxt: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
