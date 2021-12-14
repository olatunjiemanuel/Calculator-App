import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

//components imoports
import NumberButtons from "./components/Buttons/NumberButtons";
import SpecialFunctionsButtons from "./components/Buttons/SpecialFunctionsButtons";
import HorizontalButtons from "./components/Buttons/HorizontaButtons";
import VerticalButtons from "./components/Buttons/VerticalButtons";

export default function App() {
  const AcButton = () => {
    console.log("Ac");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <View>
          <View>
            <TextInput
              style={{
                borderWidth: 5,
                borderColor: "red",
                marginTop: 108,
                width: 183,
                height: 36,
                marginLeft: 125,
              }}
            />
          </View>
          <View>
            <TextInput
              style={{
                borderWidth: 5,
                borderColor: "red",
                width: 186,
                height: 72,
                marginLeft: 125,
              }}
            />
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
                  text="del"
                  innerColor="#303136"
                  textColor="#29A8FF"
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <NumberButtons
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
