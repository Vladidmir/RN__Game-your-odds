import React from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen.js";
import GameOverScreen from "./screens/GameOverScreen.js";
import GuessLogItem from "./components/GuessLogItem.js";

import AppLoading from "expo-app-loading";
import Colors from "./utils/colors.js";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = React.useState(null);
  const [gameIsOver, setGameIsOver] = React.useState(true);
  const [guessRounds, setGuessRounds] = React.useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver((gameIsOver) => !gameIsOver);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null), gameOverHandler(), setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        gameOverHandler={startNewGameHandler}
      />
    );
  }
  return (
    <>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={s.rootScreen}
      >
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={s.rootScreen}
          imageStyle={s.backgroundImage}
        >
          <SafeAreaView style={s.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const s = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
