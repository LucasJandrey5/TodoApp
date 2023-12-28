import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { styles } from "./styles";
import Modal from "react-native-modal";
import { CategoryContext } from "../../Context/categoryContext";
import CategoryButtonBoxComponent from "../CategoryButtonBox/CategoryButtonBoxComponent";
import { taskManagerProps } from "../CreateTaskManager/CreateTaskManager";

const ChooseCategoryModalComponent = (props: {
  taskManager: taskManagerProps;
}) => {
  const categories = useContext(CategoryContext);

  return (
    <Modal style={styles.modal} isVisible={props.taskManager.categoryOpen}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Choose Category</Text>
        <View style={styles.lineBreak} />
        <View style={styles.categoriesBox}>
          {categories?.categories.map((item, id) => (
            <CategoryButtonBoxComponent
              key={id}
              item={item}
              taskManager={props.taskManager}
            />
          ))}
        </View>

        <View style={styles.buttonsBox}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => props.taskManager.setDatePickerOpen(false)}
          >
            <Text style={styles.buttonCancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseCategoryModalComponent;
