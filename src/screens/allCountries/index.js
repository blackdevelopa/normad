import React, {useState} from 'react';
import axios from 'axios';
import {View, FlatList, ActivityIndicator} from 'react-native';
import Card from '../../components/card';

export default function All() {
  const [response, setResponse] = useState();
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
      setResponse(data);
    })
    .catch(error => {
      console.log(error);
    });
  return (
    <View>
      {response !== undefined ? (
        <FlatList
          data={response.data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.name}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
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
