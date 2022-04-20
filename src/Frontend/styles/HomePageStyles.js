import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  actionContainer: {
    width: 312,
    height: 141,
    borderRadius: "10px",
    marginBottom: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  saveContainer: {
    width: 312,
    height: 141,
    backgroundColor: "#A0D2CD",
    borderRadius: "10px",
    marginBottom: 26,
  },
  banksTxt: {
    width: 312,
    height: 36,

    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 36,
    textAlign: "left",
  },
  spendContainer: {
    width: 312,
    height: 141,
    backgroundColor: "#8D5AB5",
    borderRadius: "10px",
    marginBottom: 26,
  },
  shareContainer: {
    width: 312,
    height: 141,
    backgroundColor: "#ED8762",
    borderRadius: "10px",
  },
  dropDownBtn: {
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 15,
    marginBottom: 28,
  },
  dropDownBtnTxt: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "left",
    color: "#444444",
  },
  dropDownIcon: {
    width: 20,
    height: 13,
    color: "#5A5A5A",
  },
  dropDownRow: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
  },
  dropDownRowTxt: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "left",
    color: "#000000",
    paddingTop: 15,
    paddingBottom: 15,
  },
  notificationsButton: {
    width: 60,
    height: 60,
    backgroundColor: "#79D677",
    borderRadius: "50%",
  },
  notificationsIcon: {
    width: 40,
    height: 43,
    color: "#FFFFFF",
    resizeMode: "contain",
  },
  titleRow: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  notificationsCount: {
    width: 23,
    height: 23,
    backgroundColor: "#D26969",
    color: "#D26969",
    borderRadius: "50%",
  },
});

export default styles;
