import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

//components imoports
import NumberButtons from "./components/Buttons/NumberButtons";
import SpecialFunctionsButtons from "./components/Buttons/SpecialFunctionsButtons";
import HorizontalButtons from "./components/Buttons/HorizontaButtons";
import VerticalButtons from "./components/Buttons/VerticalButtons";
import CalculatorDisplay from "./components/CalculatorDisplay";

export default function App() {
  const [render, setrender] = useState("");
  const [render2, setrender2] = useState("");
  const [value1, setvalue1] = useState();
  const [value2, setvalue2] = useState();
  const [operator, setoperator] = useState();
  const [ACtext, setACttext] = useState("Ac");

  const AcButton = () => {
    setACttext("Ac");
    setrender("");
    setrender2("");
  };
  const DelButton = () => {
    setrender("");
    setrender2("");
    setvalue1("");
    setvalue2("");
  };
  const EButton = () => {
    setrender(render + "e");
  };
  const UButton = () => {
    setrender(render + "u");
  };
  const SinButton = () => {
    setrender(render + "Sin");
  };
  const Button7 = () => {
    setACttext("C");
    setrender(render + 7);
    setvalue1(value1 + "7");
  };
  const Button8 = () => {
    setACttext("C");
    setrender(render + 8);
    setvalue1(value1 + "8");
  };
  const Button9 = () => {
    setACttext("C");
    setrender(render + 9);
    setvalue1(value1 + "9");
  };
  const Button4 = () => {
    setACttext("C");
    setrender(render + 4);
    setvalue1(value1 + "4");
  };
  const Button5 = () => {
    setACttext("C");
    setrender(render + 5);
    setvalue1(value1 + "5");
  };
  const Button6 = () => {
    setACttext("C");
    setrender(render + 6);
    setvalue1(value1 + "6");
  };
  const Button1 = () => {
    setACttext("C");
    setrender(render + 1);
    setvalue1(value1 + "1");
  };
  const Button2 = () => {
    setACttext("C");
    setrender(render + 2);
    setvalue1(value1 + "2");
  };
  const Button3 = () => {
    setACttext("C");
    setrender(render + 3);
    setvalue1(value1 + "3");
  };
  const Button0 = () => {
    setACttext("C");
    setrender(render + 0);
    setvalue1(value1 + "0");
  };
  const PeriodButton = () => {
    setACttext("C");
    setrender(render + ".");
  };

  const DegreeButton = () => {
    setrender(render + "deg");
  };
  const MultiplyButton = () => {
    setoperator("*");
    setrender(render + "*");
    setvalue2(value1);
    setvalue1("");
  };
  const SubtractButton = () => {
    setoperator("-");
    setrender(render + "-");
    setvalue2(value1);
    setvalue1("");
  };
  const AddButton = () => {
    setoperator("+");
    setrender(render + "+");
    setvalue2(value1);
    setvalue1("");
  };
  const DivideButton = () => {
    setoperator("/");
    setrender(render + "/");
    setvalue2(value1);
    setvalue1("");
  };
  const EqualsButton = () => {
    // let value1 = render.slice(0, 1);
    // let operator = render.slice(1, 2);
    // let value2 = render.slice(2, 3);
    console.log(value1);
    console.log(value2);
    if (operator == "+") {
      let answer = parseFloat(value1) + parseFloat(value2);
      setrender2(render2 + "=" + answer);
    } else if (operator == "-") {
      let answer = parseFloat(value2) - parseFloat(value1);
      setrender2(render2 + "=" + answer);
    } else if (operator == "*") {
      let answer = parseFloat(value1) * parseFloat(value2);
      setrender2(render2 + "=" + answer);
    } else if (operator == "/") {
      let answer = parseFloat(value2) / parseFloat(value1);
      setrender2(render2 + "=" + answer);
    } else {
      null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <View>
          <View
            style={{
              marginTop: 180,
              width: 183,
              height: 36,
              borderWidth: 5,
              justifyContent: "flex-end",
            }}
          >
            <CalculatorDisplay Calctext={render} Calctext2={render2} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 78 }}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <SpecialFunctionsButtons
                  onPressHandler={EButton}
                  text="e"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <SpecialFunctionsButtons
                  onPressHandler={UButton}
                  text="u"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <SpecialFunctionsButtons
                  onPressHandler={SinButton}
                  text="sin"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <View>
                <NumberButtons
                  onPressHandler={AcButton}
                  text={ACtext}
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
          <View style={{ marginLeft: 20 }}>
            <View>
              <SpecialFunctionsButtons
                onPressHandler={DegreeButton}
                text="deg"
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 34,
    flexDirection: "column",
    backgroundColor: "black",
  },
});
