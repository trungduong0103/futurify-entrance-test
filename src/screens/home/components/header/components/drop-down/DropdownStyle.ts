import { StyleSheet, Dimensions } from "react-native";
const WINDOW_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  dropdownWrapper: {
    flex: 2,
    position: "absolute",
    left: WINDOW_WIDTH * 0.25,
    width: WINDOW_WIDTH / 2,
    zIndex: 1,
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
  searchWrapper: {
    flex: 2,
  },
  dropdownListWrapper: {
    overflow: "hidden",
    marginTop: 10,
  },
});
