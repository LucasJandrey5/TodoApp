import { View, Text, Vibration } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";
import DatePickerComponent, {
  dateProps,
} from "../DatePicker/DatePickerComponents";
import { DateType } from "react-native-ui-datepicker";
import ChooseCategoryModalComponent, {
  categoryProps,
} from "../ChooseCategory/ChooseCategoryModalComponent";
import { task } from "../../types/task";
import { CategoryContext } from "../../Context/categoryContext";
import { TaskContext } from "../../Context/taskContext";
import EditTaskModalComponent from "../EditTaskModal/EditTaskModalComponent";

export type taskManagerProps = {
  title: string;
  titleEmpty: boolean;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (desc: string) => void;

  CreateTask: () => void;
};

const CreateTaskManager = () => {
  const categories = useContext(CategoryContext);
  const tasks = useContext(TaskContext);

  const [title, setTitle] = useState<string>("");
  const [titleEmpty, setTitleEmpty] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<DateType>("");
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<number>(0);
  const [categoryEmpty, setCategoryEmpty] = useState<boolean>(false);

  const taskManager: taskManagerProps = {
    title: title,
    titleEmpty: titleEmpty,
    setTitle: setTitle,
    description: description,
    setDescription: setDescription,
    CreateTask: () => CreateTask(),
  };

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

  const CreateTask = () => {
    if (title == "") {
      setTitleEmpty(true);
      Vibration.vibrate(300);
      return;
    } else {
      setTitleEmpty(false);
    }

    if (category == 0) {
      setCategoryEmpty(true);
      Vibration.vibrate(300);
      return;
    } else {
      setCategoryEmpty(false);
    }

    const newTask: task = {
      id: 0,
      title: title,
      description: description,
      taskCategory:
        categories?.categories.find((item) => item.id == category) || null,
      time: date,
      completed: false,
    };

    tasks?.saveTask(newTask);
    setCategoryOpen(false);
    setDatePickerOpen(false);

    setTitle("");
    setDescription("");
    setDate("");
    setCategory(0);
    tasks?.openCloseTaskCreate();
  };

  return (
    <View>
      <CreateTaskModal
        taskManager={taskManager}
        dateProps={dateProps}
        categoryProps={categoryProps}
      />
      <DatePickerComponent dateProps={dateProps} />
      <ChooseCategoryModalComponent categoryProps={categoryProps} />
    </View>
  );
};

export default CreateTaskManager;
