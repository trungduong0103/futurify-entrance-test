import React, {useState} from 'react';
import {Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import ChevronDown from '../../assets/chevron_down.png';
import styles from './DropdownStyle';

const Dropdown: React.FunctionComponent = ():JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
   <View>
      <TouchableWithoutFeedback>
      <View style={styles.dropdownPickerWrapper}>
        <View style={styles.emptyWrapper} />
        <View style={[styles.categoryPickerWrapper, styles.centered]}>
          <Text style={styles.categoryTitle}>Category</Text>
          <Image source={ChevronDown} style={styles.dropdownIcon} />
        </View>
        <View style={styles.searchWrapper} />
      </View>
    </TouchableWithoutFeedback>
    <View>
      
    </View>
   </View>
  );
};

export default Dropdown;
