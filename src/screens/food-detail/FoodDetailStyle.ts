import { StyleSheet, Dimensions } from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
  },
  headerWrapper: {
    paddingTop: 40,
    height: 0.1 * WINDOW_HEIGHT,
    borderBottomColor: "#AFAFAF",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chevronLeft: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 10,
  },
  orderText: {
    fontSize: 20,
    color: "#147EFB",
    fontWeight: "600",
    marginRight: 10,
  },
  bodyWrapper: {
    flex: 1,
  },
  foodImageWrapper: {},
  foodDescriptionWrapper: {
    padding: 15,
  },
  hr: {
    borderBottomColor: "#AFAFAF",
    borderBottomWidth: 0.4,
    marginTop: 10,
    marginBottom: 10,
  },
  foodImage: {
    height: 200,
    width: "auto",
  },
  foodName: {
    fontSize: 24,
    fontWeight: "600",
  },
  row: {
    marginTop: 5,
    flexDirection: "row",
  },
  foodPriceRange: {
    fontSize: 14,
    fontWeight: "400",
    marginRight: 10,
  },
  portionSize: {
    fontSize: 14,
    fontWeight: "400",
    color: "#AFAFAF",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
  },
  foodSectionTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  foodIngredients: {
    marginTop: 5,
    color: "#AFAFAF",
  },
  nutritionRow: {
    justifyContent: "space-between",
  },
  nutritionLabel: {
    fontSize: 12,
    color: "#AFAFAF",
  },
  nutritionStats: {
    fontSize: 18,
    fontWeight: "600",
  },
  orderOptionsWrapper: {
    backgroundColor: "rgb(229, 229, 234)",
    marginBottom: 40,
  },
  extraOptionTitle: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    color: "#AFAFAF",
    fontWeight: "500",
  },
  extraOption: {
    backgroundColor: "#FFF",
    height: 50,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 0.3,
    borderColor: "#AFAFAF",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  extraOptionText: {
    fontSize: 15,
    fontWeight: "500",
    marginRight: 15,
  },
  extraOptionPrice: {
    color: "#AFAFAF",
  },
  tickIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    marginRight: 10,
  },
  scrollViewBottomPadding: {
    height: 300,
  },
});
