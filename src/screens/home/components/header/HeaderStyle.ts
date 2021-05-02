import { StyleSheet, Dimensions } from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
  },
  bottomLine: {},
  blackSearchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginBottom: 10,
  },
  clearIcon: {
    marginBottom: 10,
  },
  childrenWrapper: {
    flex: 2,
    // height: "100%",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    borderRadius: 8,
    padding: 10,
    height: 35,
    width: "80%",
    backgroundColor: "#C7CCD4",
    marginBottom: 10,
  },
  actionButtonsWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: WINDOW_HEIGHT * 0.03,
  },
});
