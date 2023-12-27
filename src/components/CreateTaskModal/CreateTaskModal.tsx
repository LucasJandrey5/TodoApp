import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { TaskContext } from "../../Context/taskContext";
import { styles } from "./styles";
import { colors } from "../../data/Colors";
import Icon_Clock from "../../../assets/icons/clock";
import Icon_Send from "../../../assets/icons/send";

const CreateTaskModal = (props: { setOpen: () => void }) => {
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
          ></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Description"
            placeholderTextColor={colors.gray}
            numberOfLines={1}
          ></TextInput>
        </View>

        <View style={styles.bottomButtons}>
          <View style={styles.bottomLeftButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.setOpen()}
            >
              <Icon_Clock width={32} height={32} fill={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon_Clock width={32} height={32} fill={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon_Clock width={32} height={32} fill={colors.white} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Icon_Send width={30} height={30} fill={colors.primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreateTaskModal;
