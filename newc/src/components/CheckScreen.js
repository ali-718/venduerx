import React, { Component } from 'react'
import { Text, StyleSheet, View,Button ,ImageBackground,ScrollView } from 'react-native'
import Login from './Login'

export default class CheckScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground
            source={require('./flydub.jpg')}
            style={{width:'100%', height:'100%'}}
            >
               <ScrollView style={styles.scrollView}>
               <View>
                   <Text style={styles.title}>Participant Acces</Text>
                  
               </View>
          <View  style={styles.buttoncont}>
           <Button
           
            title= "History"
            color="orange"
            onPress={() => navigate('Hist')}
            />
            </View>
            <View  style={styles.buttoncont}>
           <Button
           
            title= "Create process"
            color="orange"
            onPress={() => navigate('Details')}
            />
           
           {/* <Button
           
            title= "Create process"
            color="#F07D21"
            onPress={() => navigate('Details')}
            /> */}
            </View>
              {/* <Login/> */}
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
    
   







    textt:{
        fontSize:35,
      
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
    buttoncont:{
        backgroundColor:"#0652DD",
        paddingVertical:15,
        borderRadius:25,
        padding: 25,
        alignContent:"center",
        marginBottom:20
      },
    titlewraper:{
        flex: 1,
        justifyContent:"center"

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
