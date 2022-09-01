import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../utils/colors.js";
const PrimaryButton = ({ children, onPress }) => {
  const pressHandle = () => {
    onPress();
  };
  return (
    <View style={s.buttonOutContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [s.buttonInnerContainer, s.pressed] : s.buttonInnerContainer
        }
        onPress={pressHandle}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={s.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  buttonOutContainer: {
    flex: 1,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
