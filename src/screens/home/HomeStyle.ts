import { StyleSheet, Dimensions } from "react-native";
import { Platform, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

const WINDOW_WIDTH = Dimensions.get("window").width;
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
  },
  foodListWrapper: {
    height: 0.8 * WINDOW_HEIGHT,
  },
  navigationWrapper: {
    height: 0.1 * WINDOW_HEIGHT,
  },
});
