import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default class About extends Component {
    render(){
        return(
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>About Screen. Hey there.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding  : 30
    }
})