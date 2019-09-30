import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  componentContainer: {
    componentContainer: {
      justifyContent: "space-around",
      marginTop: 30,
      flexDirection: "row"
    },
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 30
    },
    circle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ACACAC",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10
    },
    checkedCircle: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: "#000"
    },
    optionColor: {
      color: "#129378"
    }
  }
});

const SingleChoice = props => {
  const { options } = props;
  return (
    <View style={styles.componentContainer}>
      {options.map(item => {
        <View key={item.key} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.circle}></TouchableOpacity>
          <Text style={styles.optionColor}>{item.text}</Text>
        </View>;
      })}
    </View>
  );
};

export default SingleChoice;
