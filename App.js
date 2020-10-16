import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import icons
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

//imports the screens for the app
import Home from "./screens/Home"
import Show from './screens/Show';
import Movie from './screens/Movie';
import Anime from './screens/Anime';
import About from './screens/About';


//creates a drawer and root tab navigation for navigation 
const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();


const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",
        activeBackgroundColor: "#FFD322",
        labelStyle: {
          fontSize: 14,
          fontWeight: "700", 
        },
        style: {
          backgroundColor: "#00B29E",
        }
      }}
    >
      <RootTab.Screen
        name="Favorite Show"
        component={Show}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="tv" size={18} color={focused ? "white" : "black"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Favorite Movie"
        component={Movie}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="local-movies" size={22} color={focused ? "white" : "black"}/>
          ),
        }}
      />
      <RootTab.Screen
        name="Anime"
        component={Anime}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="animation" size={22} color={focused ? "white" : "black"}/>
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About}/>
      <Drawer.Screen name="Show" component={RootTabNavigator}/>
      {/* <Drawer.Screen name="ScrollViewScreen" component={ScrollViewScreen} />
      <Drawer.Screen name="FlatListScreen" component={FlatListScreen} />
      <Drawer.Screen name="SectionListScreen" component={SectionListScreen} />
      <Drawer.Screen name="Animations" component={RootTabNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}