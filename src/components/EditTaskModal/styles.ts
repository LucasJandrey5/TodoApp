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
    alignItems: "center",
    backgroundColor: colors.bg,
    borderRadius: 15,
  },
  topBar: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  topBarText: {
    fontSize: 18,
    color: colors.white,
  },
  topBarButton: {
    padding: 10,
  },
  topBarIcon: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.gray,
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
  atrLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingVertical: 10,
  },
  atrLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  atrText: {
    color: colors.white,
    fontSize: 16,
    marginHorizontal: 10,
  },
  atrButton: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  atrButtonText: {
    color: colors.white,
    marginHorizontal: 10,
  },
  bottomLine: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteButton: {
    paddingVertical: 20,

    flexDirection: "row",
    alignItems: "center",
  },
});
