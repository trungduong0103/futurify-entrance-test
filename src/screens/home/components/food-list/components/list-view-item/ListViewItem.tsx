import React from "react";
import {
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./ListViewItemStyle";
import { useNavigation } from "@react-navigation/native";
import { FoodItem } from "../../../../../../mock-data/MockFoodList";
import StarRatingIcon from "../../../header/assets/star_rating_icon.png";
import {
  ApplicationStackNavigationProp,
  Routes,
} from "../../../../../../routes/routes";

interface ListViewItemProps {
  foodItem: FoodItem;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListViewItem: React.FunctionComponent<ListViewItemProps> = ({
  foodItem,
  setSearch,
}) => {
  const navigation = useNavigation<
    ApplicationStackNavigationProp<Routes.HomeScreen>
  >();
  // cannot use fragment with TouchableWithoutFeedback, pressing doesn't do anything
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
        setSearch(false);
        navigation.navigate(Routes.FoodDetailScreen, { item: foodItem });
      }}>
      <View>
        <View style={styles.itemWrapper}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: foodItem.imageUrl }} style={styles.image} />
          </View>

          <View style={styles.foodDescriptionWrapper}>
            <View style={styles.foodDescriptionRow}>
              <View>
                <Text style={styles.foodName}>{foodItem.foodName}</Text>
                <Text style={styles.foodTags}>{foodItem.tags.join(", ")}</Text>
                <Text style={styles.foodDescription}>
                  Order from {foodItem.startingPriceRange} ·{" "}
                  {foodItem.deliveryTime} min delivery
                </Text>
              </View>
              <View style={[styles.foodRatingRow]}>
                <Image source={StarRatingIcon} style={styles.starRating} />
                <Text style={styles.foodDescription}>
                  {foodItem.starRating}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.hr} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListViewItem;
