import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NumberButtons = () => {
  return (
    <TouchableOpacity style={styles.buttoncontainer}>
      <Text style={styles.number}>9</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    backgroundColor: "#303136",
    width: 62,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  number: {
    color: "#29A8FF",
    width: 20,
    height: 48,
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 48,
    marginTop: 6,
  },
});

export default NumberButtons;
