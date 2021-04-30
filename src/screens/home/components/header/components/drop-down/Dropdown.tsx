import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { FOOD_CATEGORIES } from "../../../../../../mock-data/MockFoodList";
import ChevronDown from "../../assets/chevron_down.png";
import styles from "./DropdownStyle";

const Dropdown: React.FunctionComponent = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.dropdownPickerWrapper}>
          <View style={[styles.categoryPickerWrapper, styles.centered]}>
            <Text style={styles.categoryTitle}>Category</Text>
            <Image source={ChevronDown} style={styles.dropdownIcon} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.dropdownListWrapper}>
        {FOOD_CATEGORIES.map(category => {})}
      </View>
    </>
  );
};

export default Dropdown;
