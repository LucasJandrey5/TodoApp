import { StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    eight: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputBox: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    maxHeight: 60,
    paddingHorizontal: 20,
    width: "100%",
    marginHorizontal: 20,
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    color: colors.white,
    fontSize: 16,
    paddingHorizontal: 7,
  },
});
