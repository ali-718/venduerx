import React, { Component } from 'react'

import { Text,View,Button, StyleSheet,  TextInput,TouchableOpacity,StatusBar,Picker ,Alert,ImageBackground} from 'react-native'
import axios from 'axios'

export default class LoginForm extends Component {
    constructor(props) {
 
        super(props)
     
        this.state = {
          time: '',
          userId:'',
          participantType:'',    
          aircraftId:'',
          flightStatus:'',  
          emailId:'',
          password:'',
          errors:''  
        }

    this.onCreateParticipants = this.onCreateParticipants.bind(this)

    this.onCreateFlight = this.onCreateFlight.bind(this)
    this.onCreateAircraft = this.onCreateAircraft.bind(this)

      }
      updateValue(text,field){
        if(field=='aircraftId'){
          this.setState({
            aircraftId:text,
          })
        }
        else if(field=='eaircraftId'){
          this.setState({
            eaircraftId:text,
          })
        }
        else if(field=='flightStatus'){
          this.setState({
            flightStatus:text,
          })
        }
        else if(field=='userId'){
          this.setState({
            userId:text,
          })
        }
        else if(field=='participantType'){
          this.setState({
            participantType:text,
          })
        }
        else if(field=='emailId'){
          this.setState({
            emailId:text,
          })
        }
        else if(field=='password'){
          this.setState({
            password:text,
          })
        }
        else if(field=='flightId'){
          this.setState({
            flightId:text,
          })
        }
      }
      componentDidMount() {
     
        this.Clock = setInterval( () => this.GetTime(), 1000 );
     
      }
  onCreateParticipants() {

    axios({
      method: 'post',
      url: 'http://192.168.0.113:3000/api/flightoperation.createStaff',
      data:  {
          "$class": "flightoperation.createStaff",
          "participantType": this.state.participantType,
          "userId": this.state.userId,
          "emailId": this.state.emailId,
          "password": this.state.password
        }
      })
      .then(function(response){
      console.log(response);
      Alert.alert(
        'Alert Title',
        "Participant Added",
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      })
      .catch(function(error){
  Alert.alert(
    'Alert Title',
    "Participant with this id already Exist or enter correct data",
    [
      {text: 'OK', onPress: () => console.warn('try using different Id')},
    ],
    {cancelable: false},
  );
      });

  }

  onCreateFlight() {



        axios({
    method: 'post',
    url: 'http://192.168.0.113:3000/api/flightoperation.createflight',
    data:  {
      "$class": "flightoperation.createflight",
      "aircraftId": this.state.aircraftId,
      "flightId": this.state.flightId,
      "flightStatus": this.state.flightStatus
    }
    })
    .then(function(response){
    console.log(response);
    Alert.alert(
      'Alert Title',
      "Flight Added to Aircraft",
      [
        {text: 'OK', onPress: () => console.warn('OK Pressed')},
      ],
      {cancelable: false},
    );
    })
    .catch(function(error){
Alert.alert(
  'Alert Title',
  "Flight with this id already Exist or Enter correct data",
  [
    {text: 'OK', onPress: () => console.warn('try using different Id')},
  ],
  {cancelable: false},
);
    });

  }
  onCreateAircraft(){    
    console.warn(this.state.eaircraftId)
    axios({
      method: 'post',
      url: 'http://192.168.0.113:3000/api/flightoperation.createAircraft',
      data: {
        "$class": "flightoperation.createAircraft",
        "aircraftId": this.state.eaircraftId
      }
      })
      .then(function(response){
      console.log(response);
      Alert.alert(
        'Alert Title',
        "Aircraft Added",
        [
          {text: 'OK', onPress: () => console.warn('OK Pressed')},
        ],
        {cancelable: false},
      );
      })
      .catch(function(error){
  Alert.alert(
    'Alert Title',
    "Aircraft with this id already Exist or Enter correct data",
    [
      {text: 'OK', onPress: () => console.warn('try using different Id')},
    ],
    {cancelable: false},
  );
      });
    
  }
  componentWillUnmount(){
    clearInterval(this.Clock);
  }
     
      GetTime() {
     
        // Creating variables to hold time.
        var date, TimeType, hour, minutes, seconds, fullTime;
     
        // Creating Date() function object.
        date = new Date();
     
        // Getting current hour from Date object.
        hour = date.getHours(); 
     
        // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
        if(hour <= 11)
        {
     
          TimeType = 'AM';
     
        }
        else{
     
          // If the Hour is Not less than equals to 11 then Set the Time format as PM.
          TimeType = 'PM';
     
        }
     
     
        // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
        if( hour > 12 )
        {
          hour = hour - 12;
        }
     
        // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
        if( hour == 0 )
        {
            hour = 12;
        } 
     
     
        // Getting the current minutes from date object.
        minutes = date.getMinutes();
     
        // Checking if the minutes value is less then 10 then add 0 before minutes.
        if(minutes < 10)
        {
          minutes = '0' + minutes.toString();
        }
     
     
        //Getting current seconds from date object.
        seconds = date.getSeconds();
     
        // If seconds value is less than 10 then add 0 before seconds.
        if(seconds < 10)
        {
          seconds = '0' + seconds.toString();
        }
     
     
        // Adding all the variables in fullTime variable.
        fullTime = hour.toString() + ':' + minutes.toString() + ':' + seconds.toString() + ' ' + TimeType.toString();
     
     
        // Setting up fullTime variable in State.
        this.setState({
     
          time: fullTime
     
        });
      }
     
      showTime=()=>{
     
          Alert.alert(this.state.time.toString()) ;
     
      }
     
   
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
 
 <Text style={styles.TextStyle}> {this.state.time} </Text>

 {/* <Button title='Click Here To Get Current Time' onPress={this.showTime} /> */}

</View>
                <Text style={styles.text}>Participant detail</Text>
            <Text style={styles.stext}>participantId</Text>

             <TextInput
             style={styles.input}
             placeholder="Enter participant Id"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"            
             autoCapitalize='none'
             autoCorrect={false}
            type="text"
            name="userId"
            onChangeText={(text)=>this.updateValue(text,'userId')}
            value={this.state.userId}
            id="userId"
             />
                         <Text style={styles.stext}>participantType</Text>
                         <Picker
  selectedValue={this.state.participantType}
  style={styles.input}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({participantType: itemValue})
  }>
<Picker.Item label="Select" value="noSelection" />
<Picker.Item label="Engineer" value="Engineer" />
  <Picker.Item label="CabinCrew" value="CabinCrew" />
  <Picker.Item label="Fueller" value="Fueller" />
  <Picker.Item label="RampTeamLeader" value="RampTeamLeader" />
  <Picker.Item label="RampTeam" value="RampTeam" />
  <Picker.Item label="BaggageMakeUpTeam" value="BaggageMakeUpTeam" />
  <Picker.Item label="CleaningTeam" value="CleaningTeam" />
  <Picker.Item label="CheckInTeam" value="CheckInTeam" />
  <Picker.Item label="GateTeam" value="GateTeam" />
  <Picker.Item label="GroundDispatcher" value="GroundDispatcher" />
  <Picker.Item label="PushBackTeam" value="PushBackTeam" />
  <Picker.Item label="GseTeam" value="GseTeam" />
  <Picker.Item label="LoadController" value="LoadController" />
  <Picker.Item label="Caterers" value="Caterers" />
  <Picker.Item label="Cleaners" value="Cleaners"/>
</Picker>


