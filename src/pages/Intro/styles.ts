import { StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
  },
  textBox: {
    flex: 1,

    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.white,
    textAlign: "center",
    marginTop: 10,
  },
  buttonBox: {
    flex: 1,
  },
  signinButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
    padding: 20,
    marginBottom: 20,
  },
  signinButtonText: {
    fontSize: 16,
    color: colors.white,
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
  registerButtonText: {
    fontSize: 16,
    color: colors.primaryColor,
  },
});
