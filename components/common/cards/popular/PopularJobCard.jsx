import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress()}
    ></TouchableOpacity>
  );
};

export default PopularJobCard;
