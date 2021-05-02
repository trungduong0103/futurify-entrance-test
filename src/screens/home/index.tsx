import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import FOOD_LIST, { FoodItem, RECIPE_TYPE } from "../../mock-data/MockFoodList";
import { useAppSelector } from "../../redux/hooks";
import Home from "./Home";

export interface SectionDataObject {
  title: RECIPE_TYPE;
  data: FoodItem[];
}

const HomeWrapper = () => {
  const [foodByCategory, setFoodByCategory] = useState<FoodItem[] | []>(
    FOOD_LIST,
  );
  const [foodByRecipeType, setFoodByRecipeType] = useState<
    SectionDataObject[] | []
  >([]);
  const [gridView, setGridView] = useState<boolean>(true);
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
    <Home
      gridView={gridView}
      setGridView={setGridView}
      search={search}
      setSearch={setSearch}
      value={value}
      setValue={setValue}
      foodByCategory={foodByCategory}
      foodByRecipeType={foodByRecipeType}
    />
  );
};

export default HomeWrapper;
