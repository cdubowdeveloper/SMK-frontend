import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: "#F5F5F5",
    borderRadius: "9px",
    width: 312,
    height: 105,
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
  },

  textContainer: {
    width: 200,
  },
  selectionContainer: {
    display: "flex",
    marginLeft: "10px",
    flexDirection: "row",
    alignContent: "center",
  },
  yesButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#79D677",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  noButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginLeft: "10px",
    backgroundColor: "#FF6C6C",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  buttonIcon: {
    width: "14px",
    height: "14px",
    resizeMode: "contain",
    alignSelf: "center",
  },
  icon: {
    position: "absolute",
    width: "38px",
    height: "38px",
    marginLeft: 15,
  },
  dateTxt: {
    marginTop: 18,
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 12,
    textAlign: "left",
  },
  titleTxt: {
    marginLeft: 10,
    marginTop: 10,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    textAlign: "left",
  },

  descriptionTxt: {
    marginLeft: 10,
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
