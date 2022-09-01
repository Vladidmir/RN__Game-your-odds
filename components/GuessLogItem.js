import { Text, View, StyleSheet } from "react-native";
import Colors from "../utils/colors";
const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={s.listItem}>
      <Text style={s.itemText}>#{roundNumber}</Text>
      <Text>Opponent's Guelss: {guess}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});

export default GuessLogItem;
