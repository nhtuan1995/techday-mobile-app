/**
 * @format
 */

import 'react-native-reanimated';
import {AppRegistry} from 'react-native';
import App from './App/Containers/App';
import {name as appName} from './app.json';
import { typography } from './App/utils/typography';

typography();

AppRegistry.registerComponent(appName, () => App);
