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

  const AcButton = () => {
    setrender("Ac" + render);
    console.log("Ac" + render);
  };

  const DelButton = () => {
    setrender("");
    setrender2("");
  };

  const SlashButton = () => {
    setrender2("=" + "Ac" + render2);
    console.log("Ac" + render2);
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
                  text="e"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <SpecialFunctionsButtons
                  text="u"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <SpecialFunctionsButtons
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
                  text="Ac"
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
                  onPressHandler={SlashButton}
                  text="/"
                  innerColor="#005DB2"
                  textColor="#339DFF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 22 }}>
              <View>
                <NumberButtons
                  text="7"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  text="8"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  text="9"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <View>
                <NumberButtons
                  text="4"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  text="5"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  text="6"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <View>
                <NumberButtons
                  text="1"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  text="2"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
                  text="3"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <>
                <HorizontalButtons
                  text="0"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
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
                text="deg"
                innerColor="#303136"
                textColor="#29A8FF"
              />
            </View>
            <View style={{ marginTop: 18 }}>
              <NumberButtons
                text="*"
                innerColor="#005DB2"
                textColor="#339DFF"
              />
            </View>
            <View style={{ marginTop: 22 }}>
              <NumberButtons
                text="-"
                innerColor="#005DB2"
                textColor="#339DFF"
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <VerticalButtons
                text="-"
                innerColor="#005DB2"
                textColor="#339DFF"
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <VerticalButtons
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
