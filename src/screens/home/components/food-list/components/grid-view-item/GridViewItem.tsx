import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FoodItem } from "../../../../../../mock-data/MockFoodList";
import ChevronRightIcon from "../../assets/chevron_right_icon.png";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

interface GridViewItemProps {
  foodItem: FoodItem;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const GridViewItem: React.FunctionComponent<GridViewItemProps> = ({
  foodItem,
  setSearch,
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
        setSearch(false);
      }}>
      <View style={styles.itemContainer}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: foodItem.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.foodDescription}>
          <View style={styles.row}>
            <Text style={styles.foodCategory}>{foodItem.category} </Text>
            <Image source={ChevronRightIcon} style={styles.chevronRight} />
          </View>
          <Text style={styles.foodName}>{foodItem.foodName}</Text>
          <Text style={styles.moreFoodDescription}>
            {foodItem.prepTime} min · {foodItem.servingPerDish} people{" "}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// (1/n)% where n is the desired # of rows > 0
// 2 => 50%
// or just use flatlist num of columns, but can't change in runtime
// which is wack
const styles = StyleSheet.create({
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

export default GridViewItem;
