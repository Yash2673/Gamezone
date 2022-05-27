import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import About from '../Screens/About';
import Header from '../shared/Header';

const {Navigator,Screen} = createStackNavigator();

const AboutNavigator = () => (
    <Navigator headerMode="screen">
        <Screen 
            name="About" component={About} 
            options={({navigation}) => ({
                headerTitle : () => <Header navigation={navigation} title="About"/>
            })} 
        />
    </Navigator>
);

export default AboutNavigator