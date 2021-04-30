import { StyleSheet, Dimensions } from "react-native";
const WINDOW_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownPickerWrapper: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1
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
});
