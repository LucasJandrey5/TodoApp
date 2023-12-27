import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import { styles } from "./styles";

//Components
import HomeTopBarComponent from "../../components/HomeTopBar/HomeTopBarComponent";
import HomeSearchTaskInputComponent from "../../components/HomeSearchTaskInput/HomeSearchTaskInputComponent";
import HomeTaskListComponent from "../../components/HomeTaskList/HomeTaskListComponent";
import CreateTaskManager from "../../components/CreateTaskManager/CreateTaskManager";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ minHeight: 70 }}>
          <HomeTopBarComponent />
        </View>

        <ScrollView>
          <HomeSearchTaskInputComponent />

          <HomeTaskListComponent />
          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>

      <CreateTaskManager />
    </View>
  );
};

export default HomeScreen;
