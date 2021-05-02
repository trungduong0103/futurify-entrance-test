import React from "react";
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./GridViewItemStyle";
import { FoodItem } from "../../../../../../mock-data/MockFoodList";
import ChevronRightIcon from "../../assets/chevron_right_icon.png";

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

export default GridViewItem;
