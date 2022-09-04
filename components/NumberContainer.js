import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
import { deviceWidth } from "../utils/demensions";
const NumberContainer = ({ children }) => {
  return (
    <View style={s.container}>
      <Text style={s.numberText}>{children}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 20 : 30,
    borderRadious: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
export default NumberContainer;
