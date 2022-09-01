import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

import Colors from "../utils/colors";

const GameOverScreen = ({ roundsNumber, userNumber, gameOverHandler }) => {
  return (
    <View style={s.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={s.imageContainerStyle}>
        <Image style={s.image} source={require("../assets/success.png")} />
      </View>

      <Text style={s.summaryText}>
        {" "}
        Your phone needed <Text style={s.hightLight}>{roundsNumber} </Text>
        rounds to guess the nymber{" "}
        <Text style={s.hightLight}>{userNumber}</Text> .
      </Text>
      <View style={s.buttonContainer}>
        <PrimaryButton onPress={gameOverHandler}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerStyle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 20,
  },
  hightLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },

  buttonContainer: {
    flexDirection: "row",
    width: 200,
  },
});
export default GameOverScreen;
