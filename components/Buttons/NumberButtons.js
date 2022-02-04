import React from "react";
import { StyleSheet, Text, TouchableOpacity, Pressable } from "react-native";

const NumberButtons = (props) => {
  const { text, innerColor, textColor, onPressHandler } = props;
  return (
    <Pressable
      onPress={onPressHandler}
      style={[styles.buttoncontainer, { backgroundColor: innerColor }]}
    >
      <Text style={[styles.number, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    width: 62,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 16,
  },
  number: {
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 48,
    textAlign: "center",
  },
});

export default NumberButtons;
