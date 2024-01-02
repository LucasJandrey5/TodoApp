import React, { useEffect, useState } from "react";
import { TaskContextType, task } from "../types/task";
import { testTasks } from "../data/testData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskContext = React.createContext<TaskContextType | null>(null);

const TaskProvider: React.FC<React.ReactNode> = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [createTaskModalOpened, setCreateTaskModalOpened] = useState(false);

  const [storageDataObtained, setStorageDataObtained] = useState(false);

  let currentTaskID = tasks.length;

  useEffect(() => {
    getStorageData();
  }, []);

  useEffect(() => {
    if (storageDataObtained) SaveData();

    setStorageDataObtained(true);
  }, [JSON.stringify(tasks)]);

  const saveTask = (task: task) => {
    do {
      currentTaskID += 1;
    } while (tasks.find((item) => item.id == currentTaskID) != undefined);

    let a = tasks;
    task.id = currentTaskID;
    a.push(task);

    setTasks(a);
  };

  const updateTask = async (task: task) => {
    let a = tasks.filter((e) => e.id != task.id);
    a.push(task);
    setTasks(a);
  };

  const changeCompleteTask = (id: number) => {
    let index = tasks.findIndex((e) => e.id == id);
    let a = { ...tasks[index], completed: !tasks[index].completed };
    let b = tasks.filter((e) => e.id != id);
    b.push(a);
    setTasks(b);
  };

  const deleteTask = (id: number) => {
    let a = tasks.filter((item) => item.id != id);
    setTasks(a);
  };

  const openCloseTaskCreate = () => {
    setCreateTaskModalOpened(!createTaskModalOpened);
  };

  const SaveData = async () => {
    try {
      const tasksJson = JSON.stringify(tasks);
      await AsyncStorage.setItem("tasks", tasksJson);
    } catch (e) {
      console.warn(e);
    }
  };

  const getStorageData = async () => {
    let a = await AsyncStorage.getItem("currentTaskID");
    currentTaskID = a == null ? 0 : parseInt(a);
    let jsonStorageTasks = await AsyncStorage.getItem("tasks");
    setTasks(JSON.parse(jsonStorageTasks == null ? "[]" : jsonStorageTasks));
  };

  const APAGAR_RemoveAllTasks = async () => {
    const tasksJson = JSON.stringify([]);
    await AsyncStorage.setItem("tasks", tasksJson);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTaskModalOpened,
        saveTask,
        updateTask,
        changeCompleteTask,
        deleteTask,
        openCloseTaskCreate,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
