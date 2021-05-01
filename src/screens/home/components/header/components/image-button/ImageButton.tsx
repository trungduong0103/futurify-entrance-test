import React from "react";
import { TouchableOpacity, Image, StyleSheet, ImageStyle } from "react-native";

interface ImageButtonProps {
  source: any;
  handlePress: () => void;
  style?: ImageStyle;
}

const ImageButton: React.FunctionComponent<ImageButtonProps> = ({
  source,
  handlePress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image style={[styles.image, style]} source={source} />
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
