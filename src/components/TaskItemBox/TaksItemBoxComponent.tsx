import React, { useContext, useEffect, useState } from "react";
import { View, Text, ListRenderItemInfo } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { task } from "../../types/task";
import { styles } from "./styles";
import { colors } from "../../data/Colors";
import Icon_Home from "../../../assets/icons/home";
import { TaskContext } from "../../Context/taskContext";

const TaskItemBoxComponent = (props: { data: task }): React.JSX.Element => {
  const tasks = useContext(TaskContext);

  let bouncyCheckboxRef: BouncyCheckbox | null = null;

  const [formatedDate, setFormatedDate] = useState("");

  useEffect(() => {
    const date = new Date("2023-01-15T10:30:00").toLocaleString("en-US", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    setFormatedDate(date);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          style={styles.checkbox}
          ref={(ref: any) => (bouncyCheckboxRef = ref)}
          isChecked={props.data.completed}
          disableBuiltInState
          onPress={() => {
            tasks?.changeCompleteTask(props.data.id);
          }}
          disableText={true}
          fillColor={colors.primaryColor}
        />
      </View>
      <View style={styles.textsBox}>
        <View>
          <Text style={styles.titleText}>{props.data.title}</Text>
        </View>
        <View style={styles.bottomLineBox}>
          <View>
            <Text style={styles.timeText}>{formatedDate}</Text>
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
      </View>
    </View>
  );
};

export default TaskItemBoxComponent;
