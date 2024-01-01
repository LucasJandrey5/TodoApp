import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./styles";
import Icon_Calendar from "../../../assets/icons/calendar";
import { category } from "../../types/category";
import { categoryProps } from "../ChooseCategory/ChooseCategoryModalComponent";

const CategoryButtonBoxComponent = (props: {
  item: category;
  categoryProps: categoryProps;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.categoryProps.setCategory(props.item.id);
        props.categoryProps.setCategoryOpen(false);
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
