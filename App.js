import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Anil',
    },
    {
      id: 2,
      name: 'Sunil',
    },
    {
      id: 3,
      name: 'Kamal',
    },
    {
      id: 4,
      name: 'Chaman',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 31}}> List with Flat List Component </Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor = { item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
   item : {
    fontSize : 25,
    padding : 10,
    color : 'white',
    backgroundColor : 'blue',
    borderColor : 'black',
    borderWidth : 1,
    margin : 10
   }  
});

export default App;
