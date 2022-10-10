import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeTab from '../tabs/HomeTab';
import ProfileTab from '../tabs/ProfileTab';
import ScheduleTab from '../tabs/ScheduleTab';

const Tabs = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <Tabs.Navigator
      navigationOptions={({ navigation }) => {
        let tabBarVisible = true;

        let routeName =
          navigation.state.routes[navigation.state.index].routeName;

        if (routeName == 'Detail') {
          tabBarVisible = false;
        }

        return {
          tabBarVisible,
        };
      }}
      screenOptions={({ route }) => ({
        "tabBarActiveTintColor": "#9C27B0",
        "tabBarInactiveTintColor": "#777",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ],
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Início':
              iconName = 'home';
              break;
            case 'Agenda':
              iconName = 'list';
              break;
            case 'Perfil':
              iconName = 'cog';
              break;
            default:
              iconName = 'heart';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      >
      <Tabs.Screen
        name="Início"
        options={{ headerShown: false }}
        component={HomeTab}
      />
      <Tabs.Screen
        name="Agenda"
        options={{ headerShown: false }}
        component={ScheduleTab}
      />
      <Tabs.Screen
        name="Perfil"
        options={{ headerShown: false }}
        component={ProfileTab}
      />
    </Tabs.Navigator>
  );
}

export default HomeScreen;
