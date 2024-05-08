/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react'
import MainNavigator from './Src/Navigator/StackNavigator'
import {Provider} from 'react-redux';
import {store} from './Src/Store/index'

const App = () => {
  return (   
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App