import { StyleSheet, Dimensions } from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
  },
  headerWrapper: {
    height: 0.1 * WINDOW_HEIGHT,
    borderBottomColor: "#AFAFAF",
  },
  bodyWrapper: {
    height: 0.9 * WINDOW_HEIGHT,
  },
});
