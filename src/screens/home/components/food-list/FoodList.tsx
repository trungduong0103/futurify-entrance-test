import React from "react";
import { View, Text } from "react-native";

interface FppdListProps {
  gridView: boolean;
  setGridView
}

const FoodList: React.FunctionComponent = (): JSX.Element => {
  return (
    <View>
      <Text>This is header</Text>
    </View>
  );
};

export default FoodList;
