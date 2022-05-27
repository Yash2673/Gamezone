import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Header({navigation,title}){

    const openMenu = () => {
        navigation.openDrawer()
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image source={require("../assets/Star-logo.png")} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : 360,
        height : 55,
        flexDirection : 'row',
        flex :1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor:'lightblue',
        position:'relative',
        left:-15,
    },
    headerText : {
        fontWeight: 'bold',
        fontSize : 28,
        letterSpacing : 1
    },
    icon : {
        position : 'absolute',
        left : 16
    },
    headerImage : {
        height : 40,
        width : 40
    },
    headerTitle : {
        flexDirection : 'row'
    }
})