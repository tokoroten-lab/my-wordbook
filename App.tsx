import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './components/Home/HomeScreen';
import RegisterScreen from './components/Register/RegisterScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
