import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./styles";
import Modal from "react-native-modal";
import { TaskContext } from "../../Context/taskContext";

const ConfirmModalComponent = (props: {
  titleText?: string;
  text1?: string;
  text2?: string;
  confirmButtonText: string;
  cancelButtonText: string;
  confirmModalOpen: boolean;
  setConfirmModalOpen: (b: boolean) => void;
  action: () => void;
}) => {
  return (
    <Modal style={styles.modal} isVisible={props.confirmModalOpen}>
      <View style={styles.container}>
        {props.titleText != undefined && (
          <Text style={styles.titleText}>Delete Task</Text>
        )}
        {props.titleText != undefined && <View style={styles.line}></View>}

        <Text style={styles.text}>{props.text1}</Text>
        <Text style={styles.text}>{props.text2}</Text>

        <View style={styles.buttonsBox}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => props.setConfirmModalOpen(false)}
          >
            <Text style={styles.cancelText}>{props.cancelButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => props.action()}
          >
            <Text style={styles.confirmText}>{props.confirmButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModalComponent;
