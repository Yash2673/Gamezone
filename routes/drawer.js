import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'

import homeStack from './homeStack';
import aboutStack from './aboutStack';
import React,{ Component } from 'react';

const Drawer = createDrawerNavigator();

export default class drawer extends Component{
    render(){
        return(    
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={homeStack} />
                    <Drawer.Screen name="About" component={aboutStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}