import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import Modal from "react-native-modal";
import { colors } from "../../data/Colors";
import { styles } from "./styles";
import dayjs from "dayjs";

import { taskManagerProps } from "../CreateTaskManager/CreateTaskManager";

export type dateProps = {
  date: DateType;
  setDate: (date: DateType) => void;
  datePickerOpen: boolean;
  setDatePickerOpen: (open: boolean) => void;
};

const DatePickerComponent = (props: { dateProps: dateProps }) => {
  const [value, setValue] = useState<DateType>(props.dateProps.date);

  const SaveDate = () => {
    props.dateProps.setDate(value);
    props.dateProps.setDatePickerOpen(false);
  };

  return (
    <Modal style={styles.modal} isVisible={props.dateProps.datePickerOpen}>
      <View style={styles.container}>
        <DateTimePicker
          value={value}
          onValueChange={(date) => setValue(date)}
          minimumDate={Date.now()}
          selectedItemColor={colors.primaryColor}
          headerTextStyle={{ color: colors.white }}
          headerButtonColor={colors.white}
          weekDaysTextStyle={{ color: colors.white }}
          timePickerTextStyle={{ color: colors.white }}
          selectedTextStyle={{ color: colors.white }}
          calendarTextStyle={{ color: colors.lightGray }}
          monthContainerStyle={{
            backgroundColor: colors.gray,
            borderWidth: 0,
          }}
          yearContainerStyle={{
            backgroundColor: colors.gray,
            borderWidth: 0,
          }}
          todayContainerStyle={{ borderWidth: 0 }}
        />

        <View style={styles.buttonsBox}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => props.dateProps.setDatePickerOpen(false)}
          >
            <Text style={styles.buttonCancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => SaveDate()}
          >
            <Text style={styles.buttonSubmitText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DatePickerComponent;
