import React, {useState} from 'react';
import axios from 'axios';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import Spinner from 'react-native-spinkit';
import Search from '../../components/search';
import styles from './styles';

import Card from '../../components/card';

export default function All(props) {
  const [response, setResponse] = useState();
  const [search, setSearch] = useState('Search');
  axios({
    method: 'GET',
    url: 'https://restcountries-v1.p.rapidapi.com/all',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
      'x-rapidapi-key': '0d7d438419msh912407d4272cb2ap1a9899jsn48537566daa4',
    },
  })
    .then(data => {
      setTimeout(function() {
        setResponse(data);
      }, 9000);
    })
    .catch(error => {
      console.log(error);
    });
  console.log(response, 'don');
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.text}>Cities</Text>
        <Text style={styles.text}>profile</Text>
      </View>
      <Search
        style={styles.input}
        multiline
        numberOfLines={4}
        onChangeText={text => setSearch(text)}
        value={search}
      />
      {response !== undefined ? (
        <FlatList
          data={response.data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.name}
        />
      ) : (
        <Spinner
          style={styles.spinner}
          isVisible={true}
          size={100}
          type={'Wave'}
          color={'#000'}
        />
      )}
    </SafeAreaView>
  );

  function Item({item}) {
    return (
      <Card
        country={item.name}
        capital={item.capital}
        region={item.region}
        population={item.population}
      />
    );
  }
}
