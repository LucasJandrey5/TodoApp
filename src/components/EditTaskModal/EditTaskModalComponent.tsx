import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Vibration,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { styles } from "./styles";
import { colors } from "../../data/Colors";
import { TaskContext } from "../../Context/taskContext";
import { task } from "../../types/task";
import DatePickerComponent, {
  dateProps,
} from "../DatePicker/DatePickerComponents";
import ChooseCategoryModalComponent, {
  categoryProps,
} from "../ChooseCategory/ChooseCategoryModalComponent";
import { DateType } from "react-native-ui-datepicker";
import Modal from "react-native-modal";

import Icon_Bookmark from "../../../assets/icons/bookmark";
import Icon_Trash from "../../../assets/icons/trash";
import Icon_Close from "../../../assets/icons/close";
import Icon_Sync from "../../../assets/icons/sync";
import Icon_Send from "../../../assets/icons/send";
import Icon_Clock from "../../../assets/icons/clock";
import { CategoryContext } from "../../Context/categoryContext";
import ConfirmModalComponent from "../ConfirmModal/ConfirmModalComponent";

const EditTaskModalComponent = (props: {
  taskId: number;
  openEditTask: boolean;
  setOpenEditTask: (b: boolean) => void;
}) => {
  const tasks = useContext(TaskContext);
  const categories = useContext(CategoryContext);

  const [editedTask, setEditedTask] = useState<task | undefined>(
    tasks?.tasks.find((item) => item.id == props.taskId)
  );

  const resetEditedTask: task | undefined = tasks?.tasks.find(
    (item) => item.id == props.taskId
  );

  useEffect(() => {
    if (editedTask == undefined) {
      props.setOpenEditTask(false);
      return;
    }

    setDate(editedTask.time?.toString());
    setCategory(editedTask.taskCategory?.id || 0);
  }, []);

  useEffect(() => {
    ResetData();
  }, [props.openEditTask]);

  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedTitleEmpty, setEditedTitleEmpty] = useState<boolean>(false);
  const [editedDescription, setEditedDescription] = useState<string>("");

  const [date, setDate] = useState<DateType>("");
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);

  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<number>(0);
  const [categoryEmpty, setCategoryEmpty] = useState<boolean>(false);

  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);

  const dateProps: dateProps = {
    date: date,
    setDate: setDate,
    datePickerOpen: datePickerOpen,
    setDatePickerOpen: setDatePickerOpen,
  };

  const categoryProps: categoryProps = {
    category: category,
    setCategory: setCategory,
    categoryOpen: categoryOpen,
    categoryEmpty: categoryEmpty,
    setCategoryOpen: setCategoryOpen,
  };

  const SaveTask = () => {
    if (editedTitle == "") {
      setEditedTitleEmpty(true);
      Vibration.vibrate(300);
      return;
    }

    const newEditedTask: task = {
      id: props.taskId,
      title: editedTitle,
      description: editedDescription,
      taskCategory:
        categories?.categories.find((item) => item.id == category) || null,
      time: date,
      completed:
        tasks?.tasks.find((item) => item.id == props.taskId)?.completed ||
        false,
    };

    tasks?.updateTask(newEditedTask);
    props.setOpenEditTask(false);
  };

  const DeleteTask = () => {
    tasks?.deleteTask(props.taskId);
  };

  const ResetData = () => {
    if (!resetEditedTask) return;

    setEditedTitle(resetEditedTask.title);
    setEditedDescription(resetEditedTask.description);
    setCategory(resetEditedTask.taskCategory?.id || 0);
    setDate(resetEditedTask.time);
  };

  return (
    <Modal isVisible={props.openEditTask}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.topBarButton}
            onPress={() => props.setOpenEditTask(!props.openEditTask)}
          >
            <View style={styles.topBarIcon}>
              <Icon_Close width={28} height={28} fill={colors.white} />
            </View>
          </TouchableOpacity>
          <Text style={styles.topBarText}>Task Edit</Text>
          <TouchableOpacity
            style={styles.topBarButton}
            onPress={() => ResetData()}
          >
            <View style={styles.topBarIcon}>
              <Icon_Sync width={28} height={28} fill={colors.white} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputBox}>
          <TextInput
            style={{
              ...styles.textInput,
              borderColor: editedTitleEmpty ? colors.error : colors.gray,
            }}
            placeholder="Title"
            placeholderTextColor={editedTitleEmpty ? colors.error : colors.gray}
            numberOfLines={1}
            value={editedTitle}
            onChangeText={(val) => setEditedTitle(val)}
          ></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Description"
            placeholderTextColor={colors.gray}
            numberOfLines={1}
            value={editedDescription}
            onChangeText={(val) => setEditedDescription(val)}
          ></TextInput>
        </View>

        <View style={styles.atrLine}>
          <View style={styles.atrLeft}>
            <Icon_Clock width={28} height={28} fill={colors.white} />
            <Text style={styles.atrText}>Task Time: </Text>
          </View>
          <TouchableOpacity
            style={styles.atrButton}
            onPress={() => setDatePickerOpen(true)}
          >
            <Text style={styles.atrButtonText}>
              {date == "" ? "Selecione a data" : date?.toLocaleString("en-US")}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.atrLine}>
          <View style={styles.atrLeft}>
            <Icon_Bookmark width={28} height={28} fill={colors.white} />
            <Text style={styles.atrText}>Task Category: </Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.atrButton,
              backgroundColor: categories?.categories.find(
                (item) => item.id == category
              )
                ? categories?.categories.find((item) => item.id == category)
                    ?.colorHEX
                : colors.gray,
            }}
            onPress={() => setCategoryOpen(true)}
          >
            <Icon_Bookmark
              width={28}
              height={28}
              fill={
                categories?.categories.find((item) => item.id == category)
                  ? categories?.categories.find((item) => item.id == category)
                      ?.secondaryColorHEX
                  : colors.white
              }
            />
            <Text style={styles.atrButtonText}>
              {category == 0
                ? "Select category"
                : categories?.categories.find((item) => item.id == category)
                    ?.title}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLine}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => setConfirmModalOpen(true)}
          >
            <Icon_Trash width={28} height={28} fill={colors.error} />
            <Text style={{ ...styles.atrText, color: colors.error }}>
              Delete Task
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => SaveTask()}
          >
            <Text style={{ ...styles.atrText, color: colors.blue }}>
              Save Task
            </Text>
            <Icon_Send width={28} height={28} fill={colors.blue} />
          </TouchableOpacity>
        </View>
      </View>

      <DatePickerComponent dateProps={dateProps} />
      <ChooseCategoryModalComponent categoryProps={categoryProps} />
      <ConfirmModalComponent
        titleText="Delete Task"
        text1={"Are You sure you want to delete this task?"}
        text2={
          "Task title : " +
          tasks?.tasks.find((i) => i.id == props.taskId)?.title
        }
        confirmButtonText={"Delete"}
        cancelButtonText={"Cancel"}
        confirmModalOpen={confirmModalOpen}
        setConfirmModalOpen={setConfirmModalOpen}
        action={() => DeleteTask()}
      />
    </Modal>
  );
};

export default EditTaskModalComponent;
