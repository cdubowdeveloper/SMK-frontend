
import React from 'react';
import store from './src/Backend/Store/store.js';
import { Provider } from 'react-redux'
import MainStackNavigator from './src/Frontend/navigation/MainStackNav.js';



export default function App() {
  return (
  <Provider store={store}>
    <MainStackNavigator/>
  </Provider>
  )}