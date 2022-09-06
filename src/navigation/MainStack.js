import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupOptions from '../screens/signupoptions';
import Login from '../screens/login';
import OtpRegister from '../screens/otpRegister';
import OtpVerify from '../screens/otpVerify';
import PrefScreen from '../screens/preferrenceScreen';
import Signup from '../screens/signup';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen name="welcome" component={SignupOptions} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="otpRegister" component={OtpRegister} />
      <Stack.Screen name="otpVerify" component={OtpVerify} />
      <Stack.Screen name="preferrenceScreen" component={PrefScreen} />
    </Stack.Navigator>
  );
};
export default App;
