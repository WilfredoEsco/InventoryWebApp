import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SearchForm from './src/Components/SearchForm';
import SearchResults from './src/Components/SearchResults';

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
    <SafeAreaView>
      <StatusBar style="auto" />
      <SearchForm />
      <SearchResults/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
