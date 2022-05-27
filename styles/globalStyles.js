import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 40
    },
    titleText : {
        fontFamily : 'redressed',
        fontSize : 25
    },
    paragraph : {
        marginVertical : 8,
        lineHeight : 20
    }
})

export const images = {
    ratings : {
        1 : require('../assets/1-star.png'),
        2 : require('../assets/2-star.png'),
        3 : require('../assets/3-star.png'),
        4 : require('../assets/4-star.png'),
        5 : require('../assets/5-star.png'),
    }
}