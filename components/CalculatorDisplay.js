import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const CalculatorDisplay = (props) => {
  const { Calctext, Calctext2, Calctext2Color } = props;
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View
        style={{
          height: 70,
          justifyContent: "flex-end",
        }}
      >
        <Text
          numberOfLines={2}
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
          // borderWidth: 1,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            color: Calctext2Color,
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
