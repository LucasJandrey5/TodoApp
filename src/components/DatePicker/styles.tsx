import { StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    padding: 10,
  },
  buttonsBox: {
    width: "90%",
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonCancel: {
    padding: 10,
  },
  buttonCancelText: {
    color: colors.primaryColor,
  },
  buttonSubmit: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
  },
  buttonSubmitText: {
    fontSize: 16,
    color: colors.white,
  },
});
