import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Switch } from "react-native";

import { AppContainer } from "./src/containers/AppContainer";
import ThemeProvider from "./components/ThemeProvider";
import useTheme from "./src/utils/hooks/useTheme";

export default function App() {
  const theme = useTheme();
  return (
    <ThemeProvider>
      <>
        {/* <StatusBar style={theme.darkMode ? "dark" : "light"} /> */}
        {/* <Switch
          // trackColor={{ false: "#767577", true: "#29A8FF" }}
          // thumbColor={darkMode ? "#fff" : "#fff"}
          // ios_backgroundColor="#3e3e3e"
          // onChange={toggleSwitch}
          // value={darkMode}
          onValueChange={theme.toggleSwitch}
          value={theme.darkMode}
        /> */}
        <AppContainer />
      </>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  // calculatorContainer: {
  //   flex: 1,
  //   // backgroundColor: toggleSwitch
  //   //   ? Colors.lightTheme.white
  //   //   : Colors.lightTheme.black,
  //   paddingTop: Platform.OS == "ios" ? 40 : 0.1 * height,
  // },
  // container: {
  //   paddingHorizontal: Platform.OS == "ios" ? 40 : 0.1 * width,
  //   flexDirection: "column",
  //   // backgroundColor: toggleSwitch
  //   //   ? Colors.lightTheme.white
  //   //   : Colors.lightTheme.black,
  // },
  // switchContainer: {
  //   paddingLeft: 250,
  // },
});
