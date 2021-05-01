import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { FoodItem } from "../../../../mock-data/MockFoodList";
import GridViewItem from "./components/grid-view-item/GridViewItem";
import ListViewItem from "./components/list-view-item/ListViewItem";

interface FoodListProps {
  gridView: boolean;
  foodItems: FoodItem[];
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const FoodList: React.FunctionComponent<FoodListProps> = ({
  gridView,
  foodItems,
  setSearch,
}): JSX.Element => {
  const renderItem = ({ item }: { item: FoodItem }) => {
    if (gridView) {
      return <GridViewItem foodItem={item} setSearch={setSearch} />;
    }
    return <ListViewItem foodItem={item} setSearch={setSearch} />;
  };

  // cannot chaning numColumns on the fly so must use conditional rendering
  // instead of changing numColumns based on gridView
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
          disableVirtualization={true}
        />
      ) : (
        <FlatList
          key={"_"}
          data={foodItems}
          style={[styles.listWrapper]}
          renderItem={renderItem}
          keyExtractor={item => "_" + item.id}
          disableVirtualization={true}
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
});

export default FoodList;
