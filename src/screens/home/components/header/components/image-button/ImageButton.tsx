import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

interface ImageButtonProps {
  source: any;
  handlePress: () => void;
}

const ImageButton: React.FunctionComponent<ImageButtonProps> = ({
  source,
  handlePress,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image style={styles.image} source={source} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginRight: 15,
  },
});

export default ImageButton;
