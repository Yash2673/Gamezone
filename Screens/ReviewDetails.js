import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/Card';
import { globalStyles,images } from '../styles/globalStyles';

export default class ReviewDetails extends Component {

    render(){
        const {route} = this.props;
        const {title,body,rating} = route.params;
        return(
            <View style={globalStyles.container}>
                <Card>
                    <Text>{title}</Text>
                    <Text>{body}</Text>
                    <View style={styles.rating}>
                        <Text>GameZone rating : </Text>
                        {rating===5 ? <Image source={images.ratings[rating]} style={{height:20,width:120}} /> : 
                            rating===4 ? <Image source={images.ratings[rating]} style={{height:25,width:90}} />: 
                            rating===3 ? <Image source={images.ratings[rating]} style={{height:20,width:70}} /> :
                            rating===2 ? <Image source={images.ratings[rating]} style={{height:30,width:50}} />: 
                            <Image source={images.ratings[rating]} style={{height:20,width:25}} />}
                    </View>
                </Card>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding  : 30
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:16,
        paddingTop:16,
        borderTopColor:'black',
        borderTopWidth:1
    }
})