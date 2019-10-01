# react-native-single-choice

Single Choice component for React-native

## Usage

- Install the single-choice component with `yarn add react-native-single-choice` or `npm install react-native-single-choice --save`.

- Import the component in your Javascript file

```javascript
import React, { useState } from "react";
import { View, Text } from "react-native";
import SingleChoice from "react-native-single-choice";

const App = () => {
  const securityMethodOptions = [
    {
      key: "faceId",
      text: "Enable Face ID",
      disabled: true
    },
    {
      key: "pin",
      text: "Set a pin"
    },
    {
      key: "later",
      text: "Set up later"
    }
  ];

  const roleOptions = [
    {
      key: "actor",
      text: "Actor"
    },
    {
      key: "director",
      text: "Director"
    }
  ];

  const [securityMethod, setSecurityMethod] = useState({ method: "pin" });
  const [role, setRole] = useState({ role: "actor" });

  return (
    <View style={{ flex: 1, marginTop: 40, marginLeft: 20 }}>
      <Text>React Native Single Choice</Text>
      <SingleChoice
        options={securityMethodOptions}
        defaultValue={securityMethod}
        keyName='method'
        selectDirection='column'
        setValueFunc={setSecurityMethod}
      />

      <SingleChoice
        options={roleOptions}
        defaultValue={role}
        keyName='role'
        selectDirection='row'
        setValueFunc={setRole}
      />
    </View>
  );
};

export default App;
```

## Props

- `options`: list options. It's an array of objects. Set disabled to be true if you want disable that option.
- `defaultValue` and `keyName` are used to set the default selected option. Look the example to know how to set.
- `selectDirection`: specifies the direction of the flexible items. (`row` or `column`).
- `setValueFunc`: pass your set state function. It works with React Hooks.

## Contributing

Of course! Welcome! I made this package from a simple component in project that I'm working. So welcome to any Pull Requests from you guys.

## License

MIT
