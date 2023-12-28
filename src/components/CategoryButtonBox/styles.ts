import { StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  IconBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 7,
  },
  text: {
    marginVertical: 10,
    color: colors.white,
  },
});
