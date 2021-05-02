import React, { Dispatch, SetStateAction } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import Dropdown from "./components/drop-down/Dropdown";
import SearchIcon from "../header/assets/search_icon.png";
import ImageButton from "./components/image-button/ImageButton";
import GridIcon from "../header/assets/grid_icon.png";
import ListIcon from "../header/assets/list_icon.png";
import BlackSearchIcon from "../header/assets/search_icon_black.png";
import ClearIcon from "../header/assets/clear_icon.png";

const WINDOW_HEIGHT = Dimensions.get("window").height;

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
    <View style={[styles.headerWrapper, search ? null : styles.bottomLine]}>
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

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
  },
  bottomLine: {
    borderBottomWidth: 0.4,
    borderColor: "#7D7D7D",
  },
  blackSearchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginBottom: 10,
  },
  clearIcon: {
    marginBottom: 10,
  },
  childrenWrapper: {
    flex: 2,
    // height: "100%",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    borderRadius: 8,
    padding: 10,
    height: 35,
    width: "80%",
    backgroundColor: "#C7CCD4",
    marginBottom: 10,
  },
  actionButtonsWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: WINDOW_HEIGHT * 0.03,
  },
});

export default Header;
