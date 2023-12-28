import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { TaskContext } from "../../Context/taskContext";
import { styles } from "./styles";
import { colors } from "../../data/Colors";
import Icon_Clock from "../../../assets/icons/clock";
import Icon_Send from "../../../assets/icons/send";
import Icon_Bookmark from "../../../assets/icons/bookmark";
import { taskManagerProps } from "../CreateTaskManager/CreateTaskManager";

const CreateTaskModal = (props: { taskManager: taskManagerProps }) => {
  const tasks = useContext(TaskContext);

  return (
    <Modal style={styles.modal} isVisible={tasks?.createTaskModalOpened}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.modalTitleText}>Add Task</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => tasks?.openCloseTaskCreate()}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Task title..."
            placeholderTextColor={colors.gray}
            numberOfLines={1}
            value={props.taskManager.title}
            onChangeText={(val) => props.taskManager.setTitle(val)}
          ></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Description"
            placeholderTextColor={colors.gray}
            numberOfLines={1}
            value={props.taskManager.description}
            onChangeText={(val) => props.taskManager.setDescription(val)}
          ></TextInput>
        </View>

        <View style={styles.bottomButtons}>
          <View style={styles.bottomLeftButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.taskManager.setDatePickerOpen(true)}
            >
              <Icon_Clock width={32} height={32} fill={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.taskManager.setCategoryOpen(true)}
            >
              <Icon_Bookmark width={32} height={32} fill={colors.white} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.taskManager.CreateTask()}
          >
            <Icon_Send width={30} height={30} fill={colors.primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreateTaskModal;
