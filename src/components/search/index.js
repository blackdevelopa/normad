import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

export default function Search(props) {
  return (
    <View>
      <TextInput
        style={styles.input}
        {...props}
        editable
        maxLength={40}
        placeholder={props.placeholder}
      />
    </View>
  );
}
