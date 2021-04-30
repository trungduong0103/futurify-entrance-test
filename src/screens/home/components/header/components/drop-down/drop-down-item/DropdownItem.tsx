import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import { View } from "react-native";

export const LIST_ITEM_HEIGHT = 40;

const WINDOW_WIDTH = Dimensions.get("window").width;

interface DropdownItemProps {
  category: string;
  isLast: boolean;
  isFirst: boolean;
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f4f4f6",
    height: LIST_ITEM_HEIGHT,
  },
});

const DropdownItem: React.FunctionComponent<DropdownItemProps> = ({
  category,
  isLast,
  isFirst,
}): JSX.Element => {
  const bottomRadius = isLast ? 9 : 0;
  const topRadius = isFirst ? 9 : 0;

  return (
    <View
      style={[
        styles.item,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
          borderTopLeftRadius: topRadius,
          borderTopRightRadius: topRadius,
        },
      ]}>
      <Text>{category}</Text>
    </View>
  );
};

export default DropdownItem;
