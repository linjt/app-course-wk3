import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import WishListScreen from '../screens/WishListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackNavigator"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="StackNavigator" 
        component={StackNavigator}
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 30
          },
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen 
        name="WishList" 
        component={WishListScreen} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 30
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen 
        name="MyBooks" 
        component={MyBooksScreen} 
        options={{
          title: "My Books",
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 30
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BookScreen}
        options={{
          title:" ",
          headerStyle:{
            backgroundColor: "#FFF",
          },
          headerShadowVisible: false, //把header的shadow關掉
          headerLeft:()=>(<FontAwesome name="navicon" size={25} /> ),
          headerRight:()=>(<MaterialCommunityIcons name="bookmark-outline" size={30} /> )
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title:" ",
          headerStyle:{
            backgroundColor: "#FFF",
          },
          headerShadowVisible: false, //把header的shadow關掉
          headerRight:()=>(<MaterialCommunityIcons name="bookmark-outline" size={30} /> )
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;