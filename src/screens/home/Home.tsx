import React from "react";
import { View } from "react-native";
import Header from "./components/header/Header";
import FoodList from "./components/food-list/FoodList";
import Navigation from "./components/navigation/Navigation";
import styles from "./HomeStyle";
import SectionedFoodList from "./components/sectioned-food-list/SectionedFoodList";
import { SectionDataObject } from ".";
import { FoodItem } from "../../mock-data/MockFoodList";

interface HomeProps {
  gridView: boolean;
  setGridView: React.Dispatch<React.SetStateAction<boolean>>;
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  foodByCategory: FoodItem[];
  foodByRecipeType: SectionDataObject[];
}

const Home: React.FunctionComponent<HomeProps> = ({
  gridView,
  setGridView,
  search,
  setSearch,
  value,
  setValue,
  foodByCategory,
  foodByRecipeType,
}): JSX.Element => {
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
