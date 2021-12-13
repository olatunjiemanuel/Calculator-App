import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//components imoports
import NumberButtons from "./components/Buttons/NumberButtons";
import SpecialFunctionsButtons from "./components/Buttons/SpecialFunctionsButtons";

export default function App() {
  return (
    <View style={styles.container}>
      <NumberButtons />
      <SpecialFunctionsButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 34,
    flexDirection: "row",
    backgroundColor: "#17181A",
  },
});
