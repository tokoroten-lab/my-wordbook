import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './components/Home/HomeScreen';
import TrainScreen from './components/Train/TrainScreen';
import StockScreen from './components/Stock/StockScreen';
import ListScreen from './components/List/ListScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Train" component={TrainScreen} />
        <Drawer.Screen name="Stock" component={StockScreen} />
        <Drawer.Screen name="List" component={ListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
