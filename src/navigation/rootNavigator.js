import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import colors from '../utils/colors';
import {MaterialIcons} from '../components/icons';

import Home from '../screens';
import All from '../screens/allCountries';

export const AuthStack = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {header: null},
    },
  }),
);

export const AppTabs = createMaterialBottomTabNavigator(
  {
    All: {
      screen: All,
      navigationOptions: {
        header: null,
        tabBarIcon: ({focused}) => (
          <MaterialIcons
            focused={focused}
            name={'explore'}
            size={20}
            color={colors.white}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'All',
    tabBarOptions: {showLabel: false},
    barStyle: {backgroundColor: colors.tabBar},
    activeColor: colors.black,
    inactiveColor: colors.black,
    lazy: true,
  },
);
