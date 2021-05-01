import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Modal,
} from "react-native";
import { FOOD_CATEGORIES } from "../../../../../../mock-data/MockFoodList";
import { useAppSelector } from "../../../../../../redux/hooks";
import ChevronDown from "../../assets/chevron_down.png";
import DropdownItem from "./drop-down-item/DropdownItem";
import styles from "./DropdownStyle";

const Dropdown: React.FunctionComponent = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const category = useAppSelector(state => state.foodCategory);

  return (
    <View style={styles.dropDownWrapper}>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={[styles.dropdownPickerWrapper, styles.centered]}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <Image source={ChevronDown} style={styles.dropdownIcon} />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent visible={showModal}>
        <View style={styles.modalWrapper}>
          {FOOD_CATEGORIES.map(fc => (
            <DropdownItem
              key={fc}
              category={fc}
              isLast={fc === FOOD_CATEGORIES[FOOD_CATEGORIES.length - 1]}
              isFirst={fc === FOOD_CATEGORIES[0]}
              setShowModal={setShowModal}
            />
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;
