import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import { Formik } from 'formik'
import { globalStyles } from '../styles/globalStyles'
import { TextInput } from 'react-native-gesture-handler'
import * as yup from 'yup';
import FlatButton from '../shared/FlatButton'

const reviewSchema = yup.object({
    title : yup.string().required().min(4),
    body : yup.string().required().min(8),
    rating : yup.string().required().test('is-num','Rating must be within 1-5',(val)=>{
        return parseInt(val)<6 && parseInt(val)>0
    })
});

export default function ModalForm ({addReview}) {
    return(
        <View style={globalStyles.container}>
            <Text style={styles.textHeader}>Add a Review</Text>
            <Formik 
                initialValues={{title:'',body:'',rating:''}} 
                validationSchema={reviewSchema}
                onSubmit={(values,actions)=> {
                    addReview(values);
                    actions.resetForm();
                }}>
                {(props)=>(
                    <View>
                        <TextInput placeholder="Title" style={styles.input} 
                            onChangeText={props.handleChange('title')} value={props.values.title} />
                        <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput placeholder="Body" style={styles.input} minHeight={60}
                            onChangeText={props.handleChange('body')} value={props.values.body} multiline />
                        <Text style={styles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput placeholder="Rating(1-5)" style={styles.input} 
                            onChangeText={props.handleChange('rating')} value={props.values.rating} keyboardType="numeric" />
                        <Text style={styles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton title = "submit" onPress={props.handleSubmit} />  
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        borderColor : 'black',
        borderWidth : 1,
        borderRadius : 6,
        padding : 10,
        fontSize : 20,
        margin : 10
    },
    submitButton : {
        width : 100,
        marginTop : 20,
        alignSelf: 'center'
    },
    textHeader : {
        alignSelf: 'center',
        fontFamily : 'redressed',
        fontSize : 40,
        marginBottom : 10,
        marginTop : -40
    },
    errorText : {
        color : 'crimson',
        textAlign : 'center',
        marginTop : 10,
        marginBottom : 10,
        fontSize : 15
    }
})