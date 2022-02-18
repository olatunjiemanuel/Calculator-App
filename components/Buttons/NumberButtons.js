import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

// import useTheme from "../../src/utils/hooks/useTheme";
// import useThemedStyles from "../../src/utils/hooks/useThemedStyles";

const NumberButtons = (props) => {
  const {
    text,
    innerColor,
    textColor,
    borderColor,
    onPressHandler,
    xtraStyles,
  } = props;

  return (
    <Pressable
      onPress={onPressHandler}
      style={[
        styles.buttoncontainer,
        xtraStyles,
        { backgroundColor: innerColor, borderColor: borderColor },
      ]}
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
    // marginLeft: 12,
    borderRadius: 16,
    borderWidth: 1,
  },
  number: {
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 48,
    // textAlign: "center",
  },
});

export default NumberButtons;
