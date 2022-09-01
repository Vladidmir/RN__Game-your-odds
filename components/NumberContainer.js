import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
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
    padding: 24,
    margin: 24,
    borderRadious: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
export default NumberContainer;
