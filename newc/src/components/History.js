import React, { Component } from 'react'
import { Text,TextInput, ActivityIndicator,StyleSheet, View,ImageBackground ,Button,ScrollView} from 'react-native'
// import {Text} from 'react-native'
// import { bold } from 'ansi-colors';
import axios from 'axios'

export default class History extends Component {
constructor(props){
  super(props);
  this.state ={
    isLoading:true,
    dataSource:null
  }
  this.showflight = this.showflight.bind(this)
  this.showAircraft = this.showAircraft.bind(this)

}


updateValue(text,field){
  if(field=='flightId'){
    this.setState({
      flightId:text,
    })
  }
 else if(field=='aircraftId'){
    this.setState({
      aircraftId:text,
    })
  }
  }

showflight(){
  return fetch('http://192.168.0.113:3000/api/flightoperation.flight/'+this.state.flightId)
  .then(  (response)=> response.json() )
  .then(  (responseJson) =>{
   this.setState({
     isLoading:false,
     dataSource: responseJson
   })
  })
  .catch((error)=>{
    console.warn(error);
  });
}
showAircraft(){
  return fetch('http://192.168.0.113:3000/api/flightoperation.Aircraft/'+this.state.aircraftId)
  .then(  (response)=> response.json() )
  .then(  (responseJson) =>{
   this.setState({
     isLoading:false,
     dataSource: responseJson
   })
  })
  .catch((error)=>{
    console.warn(error);
  });
}

    render() {
      
      const {navigate} = this.props.navigation;

      if(this.state.isLoading){
        
        return (
          <ImageBackground
          source={require('./flydub.jpg')}
          style={{width:'100%', height:'100%'}}
          >
          
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.heading}>for flightData </Text>
            <View>
                   <Text style={styles.stext}>Enter flightId</Text>
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
             <Button
             style={styles.buttoncont}
             title="ShowflightHistory"
             onPress={this.showflight}
             />
        </View>

        <Text style={styles.heading}>for AircraftData </Text>
            <View>
                   <Text style={styles.stext}>Enter aircraftId</Text>
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
             <Button
             style={styles.buttoncont}
             title="ShowAircraftFlights"
             onPress={this.showAircraft}
             />
        </View>
            {/* <ActivityIndicator /> */}
          </View>
          </ScrollView>
          </ImageBackground>
        )

      } else
      
      {     
      if(this.state.flightId){ 
      let HistoryOfAllReports=this.state.dataSource.HistoryOfAllReports.map((val,key)=>{
        return <View key={key}>
      <Text style={styles.subheading}>Report no {key+1}</Text>
        <View>  
          <Text>ProcessDay:{val.day}</Text>
          <Text style= {styles.subheading}>ProcessStatus</Text>
            <View>
              <Text>startTime:{val.processStatus.time.startTime}</Text>
              <Text>endTime:{val.processStatus.time.endTime}</Text>
              <Text>processStatus:{val.processStatus.dutyStatus}</Text>
            </View>
        </View>
      </View>
      
      })
      let HistoryOfLateResponsible=this.state.dataSource.HistoryOflateResponsiblesReports.map((val,key)=>{
        return <View key={key}>
        <Text style={styles.subheading}>Report no {key+1}</Text>

        <View>  
          <Text>ProcessDay:{val.day}</Text>
          <Text style= {styles.subheading}>ProcessStatus</Text>
            <View>
              <Text>startTime:{val.processStatus.time.startTime}</Text>
              <Text>endTime:{val.processStatus.time.endTime}</Text>
              <Text>Submission:{val.processStatus.dutyStatus}</Text>
            </View>
        </View>
      </View>
      
      })
      let ActiveParticipantsList=this.state.dataSource.activeParticipantslist.map((val,key)=>{
        return <View key={key}>
        <Text style={styles.subheading}>Report no {key+1}</Text>
        <View>  
        <Text>participantId:{this.state.dataSource.activeParticipantslist[key].participantId}.</Text>
              <Text>CurrentProcess:{this.state.dataSource.activeParticipantslist[key].currentProcess}.</Text>
            <Text style={styles.subheading}>ProcessTime:</Text>
              <View>
                <Text>startTime:{this.state.dataSource.activeParticipantslist[key].processTime.startTime}.</Text>
                <Text>endTime:{this.state.dataSource.activeParticipantslist[key].processTime.endTime}.</Text>
              </View>
            </View>
        </View>
            
      })
      return (
      
        <ImageBackground
            source={require('./flydub.jpg')}
            style={{width:'100%', height:'100%'}}
            >
          <ScrollView style={styles.scrollView}>
            
           <View style={styles.buttoncont}>             
           <View >
            <Text style ={styles.heading}>flightData</Text>
            <Text>
              flightId:{this.state.dataSource.flightId}
            </Text>
            <Text>
              flightStartingMin:{this.state.dataSource.flightStartingMin}
            </Text>
            <Text>
             flightFlightStatus:{this.state.dataSource.flightStatus}
            </Text>
            <Text>
            expectedEndingMins:{this.state.dataSource.expectedEndingMins}
            </Text>
            <View styel={styles.TextContainer}> 
            <Text style={styles.heading}>ActiveParticipants:</Text>
              <View>
                {ActiveParticipantsList}
              </View>
              <Text style={styles.heading}>History_of_Reports</Text>
              <View>
                {HistoryOfAllReports}
              </View> 
              <Text style={styles.heading}>LateResponsibles:</Text>
              <View>
                {HistoryOfLateResponsible}
              </View>
            </View>
          </View>

          <View>

          </View>
        
             </View>
          </ScrollView>
        </ImageBackground>
        )
        
      }
      else if(this.state.aircraftId){
        let flightlist=this.state.dataSource.flightList.map((val,key)=>{
          return(<View key={key}>
        <Text>flightId at index:{key}={val}</Text>

          </View>)
        })
        return(
        <ImageBackground
        source={require('./flydub.jpg')}
        style={{width:'100%', height:'100%'}}
        >
        
      <ScrollView style={styles.scrollView}>
      <View>
            <Text>AircraftData</Text>
        <Text>aircraftId:{this.state.dataSource.aircraftId}</Text>
        <Text>FlightList</Text>
        {flightlist}
          </View>

        </ScrollView>
        </ImageBackground>
        )
      }

      }
      
       
        
    }
}

const styles = StyleSheet.create({
    TextStyle:
    {
       fontSize: 26,
       textAlign: 'center',
       color: '#F07D21',
       marginBottom: 20,
    
    },
    subheading:{
      fontSize:30
    },
    heading: {
      fontSize:36,
      textAlign:'center',

    },
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      TextContainer: {
        height: 180,
        padding: 5,
        // backgroundColor: '#F5FCFF',
      },
      input:{
        height:40,
        backgroundColor:'#4A75B9',
        // marginBottom:10,
        color:'#F07D21',
        paddingHorizontal:10,
        borderRadius:25
        
    },
      Text: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
      },
      buttoncont:{
       backgroundColor:"#F07D21",
       paddingVertical:15,
        paddingVertical:10,
        borderRadius:25,
        // height:50,
        // width:150
        
        
    },
    buttontext:{
        textAlign:'center',
        color:"#3d3d3d",
        fontWeight:'700',
        
    },
      scrollView: {
    
        // backgroundColor: 'orange',
        // marginHorizontal: 20,
        marginTop:20,
      }
})
