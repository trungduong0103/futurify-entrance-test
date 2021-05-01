import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Header from "./components/header/Header";
import FoodList from "./components/food-list/FoodList";
import Navigation from "./components/navigation/Navigation";
import styles from "./HomeStyle";

import FOOD_LIST, { FoodItem, RECIPE_TYPE } from "../../mock-data/MockFoodList";
import { useAppSelector } from "../../redux/hooks";
import useDebounce from "../../hooks/useDebounce";
import SectionedFoodList from "./components/sectioned-food-list/SectionedFoodList";

export interface SectionDataObject {
  title: RECIPE_TYPE;
  data: FoodItem[];
}

const Home: React.FunctionComponent = (): JSX.Element => {
  const [foodByCategory, setFoodByCategory] = useState<FoodItem[] | []>(
    FOOD_LIST,
  );
  const [foodByRecipeType, setFoodByRecipeType] = useState<
    SectionDataObject[] | []
  >([]);
  const [gridView, setGridView] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [debouncedValue, value, setValue] = useDebounce<string>("", 2000);

  const category = useAppSelector(state => state.foodCategory);

  useEffect(() => {
    if (category === "ALL") {
      setFoodByCategory(FOOD_LIST);
    } else {
      const filteredFoods = FOOD_LIST.filter(
        food => food.category === category || food.tags.includes(category),
      );

      setFoodByCategory(filteredFoods);
    }
  }, [category]);

  useEffect(() => {
    const regex = new RegExp(debouncedValue.toLowerCase(), "g");
    if (debouncedValue) {
      const filteredFoods = FOOD_LIST.filter(food => {
        if (regex.test(food.foodName.toLowerCase())) {
          return true;
        }
        if (regex.test(food.category.toLowerCase())) {
          return true;
        }
        return false;
      });

      const sectionedData: SectionDataObject[] | [] = [
        { title: RECIPE_TYPE.RECIPES, data: [] },
        { title: RECIPE_TYPE.VIDEO_RECIPES, data: [] },
      ];

      filteredFoods.forEach(food => {
        if (food.recipeType === RECIPE_TYPE.RECIPES) {
          sectionedData[0].data.push(food);
        } else {
          sectionedData[1].data.push(food);
        }
      });

      setFoodByRecipeType(sectionedData);
    }
  }, [debouncedValue]);

  return (
    <View style={styles.container}>
      <View style={[styles.headerWrapper, styles.centered]}>
        <Header
          gridView={gridView}
          setGridView={setGridView}
          search={search}
          setSearch={setSearch}
          input={value}
          setInput={setValue}
        />
      </View>
      <View style={styles.foodListWrapper}>
        {search ? (
          <SectionedFoodList
            foodByRecipeType={foodByRecipeType}
            setSearch={setSearch}
          />
        ) : (
          <FoodList
            gridView={gridView}
            foodItems={foodByCategory}
            setSearch={setSearch}
          />
        )}
      </View>
      <View style={styles.navigationWrapper}>
        <Navigation />
      </View>
    </View>
  );
};

export default Home;
