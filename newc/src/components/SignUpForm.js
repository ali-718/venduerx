import React, { Component } from 'react'

import { Text, View,Button, StyleSheet,  TextInput,TouchableOpacity,StatusBar,Picker ,Alert,ImageBackground} from 'react-native'

export default class SignUp extends Component {
    // constructor(props) {
 
    //     super(props);
     
    //     this.state = {
     
    //       time: ''
        
    //     };
    //   }
     
    //   componentDidMount() {
     
    //     this.Clock = setInterval( () => this.GetTime(), 1000 );
     
    //   }
     
    //   componentWillUnmount(){
     
    //     clearInterval(this.Clock);
     
    //   }
     
    //   GetTime() {
     
    //     // Creating variables to hold time.
    //     var date, TimeType, hour, minutes, seconds, fullTime;
     
    //     // Creating Date() function object.
    //     date = new Date();
     
    //     // Getting current hour from Date object.
    //     hour = date.getHours(); 
     
    //     // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    //     if(hour <= 11)
    //     {
     
    //       TimeType = 'AM';
     
    //     }
    //     else{
     
    //       // If the Hour is Not less than equals to 11 then Set the Time format as PM.
    //       TimeType = 'PM';
     
    //     }
     
     
    //     // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    //     if( hour > 12 )
    //     {
    //       hour = hour - 12;
    //     }
     
    //     // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
    //     if( hour == 0 )
    //     {
    //         hour = 12;
    //     } 
     
     
    //     // Getting the current minutes from date object.
    //     minutes = date.getMinutes();
     
    //     // Checking if the minutes value is less then 10 then add 0 before minutes.
    //     if(minutes < 10)
    //     {
    //       minutes = '0' + minutes.toString();
    //     }
     
     
    //     //Getting current seconds from date object.
    //     seconds = date.getSeconds();
     
    //     // If seconds value is less than 10 then add 0 before seconds.
    //     if(seconds < 10)
    //     {
    //       seconds = '0' + seconds.toString();
    //     }
     
     
    //     // Adding all the variables in fullTime variable.
    //     fullTime = hour.toString() + ':' + minutes.toString() + ':' + seconds.toString() + ' ' + TimeType.toString();
     
     
    //     // Setting up fullTime variable in State.
    //     this.setState({
     
    //       time: fullTime
     
    //     });
    //   }
     
    //   showTime=()=>{
     
    //       Alert.alert(this.state.time.toString()) ;
     
    //   }
   
    render() {
       
        return (
        //    <ImageBackground style={styles.imgcont}
        //    source={require('./src/images/flydubai-01.jpg')}
        //    >

        //    </ImageBackground>
            <View style={styles.container}>
                <StatusBar
                barStyle="light-content"
                />
               <View style={styles.MainContainer}>
 
 {/* <Text style={styles.TextStyle}> {this.state.time} </Text> */}

 {/* <Button title='Click Here To Get Current Time' onPress={this.showTime} /> */}

</View>
                <Text style={styles.text}>Start Process</Text>
             {/* <TextInput
             style={styles.input}
             placeholder="Enter email"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"
             onSubmitEditing={()=>this.passwordInput.focus()}
             keyboardType="email-address"
             autoCapitalize='none'
             autoCorrect={false}
             />   */}
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
             />  */}
             {/* <TouchableOpacity style={styles.buttoncont}>
                 <Text style={styles.buttontext}>sign-up</Text>
             </TouchableOpacity> */}
             
             {/* <View> 
             <Text style={styles.subtitle}> powerd by endureblock </Text> 
           </View> */}
             </View>
             
        )
    }
}

const styles = StyleSheet.create({
    // imgcont:{
    //     width:'100%',
    //     height:'100%',
    // },
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
        backgroundColor:"#F07D21",
        paddingVertical:15,
        borderRadius:25
        
        
    },
    buttontext:{
        textAlign:'center',
        color:"white",
        fontWeight:'700',
        
    },
    // subtitle: {
    //     color:'white',
    //     fontWeight:'200',
    //     paddingBottom:20
    // },
})
