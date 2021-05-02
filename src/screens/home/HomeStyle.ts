import { StyleSheet, Dimensions } from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  headerWrapper: {
    height: 0.1 * WINDOW_HEIGHT,
    borderBottomColor: "#AFAFAF",
  },
  foodListWrapper: {
    height: 0.8 * WINDOW_HEIGHT,
  },
  navigationWrapper: {
    height: 0.1 * WINDOW_HEIGHT,
  },
});
