import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const HorizontalButtons = (props) => {
  const { text, innerColor, textColor, borderColor, onPressHandler } = props;
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        styles.buttoncontainer,
        { backgroundColor: innerColor, borderColor: borderColor },
      ]}
    >
      <Text style={[styles.number, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    width: 144,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1,
  },
  number: {
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 48,
  },
});

export default HorizontalButtons;
