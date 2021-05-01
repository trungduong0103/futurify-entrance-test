import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { FoodItem } from "../../../../mock-data/MockFoodList";
import GridViewItem from "./components/grid-view-item/GridViewItem";
import ListViewItem from "./components/list-view-item/ListViewItem";

interface FoodListProps {
  gridView: boolean;
  foodItems: FoodItem[];
}

const FoodList: React.FunctionComponent<FoodListProps> = ({
  gridView,
  foodItems,
}): JSX.Element => {
  const renderItem = ({ item }: { item: FoodItem }) => {
    if (gridView) {
      return <GridViewItem />;
    }
    return <ListViewItem foodItem={item} />;
  };
  return (
    <SafeAreaView style={[styles.listWrapper]}>
      {gridView ? (
        <FlatList
          key="#"
          data={foodItems}
          style={[styles.listWrapper]}
          renderItem={renderItem}
          keyExtractor={item => "#" + item.id}
          horizontal={false}
          numColumns={2}
        />
      ) : (
        <FlatList
          key={"_"}
          data={foodItems}
          style={[styles.listWrapper]}
          renderItem={renderItem}
          keyExtractor={item => "_" + item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  },
  columnView: {
    flexDirection: "column",
  },
  gridView: {},
});

export default FoodList;
