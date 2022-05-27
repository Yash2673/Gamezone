import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function FlatButton({title,onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 14,
        backgroundColor : 'lightblue'
    },
    buttonText : {
        color: 'white',
        fontWeight  : 'bold',
        textAlign : 'center',
        textTransform : 'uppercase',
        fontSize : 20
    }
})