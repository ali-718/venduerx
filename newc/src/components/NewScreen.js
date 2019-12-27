import React, { Component } from 'react'
import { Text, StyleSheet, View ,ImageBackground} from 'react-native'
import NsForm from './NsForm'
import { Link } from 'react-scroll'
import { Button } from 'react-native-paper'

export default class NewScreen extends Component {
    
    render() {
         return (
            <ImageBackground
            source={require('./flydub.jpg')}
            style={{width:'100%', height:'100%'}}
            >
              <NsForm/>
              {/* <Button
             style={styles.buttoncont}
             title="Login"
             onPress={() => navigate('Screen')}
             /> */}
             
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    buttoncont:{
        backgroundColor:"#F07D21",
        paddingVertical:15,
        borderRadius:25
        
        
    },
    buttontext:{
        textAlign:'center',
        color:"#0652DD",
        fontWeight:'700',
        
    },
})
