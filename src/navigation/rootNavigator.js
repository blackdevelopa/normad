import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens';
import All from '../screens/allCountries';

export const AuthStack = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {header: null},
    },
    All: {
      screen: All,
      navigationOptions: {header: null},
    },
  }),
);
