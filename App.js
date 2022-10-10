import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';

import Colors from './components/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import DetailScreen from './screen/DetailScreen';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ marginLeft: 5, width: 40, height: 40 }}
      source={require('./assets/images/Health.png')}
    />
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{
              headerLeft: (props) => <LogoTitle {...props} />,
              headerTitle: 'HealthCare',
              headerStyle: {
                backgroundColor: Colors.main,
              },
              headerTintColor: Colors.main,
              headerTitleStyle: {
                fontWeight: 'bold',
                color: Colors.white,
              },
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Register"
            options={{
              title: 'HealthCare - Registrar',
              headerLeft: (props) => <LogoTitle {...props} />,
              headerStyle: {
                backgroundColor: Colors.main,
              },
              headerTintColor: Colors.main,
              headerTitleStyle: {
                fontWeight: 'bold',
                color: Colors.white,
              },
            }}
            component={RegisterScreen}
          />
          <Stack.Screen
            name="Detail"
            options={{
              title: 'HealthCare',
              headerLeft: (props) => <LogoTitle {...props} />,
              headerStyle: {
                backgroundColor: Colors.main,
              },
              headerTintColor: Colors.main,
              headerTitleStyle: {
                fontWeight: 'bold',
                color: Colors.white,
              },
            }}
            component={DetailScreen}
          />
          <Stack.Screen
            name="Home"
            options={{
              title: 'HealthCare',
              headerLeft: (props) => <LogoTitle {...props} />,
              headerStyle: {
                backgroundColor: Colors.main,
              },
              headerTintColor: Colors.main,
              headerTitleStyle: {
                fontWeight: 'bold',
                color: Colors.white,
              },
            }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
