import { StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterBox: {
    padding: 5,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});
