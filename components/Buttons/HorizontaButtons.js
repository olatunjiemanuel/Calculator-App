import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const HorizontalButtons = (props) => {
  const { text, innerColor, textColor } = props;
  return (
    <TouchableOpacity
      style={[styles.buttoncontainer, { backgroundColor: innerColor }]}
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
  },
  number: {
    width: 20,
    height: 48,
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 48,
    marginTop: 6,
  },
});

export default HorizontalButtons;
