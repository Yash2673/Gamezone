import React, { Component } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import {MaterialIcons} from '@expo/vector-icons'
import { globalStyles } from '../styles/globalStyles';
import ModalForm from './ModalForm';

export default class Home extends Component {
    state = {
        reviews : [
            {title : 'Yeh Jawaani Hai Dewaani', rating:5,body:'lorem ipsum',key:'1'},
            {title : 'Zindagi Na Milegi Dobaara', rating:4,body:'lorem ipsum',key:'2'},
            {title : 'Phir Hera Pheri', rating:3,body:'lorem ipsum',key:'3'},
        ],
        modalVisibility : false
    }

    modalToggle = () => {
        this.setState({
            modalVisibility : !this.state.modalVisibility
        })
    }

    addReview = (item) => {
        item.key = Math.random().toString();
        this.setState({
            reviews : [...this.state.reviews,item]
        })
        this.modalToggle;
    }

    render(){
        return(
            <View style={globalStyles.container}>

                <Modal visible={this.state.modalVisibility} animationType="slide">
                    <View style={styles.modalContent}>
                        <MaterialIcons name="close" size={35} style={styles.modalCloseButton} onPress={this.modalToggle} />
                        <ModalForm addReview={this.addReview}/>
                    </View>
                </Modal>
                <MaterialIcons name="add" size={35} style={styles.modalOpenButton} onPress={this.modalToggle} />

                <FlatList 
                    data={this.state.reviews}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity onPress={()=>this.props.navigation.push('Details',item)}>
                                <Card>
                                    <Text style={globalStyles.titleText}>{item.title}</Text>
                                </Card>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item)=>item.key}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalContent : {
        flex  : 1
    },
    modalOpenButton : {
        backgroundColor : 'white',
        borderRadius : 27.5,
        padding : 10,
        alignSelf : 'center',
        width : 55,
        height :55,
        marginBottom : 10,
        marginTop : -15
    },
    modalCloseButton : {
        alignSelf : 'flex-end',
        flexDirection : 'row',
        margin : 10
    }
})