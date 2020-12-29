import React, { Component } from 'react';

import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

class Main extends Component {
  
    
  render() {
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();
    const option = {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: "#fff"
      },
    }
    const MenuNavigator= ()=>{
      return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={option}>
        <Stack.Screen name="Menu" component={Menu} 
        options={{ title: 'Menu'}}
          />

        <Stack.Screen name="Dishdetail" component={Dishdetail} 
        options={{ title: 'dish detail' }}
          />
        </Stack.Navigator>
      )
    }
    const HomeNavigator= ()=>{
      return (
        <Stack.Navigator initialRouteName="Home" screenOptions={option}>
        <Stack.Screen name="Home" component={Home} 
        options={{ title: 'Home'}}
          />

        </Stack.Navigator>
      )
    }
    const ContactNavigator = ()=>{
      return(
        <Stack.Navigator initialRouteName="Contact" screenOptions={option}>
        <Stack.Screen name="Contact" component={Contact} 
        options={{ title: 'Contact'}}
          />

        </Stack.Navigator>
      )
    }
    const AboutNavigator = ()=>{
      return(
        <Stack.Navigator initialRouteName="About" screenOptions={option}>
        <Stack.Screen name="About" component={About} 
        options={{ title: 'About'}}
          />

        </Stack.Navigator>
      )
    }
    const MainNavigator= ()=> {
      return (
        <Drawer.Navigator drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }} >
          <Drawer.Screen name="Home" component={HomeNavigator} options={{title: 'Home', drawerLabel: 'Home'}}/>
          <Drawer.Screen name="Contact" component={ContactNavigator} options={{title: 'Contact', drawerLabel: 'Contact'}}/>
          <Drawer.Screen name="Menu" component={MenuNavigator} options={{title: 'Menu', drawerLabel: 'Menu'}}/>
          
          <Drawer.Screen name="About" component={AboutNavigator} options={{title: 'About', drawerLabel: 'About'}}/>
        </Drawer.Navigator>
      );
    }

    return (

        <NavigationContainer>
          <MainNavigator/>
      </NavigationContainer>

    );
  }
}
  
export default Main;