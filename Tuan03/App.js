import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import App_1_a from './App_1_a'
import App_1_b from './App_1_b'
import App_1_c from './App_1_c'
import App_1_d from './App_1_d'
import App_1_e from './App_1_e'
import App_2_a from './App_2_a'
import XMEye from './XMEye'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Home Screen</Text>
      <br></br>
      <Button
        title="Go to App_1_a"
        onPress={() => navigation.navigate('App_1_a')}
      />
      <br></br>
      <Button
        title="Go to App_1_b"
        onPress={() => navigation.navigate('App_1_b')}
      />
      <br></br>
      <Button
        title="Go to App_1_c"
        onPress={() => navigation.navigate('App_1_c')}
      />
      <br></br>
      <Button
        title="Go to App_1_d"
        onPress={() => navigation.navigate('App_1_d')}
      />
      <br></br>
      <Button
        title="Go to App_1_e"
        onPress={() => navigation.navigate('App_1_e')}
      />
      <br></br>
      <Button
        title="Go to App_2_a"
        onPress={() => navigation.navigate('App_2_a')}
      />
      <br></br>
      <Button
        title="Go to XMEye"
        onPress={() => navigation.navigate('XMEye')}
      />
      <br></br> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="App_1_a" component={App_1_a} options={{ headerShown: false }} />
        <Stack.Screen name="App_1_b" component={App_1_b} options={{ headerShown: false }} />
        <Stack.Screen name="App_1_c" component={App_1_c} options={{ headerShown: false }} />
        <Stack.Screen name="App_1_d" component={App_1_d} options={{ headerShown: false }} />
        <Stack.Screen name="App_1_e" component={App_1_e} options={{ headerShown: false }} />
        <Stack.Screen name="App_2_a" component={App_2_a} options={{ headerShown: false }} />
        <Stack.Screen name="XMEye" component={XMEye} options={{ headerShown: false }} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="1_a" component={App_1_a} options={{ headerShown: false }} />
        <Tab.Screen name="1_b" component={App_1_b} options={{ headerShown: false }} />
        <Tab.Screen name="1_c" component={App_1_c} options={{ headerShown: false }} />
        <Tab.Screen name="1_d" component={App_1_d} options={{ headerShown: false }} />
        <Tab.Screen name="1_e" component={App_1_e} options={{ headerShown: false }} />
        <Tab.Screen name="2_a" component={App_2_a} options={{ headerShown: false }} />
        <Tab.Screen name="XMEye" component={XMEye} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
