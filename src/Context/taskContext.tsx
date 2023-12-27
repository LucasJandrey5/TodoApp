import React, { useEffect, useState } from "react";
import { TaskContextType, task } from "../types/task";
import { testTasks } from "../data/testData";

export const TaskContext = React.createContext<TaskContextType | null>(null);

const TaskProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [tasks, setTasks] = useState<task[]>(testTasks);
  const [createTaskModalOpened, setCreateTaskModalOpened] = useState(false);

  useEffect(() => {
    console.log(tasks);
  }, []);

  const saveTask = (task: task) => {};

  const updateTask = (task: task, id: number) => {};

  const changeCompleteTask = (id: number) => {
    let index = tasks.findIndex((e) => e.id == id);
    let a = { ...tasks[index], completed: !tasks[index].completed };
    let b = tasks.filter((e) => e.id != id);
    b.push(a);
    setTasks(b);
  };

  const deleteTask = (id: number) => {};

  const openCloseTaskCreate = () => {
    setCreateTaskModalOpened(!createTaskModalOpened);
    console.log("aaa");
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
