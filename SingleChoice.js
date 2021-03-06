import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  componentContainer: {
    justifyContent: "space-around",
    marginTop: 30
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
});

const SingleChoice = props => {
  const {
    options,
    defaultValue,
    keyName,
    selectDirection,
    setValueFunc,
    testID
  } = props;
  return (
    <View
      testID={testID} style={[styles.componentContainer, { flexDirection: selectDirection }]}
    >
      {options.map(item => (
        <View key={item.key} style={styles.buttonContainer}>
          <TouchableOpacity
            testID={testID ? `${testID}-${item.key}` : null}
            style={styles.circle}
            onPress={() => {
              setValueFunc({
                [keyName]: item.key
              });
            }}
            disabled={!!item.disabled}
          >
            {defaultValue[keyName] === item.key && (
              <View style={styles.checkedCircle} />
            )}
          </TouchableOpacity>
          <Text style={styles.optionColor}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default SingleChoice;
