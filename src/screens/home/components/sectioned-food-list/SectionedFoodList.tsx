import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { FoodItem } from "../../../../mock-data/MockFoodList";
import { SectionDataObject } from "../../Home";
import ImageButton from "../header/components/image-button/ImageButton";
import ChevronRight from "./assets/chevron_right.png";
import StopWatchIcon from "./assets/stopwatch_icon.png";

interface SectionedFoodListProps {
  foodByRecipeType: SectionDataObject[];
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FoodItemProps {
  item: FoodItem;
}

const SectionedFoodList: React.FunctionComponent<SectionedFoodListProps> = ({
  foodByRecipeType,
  setSearch,
}) => {
  const Item: React.FunctionComponent<FoodItemProps> = ({
    item,
  }): JSX.Element => (
    <TouchableWithoutFeedback onPress={() => setSearch(false)}>
      <>
        <View style={styles.item}>
          <View style={styles.foodImageWrapper}>
            <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
          </View>
          <View style={styles.rightItemWrapper}>
            <View style={styles.foodDesriptionWrapper}>
              <Text style={styles.foodName}>{item.foodName}</Text>
              <View style={styles.foodDescriptionRow}>
                <Image source={StopWatchIcon} style={styles.stopWatch} />
                <Text style={styles.foodDescription}>
                  {item.prepTime} min · for {item.servingPerDish} people
                </Text>
              </View>
            </View>
            <View style={styles.chevronWrapper}>
              <ImageButton
                source={ChevronRight}
                handlePress={() => {}}
                style={styles.chevronRight}
              />
            </View>
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={styles.sectionListWrapper}>
      <SectionList
        sections={foodByRecipeType}
        keyExtractor={(item, index) => "_" + item.id + index}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionListWrapper: {
    flex: 1,
    backgroundColor: "rgb(229, 229, 234)",
  },
  item: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },
  foodImageWrapper: {
    flex: 2,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: "cover",
  },
  rightItemWrapper: {
    flex: 5,
    borderBottomWidth: 0.4,
    flexDirection: "row",
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
    fontSize: 16,
  },
  hr: {
    borderWidth: 0.5,
    color: "#AFAFAF",
  },
});

export default SectionedFoodList;
