import { StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    height: 70,
    borderRadius: 5,
    backgroundColor: colors.darkGray,
  },
  checkboxContainer: {
    justifyContent: "center",
    borderRightColor: colors.gray,
    borderRightWidth: 1,
  },
  checkbox: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textsBox: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "space-evenly",
  },
  titleText: {
    fontSize: 16,
    color: colors.white,
  },
  timeText: {
    fontSize: 14,
    color: colors.lightGray,
  },
  bottomLineBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 7,
  },
});
