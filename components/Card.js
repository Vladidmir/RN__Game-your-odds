import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
const Card = ({ children }) => {
  return <View style={s.card}>{children}</View>;
};

const s = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
});

export default Card;
