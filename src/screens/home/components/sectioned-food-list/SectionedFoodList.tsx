import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { SectionDataObject } from "../..";
import { FoodItem, RECIPE_TYPE } from "../../../../mock-data/MockFoodList";
import ImageButton from "../header/components/image-button/ImageButton";
import ChevronRight from "./assets/chevron_right.png";
import StopWatchIcon from "./assets/stopwatch_icon.png";
import styles from "./SectionedFoodListStyle";
import {
  ApplicationStackNavigationProp,
  Routes,
} from "../../../../routes/routes";

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
  const navigation = useNavigation<
    ApplicationStackNavigationProp<Routes.HomeScreen>
  >();

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
      <TouchableOpacity
        onPress={() => {
          setSearch(false);
          navigation.push(Routes.FoodDetailScreen, { item: item });
        }}>
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

export default SectionedFoodList;
