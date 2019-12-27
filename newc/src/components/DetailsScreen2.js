import React, { Component } from 'react'
import { Text, StyleSheet, View,Button,ImageBackground } from 'react-native'
import SignUp from './SignUpForm';

export default class DetailsScreen extends Component {
    
  constructor(props) {
 
    super(props)
 
    this.state = {
      time: '',
      participantId:'',
      participantType:'',    
      aircraftId:'',
      processType:'',
      day:'',
    
    }
    var endTime = new Date()

    this.onChangeparticipanType = this.onChangeparticipantType.bind(this)

    this.onChangeparticipantId = this.onChangeparticipantId.bind(this)

  
this.onChangeaircraftId = this.onChangeaircraftId.bind(this)

this.onChangeprocessType = this.onChangeprocessType.bind(this)

this.onChangeday = this.onChangeday.bind(this)

this.onEndProcess = this.onEndProcess.bind(this)

this.onCreateAircraft = this.onCreateAircraft.bind(this)

  }
  onChangeparticipantType(event){
    this.setState({participantType: event.target.value})
    }
    onChangeparticipantId(event){
      this.setState({participantId: event.target.value})
      }

      onEndProcess(event){
        this.setState({aircraftId: event.target.value})
        }
        onChangeprocessType(event){
          this.setState({processType: event.target.value})
          }
          onChangeday(event){
            this.setState({day: event.target.value})
            }
  componentDidMount() {
 
    this.Clock = setInterval( () => this.GetTime(), 1000 );
 
  }
 onEndProcess() {
   let endProcess = {
    "$class": "flightoperation.createStaff",
    "participantType": this.state.participantType,
    "participantId": this.state.participantId,
    'aircraftId':this.state.aircraftId,
    'processType':this.state.processType,
    'day':this.state.day,
    'endTime':endTime
  }

axios({
method: 'post',
url: 'http://localhost:3000/api/flightoperation.startProcess',
data: endProcess
})
.then(function(response){
console.log(response);
})
.catch(function(error){
window.prompt(error); 
});
window.location.reload(false);

}
  
  
  
  render() {


        const {navigate} = this.props.navigation;
        return (
          <ImageBackground
      source={require('./flydub.jpg')}
      style={{width:'100%', height:'100%'}}
      >
          <Text style={styles.text}>StartProcess</Text>
          <Text>participantId</Text>

           <TextInput
           style={styles.input}
           placeholder="Enter participant Id"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="participantId"
          onChange={this.onChangeparticipantId}
          value={this.state.participantId}
          id="participantId"
           />
                       <Text>participantType</Text>

                        <TextInput
           style={styles.input}
           placeholder="Enter participant type"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="participantType"
          onChange={this.onChangeparticipantType}
          value={this.state.participantType}
          id="participantType"
           />  

                           <Text style={styles.text}>Participant detail</Text>

                  <Text>aircraftId</Text>
           <TextInput
           style={styles.input}
           placeholder="aircraftId"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="aircraftId"
          onChange={this.onChangeaircraftId}
          value={this.state.aircraftId}
          id="aircraftId"
           />
                  <Text>processType</Text>

          <TextInput
           style={styles.input}
           placeholder="OnHold/Approved/Rejected"
           placeholderTextColor="rgba(255,255,255,0.6)"
           returnKeyType="next"            
           autoCapitalize='none'
           autoCorrect={false}
          type="text"
          name="processType"
          onChange={this.onChangeprocessType}
          value={this.state.processType}
          id="processType"
           />
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
           onChange={this.onChangeday}
           value={this.state.day}
           id="day"
            /> 
                       <Button
             style={styles.buttoncont}
             title="EndProcess"
             onClick={this.onEndProcess}
            //  onPress={() => navigate('Splash')}
             />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    buttoncont:{
        backgroundColor:"#0652DD",
        paddingVertical:15,
        borderRadius:25,
        padding: 25,
        alignContent:"center",
        marginBottom:20
        
        
    }})






    // onClick={this.onSubmit}