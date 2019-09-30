/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SingleChoice from 'react-native-single-choice';

const App = () => {
  const securityMethodOptions = [
    {
      key: 'faceId',
      text: 'Enable Face ID',
      disabled: true,
    },
    {
      key: 'pin',
      text: 'Set a pin',
    },
    {
      key: 'later',
      text: 'Set up later',
    },
  ];

  const [securityMethod, setSecurityMethod] = useState({method: 'pin'});

  console.log(securityMethodOptions);

  return (
    <View style={{flex: 1, marginTop: 40, marginLeft: 20}}>
      <Text>React Native Single Choice</Text>
      <SingleChoice
        options={securityMethodOptions}
        defaultValue={securityMethod}
        keyName="method"
        // selectDirection="row"
        selectDirection="column"
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
