import React from "react";
import { View, Text } from "react-native";

interface FoodListProps {
  gridView: boolean;
  setGridView: React.Dispatch<React.SetStateAction<boolean>>;
}

const FoodList: React.FunctionComponent<FoodListProps> = ({gridView, setGridView}): JSX.Element => {
  return (
    <View>
      <Text>This is header</Text>
    </View>
  );
};

export default FoodList;
