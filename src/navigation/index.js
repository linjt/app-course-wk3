import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="StackNavigator" 
        component={StackNavigator}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarItemStyle:{
            padding: 2
          },
          tabBarLabelStyle: {
            fontWeight: '600',
            fontSize: 12,
            letterSpacing: 0.6,
          }
        }}
      />
      <Tab.Screen 
        name="WishList" 
        component={WishListScreen} 
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={30} />
          ),
          tabBarItemStyle:{
            padding: 2
          },
          tabBarLabelStyle: {
            fontWeight: '600',
            fontSize: 12,
            letterSpacing: 0.6,
          }
        }}
      />
      <Tab.Screen 
        name="MyBooks" 
        component={MyBooksScreen} 
        options={{
          title: "My Books",
          headerTitleContainerStyle:{
            margin: 100
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={30} />
          ),
          tabBarItemStyle:{
            padding: 2
          },
          tabBarLabelStyle: {
            fontWeight: '600',
            fontSize: 12,
            letterSpacing: 0.6,
          }
        }}
      />
    </Tab.Navigator>
  );
}

const StackNavigator = ({ navigation: { goBack }}) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
      setToggle(!toggle);
  };
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
          headerLeft:()=>(
            <TouchableOpacity>
              <FontAwesome name="navicon" size={25} />
            </TouchableOpacity>
          ),
          headerRight:()=>(
            <TouchableOpacity>
              <FontAwesome 
                name="search" 
                size={27}
              />            
            </TouchableOpacity>
          ),
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
          headerLeft:()=>(
            <TouchableOpacity
              onPress={() => goBack()}
            >
              <Ionicons name="chevron-back" size={27} />
            </TouchableOpacity>
          ),
          headerRight:()=>(
            <TouchableOpacity  onPress={() => toggleFunction()}>
              {toggle?
                <FontAwesome name="bookmark-o" color="#666" size={27} /> : <FontAwesome name="bookmark" color="#6200EE" size={27} />   
              }
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;