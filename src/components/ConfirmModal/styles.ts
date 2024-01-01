import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: Dimensions.get("window").width,
    marginLeft: 0,
    marginBottom: 0,

    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.darkGray,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderRadius: 15,
  },
  titleText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: colors.lightGray,
    marginVertical: 20,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
  buttonsBox: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    marginTop: 30,
  },
  cancelButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cancelText: {
    fontSize: 18,
    color: colors.primaryColor,
  },
  confirmButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: colors.primaryColor,
  },
  confirmText: {
    fontSize: 18,
    color: colors.white,
  },
});
