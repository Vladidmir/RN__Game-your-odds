import React from "react";
import {
  View,
  Alert,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/Title.js";
import InstructionText from "../components/instructionText.js";
import NumberContainer from "../components/NumberContainer.js";
import PrimaryButton from "../components/PrimaryButton.js";
import Card from "../components/Card.js";
import GuessLogItem from "../components/GuessLogItem.js";

import { generateRandomBetween } from "../utils/generateRandomBetween.js";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);
  const [guessRounds, setGuessRounds] = React.useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  React.useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler(guessRounds.length);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont't lie", "You know that this wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [...prevGuessRounds, newRndNumber]);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={s.extraTextStyle}>
          Higer or lower?
        </InstructionText>
        <View style={s.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} />
          </PrimaryButton>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={[s.buttonContainer, { alignItems: "center" }]}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} />
          </PrimaryButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} />
          </PrimaryButton>
        </View>
      </>
    );
  }

  return (
    <View style={s.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={s.listContainer}>
        <FlatList
          keyExtractor={(item) => item}
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRounds.length - index}
              guess={item}
            />
          )}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 10,
    alignItems: "center",
  },
  extraTextStyle: {
    marginBottom: 6,
  },

  buttonContainer: {
    flexDirection: "row",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
