import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GridViewItem = () => {
  return (
    <View style={styles.itemWrapper}>
      <Text>Grid View Item</Text>
    </View>
  );
};

// (1/n)% where n is the desired # of rows > 0
// 2 => 50%
const styles = StyleSheet.create({
  itemWrapper: {
    flexBasis: "50%",
  },
});

export default GridViewItem;
