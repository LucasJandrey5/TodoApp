import { View, Text } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";
import DatePickerComponent from "../DatePicker/DatePickerComponents";
import { DateType } from "react-native-ui-datepicker";
import ChooseCategoryModalComponent from "../ChooseCategory/ChooseCategoryModalComponent";
import { task } from "../../types/task";
import { CategoryContext } from "../../Context/categoryContext";
import { TaskContext } from "../../Context/taskContext";

export type taskManagerProps = {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (desc: string) => void;
  date: DateType;
  setDate: (date: DateType) => void;
  category: number;
  setCategory: (id: number) => void;
  categoryOpen: boolean;
  setCategoryOpen: (open: boolean) => void;
  datePickerOpen: boolean;
  setDatePickerOpen: (open: boolean) => void;
  CreateTask: () => void;
};

const CreateTaskManager = () => {
  const categories = useContext(CategoryContext);
  const tasks = useContext(TaskContext);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [date, setDate] = useState<DateType>("");
  const [category, setCategory] = useState<number>(0);

  const taskManager: taskManagerProps = {
    title: title,
    setTitle: setTitle,
    description: description,
    setDescription: setDescription,
    date: date,
    setDate: setDate,
    datePickerOpen: datePickerOpen,
    setDatePickerOpen: setDatePickerOpen,
    category: category,
    setCategory: setCategory,
    categoryOpen: categoryOpen,
    setCategoryOpen: setCategoryOpen,
    CreateTask: () => CreateTask(),
  };

  const CreateTask = () => {
    const newTask: task = {
      id: 0,
      title: title,
      description: description,
      taskCategory: categories?.categories[category] || null,
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
      <CreateTaskModal taskManager={taskManager} />
      <DatePickerComponent taskManager={taskManager} />
      <ChooseCategoryModalComponent taskManager={taskManager} />
    </View>
  );
};

export default CreateTaskManager;
