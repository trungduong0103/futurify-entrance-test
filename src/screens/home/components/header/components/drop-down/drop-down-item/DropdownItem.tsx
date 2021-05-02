import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { setCategory } from "../../../../../../../redux/foodCategorySlice";
import { useAppDispatch } from "../../../../../../../redux/hooks";

export const LIST_ITEM_HEIGHT = 40;

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
    borderColor: "#F4F4F6",
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
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch(setCategory(category));
        setShowModal(false);
      }}>
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
    </TouchableWithoutFeedback>
  );
};

export default DropdownItem;
