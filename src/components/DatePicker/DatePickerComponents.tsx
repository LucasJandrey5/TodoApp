import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import Modal from "react-native-modal";
import { colors } from "../../data/Colors";

const DatePickerComponent = (props: {
  open: boolean;
  setOpen: () => void;
  date: DateType;
  setDate: (date: DateType) => void;
}) => {
  const [value, setValue] = useState<DateType>();

  const SaveDate = () => {
    props.setDate(value);
    props.setOpen();
  };

  return (
    <Modal style={styles.modal} isVisible={props.open}>
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
            onPress={() => props.setOpen()}
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

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    padding: 10,
  },
  buttonsBox: {
    width: "90%",
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonCancel: {
    padding: 10,
  },
  buttonCancelText: {
    color: colors.primaryColor,
  },
  buttonSubmit: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
  },
  buttonSubmitText: {
    fontSize: 16,
    color: colors.white,
  },
});

export default DatePickerComponent;
