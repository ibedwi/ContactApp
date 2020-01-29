/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from './src/App.container'

AppRegistry.registerComponent(appName, () => AppContainer);
