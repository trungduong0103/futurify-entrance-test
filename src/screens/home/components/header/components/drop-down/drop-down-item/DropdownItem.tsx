import React from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { setCategory } from "../../../../../../../redux/foodCategorySlice";
import { useAppDispatch } from "../../../../../../../redux/hooks";

export const LIST_ITEM_HEIGHT = 40;

const WINDOW_WIDTH = Dimensions.get("window").width;

interface DropdownItemProps {
  category: string;
  isLast: boolean;
  isFirst: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  setShowModal,
}): JSX.Element => {
  const bottomRadius = isLast ? 9 : 0;
  const topRadius = isFirst ? 9 : 0;

  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setCategory(category));
        setShowModal(false);
      }}
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
    </TouchableOpacity>
  );
};

export default DropdownItem;
