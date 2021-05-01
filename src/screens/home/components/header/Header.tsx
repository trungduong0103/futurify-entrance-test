import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Dropdown from "./components/drop-down/Dropdown";
import SearchIcon from "../header/assets/search_icon.png";
import ImageButton from "./components/image-button/ImageButton";
import GridIcon from "../header/assets/grid_icon.png";
import ListIcon from "../header/assets/list_icon.png";
import { TextInput } from "react-native-gesture-handler";

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
    position: "relative",
    flexDirection: "row",
  },
  childrenWrapper: {
    flex: 2,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    borderRadius: 8,
    padding: 10,
    height: 40,
    borderWidth: 1,
    margin: 12,
  },
  actionButtonsWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Header;
