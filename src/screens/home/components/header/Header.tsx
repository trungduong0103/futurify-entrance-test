import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Dropdown from "./components/drop-down/Dropdown";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
});

const Header: React.FunctionComponent = (): JSX.Element => {
  const [search, setSearch] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Dropdown />
    </View>
  );
};

export default Header;
