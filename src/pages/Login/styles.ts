import { StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.bg,
  },
  contentBox: {
    flex: 1,
    width: "90%",
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
    marginTop: 20,
  },
  inputBox: {
    width: "100%",
    marginTop: 15,
  },
  textLabel: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
  },
  textInput: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.darkGray,
    borderColor: colors.gray,
    borderWidth: 1,
    color: colors.white,
    fontSize: 16,
  },
  button: {
    marginVertical: 20,
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  bottomBox: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  bottomTextButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  bottomText: {
    color: colors.lightGray,
  },
  bold: {
    color: colors.white,
    fontWeight: "bold",
  },
});
