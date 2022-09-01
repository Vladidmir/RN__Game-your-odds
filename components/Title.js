import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={s.title}>{children}</Text>;
};

const s = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 18,
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
export default Title;
