import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: "#F5F5F5",
    borderRadius: "9px",
    width: 312,
    height: 72,
    justifyContent: "center",
    marginTop: 8,
  },
  icon: {
    position: "absolute",
    width: "38px",
    height: "38px",
    marginLeft: 15,
  },
  dateTxt: {
    position: "absolute",
    left: 68,
    top: 17,

    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    textAlign: "left",
  },
  approvedTxt: {
    color: "#257C2E",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 9,
    textAlign: "left",
  },
  unapprovedTxt: {
    color: "#9F1D1D",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 9,
    textAlign: "left",
  },
  descriptionTxt: {
    position: "absolute",
    left: 68,
    top: 40,

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    textAlign: "left",
  },
  amountTxt: {
    position: "absolute",
    right: 5,

    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "right",
  },
});

export default styles;
