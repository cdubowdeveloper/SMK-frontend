import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleContainer: {
    height: 150,
    width: 312,
    alignItems: "center",
    flexDirection: "row",
  },
  titleTxt: {
    position: "absolute",
    left: "0%",

    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
  },
  logoutBtn: {
    width: 156,
    height: 56,
    backgroundColor: "#FF6C6C",
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 15,
    borderRadius: 9,
    marginTop: 20,

    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
  },
  bodyContainer: {
    width: 312,
  },
  btnText: {
    marginLeft: 30,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 21,
    color: "#858585",
  },
  btnContainer: {
    width: 312,
    height: 80,
    backgroundColor: "#F6F6F6",
    borderRadius: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vector: {
    width: 10,
    height: 18,
    marginRight: 30,
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
