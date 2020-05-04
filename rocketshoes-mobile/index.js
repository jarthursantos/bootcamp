import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './src';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
