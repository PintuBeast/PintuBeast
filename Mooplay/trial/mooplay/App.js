/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from "./src/screens/Home";
import {
  SafeAreaView,
  StatusBar
} from 'react-native';



const App: () => React$Node = () => {
  
  return (
  //  <SafeAreaView >
    <Home/>
  //  </SafeAreaView>

  );
};


export default App;
