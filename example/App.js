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

  const roleOptions = [
    {
      key: 'actor',
      text: 'Actor',
    },
    {
      key: 'director',
      text: 'Director',
    },
  ];

  const [securityMethod, setSecurityMethod] = useState({method: 'pin'});
  const [role, setRole] = useState({role: 'actor'});

  console.log(securityMethodOptions);

  return (
    <View style={{flex: 1, marginTop: 40, marginLeft: 20}}>
      <Text>React Native Single Choice</Text>
      <SingleChoice
        options={securityMethodOptions}
        defaultValue={securityMethod}
        keyName="method"
        selectDirection="column"
        setValueFunc={setSecurityMethod}
      />

      <SingleChoice
        options={roleOptions}
        defaultValue={role}
        keyName="role"
        selectDirection="row"
        setValueFunc={setRole}
      />
    </View>
  );
};

export default App;
