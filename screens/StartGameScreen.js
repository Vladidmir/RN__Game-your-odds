import {
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";

import Card from "../components/Card.js";
import PrimaryButton from "../components/PrimaryButton.js";
import Title from "../components/Title.js";
import InstructionText from "../components/instructionText.js";

import Colors from "../utils/colors.js";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredValue] = useState("");
  const { height } = useWindowDimensions();
  const numberInputHandler = (nember) => {
    setEnteredValue(nember);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber);
    if (isNaN(choseNumber) || choseNumber <= 0) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okey", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(choseNumber);
  };

  const marginTopSwitcher = height < 400 ? 30 : 100;

  return (
    <ScrollView style={s.screen}>
      <KeyboardAvoidingView behavior="position" style={s.screen}>
        <View style={[s.rootContainer, { marginTop: marginTopSwitcher }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              onChangeText={numberInputHandler}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={2}
              style={s.numberInput}
              value={enteredNumber}
            />
            <View style={s.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default StartGameScreen;
