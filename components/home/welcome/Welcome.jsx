import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = ({}) => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Supakorn</Text>
        <Text style={styles.userName}>Find your perfect job</Text>
      </View>
    </View>
  );
};

export default Welcome;
