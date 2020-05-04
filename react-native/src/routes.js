import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import User, {navigationOptions as userNavigationOptions} from './pages/User';
import Repository, {
  navigationOptions as repositoryNavigationOptions,
} from './pages/Repository';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User: {
        screen: User,
        navigationOptions: userNavigationOptions,
      },
      Repository: {
        screen: Repository,
        navigationOptions: repositoryNavigationOptions,
      },
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
