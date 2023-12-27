import { useContext } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import HomeScreen from "../pages/Home/HomeScreen";
import MenuScreen from "../pages/Menu/MenuScreen";
import FocuseScreen from "../pages/Focuse/FocuseScreen";
import CalendarScreen from "../pages/Calendar/CalendarScreen";

import { colors } from "../data/Colors";
import Icon_Home from "../../assets/icons/home";
import Icon_Calendar from "../../assets/icons/calendar";
import Icon_Clock from "../../assets/icons/clock";
import Icon_Profile from "../../assets/icons/profile";
import CreateTaskScreen from "../pages/CreateTask/CreateTaskScreen";
import { TaskContext } from "../Context/taskContext";

const Router = () => {
  const BottomTab = createBottomTabNavigator();
  const tasks = useContext(TaskContext);

  const iconSize = 28;
  const textSize = 12;

  const IconButton = (props: {
    focused: boolean;
    text: string;
    children: React.JSX.Element;
  }): React.JSX.Element => {
    return (
      <View style={{ alignItems: "center" }}>
        {props.children}
        <Text
          style={{
            color: props.focused ? colors.white : colors.gray,
            fontSize: textSize,
          }}
        >
          {props.text}
        </Text>
      </View>
    );
  };

  const CustomTabBarCreateTaskButton = (props: { onPress: any }) => (
    <TouchableOpacity
      style={{
        top: -35,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        tasks?.openCloseTaskCreate();
      }}
    >
      <View
        style={{
          flex: 1,
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: colors.primaryColor,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ flex: 1, width: 35, height: 35 }}
          resizeMode="contain"
          source={require("../../assets/icons/add.png")}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.bg} animated={true} />
      <BottomTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            elevation: 0,
            backgroundColor: colors.darkGray,
            height: 70,
          },
        }}
      >
        <BottomTab.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <IconButton focused={focused} text="Home">
                <Icon_Home
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? colors.white : colors.gray}
                />
              </IconButton>
            ),
          }}
        />
        <BottomTab.Screen
          name="calendar"
          component={CalendarScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <IconButton focused={focused} text="Calendar">
                <Icon_Calendar
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? colors.white : colors.gray}
                />
              </IconButton>
            ),
          }}
        />
        <BottomTab.Screen
          name="createTask"
          component={CreateTaskScreen}
          options={{
            headerShown: false,
            tabBarButton: (props) => (
              <CustomTabBarCreateTaskButton {...props} />
            ),
          }}
        />
        <BottomTab.Screen
          name="focuse"
          component={FocuseScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <IconButton focused={focused} text="Focuse">
                <Icon_Clock
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? colors.white : colors.gray}
                />
              </IconButton>
            ),
          }}
        />
        <BottomTab.Screen
          name="menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <IconButton focused={focused} text="Menu">
                <Icon_Profile
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? colors.white : colors.gray}
                />
              </IconButton>
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
