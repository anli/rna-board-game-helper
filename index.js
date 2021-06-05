/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import {App} from './src';

LogBox.ignoreLogs(['Setting a timer']);

AppRegistry.registerComponent(appName, () => App);
