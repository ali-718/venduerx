import React, { Component } from 'react'
import {  View,Button, StyleSheet,  TextInput,TouchableOpacity,StatusBar,Picker ,Alert, Text, SafeAreaView, ScrollView,Dimensions } from 'react-native';
import Constants from 'expo-constants';

const{height,screenWidth} = Dimensions.get('window')
export default class NsForm extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}
       vertical={true}
       pagingEnabled={true}
       showsVerticalScrollIndicator={true}
       ref={(node) => this.scroll = node}
     
      >
      <View style={styles.container}>
                <StatusBar
                barStyle="light-content"
               
                />
               <View style={styles.MainContainer}>
 
 

 {/* <Button title='Click Here To Get Current Time' onPress={this.showTime} /> */}

</View>

{/* first id and button */}
      <Text style={styles.text}>Create Aircraft</Text>
             <TextInput
             style={styles.input}
             placeholder="Enter ID"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"
             onSubmitEditing={()=>this.passwordInput.focus()}
             keyboardType="numeric"
             autoCapitalize='none'
             autoCorrect={false}
             />  
               <Button
             style={styles.buttoncont}
             title="Login"
             onPress={() => { this.scroll.scrollTo({ y: 150 }) }}
             />
{/* complete id and buttn */}

 <Text style={styles.text}>Enter your section</Text>
             <TextInput
            style={styles.input}
             placeholder="Enter ID"
            placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"
             onSubmitEditing={()=>this.passwordInput.focus()}
           keyboardType="numeric"
             autoCapitalize='none'
             autoCorrect={false}
              />  
                <Button
              style={styles.buttoncont}
             title="Login"
             onPress={() => { this.scroll.scrollTo({ y: 150 }) }}
            
              />
              <Button
            style={styles.buttoncont}
            title= "Go to SignUp"
           
            />
        <Button
            style={styles.buttoncont}
            title= "Go to Login"
            
            />
    
    {/* <View style={styles.ButtonContainer}>
         <Button title="Screen 1" onPress={() => { this.scroll.scrollTo({ x: 0 }) }} />
     </View>


    <View style={styles.ButtonContainer}>
        <Button title="Screen 2" onPress={() => { this.scroll.scrollTo({ x: screenWidth }) }} />
    </View>
    <View style={styles.ButtonContainer}>
        <Button title="Screen 3" onPress={() => { this.scroll.scrollTo({ x: screenWidth * 2 }) }} />
    </View> */}
    
    

          {/* <TextInput
             style={styles.input}
             ref={(input)=>this.passwordInput = input}
             placeholder="Password"
             placeholderTextColor="rgba(255,255,255,0.6)"
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={()=>this.CpasswordInput.focus()}
             />  */}
             {/* <TextInput
             ref={(input)=>this.CpasswordInput = input}
             style={styles.input}
             placeholder="Confirm password"
             placeholderTextColor="rgba(255,255,255,0.6)"
             secureTextEntry
             returnKeyType="next"
             /> */}
              </View>
      </ScrollView>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    
    // backgroundColor: 'orange',
    // marginHorizontal: 20,
    marginTop:80,
  },
  text: {
    fontSize: 42,
  },
  TextStyle:
  {
     fontSize: 26,
     textAlign: 'center',
     color: '#F07D21',
     marginBottom: 20,
     
  },
    container:{
        padding: 15
    },
    text:{
      marginTop:50,
        fontSize:35,
        color:'#F07D21',
        textAlign:"center",
        marginBottom:10
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
      backgroundColor:"red",
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
});

