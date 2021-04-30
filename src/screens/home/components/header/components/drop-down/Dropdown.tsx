import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Easing,
} from "react-native";
import { FOOD_CATEGORIES } from "../../../../../../mock-data/MockFoodList";
import ChevronDown from "../../assets/chevron_down.png";
import DropdownItem, { LIST_ITEM_HEIGHT } from "./drop-down-item/DropdownItem";
import styles from "./DropdownStyle";

const Dropdown: React.FunctionComponent = (): JSX.Element => {
  let animationHeight: Animated.Value = new Animated.Value(0);

  const easeOut = () => {
    const animatedValue = Number.parseInt(JSON.stringify(animationHeight), 10);
    Animated.timing(animationHeight, {
      toValue:
        animatedValue === 0 ? LIST_ITEM_HEIGHT * FOOD_CATEGORIES.length : 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const boxStyle = {
    height: animationHeight,
  };

  return (
    <View style={styles.dropdownWrapper}>
      <TouchableWithoutFeedback onPress={() => easeOut()}>
        <View style={styles.dropdownPickerWrapper}>
          <View style={[styles.categoryPickerWrapper, styles.centered]}>
            <Text style={styles.categoryTitle}>Category</Text>
            <Image source={ChevronDown} style={styles.dropdownIcon} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.dropdownListWrapper, boxStyle]}>
        {FOOD_CATEGORIES.map(category => (
          <DropdownItem
            key={category}
            category={category}
            isLast={category === FOOD_CATEGORIES[FOOD_CATEGORIES.length - 1]}
            isFirst={category === FOOD_CATEGORIES[0]}
          />
        ))}
      </Animated.View>
    </View>
  );
};

export default Dropdown;
