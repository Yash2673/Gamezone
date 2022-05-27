import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";
import Header from '../shared/Header';

const {Navigator,Screen} = createStackNavigator();

const HomeNavigator = () => (
    <Navigator headerMode="screen">
        <Screen 
            name="Home" component={Home} 
            options={({navigation}) => ({
                headerTitle : () => <Header navigation={navigation} title="GameZone"/>
            })}
        />
        <Screen 
            name="Details" component={ReviewDetails} 
            options={{title:'Ratings',headerStyle:{backgroundColor:'lightblue'}}} 
        />
    </Navigator>
);

export default HomeNavigator