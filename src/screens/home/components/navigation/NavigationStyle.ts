import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  tabColumn: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    marginRight: 0,
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  tabLabel: {
    marginTop: 5,
    color: "#AFAFAF",
    fontWeight: "500",
  },
});
