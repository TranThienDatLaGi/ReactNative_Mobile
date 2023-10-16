import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screen01 from './Screen01'
import screen02 from './Screen02'
import { createContext, useState } from 'react';
const stack = createNativeStackNavigator();

export let MyConText = createContext();
export default function App() {
  let [image, setImage] = useState(require('./assets/joy3blue.jpg'))
  return (
    <MyConText.Provider value={{ image, setImage }}>
      <NavigationContainer>
        <stack.Navigator initialRouteName='screen01'>
          <stack.Screen name='screen01' component={screen01} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name='screen02' component={screen02} options={{ headerShown: false }}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </MyConText.Provider>

  );
}
