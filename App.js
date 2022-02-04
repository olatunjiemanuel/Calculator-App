import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Switch,
  Vibration,
} from "react-native";

//components imoports
import NumberButtons from "./components/Buttons/NumberButtons";
import SpecialFunctionsButtons from "./components/Buttons/SpecialFunctionsButtons";
import HorizontalButtons from "./components/Buttons/HorizontaButtons";
import VerticalButtons from "./components/Buttons/VerticalButtons";
import CalculatorDisplay from "./components/CalculatorDisplay";

// color imports
import Colors from "./assets/Colors/Colors";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [render, setrender] = useState("");
  const [render2, setrender2] = useState("");
  const [value1, setvalue1] = useState(null);
  const [value2, setvalue2] = useState();
  const [darkMode, setDarkMode] = useState(false);

  const toggleSwitch = () => {
    setDarkMode((previousState) => !previousState);
  };

  const AcButton = () => {
    setvalue1("");
    setrender("");
    setrender2("");
  };
  const DelButton = () => {
    setrender("");
    setrender2("");
    setvalue1("");
    setvalue2("");
  };
  const CosButton = () => {
    Vibration.vibrate();
    setrender2("=" + Math.cos(render));
  };
  const TanButton = () => {
    setrender2("=" + Math.tan(render));
  };
  const SinButton = () => {
    setrender2("=" + Math.sin(render));
  };
  const Button7 = () => {
    setrender(render + 7);
  };
  const Button8 = () => {
    setrender(render + 8);
  };
  const Button9 = () => {
    setrender(render + 9);
  };
  const Button4 = () => {
    setrender(render + 4);
  };
  const Button5 = () => {
    setrender(render + 5);
  };
  const Button6 = () => {
    setrender(render + 6);
  };
  const Button1 = () => {
    setrender(render + 1);
  };
  const Button2 = () => {
    setrender(render + 2);
  };
  const Button3 = () => {
    setrender(render + 3);
  };
  const Button0 = () => {
    setrender(render + 0);
  };
  const PeriodButton = () => {
    setrender(render + ".");
  };

  const sqrtButton = () => {
    setrender2("=" + Math.sqrt(render));
  };
  const MultiplyButton = () => {
    setrender(render + "*");
    setvalue2(value1);
    setvalue1("");
  };
  const SubtractButton = () => {
    setrender(render + "-");
    setvalue2(value1);
    setvalue1("");
  };
  const AddButton = () => {
    setrender(render + "+");
    setvalue2(value1);
    setvalue1("");
  };
  const DivideButton = () => {
    setrender(render + "/");
    setvalue2(value1);
    setvalue1("");
  };
  const EqualsButton = () => {
    setrender("");
    setrender2("=" + eval(render));
  };

  return (
    <View
      style={[
        styles.calculatorContainer,
        {
          backgroundColor: darkMode
            ? Colors.general.white
            : Colors.general.black,
        },
      ]}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: darkMode
              ? Colors.general.white
              : Colors.general.black,
          },
        ]}
      >
        <View style={styles.switchContainer}>
          <StatusBar style={darkMode ? "dark" : "light"} />
          <Switch
            trackColor={{ false: "#767577", true: "#29A8FF" }}
            thumbColor={darkMode ? "#fff" : "#fff"}
            ios_backgroundColor="#3e3e3e"
            onChange={toggleSwitch}
            value={darkMode}
          />
        </View>
        <View style={{ paddingTop: 120 }}>
          <CalculatorDisplay Calctext={render} Calctext2={render2} />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 78,
          }}
        >
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <SpecialFunctionsButtons
                  onPressHandler={CosButton}
                  text="Cos"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <SpecialFunctionsButtons
                  onPressHandler={TanButton}
                  text="Tan"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <SpecialFunctionsButtons
                  onPressHandler={SinButton}
                  text="Sin"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <View>
                <NumberButtons
                  onPressHandler={AcButton}
                  text={render !== "" ? "C" : "Ac"}
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={DelButton}
                  text="del"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={DivideButton}
                  text="/"
                  innerColor="#005DB2"
                  textColor="#339DFF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 22 }}>
              <View>
                <NumberButtons
                  onPressHandler={Button7}
                  text="7"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={Button8}
                  text="8"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={Button9}
                  text="9"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <View>
                <NumberButtons
                  onPressHandler={Button4}
                  text="4"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={Button5}
                  text="5"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={Button6}
                  text="6"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <View>
                <NumberButtons
                  onPressHandler={Button1}
                  text="1"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={Button2}
                  text="2"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={Button3}
                  text="3"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <>
                <HorizontalButtons
                  onPressHandler={Button0}
                  text="0"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  onPressHandler={PeriodButton}
                  text="."
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-end",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: Platform.OS == "ios" ? 10 : null,
              width: "20%",
            }}
          >
            <View>
              <SpecialFunctionsButtons
                onPressHandler={sqrtButton}
                text="Sqrt"
                innerColor="#303136"
                textColor="#29A8FF"
              />
            </View>
            <View style={{ marginTop: 18 }}>
              <NumberButtons
                onPressHandler={MultiplyButton}
                text="*"
                innerColor="#005DB2"
                textColor="#339DFF"
              />
            </View>
            <View style={{ marginTop: 22 }}>
              <NumberButtons
                onPressHandler={SubtractButton}
                text="-"
                innerColor="#005DB2"
                textColor="#339DFF"
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <VerticalButtons
                onPressHandler={AddButton}
                text="+"
                innerColor="#005DB2"
                textColor="#339DFF"
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <VerticalButtons
                onPressHandler={EqualsButton}
                text="="
                innerColor="#1991FF"
                textColor="#B2DAFF"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    // backgroundColor: toggleSwitch
    //   ? Colors.lightTheme.white
    //   : Colors.lightTheme.black,
    paddingTop: Platform.OS == "ios" ? 40 : 0.1 * height,
  },
  container: {
    paddingHorizontal: Platform.OS == "ios" ? 40 : 0.1 * width,
    flexDirection: "column",
    // backgroundColor: toggleSwitch
    //   ? Colors.lightTheme.white
    //   : Colors.lightTheme.black,
  },
  switchContainer: {
    paddingLeft: 250,
  },
});
