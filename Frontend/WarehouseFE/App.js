import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log('API Call Initiated--Getting Data');
    axios.get('http://10.1.10.223:5000/users')
    .then((response) => {
      console.log('Getting Data');
      console.log(response.data);
      setData(response.data.UserData[1]);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <Text>Wilfredo & Thomas: Lets Begin!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
