import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 20,
    paddingTop: 30,
  },
  formText: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 0,
  },
  progress: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  progressDot: {
    width: 24,
    height: 24,
    borderRadius: "100%",
    borderColor: "#DBDBDB",
    borderWidth: 2,
    backgroundColor: "white",
    zIndex: 3,
  },
  activeProgressDot: {
    width: 24,
    height: 24,
    borderRadius: "100%",
    borderColor: "#79D677",
    borderWidth: 2,
    backgroundColor: "white",
    zIndex: 3,
  },
  progressBar: {
    marginLeft: -5,
    marginRight: -5,
    height: 12,
    width: 70,
    borderColor: "#DBDBDB",
    borderWidth: 2,
    backgroundColor: "white",
    zIndex: 2,
  },
  completeProgressDot: {
    width: 24,
    height: 24,
    borderRadius: "100%",
    borderColor: "#79D677",
    borderWidth: 2,
    backgroundColor: "#79D677",
    zIndex: 3,
  },
  completeProgressBar: {
    marginLeft: -5,
    marginRight: -5,
    height: 12,
    width: 70,
    borderColor: "#79D677",
    borderWidth: 2,
    backgroundColor: "#79D677",
    zIndex: 2,
  },
  pageButton: {
    padding: 12,
    backgroundColor: "#79D677",
    textAlign: "center",
    width: "70%",
    borderRadius: 8,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default styles;
