import React from 'react';
import {View} from 'react-native';
import Header from './components/header/Header';
import FoodList from './components/food-list/FoodList';
import Navigation from './components/navigation/Navigation';
import styles from './HomeStyle';

const Home = () => {
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
