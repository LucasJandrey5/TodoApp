import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import Icon_Close from "../../../assets/icons/close";

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Welcome to ToDo App</Text>
        <Text style={styles.subtitle}>
          Please login to your account or create {"\n"} new account to continue
        </Text>
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={styles.signinButton}
        >
          <Text style={styles.signinButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("register")}
          style={styles.registerButton}
        >
          <Text style={styles.registerButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;