                          {/* <TextInput
             style={styles.input}
             placeholder="CabinCrew/etc......"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"            
             autoCapitalize='none'
             autoCorrect={false}
            type="text"
            name="participantType"
            onChangeText={(text)=>this.updateValue(text,'participantType')}
            value={this.state.participantType}
            id="participantType"
             />  */}
             <Text style={styles.stext}>emailId</Text>

            <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="rgba(255,255,255,0.6)"
            returnKeyType="next"            
            autoCapitalize='none'
            autoCorrect={false}
            type="text"
            name="emailId"
            onChangeText={(text)=>this.updateValue(text,'emailId')}
            value={this.state.emailId}
            id="emailId"
            />
            <Text style={styles.stext}>password</Text>

            <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.6)"
            returnKeyType="next"            
            autoCapitalize='none'
            autoCorrect={false}
            type="text"
            name="password"
            onChangeText={(text)=>this.updateValue(text,'password')}
            value={this.state.password}
            id="password"
            /> 
             <View style={styles.buttoncont}>
             <Button
            //  style={styles.buttoncont}
             title="Create-Staff"
             onPress={this.onCreateParticipants}
            //  onPress={() => navigate('Splash')}
             />
             </View> 
                             <Text style={styles.text}>CreateFlight</Text>

                    <Text style={styles.stext}>aircraftId</Text>
             <TextInput
             style={styles.input}
             placeholder="aircraftId"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"            
             autoCapitalize='none'
             autoCorrect={false}
            type="text"
            name="aircraftId"
            onChangeText={(text)=>this.updateValue(text,'aircraftId')}
            value={this.state.aircraftId}
            id="aircraftId"
             />
                    <Text style={styles.stext}>flightId</Text>
             <TextInput
             style={styles.input}
             placeholder="flightId"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"            
             autoCapitalize='none'
             autoCorrect={false}
            type="text"
            name="flightId"
            onChangeText={(text)=>this.updateValue(text,'flightId')}
            value={this.state.flightId}
            id="flightId"
             />

                    <Text style={styles.stext}>flightStatus</Text>

                          <TextInput
             style={styles.input}
             placeholder="OnHold/Approved/Rejected"
             placeholderTextColor="rgba(255,255,255,0.6)"
             returnKeyType="next"            
             autoCapitalize='none'
             autoCorrect={false}
            type="text"
            name="flightStatus"
            onChangeText={(text)=>this.updateValue(text,'flightStatus')}
            value={this.state.flightStatus}
            id="flightStatus"
             />  
             <View style={styles.buttoncont}>
             <Button
            //  style={styles.buttoncont}
             title="AddFlight"
             onPress={this.onCreateFlight}
             />
             </View>
             <View>
             <Text style={styles.text}>CreateAircraft</Text>

