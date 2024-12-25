import { registerRootComponent } from 'expo';
import { io } from 'socket.io-client';

import App from './App';

// const socket = io("http://192.168.83.247:3000");

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
