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
    height: 0.075 * WINDOW_HEIGHT,
    borderBottomWidth: 0.5,
    borderBottomColor: '#AFAFAF'
  },
  foodListWrapper: {
    height: 0.85 * WINDOW_HEIGHT,
  },
  navigationWrapper: {
    height: 0.075 * WINDOW_HEIGHT,
  },
});
