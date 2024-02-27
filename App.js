import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import Dashboard from './screens/Dashboard';
import Map from './screens/Map';
import SmsCommands from './screens/SmsCommands';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-ui-lib';
import { colorPalletes } from './theme/colorPalletes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BLEDevices from './screens/BLEDevices';
import { createStackNavigator } from '@react-navigation/stack'
import Options from './screens/Options';
import Camera from './screens/Camera'
import CameraBarcode from './screens/CameraBarcode'
import Welcome from './screens/Welcome'
import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import COLORS from './theme/colors'

const Stack = createStackNavigator();
const AuthStack  = createStackNavigator();

function MainStack() {

  return(
    <AuthStack.Navigator 
    screenOptions={{
      headerShown: false,
      // drawerStyle: {
      //   backgroundColor: '#c6cbef',
      //   width: 240,
      // },
      
      tabBarLabelStyle: {
        fontSize: 18,
        fontWeight: '900',
        // color: '#0064fa'.,
        color: [COLORS.secondary, COLORS.primary]
      },
      tabBarStyle: {
        backgroundColor: "#fff",

      },
      // tabBarActiveTintColor: "#0064fa",
      // tabBarInactiveTintColor: 'black',
      headerTitleStyle: {
        color: '#fff'
      },
    
    }}>
      <AuthStack.Screen name="Welcome" component={Welcome}
        options={{
          title: 'Welcome',
          tabBarLabel: "Welcome",
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
      <AuthStack.Screen name="Login" component={Login}
        options={{
          title: 'Login',
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
      <AuthStack.Screen name="Register" component={Register}
        options={{
          title: 'Register',
          tabBarLabel: "Register",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
      <AuthStack.Screen
        name="DashboardScreen"
        component={MyTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          title: 'Family Care',
          // headerTitle: (props) => <LogoTitle {...props}/>,
          // headerLeft: (props) => <LogoTitle {...props}/>,
          headerRight: (props) => <LogoTitle {...props} />,


        }}/>

    </AuthStack.Navigator>
  )
  
}
function MyStack() {
  const dimensions = useWindowDimensions();

  return (
    <Stack.Navigator
      // initialRouteName="Settings"
      // backBehavior='initialRouteName'
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        // drawerStyle: {
        //   backgroundColor: '#c6cbef',
        //   width: 240,
        // },
        headerStyle: {
          backgroundColor: "#39B68D",
        },
        
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '900',
          // color: '#0064fa'
        },
        tabBarStyle: {
          backgroundColor: "#fff",

        },
        // tabBarActiveTintColor: "#0064fa",
        // tabBarInactiveTintColor: 'black',
        headerTitleStyle: {
          color: '#fff'
        },
      }}

    >

      <Stack.Screen name="Settings" component={Settings}
        options={{
          title: 'Settings',
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: 'Camera',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
          title: 'Camera',
          // headerTitle: (props) => <LogoTitle {...props}/>,
          // headerLeft: (props) => <LogoTitle {...props}/>,
          // headerRight: (props) => <LogoTitle {...props} />,


        }}

      />
      <Stack.Screen name="Barcode" component={CameraBarcode}
        options={{
          title: 'Barcode Scanner',
          tabBarLabel: "Barcode Scanner",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box" color={color} size={size} />
          ),
        }} />
      <Stack.Screen name="Profile" component={Profile}
        options={{
          title: 'Profile',
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box" color={color} size={size} />
          ),
        }} />
      <Stack.Screen name="Devices" component={BLEDevices}
        options={{
          title: 'Bluetooth Devices',
          tabBarLabel: "Devices",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box" color={color} size={size} />
          ),
        }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTab() {
  const dimensions = useWindowDimensions();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      backBehavior='initialRouteName'
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        // headerShown: false,
        // drawerStyle: {
        //   backgroundColor: '#c6cbef',
        //   width: 240,
        // },
        
        headerStyle: {
          // backgroundColor: "#0064fa",
          backgroundColor: '#39B68D'
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '900',
          // color: '#fff'
        },

        tabBarStyle: {
          backgroundColor: "#fff",

        },
        tabBarActiveTintColor: "#0064fa",
        // tabBarActiveBackgroundColor: "#0064fa",
        // tabBarInactiveTintColor: 'black',
        headerTitleStyle: {
          color: '#fff'
        },
        
      }}

    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          title: 'Family Care',
          // headerTitle: (props) => <LogoTitle {...props}/>,
          // headerLeft: (props) => <LogoTitle {...props}/>,
          headerRight: (props) => <LogoTitle {...props} />,


        }}

      />
      <Tab.Screen name="Map Locator" component={Map}
        options={{
          tabBarLabel: "Map",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Controls" component={SmsCommands}
        options={{
          title: '',
          tabBarLabel: "Controls",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="apple-keyboard-command" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="SettingsScreen" component={MyStack}
        options={{
          title: 'Settings',
          tabBarLabel: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}


// Custom header Title
function LogoTitle() {
  return (
    <View style={{ padding: 20 }}>
      <Avatar
        source={require('./assets/images/profile.jpg')}
        size={50}
        onPress={() => alert("You are about to open Profile page")}
        label='Avatar'
      />
    </View>

  );
}

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem label="Help" onPress={() => alert('Link to help')} />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   const dimensions = useWindowDimensions();
//   return (
//     <Drawer.Navigator
//       initialRouteName="Dashboard"
//       backBehavior='initialRouteName'
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         drawerStyle: {
//           backgroundColor: '#c6cbef',
//           width: 240,
//         },
//         drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
//       }}

//     >
//       <Drawer.Screen
//         name="Dashboard"
//         component={Dashboard}
//         options={{ drawerLabel: 'Dashboard', title: 'Family Care', }}
//       />
//       <Drawer.Screen name="Map" component={Map} />
//       <Drawer.Screen name="Chat" component={SmsCommands} />
//       <Drawer.Screen name="Settings" component={Settings} />
//       <Drawer.Screen name="Profile" component={Profile} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (

    <NavigationContainer>
      {/* <MyTab /> */}
      <MainStack/>
      <StatusBar style="light" />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
