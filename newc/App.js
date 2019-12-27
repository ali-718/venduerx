import React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/components/HomeScreen'
import DetailsScreen from './src/components/DetailsScreen'
import Splash from './src/components/Splash';
import NewScreen from './src/components/NewScreen';
import History from './src/components/History';
import CheckScreen from './src/components/CheckScreen'



// class HomeScreen extends React.Component {
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//    title="Signup"
//    onPress={() => navigate('Details')}
//    />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//    title="Signup"
//    onPress={() => navigate('Home')}
//    />
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator(
  {
    Splash:Splash,
    Home: HomeScreen,
    Details: DetailsScreen,
    Screen: NewScreen,
    Hist:History,
    Check:CheckScreen
    
  },
  {
    initialRouteName: 'Splash',
   
  },
 
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
    <AppContainer />
   
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  
  },
});