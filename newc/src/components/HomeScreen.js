import React, { Component } from 'react'
import { Text, StyleSheet, View,Button ,ImageBackground,ScrollView } from 'react-native'
import Login from './Login'

export default class HomeScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground
            source={require('./flydub.jpg')}
            style={{width:'100%', height:'100%'}}
            >
               <ScrollView style={styles.scrollView}>
              <Login/>
              <View style={styles.wrapper}>
              <View style={styles.titlewraper}> 
              <View style={styles.buttoncont}>
               <Button
             
             title="Back"
             onPress={() => navigate('Splash')}
             />
             </View>
           </View>
             </View>

             </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    
    buttoncont:{
        backgroundColor:"#F07D21",
        paddingVertical:15,
        borderRadius:25,
        marginTop:60

        
        
    },
    scrollView: {
    
        // backgroundColor: 'orange',
        // marginHorizontal: 20,
        marginTop:20,
      },
    buttontext:{
        textAlign:'center',
        color:"white",
        fontWeight:'700',
        
    },
    
    wrapper: { 
        // backgroundColor:'#F07D21',
        flex: 1, 
        justifyContent: "center",
        alignItems:"center"
     },
     title: {
        color: 'black',
        fontSize:35,
        fontWeight:'bold',
        marginBottom:20
     },
})
