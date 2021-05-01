import { StyleSheet, Dimensions } from "react-native";
const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  dropDownWrapper: {
    flex: 2,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownPickerWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  dropdownIcon: {
    height: 16,
    width: 16,
    resizeMode: "contain",
  },
  categoryPickerWrapper: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
  },
  categoryTitle: {
    fontSize: 20,
    marginRight: 10,
    fontWeight: "500",
    color: "#147EFB",
  },
  modalWrapper: {
    position: "absolute",
    top: WINDOW_HEIGHT * 0.1,
    left: WINDOW_WIDTH * 0.25,
    width: WINDOW_WIDTH / 2,
  },
});
