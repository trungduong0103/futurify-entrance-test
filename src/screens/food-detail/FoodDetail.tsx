import React from "react";
import { View, Text } from "react-native";
import { ApplicationStackRouteProp, Routes } from "../../routes/routes";

interface FoodDetailProps {
  route: ApplicationStackRouteProp<Routes.FoodDetailScreen>;
}

const FoodDetail: React.FunctionComponent<FoodDetailProps> = ({
  route,
}): JSX.Element => {

  return (
    <View>
      <Text>Food Details</Text>
    </View>
  );
};

export default FoodDetail;
