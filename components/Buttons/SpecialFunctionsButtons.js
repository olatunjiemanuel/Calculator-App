import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SpecialFunctionsButtons = () => {
  return (
    <TouchableOpacity style={styles.buttoncontainer}>
      <Text style={styles.number}>deg</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    backgroundColor: "#303136",
    width: 62,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  number: {
    color: "#29A8FF",
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
