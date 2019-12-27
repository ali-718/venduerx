import React, { Component } from 'react'
import { Text, StyleSheet,Alert,Picker, View,Button,ImageBackground ,TextInput,ScrollView} from 'react-native'
import SignUp from './SignUpForm';
import axios from 'axios'

export default class DetailsScreen extends Component {
    
  constructor(props) {
 
    super(props)
 
    this.state = {
      time: '',
      participantId:'',
      participantType:'',    
      flightId:'',
      processType:'',
      day:'',
      eparticipantId:'',
      eparticipantType:'',    
      eflightId:'',
      eprocessType:'',
      eday:''    
    }
    

  this.onStartProcess = this.onStartProcess.bind(this)

  this.onEndProcess = this.onEndProcess.bind(this)
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

  updateValue(text,field){
      if(field=='flightId'){
        this.setState({
          flightId:text,
        })
      }
      else if(field=='processType'){
        this.setState({
          processType:text,
        })
      }
      else if(field=='participantId'){
        this.setState({
          participantId:text,
        })
      }
      else if(field=='participantType'){
        this.setState({
          participantType:text,
        })
      }
      else if(field=='day'){
        this.setState({
          day:text,
        })
      }
      else if(field=='eflightId'){
        this.setState({
          eflightId:text,
        })
      }
      else if(field=='eprocessType'){
        this.setState({
          eprocessType:text,
        })
      }
      else if(field=='eparticipantId'){
        this.setState({
          eparticipantId:text,
        })
      }
      else if(field=='eparticipantType'){
        this.setState({
          eparticipantType:text,
        })
      }
      else if(field=='eday'){
        this.setState({
          eday:text,
        })
      }
  }

  onEndProcess() {

    axios({
      method: 'post',
      url: 'http://192.168.0.113:3000/api/flightoperation.endProcess',
      data:{
        "$class": "flightoperation.endProcess",
        "participantId": this.state.eparticipantId,
        "participantType": this.state.eparticipantType,
        "flightId": this.state.eflightId,
        "processType": this.state.eprocessType,
        "endTime": "2019-11-15T12:36:22.708Z",
        "day": this.state.eday
      }
      })
      .then(function(response){
      console.log(response);
      Alert.alert(
        'Alert Title',
        "Request Submitted",
        [
          {text: 'OK', onPress: () => console.warn('OK Pressed')},
        ],
        {cancelable: false},
      );
      })
      .catch(function(error){
        console.warn(error)
  Alert.alert(
    'Alert Title',
    "please enter correct details",
    [
      {text: 'OK', onPress: () => console.warn('try using different Id')},
    ],
    {cancelable: false},
  );
      });
  }
    
  onStartProcess() {
    this.state.time = new Date();
    axios({
      method: 'post',
      url: 'http://192.168.0.113:3000/api/flightoperation.startProcess',
      data: {
          "$class": "flightoperation.startProcess",
          "participantId": this.state.participantId,
          "participantType": this.state.participantType,
          "flightId": this.state.flightId,
          "processType": this.state.processType,
          "startTime": this.state.time,
          "day": this.state.day
        }
      })
      .then(function(response){
      console.log(response);
      Alert.alert(
        'Alert Title',
        "Process Started",
        [
          {text: 'OK', onPress: () => console.warn('OK Pressed')},
        ],
        {cancelable: false},
      );
      })
      .catch(function(error){
  Alert.alert(
    'Alert Title',
    "please enter correct data ",
    [
      {text: 'OK', onPress: () => console.warn('try using different Id')},
    ],
    {cancelable: false},
  );
      });

  }
  
  render() {


        const {navigate} = this.props.navigation;
        return (
          <ImageBackground
      source={require('./flydub.jpg')}
      style={{width:'100%', height:'100%'}}
      >
          <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>StartProcess</Text>
          <Text>participantId</Text>

           <TextInput
           style={styles.input}
           placeholder="partcipantId"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="participantId"
          onChangeText={(text)=>this.updateValue(text,'participantId')}
          value={this.state.participantId}
          id="participantId"
           />
                       <Text>participantType</Text>
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
           placeholder="ParticipantType"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="participantType"
          onChangeText={(text)=>this.updateValue(text,'participantType')}
          value={this.state.participantType}
          id="participantType"
           />   */}
                  <Text>flightId</Text>
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
                  <Text>processType</Text>
                  <Picker
  selectedValue={this.state.processType}
  style={styles.input}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({processType: itemValue})
  }>
  <Picker.Item label="Select" value="noSelection" />

  <Picker.Item label="GSEInPosition" value="GSEInPosition" />
  <Picker.Item label="GSECheck" value="GSECheck" />
  <Picker.Item label="GroundOpsTeamBriefing" value="GroundOpsTeamBriefing" />
  <Picker.Item label="VGDSCheckedAndActive" value="VGDSCheckedAndActive" />
  <Picker.Item label="GateOpenTerminal2" value="GateOpenTerminal2" />
  <Picker.Item label="GateOpenTerminal3" value="GateOpenTerminal3" />
  <Picker.Item label="AircraftOnChocks" value="AircraftOnChocks" />
  <Picker.Item label="WalkAroundDamageCheck" value="WalkAroundDamageCheck" />
  <Picker.Item label="PlacemenOfChocks" value="PlacemenOfChocks" />
  <Picker.Item label="PlacemenOfCones" value="PlacemenOfCones" />
  <Picker.Item label="EngagementOfFrontSteps" value="EngagementOfFrontSteps" />
  <Picker.Item label="EngagementOfRearSteps" value="EngagementOfRearSteps" />
  <Picker.Item label="DoorOpen" value="DoorOpen" />
  <Picker.Item label="PaxDisembarkation" value="PaxDisembarkation" />
  <Picker.Item label="AFTHoldOffLoading" value="AFTHoldOffLoading"/>
  <Picker.Item label="FWDHoldOffLoading" value="FWDHoldOffLoading" />
  <Picker.Item label="ReCatering" value="ReCatering" />
  <Picker.Item label="Fuelling" value="Fuelling" />
  <Picker.Item label="PortableWaterWasteServicing" value="PortableWaterWasteServicing" />
  <Picker.Item label="CabinCrewPostFlightChecks" value="CabinCrewPostFlightChecks" />
  <Picker.Item label="Cleaning" value="Cleaning" />
  <Picker.Item label="DepartureCrewArriveAirCraft" value="DepartureCrewArriveAirCraft" />
  <Picker.Item label="FirstBusDispatchedFromGateT3Departure" value="FirstBusDispatchedFromGateT3Departure"/>
  <Picker.Item label="FirstBusDispatchedFromGateT2Departure" value="FirstBusDispatchedFromGateT2Departure" />
  <Picker.Item label="CabinCrewPreFlightChecks" value="CabinCrewPreFlightChecks" />
  <Picker.Item label="PassengerBoardingOnToAircraft" value="PassengerBoardingOnToAircraft" />
  <Picker.Item label="FWDAndAFTHoldOffLoading" value="FWDAndAFTHoldOffLoading" />
  <Picker.Item label="ZFWNotificationToFlightCrew" value="ZFWNotificationToFlightCrew"/>
  <Picker.Item label="FinalFuelToRefuellerCLCAndDispatch" value="FinalFuelToRefuellerCLCAndDispatch" />
  <Picker.Item label="FinalLoadingConfirmationToCLC" value="FinalLoadingConfirmationToCLC" />
  <Picker.Item label="PushBackAndHeadsetConnection" value="PushBackAndHeadsetConnection" />
  <Picker.Item label="GateClosed" value="GateClosed" />
  <Picker.Item label="OffloadingDetailsPassedToRampTeam" value="OffloadingDetailsPassedToRampTeam" />
  <Picker.Item label="FlightDocumentationToCabinCrew" value="FlightDocumentationToCabinCrew"/>
  <Picker.Item label="LoadSheetPresentationToFlightCrew" value="LoadSheetPresentationToFlightCrew" />
  <Picker.Item label="LastPaxBoardingAircraft" value="LastPaxBoardingAircraft" />
  <Picker.Item label="RearDoorClosed" value="RearDoorClosed"/>
  <Picker.Item label="AFTStepsRemoved" value="AFTStepsRemoved" />
  <Picker.Item label="SettlingOnBoard" value="SettlingOnBoard" />
  <Picker.Item label="HandBaggageStorageLoading" value="HandBaggageStorageLoading"/>
  <Picker.Item label="LastMinuteChangesLMC" value="LastMinuteChangesLMC" />
  <Picker.Item label="AllDoorsClosed" value="AllDoorsClosed" />
  <Picker.Item label="FWDStepsRemoved" value="FWDStepsRemoved"/>
  <Picker.Item label="AllGSERemoved" value="AllGSERemoved"/>
  <Picker.Item label="AircraftPushBack" value="AircraftPushBack" />
  <Picker.Item label="DelayAllocationAndTeamDeBrief" value="DelayAllocationAndTeamDeBrief" />
</Picker>
    
          
          {/* <TextInput
           style={styles.input}
           placeholder="processType"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="processType"
          onChangeText={(text)=>this.updateValue(text,'processType')}
          value={this.state.processType}
          id="processType"
           /> */}
           <Text>Day</Text>

           <TextInput
            style={styles.input}
            placeholder="startwithCapital"
            placeholderTextColor="rgba(255,255,255,0.6)"
            returnKeyType="next"            
            autoCapitalize='none'
            autoCorrect={false}
           type="text"
           name="day"
           onChangeText={(text)=>this.updateValue(text,'day')}
           value={this.state.day}
           id="day"
            /> 
                        <View style={styles.wrapper}>
                       <Button
             style={styles.buttoncont}
             title="StartProcess"
             onPress={this.onStartProcess}
            //  onPress={() => navigate('Splash')}
             />
             </View>

          <Text style={styles.text}>EndProcess</Text>
          <Text>participantId</Text>

           <TextInput
           style={styles.input}
           placeholder="partcipantId"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="eparticipantId"
          onChangeText={(text)=>this.updateValue(text,'eparticipantId')}
          value={this.state.eparticipantId}
          id="eparticipantId"
           />
                       <Text>participantType</Text>
                       <Picker
  selectedValue={this.state.eparticipantType}
  style={styles.input}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({eparticipantType: itemValue})
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
           placeholder="ParticipantType"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="eparticipantType"
          onChangeText={(text)=>this.updateValue(text,'eparticipantType')}
          value={this.state.eparticipantType}
          id="eparticipantType"
           />   */}
                  <Text>flightId</Text>
           <TextInput
           style={styles.input}
           placeholder="flightId"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="eflightId"
          onChangeText={(text)=>this.updateValue(text,'eflightId')}
          value={this.state.eflightId}
          id="eflightId"
           />
                  <Text>processType</Text>
                  <Picker
  selectedValue={this.state.eprocessType}
  style={styles.input}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({eprocessType: itemValue})
  }>
    <Picker.Item label="Select" value="noSelection" />
  <Picker.Item label="GSEInPosition" value="GSEInPosition" />
  <Picker.Item label="GSECheck" value="GSECheck" />
  <Picker.Item label="GroundOpsTeamBriefing" value="GroundOpsTeamBriefing" />
  <Picker.Item label="VGDSCheckedAndActive" value="VGDSCheckedAndActive" />
  <Picker.Item label="GateOpenTerminal2" value="GateOpenTerminal2" />
  <Picker.Item label="GateOpenTerminal3" value="GateOpenTerminal3" />
  <Picker.Item label="AircraftOnChocks" value="AircraftOnChocks" />
  <Picker.Item label="WalkAroundDamageCheck" value="WalkAroundDamageCheck" />
  <Picker.Item label="PlacemenOfChocks" value="PlacemenOfChocks" />
  <Picker.Item label="PlacemenOfCones" value="PlacemenOfCones" />
  <Picker.Item label="EngagementOfFrontSteps" value="EngagementOfFrontSteps" />
  <Picker.Item label="EngagementOfRearSteps" value="EngagementOfRearSteps" />
  <Picker.Item label="DoorOpen" value="DoorOpen" />
  <Picker.Item label="PaxDisembarkation" value="PaxDisembarkation" />
  <Picker.Item label="AFTHoldOffLoading" value="AFTHoldOffLoading"/>
  <Picker.Item label="FWDHoldOffLoading" value="FWDHoldOffLoading" />
  <Picker.Item label="ReCatering" value="ReCatering" />
  <Picker.Item label="Fuelling" value="Fuelling" />
  <Picker.Item label="PortableWaterWasteServicing" value="PortableWaterWasteServicing" />
  <Picker.Item label="CabinCrewPostFlightChecks" value="CabinCrewPostFlightChecks" />
  <Picker.Item label="Cleaning" value="Cleaning" />
  <Picker.Item label="DepartureCrewArriveAirCraft" value="DepartureCrewArriveAirCraft" />
  <Picker.Item label="FirstBusDispatchedFromGateT3Departure" value="FirstBusDispatchedFromGateT3Departure"/>
  <Picker.Item label="FirstBusDispatchedFromGateT2Departure" value="FirstBusDispatchedFromGateT2Departure" />
  <Picker.Item label="CabinCrewPreFlightChecks" value="CabinCrewPreFlightChecks" />
  <Picker.Item label="PassengerBoardingOnToAircraft" value="PassengerBoardingOnToAircraft" />
  <Picker.Item label="FWDAndAFTHoldOffLoading" value="FWDAndAFTHoldOffLoading" />
  <Picker.Item label="ZFWNotificationToFlightCrew" value="ZFWNotificationToFlightCrew"/>
  <Picker.Item label="FinalFuelToRefuellerCLCAndDispatch" value="FinalFuelToRefuellerCLCAndDispatch" />
  <Picker.Item label="FinalLoadingConfirmationToCLC" value="FinalLoadingConfirmationToCLC" />
  <Picker.Item label="PushBackAndHeadsetConnection" value="PushBackAndHeadsetConnection" />
  <Picker.Item label="GateClosed" value="GateClosed" />
  <Picker.Item label="OffloadingDetailsPassedToRampTeam" value="OffloadingDetailsPassedToRampTeam" />
  <Picker.Item label="FlightDocumentationToCabinCrew" value="FlightDocumentationToCabinCrew"/>
  <Picker.Item label="LoadSheetPresentationToFlightCrew" value="LoadSheetPresentationToFlightCrew" />
  <Picker.Item label="LastPaxBoardingAircraft" value="LastPaxBoardingAircraft" />
  <Picker.Item label="RearDoorClosed" value="RearDoorClosed"/>
  <Picker.Item label="AFTStepsRemoved" value="AFTStepsRemoved" />
  <Picker.Item label="SettlingOnBoard" value="SettlingOnBoard" />
  <Picker.Item label="HandBaggageStorageLoading" value="HandBaggageStorageLoading"/>
  <Picker.Item label="LastMinuteChangesLMC" value="LastMinuteChangesLMC" />
  <Picker.Item label="AllDoorsClosed" value="AllDoorsClosed" />
  <Picker.Item label="FWDStepsRemoved" value="FWDStepsRemoved"/>
  <Picker.Item label="AllGSERemoved" value="AllGSERemoved"/>
  <Picker.Item label="AircraftPushBack" value="AircraftPushBack" />
  <Picker.Item label="DelayAllocationAndTeamDeBrief" value="DelayAllocationAndTeamDeBrief" />
