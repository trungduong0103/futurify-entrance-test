import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Header from './components/header/Header';
import FoodList from './components/food-list/FoodList';
import Navigation from './components/navigation/Navigation';
import styles from './HomeStyle';

import FOOD_LIST, {FoodCategory, FoodItem} from '../../mock-data/MockFoodList';

const Home = () => {
  const [foodByCategory, setFoodByCategory] = useState<FoodItem[] | []>([]);
  const [category, setCategory] = useState<FoodCategory>(
    FoodCategory.MAIN_PLATES,
  );

  useEffect(() => {
    const filteredFood = FOOD_LIST.filter(
      food => food.category === FoodCategory.MAIN_PLATES,
    );
    setFoodByCategory(filteredFood);
  }, []);

  console.log(foodByCategory, category);

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header />
      </View>
      <View style={styles.foodListWrapper}>
        <FoodList />
      </View>
      <View style={styles.navigationWrapper}>
        <Navigation />
      </View>
    </View>
  );
};

export default Home;
