import { StyleSheet, Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

// (1/n)% where n is the desired # of rows > 0
// 2 => 50%
// or just use flatlist num of columns, but can't change in runtime
// which is wack
export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    height: WINDOW_HEIGHT * 0.35,
  },
  imageWrapper: {
    flex: 3,
    paddingLeft: 10,
    paddingTop: 10,
    justifyContent: "flex-start",
  },
  image: {
    height: WINDOW_HEIGHT * 0.25,
    width: WINDOW_WIDTH * 0.45,
    borderRadius: 8,
    resizeMode: "cover",
  },
  foodDescription: {
    flex: 1,
    paddingLeft: 10,
    alignItems: "flex-start",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  foodCategory: {
    color: "#AFAFAF",
  },
  chevronRight: {
    marginTop: 1,
    width: 15,
    height: 15,
    resizeMode: "cover",
  },
  foodName: {
    fontSize: 16,
    fontWeight: "600",
  },
  moreFoodDescription: {
    fontSize: 14,
    fontWeight: "400",
    color: "#AFAFAF",
    marginTop: 2,
  },
  // itemWrapper: {
  //   flexBasis: "50%",
  // },
});
