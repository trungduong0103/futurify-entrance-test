import React from "react";
import { View, Text, Alert } from "react-native";
import styles from "./NavigationStyle";
import HomeIcon from "./assets/home.png";
import ClipboardIcon from "./assets/clipboard.png";
import ProfileIcon from "./assets/profile.png";
import BagIcon from "./assets/bag.png";
import ImageButton from "../header/components/image-button/ImageButton";

const Navigation: React.FunctionComponent = (): JSX.Element => {
  const TABS = [
    {
      label: "Home",
      icon: HomeIcon,
    },
    {
      label: "Orders",
      icon: ClipboardIcon,
    },
    {
      label: "Profile",
      icon: ProfileIcon,
    },
    {
      label: "Checkout",
      icon: BagIcon,
    },
  ];

  const doNothing = () => {
    Alert.alert("You've unlocked a secret feature!", "JK, you win nothing", [
      {
        text: "Take the L",
      },
    ]);
  };

  return (
    <View style={styles.wrapper}>
      {TABS.map(tab => (
        <View style={styles.tabColumn}>
          <ImageButton
            key={tab.label}
            source={tab.icon}
            handlePress={doNothing}
            style={styles.iconImage}
          />
          <Text style={styles.tabLabel}>{tab.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Navigation;
