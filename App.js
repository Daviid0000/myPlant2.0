
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Screens/private/HomeScreen/HomeScreen';
import { ChatScreen } from './Screens/private/ChatScreen/ChatScreen';
import { LoginScreen } from './Screens/public/LoginScreen';
import { GaleryScreen } from './Screens/private/GaleryScreen/GaleryScreen';
import CameraScreenView from './Screens/private/CameraScreen/CameraScreen';
import { PlantInfoProvider } from './context/PlantInfoContext';
console.log('CameraScreen imported:', CameraScreenView);
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.cameraButtonContainer}
      onPress={onPress}
    >
      <View style={styles.cameraButton}>
        <Ionicons name="camera" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreenView} // Nueva pantalla de cámara
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GaleryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="image" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const RoutesPrivate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const RoutesPublic = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <RoutesPrivate /> : <RoutesPublic />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <PlantInfoProvider>
        <Routes />
      </PlantInfoProvider>
    </>
  );
}

const styles = StyleSheet.create({
  cameraButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
