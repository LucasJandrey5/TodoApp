import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: Dimensions.get("window").width,
    marginLeft: 0,
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.darkGray,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 10,
  },
  titleText: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 18,
  },
  lineBreak: {
    width: "80%",
    height: 1,
    backgroundColor: colors.gray,
    marginTop: 20,
    marginBottom: 15,
  },
  categoriesBox: {
    maxWidth: "90%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
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
