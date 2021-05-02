import { StyleSheet } from "react-native";

export default StyleSheet.create({
  sectionListWrapper: {
    flex: 1,
    backgroundColor: "rgb(229, 229, 234)",
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
  },
  foodImageWrapper: {
    flex: 2,
  },
  foodImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: "cover",
  },
  rightItemWrapper: {
    flex: 5,
    flexDirection: "row",
  },
  hr: {
    borderBottomWidth: 0.4,
  },
  foodDesriptionWrapper: {
    flexDirection: "column",
    flex: 5,
  },
  foodDescriptionRow: {
    flexDirection: "row",
  },
  stopWatch: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    marginRight: 5,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  foodDescription: {
    color: "#AFAFAF",
    fontWeight: "400",
  },
  chevronWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chevronRight: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  header: {
    fontSize: 20,
    marginLeft: 8,
    marginTop: 30,
    marginBottom: 5,
    color: "#AFAFAF",
  },
});
