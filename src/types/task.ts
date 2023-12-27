export interface task {
  id: number;
  title: string;
  description: string;
  time: string;
  taskCategory: category;
  completed: boolean;
}

export type TaskContextType = {
  tasks: task[];
  createTaskModalOpened: boolean;
  saveTask: (task: task) => void;
  updateTask: (task: task, id: number) => void;
  changeCompleteTask: (id: number) => void;
  deleteTask: (id: number) => void;
  openCloseTaskCreate: () => void;
};
