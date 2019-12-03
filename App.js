import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './src/navigator';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </>
  );
}
