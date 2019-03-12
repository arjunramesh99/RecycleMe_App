/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import MainNavigator from './MainNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainNavigator);
