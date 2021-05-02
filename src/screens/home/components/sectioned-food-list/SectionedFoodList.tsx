import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FoodItem, RECIPE_TYPE } from "../../../../mock-data/MockFoodList";
import { SectionDataObject } from "../../Home";
import ImageButton from "../header/components/image-button/ImageButton";
import ChevronRight from "./assets/chevron_right.png";
import StopWatchIcon from "./assets/stopwatch_icon.png";

interface SectionedFoodListProps {
  foodByRecipeType: SectionDataObject[];
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SectionHeaderProps {
  title: RECIPE_TYPE;
}
interface FoodItemProps {
  item: FoodItem;
}

const SectionedFoodList: React.FunctionComponent<SectionedFoodListProps> = ({
  foodByRecipeType,
  setSearch,
}) => {
  const SectionHeader: React.FunctionComponent<SectionHeaderProps> = ({
    title,
  }) => <Text style={styles.header}>{title.toUpperCase()}</Text>;

  const Item: React.FunctionComponent<FoodItemProps> = ({
    item,
  }): JSX.Element => {
    const recipes = foodByRecipeType[0].data;
    const videoRecipes = foodByRecipeType[1].data;

    const isLast =
      item === foodByRecipeType[0].data[recipes.length - 1] ||
      item === foodByRecipeType[1].data[videoRecipes.length - 1];

    return (
      <TouchableOpacity onPress={() => setSearch(false)}>
        <>
          <View style={styles.item}>
            <View style={styles.foodImageWrapper}>
              <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
            </View>
            <View style={[styles.rightItemWrapper, !isLast && styles.hr]}>
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
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.sectionListWrapper}>
      <SectionList
        sections={foodByRecipeType}
        keyExtractor={(item, index) => "_" + item.id + index}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        SectionSeparatorComponent={() => <View style={styles.hr} />}
        stickySectionHeadersEnabled={false}
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
    marginTop: 30,
    marginBottom: 5,
    color: "#AFAFAF",
  },
});

export default SectionedFoodList;
