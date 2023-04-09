import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { styleGlobal } from './styles-global';

import HomePage from './views/home';
import DetailMateri from './views/detail';
import Quiz from './views/quiz';
import Search from './views/search';
import Dummy from './views/dummy';
import Splash2 from './views/splash2';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="splash" component={Splash2}/>
        <Stack.Screen name="home" component={HomePage}/>
        <Stack.Screen name="detail" component={DetailMateri}/>
        <Stack.Screen name="quiz" component={Quiz}/>
        <Stack.Screen name="search" component={Search}/>
        <Stack.Screen name="dummy" component={Dummy}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}