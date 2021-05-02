import { StyleSheet, Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  itemWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageWrapper: {
    flex: 2,
  },
  image: {
    width: WINDOW_WIDTH * 0.2,
    height: WINDOW_HEIGHT * 0.1,
    borderRadius: 8,
    resizeMode: "cover",
  },
  foodDescriptionWrapper: {
    flex: 5,
  },
  foodDescriptionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodName: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },
  foodTags: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 5,
  },
  foodDescription: {
    fontSize: 14,
    fontWeight: "300",
    color: "#AFAFAF",
    marginTop: 2,
  },
  foodRatingRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  starRating: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 5,
  },
  hr: {
    borderBottomWidth: 0.5,
    borderColor: "#AFAFAF",
    marginBottom: 5,
  },
});
