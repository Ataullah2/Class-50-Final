import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login'
import SignUp from './components/SignUp';
import {NavigationContainer} from '@react-navigation/native' 
import StackNavigation from './components/StackNavigation';
export default function App() {
  return (
   // <NavigationContainer>
     // <StackNavigation/>
    //</NavigationContainer>
    <Login></Login>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
