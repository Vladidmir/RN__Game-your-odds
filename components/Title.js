import { Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={s.title}>{children}</Text>;
};

const s = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 18,
    color: "white",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    minWidth: 300,
  },
});
export default Title;
