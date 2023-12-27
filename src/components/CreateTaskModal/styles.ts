import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../data/Colors";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: Dimensions.get("window").width,
    marginLeft: 0,
    marginBottom: 0,
    justifyContent: "flex-end",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.darkGray,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  topBar: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitleText: {
    color: colors.white,
    fontSize: 18,
  },
  closeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  closeText: {
    color: colors.linkText,
    textDecorationLine: "underline",
  },
  textInputBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textInput: {
    color: colors.white,
    fontSize: 16,
    width: "90%",
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  bottomButtons: {
    width: "90%",
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomLeftButtons: {
    flexDirection: "row",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});