</Picker>
    
          
          
          {/* <TextInput
           style={styles.input}
           placeholder="processType"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="eprocessType"
          onChangeText={(text)=>this.updateValue(text,'eprocessType')}
          value={this.state.eprocessType}
          id="eprocessType"
           /> */}
           <Text>Day</Text>

           <TextInput
            style={styles.input}
            placeholder="startwithCapital"
            placeholderTextColor="rgba(255,255,255,0.6)"
            returnKeyType="next"            
            autoCapitalize='none'
            autoCorrect={false}
           type="text"
           name="eday"
           onChangeText={(text)=>this.updateValue(text,'eday')}
           value={this.state.eday}
           id="eday"
            />

             <View style={styles.wrapper}>
               <Button
             style={styles.buttoncont}
            title="EndProcess"
             onPress={this.onEndProcess}
            //  onPress={() => navigate('Splash')}
             />
             </View>

<View style={styles.wrapper}>
              <View style={styles.titlewraper}> 
              <View style={styles.buttoncont}>
               <Button
             
             title="Home page"
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
        paddingBottom:50
    }, 
    titlewraper:{
        flex: 1,
        justifyContent:"center"

    },
    buttoncont:{
        backgroundColor:"#0652DD",
        paddingVertical:15,
        borderRadius:25,
        padding: 25,
        alignContent:"center",
        marginBottom:20},
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
            color:'#F07D21',
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

        scrollView: {
    
            // backgroundColor: 'orange',
            // marginHorizontal: 20,
            marginTop:20,
            marginBottom:100
          },
        
    })