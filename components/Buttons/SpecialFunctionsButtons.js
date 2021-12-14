import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SpecialFunctionsButtons = (props) => {
  const { text, innerColor, textColor, onPressHandler } = props;
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[styles.buttoncontainer, { backgroundColor: innerColor }]}
    >
      <Text style={[styles.number, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    width: 62,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  number: {
    width: 33.53,
    height: 48,
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 48,
    marginTop: 6,
    textAlign: "center",
  },
});

export default SpecialFunctionsButtons;
