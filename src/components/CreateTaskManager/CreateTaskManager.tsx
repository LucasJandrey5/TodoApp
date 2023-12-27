import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";
import DatePickerComponent from "../DatePicker/DatePickerComponents";
import { DateType } from "react-native-ui-datepicker";

const CreateTaskManager = () => {
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [date, setDate] = useState<DateType>();

  return (
    <View>
      <CreateTaskModal setOpen={() => setDatePickerOpen(!datePickerOpen)} />
      <DatePickerComponent
        open={datePickerOpen}
        setOpen={() => setDatePickerOpen(!datePickerOpen)}
        date={date}
        setDate={setDate}
      />
    </View>
  );
};

export default CreateTaskManager;
