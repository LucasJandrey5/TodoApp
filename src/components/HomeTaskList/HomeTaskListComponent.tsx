import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { TaskContext } from "../../Context/taskContext";
import TaskItemBoxComponent from "../TaskItemBox/TaksItemBoxComponent";
import { styles } from "./styles";

const HomeTaskListComponent = () => {
  const tasks = useContext(TaskContext);

  return (
    <View style={styles.container}>
      {tasks?.tasks.map((item, id) => {
        if (!item.completed)
          return <TaskItemBoxComponent key={id} data={item} />;
      })}
      <View style={styles.completedTextBox}>
        <Text style={styles.completedText}>- Completed -</Text>
      </View>
      {tasks?.tasks.map((item, id) => {
        if (item.completed)
          return <TaskItemBoxComponent key={id} data={item} />;
      })}
    </View>
  );
};

export default HomeTaskListComponent;
