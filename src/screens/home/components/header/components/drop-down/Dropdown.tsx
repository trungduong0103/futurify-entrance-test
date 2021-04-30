import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Easing,
  Modal,
  Dimensions,
} from "react-native";
import { FOOD_CATEGORIES } from "../../../../../../mock-data/MockFoodList";
import { useAppSelector } from "../../../../../../redux/hooks";
import ChevronDown from "../../assets/chevron_down.png";
import DropdownItem, { LIST_ITEM_HEIGHT } from "./drop-down-item/DropdownItem";
import styles from "./DropdownStyle";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const Dropdown: React.FunctionComponent = (): JSX.Element => {
  let animationHeight: Animated.Value = new Animated.Value(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(showModal);
  

  const category = useAppSelector(state => state.foodCategory);

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
    <View>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={[styles.dropdownPickerWrapper, styles.centered]}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <Image source={ChevronDown} style={styles.dropdownIcon} />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent visible={showModal}>
        <View style={{ position: "absolute", top: WINDOW_HEIGHT * 0.1 }}>
          {FOOD_CATEGORIES.map(category => (
            <DropdownItem
              key={category}
              category={category}
              isLast={category === FOOD_CATEGORIES[FOOD_CATEGORIES.length - 1]}
              isFirst={category === FOOD_CATEGORIES[0]}
              setShowModal={setShowModal}
            />
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;
