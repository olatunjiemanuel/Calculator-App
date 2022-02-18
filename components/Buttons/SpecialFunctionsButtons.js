import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SpecialFunctionsButtons = (props) => {
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
    width: 62,
    height: 40,
    borderRadius: 24,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
});

export default SpecialFunctionsButtons;
