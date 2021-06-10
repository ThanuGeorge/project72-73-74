import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: { screen: WriteStoryScreen },
    ReadStory: { screen: ReadStoryScreen }
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const { routeName } = navigation.state;
      if(routeName === "WriteStory"){
        return(
          <Image
          style={{width:40,height:40}}
          source={require('./assets/Writestory.png')}
        />
        )        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          style={{width:40,height:40}}
          source={require('./assets/Readstory.jpg')}
        />)
        
      }

    }
  })
}
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});