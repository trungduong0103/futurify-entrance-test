import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View, SafeAreaView, Dimensions } from "react-native";
import Dropdown from "./components/drop-down/Dropdown";
import SearchIcon from "../header/assets/search_icon.png";
import ImageButton from "./components/image-button/ImageButton";
import GridIcon from "../header/assets/grid_icon.png";
import ListIcon from "../header/assets/list_icon.png";
import { TextInput } from "react-native-gesture-handler";

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
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={() => setSearch(false)}
            autoFocus
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
  childrenWrapper: {
    flex: 2,
    // height: "100%",
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
    height: 35,
    marginLeft: 10,
    marginRight: 10,
  },
  actionButtonsWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: WINDOW_HEIGHT * 0.03,
  },
});

export default Header;
