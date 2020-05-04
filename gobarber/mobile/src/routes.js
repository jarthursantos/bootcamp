import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Dashboard from '~/pages/Dashboard';
import Confirm from '~/pages/New/Confirm';
import SelectDateTime from '~/pages/New/SelectDateTime';
import SelectProvider from '~/pages/New/SelectProvider';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontSize: 16,
                      fontWeight: 'bold',
                    },
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              keyboardHidesTabBar: true,
              safeAreaInset: {
                top: 4,
                bottom: 8,
              },
              style: {
                backgroundColor: '#8d41a8',
                borderTopWidth: 0,
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
