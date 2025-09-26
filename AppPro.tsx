import React, { JSX } from 'react';

import { View, Text, StyleSheet, useColorScheme } from 'react-native';

type AppProProps = {
  name: string;
};

function AppPro(props: AppProProps): JSX.Element {
  return (
    <View>
      <Text>My name is {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AppPro;
