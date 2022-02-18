/* eslint-disable react-native/no-inline-styles */

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Switch,
  Vibration,
  View,
} from "react-native";
import Constants from "expo-constants";
import { Swipeable } from "react-native-gesture-handler";

import HorizontalButtons from "../../components/Buttons/HorizontaButtons";
import NumberButtons from "../../components/Buttons/NumberButtons";
import SpecialFunctionsButtons from "../../components/Buttons/SpecialFunctionsButtons";
import VerticalButtons from "../../components/Buttons/VerticalButtons";
import CalculatorDisplay from "../../components/CalculatorDisplay";
import useTheme from "../utils/hooks/useTheme";
import useThemedStyles from "../utils/hooks/useThemedStyles";

const { width, height } = Dimensions.get("window");

const buttonsGroup1 = [
  ["Cos", "Tan", "Sin"],
  ["Ac", "del", "/"],
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["0", "."],
];

const buttonsGroup2 = ["sqrt", "*", "-", "+", "="];

export const AppContainer = () => {
  const [render, setrender] = useState("");
  const [render2, setrender2] = useState("");
  const [value1, setvalue1] = useState(null);
  const [value2, setvalue2] = useState();

  // TODO: Extract Button Functionality to Single Point of Reference.

  // const AcButton = () => {
  //   setvalue1("");
  //   setrender("");
  //   setrender2("");
  // };
  // const DelButton = () => {
  //   setrender("");
  //   setrender2("");
  //   setvalue1("");
  //   setvalue2("");
  // };
  // const CosButton = () => {
  //   Vibration.vibrate();
  //   setrender2("=" + Math.cos(render));
  // };
  // const TanButton = () => {
  //   setrender2("=" + Math.tan(render));
  // };
  // const SinButton = () => {
  //   setrender2("=" + Math.sin(render));
  // };
  // const Button7 = () => {
  //   setrender(render + 7);
  // };
  // const Button8 = () => {
  //   setrender(render + 8);
  // };
  // const Button9 = () => {
  //   setrender(render + 9);
  // };
  // const Button4 = () => {
  //   setrender(render + 4);
  // };
  // const Button5 = () => {
  //   setrender(render + 5);
  // };
  // const Button6 = () => {
  //   setrender(render + 6);
  // };
  // const Button1 = () => {
  //   setrender(render + 1);
  // };
  // const Button2 = () => {
  //   setrender(render + 2);
  // };
  // const Button3 = () => {
  //   setrender(render + 3);
  // };
  // const Button0 = () => {
  //   setrender(render + 0);
  // };
  // const PeriodButton = () => {
  //   setrender(render + ".");
  // };

  // const sqrtButton = () => {
  //   setrender2("=" + Math.sqrt(render));
  // };
  // const MultiplyButton = () => {
  //   setrender(render + "*");
  //   setvalue2(value1);
  //   setvalue1("");
  // };
  // const SubtractButton = () => {
  //   setrender(render + "-");
  //   setvalue2(value1);
  //   setvalue1("");
  // };
  // const AddButton = () => {
  //   setrender(render + "+");
  //   setvalue2(value1);
  //   setvalue1("");
  // };
  // const DivideButton = () => {
  //   setrender(render + "/");
  //   setvalue2(value1);
  //   setvalue1("");
  // };
  // const EqualsButton = () => {
  //   setrender("");
  //   setrender2("=" + eval(render));
  // };

  const theme = useTheme();
  const styles = useThemedStyles(styled);

  return (
    <View style={styles.calculatorContainer}>
      <StatusBar style={theme.darkMode ? "light" : "dark"} />
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#29A8FF" }}
            thumbColor={
              theme.darkMode ? theme.colors.white : theme.colors.black
            }
            ios_backgroundColor={"#3E3E3E"}
            onChange={theme.toggleSwitch}
            value={theme.darkMode}
          />
        </View>

        <Swipeable
          renderRightActions={() => {
            console.log("swiped");
          }}
        >
          <View style={styles.displayContainer}>
            <CalculatorDisplay
              Calctext={render}
              Calctext2={render2}
              Calctext2Color={
                theme.darkMode ? theme.colors.white : theme.colors.black
              }
            />
          </View>
        </Swipeable>

        <View style={styles.btnContainer}>
          <View style={styles.btnGroup1}>
            {buttonsGroup1.map((row, index) => (
              <View key={index} style={styles.groupRow}>
                {row.map((btn) =>
                  btn === "Sin" || btn === "Cos" || btn === "Tan" ? (
                    <View style={styles.specialBtnContainer}>
                      <SpecialFunctionsButtons
                        key={btn}
                        onPressHandler={() => null}
                        text={btn}
                        innerColor={theme.colors.innerColor}
                        textColor={theme.colors.text}
                        borderColor={theme.colors.border}
                      />
                    </View>
                  ) : btn === "0" ? (
                    <HorizontalButtons
                      key={btn}
                      onPressHandler={() => null}
                      text={btn}
                      innerColor={theme.colors.innerColor}
                      textColor={theme.colors.text}
                      borderColor={theme.colors.border}
                    />
                  ) : (
                    <NumberButtons
                      key={btn}
                      onPressHandler={() => null}
                      text={btn}
                      innerColor={
                        btn === "/"
                          ? theme.colors.altInnerColor
                          : theme.colors.innerColor
                      }
                      textColor={btn === "/" ? "#339DFF" : theme.colors.text}
                      borderColor={theme.colors.border}
                    />
                  )
                )}
              </View>
            ))}
          </View>

          <View style={styles.btnGroup2}>
            {buttonsGroup2.map((btn, index) =>
              btn === "sqrt" ? (
                <View key={index} style={{ marginTop: 2 }}>
                  <SpecialFunctionsButtons
                    onPressHandler={() => null}
                    text={btn}
                    innerColor={theme.colors.innerColor}
                    textColor={theme.colors.text}
                    borderColor={theme.colors.border}
                  />
                </View>
              ) : btn === "+" || btn === "=" ? (
                <View key={index} style={styles.vertical}>
                  <VerticalButtons
                    onPressHandler={() => null}
                    text={btn}
                    innerColor={
                      btn === "=" ? "#1991FF" : theme.colors.altInnerColor
                    }
                    textColor={btn === "=" ? "#B2DAFF" : theme.colors.text}
                    borderColor={theme.colors.border}
                  />
                </View>
              ) : (
                <View key={index} style={{ paddingVertical: 17 }}>
                  <NumberButtons
                    onPressHandler={() => null}
                    text={btn}
                    innerColor={theme.colors.altInnerColor}
                    textColor={"#339DFF"}
                    xtraStyles={{
                      marginTop: btn === "-" ? -18 : 0,
                    }}
                    borderColor={theme.colors.border}
                  />
                </View>
              )
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

//remamed to styled so it can be "hooked"
const styled = (theme) =>
  StyleSheet.create({
    calculatorContainer: {
      flex: 1,
      paddingTop: Platform.OS === "ios" ? 40 : Constants.statusBarHeight, //installed expo-constants for a better padding on android
      backgroundColor: theme.colors.bg,
    },
    container: {
      flex: 1,
      paddingHorizontal: Platform.OS === "ios" ? 40 : 0.1 * width,
    },
    switchContainer: {
      paddingLeft: 0.65 * width,
    },
    displayContainer: {
      paddingTop: Platform.OS === "ios" ? 100 : 0.2 * height,
    },
    btnContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
    },
    btnGroup1: {
      width: "80%",
    },
    groupRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginBottom: 16,
    },
    specialBtnContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 2,
    },
    btnGroup2: {
      width: "20%",
    },
    vertical: {
      flexDirection: "column-reverse",
      flex: 1,
      paddingBottom: 15,
    },
  });
