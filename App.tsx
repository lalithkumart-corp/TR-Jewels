import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Init from './src/screen/init/Init';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Init />
      </NavigationContainer>
    );
  }
}
