import React from 'react';
import MyStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};
export default App;
