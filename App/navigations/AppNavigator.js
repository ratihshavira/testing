import React from 'react'
import { createStackNavigator, createAppContainer, createTabNavigator, createBottomTabNavigator } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import Home from '../components/Home'


const AppNavigator = createBottomTabNavigator({
  'Bookcase': {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Top News',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-paper" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Explore': {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-heart" type="ionicon" size={28} color={tintColor} />
    },
  }
});

export default createAppContainer(AppNavigator);
