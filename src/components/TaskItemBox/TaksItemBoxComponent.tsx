import React, { useContext, useEffect, useState } from "react";
import { View, Text, ListRenderItemInfo, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { task } from "../../types/task";
import { styles } from "./styles";
import { colors } from "../../data/Colors";
import Icon_Home from "../../../assets/icons/home";
import { TaskContext } from "../../Context/taskContext";
import EditTaskModalComponent from "../EditTaskModal/EditTaskModalComponent";

const TaskItemBoxComponent = (props: { data: task }): React.JSX.Element => {
  const tasks = useContext(TaskContext);

  const [openEditTask, setOpenEditTask] = useState<boolean>(false);

  const [formatedDate, setFormatedDate] = useState<string>("");

  useEffect(() => {
    const date = new Date(props.data.time?.toString() || "").toLocaleString(
      "en-US",
      {
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }
    );

    setFormatedDate(date);
  }, []);

  return (
    <View style={styles.container}>
      <EditTaskModalComponent
        taskId={props.data.id}
        openEditTask={openEditTask}
        setOpenEditTask={setOpenEditTask}
      />

      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          style={styles.checkbox}
          isChecked={props.data.completed}
          disableBuiltInState
          onPress={() => {
            tasks?.changeCompleteTask(props.data.id);
          }}
          disableText={true}
          fillColor={colors.primaryColor}
        />
      </View>
      <TouchableOpacity
        style={styles.textsBox}
        onPress={() => setOpenEditTask(!openEditTask)}
      >
        <View>
          <Text style={styles.titleText}>{props.data.title}</Text>
        </View>
        <View style={styles.bottomLineBox}>
          <View>
            {formatedDate == "Invalid Date" ? (
              <Text style={styles.timeText}>{props.data.description}</Text>
            ) : (
              <Text style={styles.timeText}>{formatedDate}</Text>
            )}
          </View>
          <View
            style={{
              ...styles.categoryBox,
              backgroundColor: props.data.taskCategory.colorHEX,
            }}
          >
            <Icon_Home
              style={{ marginRight: 5 }}
              width={22}
              height={22}
              fill={props.data.taskCategory.secondaryColorHEX}
            />
            <Text style={{ color: colors.white, marginRight: 5 }}>
              {props.data.taskCategory.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItemBoxComponent;
