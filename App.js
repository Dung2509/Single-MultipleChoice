import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CallbackScreen from './src/CallbackScreen';
import HomeScreen from './src/HomeScreen';
import MemoScreen from './src/MemoScreen';
import RefScreen from './src/RefScreen';
import ImperativeHandleScreen from './src/ImperativeHandleScreen';
import MemoState from './src/MemoState';
import TestFlatList from './src/TestFlatList';
import SingleFlatlist from './src/SingleFlatlist';
import MultipleRender from './src/MultipleRender';
import SingleRender from './src/SingleRender';
import TestScrollView from './src/TestScrollView';
import AnimatedTest from './src/Animated';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />    
        <Stack.Screen name="Flatlist" component={TestFlatList} />
        <Stack.Screen name="SingleFlatlist" component={SingleFlatlist} />
        <Stack.Screen name="MultipleRender" component={MultipleRender} />
        <Stack.Screen name="SingleRender" component={SingleRender} />
        <Stack.Screen name="TestScrollView" component={TestScrollView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}