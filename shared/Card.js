import React from 'react';
import {StyleSheet,View} from 'react-native';

export default function Card(props){
    return(
        <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer : {
        borderRadius : 6,
        elevation : 3,
        backgroundColor : '#fff',
        shadowOffset : {width:1,height:1},
        shadowColor  : '#333',
        shadowOpacity : 0.3,
        shadowRadius :2,
        marginVertical : 7,
        marginHorizontal :4
    },
    cardContent : {
        marginVertical:10,
        marginHorizontal:18
    }
})