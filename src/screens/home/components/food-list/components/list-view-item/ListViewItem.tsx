import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FoodItem } from "../../../../../../mock-data/MockFoodList";
import StarRatingIcon from "../../../header/assets/star_rating_icon.png";

interface ListViewItemProps {
  foodItem: FoodItem;
}

const ListViewItem: React.FunctionComponent<ListViewItemProps> = ({
  foodItem,
}) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: foodItem.imageUrl }} style={styles.image} />
        </View>

        <View style={styles.foodDescriptionWrapper}>
          <View style={styles.foodDescriptionRow}>
            <View>
              <Text style={styles.foodName}>{foodItem.foodName}</Text>
              <Text style={styles.foodTags}>{foodItem.tags.join(",")}</Text>
              <Text style={styles.foodDescription}>
                Order from {foodItem.startingPriceRange} ·{" "}
                {foodItem.deliveryTime} min delivery
              </Text>
            </View>
            <View style={[styles.foodRatingRow]}>
              <Image source={StarRatingIcon} style={styles.starRating} />
              <Text style={styles.foodDescription}>{foodItem.starRating}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.hr} />
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageWrapper: {
    flex: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
    resizeMode: "contain",
  },
  foodDescriptionWrapper: {
    flex: 5,
  },
  foodDescriptionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
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

export default ListViewItem;
