import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

import Colors from "../utils/colors";
import { deviceWidth } from "../utils/demensions";

const GameOverScreen = ({ roundsNumber, userNumber, gameOverHandler }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 480) {
    imageSize = 150;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={s.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[s.imageContainerStyle, imageStyle]}>
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
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    marginTop: 10,
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
