import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const NumberButtons = (props) => {
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
    width: 62,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  number: {
    width: 35,
    height: 48,
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 48,
    marginTop: 6,
    textAlign: "center",
  },
});

export default NumberButtons;
