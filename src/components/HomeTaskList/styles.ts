import { StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  completedTextBox: {
    alignItems: "center",
    marginVertical: 25,
  },
  completedText: {
    fontSize: 18,
    color: colors.lightGray,
  },
});
