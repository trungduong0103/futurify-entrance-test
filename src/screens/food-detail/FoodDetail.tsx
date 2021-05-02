import React from "react";
import { View, Text } from "react-native";
import { ApplicationStackRouteProp, Routes } from "../../routes/routes";
import styles from "./FoodDetailStyle";

interface FoodDetailProps {
  route: ApplicationStackRouteProp<Routes.FoodDetailScreen>;
}

const FoodDetail: React.FunctionComponent<FoodDetailProps> = ({
  route,
}): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <Text>Header</Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Text>Body</Text>
      </View>
    </View>
  );
};

export default FoodDetail;
