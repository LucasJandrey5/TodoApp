import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useState } from "react";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import Icon_Close from "../../../assets/icons/close";
import { colors } from "../../data/Colors";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../Context/UserContext";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const user = useContext(UserContext);

  const [username, setUsername] = useState<string>("Teste");
  const [email, setEmail] = useState<string>("Teste@gmail.com");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("1234");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const RegisterNewUser = async () => {
    if (validateEmail()) {
      const data = {
        username: username,
        email: email,
        password: password,
      };

      const res = await user?.RegisterWithEmail(data);

      console.log(res?.success);

      if (res?.success) {
        user?.SignInWithEmail({ email, password });
      } else {
        if (res?.message == "Email already exist!") {
          setEmailError(true);
          showToast(res.message);
        } else {
          showToast("Ocorreu um erro! Tente novamente!");
        }
      }
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

  const validadePassword = () => {};

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon_Close width={32} height={32} fill={colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Register</Text>

        <View style={styles.inputBox}>
          <Text style={styles.textLabel}>Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Username"
            placeholderTextColor={colors.gray}
            value={username}
            onChangeText={(val) => setUsername(val)}
          ></TextInput>
        </View>

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
          <Text style={styles.textLabel}>Confirm Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="*********"
            textContentType="password"
            placeholderTextColor={colors.gray}
            value={confirmPassword}
            onChangeText={(val) => setConfirmPassword(val)}
          ></TextInput>
        </View>

        <View style={styles.inputBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => RegisterNewUser()}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBox}>
          <TouchableOpacity
            style={styles.bottomTextButton}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.bottomText}>
              Already have an account?{"  "}{" "}
              <Text style={styles.bold}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
