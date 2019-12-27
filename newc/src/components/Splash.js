import React, { Component } from 'react'
import { Text, StyleSheet, View,Button,TouchableOpacity,ImageBackground,TextInput } from 'react-native'

export default class Splash extends Component {
    constructor(props) {
 
        super(props)
     
        this.state = {
            isLogin:false,
            datasource:null
        }
    }

    render() {

        const {navigate} = this.props.navigation;
        return (
            <ImageBackground
            
            source={require('./flydub.jpg')}
            style={{width:'100%', height:'100%'}}
            >
            <View style={style.wrapper}>
             <View style={style.titlewraper}>  
              <Text style={style.title}> Fly-Dubai </Text> 
              <View style={style.buttoncont}>
            <Button
            style={style.buttoncont}
            title= "Sign-Up"
            color="#F07D21"
            onPress={() => navigate('Home')}
            />
           </View>

{/* 
           <TextInput
             style={style.input}
             placeholder="Enter ID"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"
             onSubmitEditing={()=>this.passwordInput.focus()}
             keyboardType="Default"
             autoCapitalize='none'
             autoCorrect={false}
             />  
             <TextInput
             style={style.input}
             placeholder="Enter ID"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="Default"
             onSubmitEditing={()=>this.passwordInput.focus()}
             keyboardType="numeric"
             autoCapitalize='none'
             autoCorrect={false}
             />   */}
           <View  style={style.buttoncont}>

           <Button
           
            title= "Login"
            color="#F07D21"
            onPress={() => navigate('Check')}
            />
            </View>
            {/* <View  style={style.buttoncont}>
           <Button
           
            title= "History"
            color="#F07D21"
            onPress={() => navigate('Hist')}
            />
            </View> */}
              {/* <Button */}
              {/* <TouchableOpacity style={style.buttoncont}
                  title ="Go to history"
                  
                 onPress={() => navigate('Hist')}
                 
            /> */}
            {/* /> */}
            
              {/* <TouchableOpacity style={style.buttoncont}>
                 <Text style={style.buttontext}>sign-up</Text>
                 onPress={() => this.props.navigation.navigate('Details')}
             </TouchableOpacity> */}
             {/* <Button
             title = "SignUp"
             color = "black"
             onPress = {() => this.props.navigation.navigate('SignUp')}
             /> */}
             {/* <TouchableOpacity style={style.buttoncont}>
                 <Text style={style.buttontext}>sign-up</Text>
             </TouchableOpacity> */}
               </View>
               {/* <TouchableOpacity style={style.buttoncont}>
                 <Text style={style.buttontext}>sign-up</Text>
             </TouchableOpacity> */}
             
            <View> 
             <Text style={style.subtitle}> powerd by endureblock </Text> 
           </View>
            </View>
            </ImageBackground>
        );
    }
}

const style =StyleSheet.create({
    wrapper: { 
        // backgroundColor:'#F07D21',
        flex: 1, 
        justifyContent: "center",
        alignItems:"center"
     },
     title: {
        color: '#EE5A24',
        fontSize:35,
        fontWeight:'bold',
        marginBottom:20,
        justifyContent:"center"
        
     },
    
    subtitle: {
        color:'#EE5A24',
        fontWeight:'200',
        paddingBottom:20
    }, 
    titlewraper:{
        flex: 1,
        justifyContent:"center"

    },
    input:{
        height:40,
        backgroundColor:'#4A75B9',
        marginBottom:10,
        color:'#F07D21',
        paddingHorizontal:10,
        borderRadius:25
        
    },
    buttoncont:{
        backgroundColor:"#0652DD",
        paddingVertical:15,
        borderRadius:25,
        padding: 25,
        alignContent:"center",
        marginBottom:10
        
        
    },
    buttontext:{
        textAlign:'center',
        color:"white",
        fontWeight:'700',
        
    },
})