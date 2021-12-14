import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CalculatorDisplay = (props) => {
  const { Calctext, Calctext2 } = props;
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View
        style={{
          width: 183,
          height: 36,
          borderWidth: 5,
          borderColor: "red",
          marginLeft: 125,
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#818181",
            textAlign: "right",
            fontSize: 24,
          }}
        >
          {Calctext}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 5,
          borderColor: "red",
          marginLeft: 125,
          width: 183,
          height: 72,
        }}
      >
        <Text
          style={{
            color: "#818181",
            textAlign: "right",
            fontSize: 48,
          }}
        >
          {Calctext2}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CalculatorDisplay;
