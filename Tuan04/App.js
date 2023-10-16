import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import screen2_a from './2_a'
import screen2_b from './2_b'
import screen2_c from './2_c'
import screenTiki from './Tiki'

let tab = createMaterialTopTabNavigator()
function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name='2_a' component={screen2_a} ></tab.Screen>
        <tab.Screen name='2_b' component={screen2_b} ></tab.Screen>
        <tab.Screen name='2_c' component={screen2_c} ></tab.Screen>
        <tab.Screen name='Tiki_OK' component={screenTiki}></tab.Screen>
      </tab.Navigator>
    </NavigationContainer>
  );
}
export default App
