import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { colors } from "../../data/Colors";
import Icon_Filter from "../../../assets/icons/filter";

const HomeTopBarComponent = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterBox}>
        <Icon_Filter width={28} height={28} fill={colors.white} />
      </TouchableOpacity>

      <Text style={styles.text}>Tasks</Text>

      <TouchableOpacity
        onPress={() => {
          navigate.navigate("menu");
        }}
      >
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: "https://cdn.discordapp.com/attachments/1109527785036337172/1187801713843916800/IMG_20231203_202421_236.jpg?ex=6598358c&is=6585c08c&hm=39d21fc7177662dcb07a3553c83299e7198cf36a5644e813785b007afdc0159f&",
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default HomeTopBarComponent;
