import React from 'react';
import Iicon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialIcons';

export function Ionicons(props) {
  return <Iicon name={props.name} color={props.color} size={props.size} />;
}

export function MaterialIcons(props) {
  return <Micon name={props.name} color={props.color} size={props.size} />;
}
