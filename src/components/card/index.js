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
        <Text style={styles.text}>
          <Text style={styles.title}>Country:</Text> {props.country}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.title}>Capital:</Text> {props.capital}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.title}>Continent:</Text> {props.region}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.title}>Population:</Text>{' '}
          {props.population.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}
