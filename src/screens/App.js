import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();


const loadLog = async () => {
  try{
    const storageLog = await AsyncStorage.getItem('storageLog');
    if(storageLog !== null) {
      return storageLog;
    }
  } catch (error) {
    console.log("Erro ao carregar");
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  <Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={{ headerShown: false }}
/>

}
