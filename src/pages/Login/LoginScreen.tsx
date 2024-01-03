import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useState } from "react";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../data/Colors";
import { useNavigation } from "@react-navigation/native";
import Icon_Close from "../../../assets/icons/close";
import { UserContext } from "../../Context/UserContext";

const LoginScreen = () => {
  const navigation = useNavigation();

  const user = useContext(UserContext);

  const [email, setEmail] = useState<string>("admin@gmail.com");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("1234");

  const handleLogin = async () => {
    if (validateEmail()) {
      const res = await user?.SignInWithEmail({ email, password });
      console.log(res);
    } else {
      setEmailError(true);
      showToast("Email inválido!");
    }
  };

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon_Close width={32} height={32} fill={colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputBox}>
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={{
              ...styles.textInput,
              borderColor: emailError ? colors.error : colors.gray,
            }}
            placeholder="Enter your Email"
            placeholderTextColor={emailError ? colors.error : colors.gray}
            value={email}
            onChangeText={(val) => setEmail(val)}
          ></TextInput>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.textLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="*********"
            textContentType="password"
            placeholderTextColor={colors.gray}
            value={password}
            onChangeText={(val) => setPassword(val)}
          ></TextInput>
        </View>

        <View style={styles.inputBox}>
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBox}>
          <TouchableOpacity
            style={styles.bottomTextButton}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={styles.bottomText}>
              Don’t have an account? <Text style={styles.bold}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
