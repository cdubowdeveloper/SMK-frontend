import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function HomePage({ navigation }) {
    return (
    <View style={styles.container}>

      <Text>Home</Text>
    
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;