import React, { Component } from 'react'
import { StyleSheet, View , KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'



export default class Login extends Component {
    // static navigationOptions = {
    //     title: 'Login'
    // }
   
    render() {
       
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                {/* <View style={styles.logocont}>

                </View> */}
                <View style={styles.formcont}>
                <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor: '#1B549D'
    },
    logocont:{

    },
    formcont:{
        
        justifyContent:'center',
        flexGrow:2
    },

})
