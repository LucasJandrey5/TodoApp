import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";
import Icon_Add from "../../../assets/icons/add";
import { colors } from "../../data/Colors";
import Icon_Search from "../../../assets/icons/search";

const HomeSearchTaskInputComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputBox}>
        <Icon_Search width={30} height={30} fill={colors.lightGray} />
        <TextInput
          style={styles.textInput}
          placeholder="Search your task here..."
          placeholderTextColor={colors.lightGray}
        ></TextInput>
      </View>
    </View>
  );
};

export default HomeSearchTaskInputComponent;
