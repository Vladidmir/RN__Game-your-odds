import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
const InstructionText = ({ children, style }) => {
  return <Text style={[s.instructionText, style]}>{children}</Text>;
};

const s = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
export default InstructionText;
