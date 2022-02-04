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
          height: 36,
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
          height: 72,
        }}
      >
        <Text
          style={{
            color: "#fff",
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
