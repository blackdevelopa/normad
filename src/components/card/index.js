import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageCon}>
        <Image
          source={require('../../assets/travel.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text>{props.country}</Text>
        <Text>{props.capital}</Text>
        <Text>{props.region}</Text>
        <Text>{props.population}</Text>
      </View>
    </View>
  );
}