<Text style={styles.stext}>aircraftId</Text>
<TextInput
style={styles.input}
placeholder="aircraftId"
placeholderTextColor="rgba(255,255,255,0.6)"
returnKeyType="next"            
autoCapitalize='none'
autoCorrect={false}
type="text"
name="eaircraftId"
onChangeText={(text)=>this.updateValue(text,'eaircraftId')}
value={this.state.eaircraftId}
id="eaircraftId"
/>
<View style={styles.buttoncont}>
             <Button
            //  style={styles.buttoncont}
             title="AddAircraft"
             onPress={this.onCreateAircraft}
             />
             </View>
             </View>
             </View>
             
        )
    }
}

const styles = StyleSheet.create({
    // imgcont:{
    //     width:'100%',
    //     height:'100%',
    // },
    stext:{
        fontSize: 16,
        color: '#F07D21',
        marginBottom: 5,
        marginLeft:5
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
        fontSize:35,
        color:'black',
        textAlign:"center",
        marginBottom:10
    },
    input:{
        height:40,
        backgroundColor:'#4A75B9',
        // marginBottom:10,
        color:'#F07D21',
        paddingHorizontal:10,
        borderRadius:25
        
    },
    buttoncont:{
        marginTop:10,
        backgroundColor:"#F07D21",
        paddingVertical:10,
        borderRadius:25,
        marginBottom:40
        
        
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
