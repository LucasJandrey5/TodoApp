import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./styles";
import Icon_Calendar from "../../../assets/icons/calendar";
import { category } from "../../types/category";
import { taskManagerProps } from "../CreateTaskManager/CreateTaskManager";

const CategoryButtonBoxComponent = (props: {
  item: category;
  taskManager: taskManagerProps;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.taskManager.setCategory(props.item.id);
        props.taskManager.setCategoryOpen(false);
      }}
    >
      <View style={{ ...styles.IconBox, backgroundColor: props.item.colorHEX }}>
        <Icon_Calendar
          width={42}
          height={42}
          fill={props.item.secondaryColorHEX}
        />
      </View>

      <Text numberOfLines={1} style={styles.text}>
        {props.item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButtonBoxComponent;
