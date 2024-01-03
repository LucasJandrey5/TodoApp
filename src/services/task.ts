import { useContext } from "react";
import { task } from "../types/task";
import { UserContext } from "../Context/UserContext";

export const SaveTask = (task: task) => {
  const user = useContext(UserContext);
};
