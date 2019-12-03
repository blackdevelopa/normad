import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export function Ionicons(props) {
  return <Icon name={props.name} color={props.color} size={props.size} />;
}
