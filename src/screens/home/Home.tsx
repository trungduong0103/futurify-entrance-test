import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Header from "./components/header/Header";
import FoodList from "./components/food-list/FoodList";
import Navigation from "./components/navigation/Navigation";
import styles from "./HomeStyle";

import FOOD_LIST, { FoodItem } from "../../mock-data/MockFoodList";

const Home: React.FunctionComponent = (): JSX.Element => {
  const [foodByCategory, setFoodByCategory] = useState<FoodItem[] | []>([]);
  const [gridView, setGridView] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const filteredFood = FOOD_LIST.filter(
      food => food.category === "Main Plates",
    );
    setFoodByCategory(filteredFood);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.headerWrapper, styles.centered]}>
        <Header
          gridView={gridView}
          setGridView={setGridView}
          search={search}
          setSearch={setSearch}
          input={input}
          setInput={setInput}
        />
      </View>
      <View style={styles.foodListWrapper}>
        <FoodList
          gridView={gridView}
          foodItems={foodByCategory}
          setSearch={setSearch}
        />
      </View>
      <View style={styles.navigationWrapper}>
        <Navigation />
      </View>
    </View>
  );
};

export default Home;
