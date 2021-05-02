import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FoodItem } from "../../../../../../mock-data/MockFoodList";
import StarRatingIcon from "../../../header/assets/star_rating_icon.png";
import {
  ApplicationStackNavigationProp,
  Routes,
} from "../../../../../../routes/routes";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

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

const styles = StyleSheet.create({
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

export default ListViewItem;
