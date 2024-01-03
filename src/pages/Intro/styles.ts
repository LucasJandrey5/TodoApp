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
    width: "70%",
    alignItems: "center",
  },
  signinButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  signinButtonText: {
    fontSize: 16,
    color: colors.white,
  },
  registerButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    borderRadius: 10,
  },
  registerButtonText: {
    fontSize: 16,
    color: colors.primaryColor,
  },
});
