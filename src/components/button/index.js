import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.press}>
      <Text style={styles.btn_text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
