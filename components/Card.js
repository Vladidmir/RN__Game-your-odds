import { View, StyleSheet } from "react-native";
import Colors from "../utils/colors";
import { deviceWidth } from "../utils/demensions";
const Card = ({ children }) => {
  return <View style={s.card}>{children}</View>;
};

const s = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
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
