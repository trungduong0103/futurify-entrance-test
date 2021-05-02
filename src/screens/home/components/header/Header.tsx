import React, { Dispatch, SetStateAction } from "react";
import { View, SafeAreaView, TextInput, Image } from "react-native";
import Dropdown from "./components/drop-down/Dropdown";
import SearchIcon from "../header/assets/search_icon.png";
import ImageButton from "./components/image-button/ImageButton";
import GridIcon from "../header/assets/grid_icon.png";
import ListIcon from "../header/assets/list_icon.png";
import BlackSearchIcon from "../header/assets/search_icon_black.png";
import ClearIcon from "../header/assets/clear_icon.png";
import styles from "./HeaderStyle";

interface HeaderProps {
  gridView: boolean;
  setGridView: Dispatch<SetStateAction<boolean>>;
  search: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  gridView,
  setGridView,
  search,
  setSearch,
  input,
  setInput,
}): JSX.Element => {
  return (
    <View style={styles.headerWrapper}>
      {search ? (
        <SafeAreaView style={styles.inputWrapper}>
          <Image source={BlackSearchIcon} style={styles.blackSearchIcon} />
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={() => setSearch(false)}
            autoFocus
            placeholder="Enter food category, name, etc..."
            placeholderTextColor="#000"
          />
          <ImageButton
            source={ClearIcon}
            style={styles.clearIcon}
            handlePress={() => {
              if (input === "") {
                setSearch(false);
              } else {
                setInput("");
              }
            }}
          />
        </SafeAreaView>
      ) : (
        <>
          <View style={styles.childrenWrapper} />
          <Dropdown />
          <View style={[styles.childrenWrapper, styles.actionButtonsWrapper]}>
            <ImageButton
              source={SearchIcon}
              handlePress={() => setSearch(true)}
            />
            <ImageButton
              source={gridView ? ListIcon : GridIcon}
              handlePress={() => setGridView(prevView => !prevView)}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Header;
