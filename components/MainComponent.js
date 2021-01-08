import React, { Component } from 'react';

import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator, DrawerContentScrollView,DrawerItemList,DrawerButton} from '@react-navigation/drawer'

class Main extends Component {
  
    
  render() {
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();
    const option =(navigation)=>(
      {
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: "#fff"
        }
      }
    ) 
    const MenuNavigator= ()=>{
      return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={({navigation})=>option(navigation)}>
        <Stack.Screen name="Menu" component={Menu} 
        options={({ navigation }) => ({
          title: 'Menu',
          headerLeft: () => (
            // console.log(navigation)
            <Icon
              name ='menu' size={24}
              color='white'
              onPress={()=>navigation.toggleDrawer()}
            />
          )
        })}
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
        
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: 'Home',
              headerLeft: () => (
                // console.log(navigation)
                <Icon
                  name ='menu' size={24}
                  color='white'
                  onPress={()=>navigation.toggleDrawer()}
                />
              )
            })}
        />

        </Stack.Navigator>
      )
    }
    const ContactNavigator = ()=>{
      return(
        <Stack.Navigator initialRouteName="Contact" screenOptions={option}>
        <Stack.Screen name="Contact" component={Contact} 
        options={({ navigation }) => ({
          title: 'Contact',
          headerLeft: () => (
            // console.log(navigation)
            <Icon
              name ='menu' size={24}
              color='white'
              onPress={()=>navigation.toggleDrawer()}
            />
          )
        })}
          />

        </Stack.Navigator>
      )
    }
    const AboutNavigator = ()=>{
      return(
        <Stack.Navigator initialRouteName="About" screenOptions={option}>
        <Stack.Screen name="About" component={About} 
        options={({ navigation }) => ({
          title: 'About',
          headerLeft: () => (
            // console.log(navigation)
            <Icon
              name ='menu' size={24}
              color='white'
              onPress={()=>navigation.toggleDrawer()}
            />
          )
        })}
          />

        </Stack.Navigator>
      )
    }

    const CustomDrawerContentComponent = (props) => (
      <DrawerContentScrollView {...props}>
        
          <View style={styles.drawerHeader}>
            <View style={{flex:1}}>
            <Image source={require('./images/logo.png')} style={styles.drawerImage} />
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
            </View>
          </View>
          <DrawerItemList {...props} />
        
      </DrawerContentScrollView >
    );

    const MainNavigator= ()=> {
      return (
        <Drawer.Navigator drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }}
        drawerContent={(props)=><CustomDrawerContentComponent {...props}/>}
        >
          <Drawer.Screen name="Home" component={HomeNavigator} 
          options={{title: 'Home', 
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor, focused }) => (
                  <Icon
                    name='home'
                    type='font-awesome'            
                    size={24}
                    color={tintColor}
                  />
                )}}/>
          <Drawer.Screen name="Contact" component={ContactNavigator} 
          options={{title: 'Contact',
           drawerLabel: 'Contact',
           drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='address-card'
              type='font-awesome'            
              size={22}
              color={tintColor}
            />
          )}}/>
          <Drawer.Screen name="Menu" component={MenuNavigator} 
          options={{title: 'Menu',
           drawerLabel: 'Menu',
           drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='list'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )}}/>
          
          <Drawer.Screen name="About" component={AboutNavigator} 
          options={{title: 'About',
           drawerLabel: 'About',
           drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='info-circle'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )}}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});
  
export default Main;