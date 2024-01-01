import { DateType } from "react-native-ui-datepicker";
import { category } from "./category";

export interface task {
  id: number;
  title: string;
  description: string;
  time: DateType;
  taskCategory: category | null;
  completed: boolean;
}

export type TaskContextType = {
  tasks: task[];
  createTaskModalOpened: boolean;
  saveTask: (task: task) => void;
  updateTask: (task: task) => void;
  changeCompleteTask: (id: number) => void;
  deleteTask: (id: number) => void;
  openCloseTaskCreate: () => void;
};
