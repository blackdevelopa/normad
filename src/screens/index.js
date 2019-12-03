import React from 'react';
import {Text, View, StatusBar, Image, SafeAreaView} from 'react-native';
import {Ionicons} from '../components/icons';
import Button from '../components/button';
import styles from './style';

export default function Home(props) {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <View style={styles.logo}>
          <Ionicons name="ios-home" color="white" size={40} />
        </View>
        <Text style={styles.mainText}>Welcome to {'\n'}Normad</Text>
        <Text style={styles.description}>
          Best Travel Tool to Discover New {'\n'}Possibilities Around the World
        </Text>
      </View>
      <View style={styles.midContainer}>
        <Image source={require('../assets/sunset.jpeg')} style={styles.image} />
      </View>
      <View style={styles.downContainer}>
        <Button
          press={() => props.navigation.navigate('All')}
          text="Get Started"
        />
      </View>
    </SafeAreaView>
  );
}
