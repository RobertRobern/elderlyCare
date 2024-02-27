import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  PermissionsAndroid,
} from "react-native";
import { BleManager } from "react-native-ble-plx";
import { useState, useEffect, useRef } from "react";
import { atob } from "react-native-quick-base64";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DeviceList} from './DeviceList';
// import {styles} from '../theme/bleStyles';

const bleManager = new BleManager();

// Android Bluetooth Permission
async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: "Location permission for bluetooth scanning",
        message:
          "Grant location permission to allow the app to scan for Bluetooth devices",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Location permission for bluetooth scanning granted");
    } else {
      console.log("Location permission for bluetooth scanning denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

requestLocationPermission();

const SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const HEARTRATE_CHAR_UUID = "beefcafe-36e1-4688-b7f5-00000000000b";

export default function App() {
  const [deviceID, setDeviceID] = useState(null);
  const [heartRateBpm, setHeartRateBpm] = useState(0);
  const [heartRateAvgBpm, setHeartRateAvgBpm] = useState(null); // Not Used
  const [connectionStatus, setConnectionStatus] = useState("Searching...");

  const progress = (heartRateBpm / 1000) * 100;

  const deviceRef = useRef(null);

  const searchAndConnectToDevice = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(error);
        setConnectionStatus("Error searching for devices");
        return;
      }
      if (device.name === "ELDERLY-CARE") {
        bleManager.stopDeviceScan();
        setConnectionStatus("Connecting...");
        connectToDevice(device);
      }
    });
  };

  useEffect(() => {
    searchAndConnectToDevice();
  }, []);

  const connectToDevice = (device) => {
    return device
      .connect()
      .then((device) => {
        setDeviceID(device.id);
        setConnectionStatus("Connected");
        deviceRef.current = device;
        return device.discoverAllServicesAndCharacteristics();
      })
      .then((device) => {
        return device.services();
      })
      .then((services) => {
        let service = services.find((service) => service.uuid === SERVICE_UUID);
        return service.characteristics();
      })
      .then((characteristics) => {
        let pHeartRateCharacteristic = characteristics.find(
          (char) => char.uuid === HEARTRATE_CHAR_UUID
        );
        setHeartRateAvgBpm(pHeartRateCharacteristic);
        pHeartRateCharacteristic.monitor((error, char) => {
          if (error) {
            console.error(error);
            return;
          }
          const rawHeartRateData = atob(char.value);
          console.log("Received step data:", rawHeartRateData);
          setHeartRateBpm(rawHeartRateData);
        });
      })
      .catch((error) => {
        console.log(error);
        setConnectionStatus("Error in Connection");
      });
  };

  useEffect(() => {
    const subscription = bleManager.onDeviceDisconnected(
      deviceID,
      (error, device) => {
        if (error) {
          console.log("Disconnected with error:", error);
        }
        setConnectionStatus("Disconnected");
        console.log("Disconnected device");
        setHeartRateBpm(0); // Reset the step count
        if (deviceRef.current) {
          setConnectionStatus("Reconnecting...");
          connectToDevice(deviceRef.current)
            .then(() => setConnectionStatus("Connected"))
            .catch((error) => {
              console.log("Reconnection failed: ", error);
              setConnectionStatus("Reconnection failed");
            });
        }
      }
    );
    return () => subscription.remove();
  }, [deviceID]);

  return (
    <ImageBackground source={require('../assets/images/profile.jpg')} style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.topTitle}>
          <View style={styles.stepTitleWrapper}>
            <Text style={styles.title}>Heart Rate</Text>
          </View>
        </View>
        <AnimatedCircularProgress
          size={280}
          width={15}
          fill={progress}
          lineCap="round"
          tintColor={
            progress >= 100 ? "#FB975C" : progress >= 50 ? "#EF664C" : "#FFF386"
          }
          backgroundColor="#3d5875"
        >
          {(fill) => (
            <View style={styles.stepWrapper}>
              <Text style={styles.steps}>{heartRateBpm}</Text>
              <Text style={styles.percent}>{`${Math.round(fill)}%`}</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      <View style={styles.bottomWrapper}>
        <Text style={styles.connectionStatus}>{connectionStatus}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    width: "100%",
  },
  topTitle: {
    paddingVertical: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  stepTitleWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(251, 151, 92, 0.5)",
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "white",
  },
  stepWrapper: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  steps: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  percent: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
  bottomWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(251, 151, 92, 0.5)",
    marginBottom: 20,
    height: "15%",
    borderRadius: 20,
    width: "90%",
  },
  connectionStatus: {
    fontSize: 20,

    color: "white",
    fontWeight: "bold",
    fontFamily: "System",
  },
});


// const BLEDevices = () => {
  
//   return (
//     <SafeAreaView style={[backgroundStyle, styles.container]}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <View style={{pdadingHorizontal: 20}}>
//         <Text
//           style={[
//             styles.title,
//             {color: isDarkMode ? Colors.white : Colors.black},
//           ]}>
//           React Native BLE Manager
//         </Text>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.scanButton}
//           // onPress={startScan}
//           >
//           <Text style={styles.scanButtonText}>
//             {isScanning ? 'Scanning...' : 'Scan Bluetooth Devices'}
//           </Text>
//         </TouchableOpacity>
//         <Text
//           style={[
//             styles.subtitle,
//             {color: isDarkMode ? Colors.white : Colors.black},
//           ]}>
//           Discovered Devices:
//         </Text>
//         {discoveredDevices.length > 0 ? (
//           <FlatList
//             data={discoveredDevices}
//             renderItem={({item}) => (
//               <DeviceList
//                 peripheral={item}
//                 // connect={connectToPeripheral}
//                 // disconnect={disconnectFromPeripheral}
//               />
//             )}
//             keyExtractor={item => item.id}
//           />
//         ) : (
//           <Text style={styles.noDevicesText}>No Bluetooth devices found</Text>
//         )}
//         <Text
//           style={[
//             styles.subtitle,
//             {color: isDarkMode ? Colors.white : Colors.black},
//           ]}>
//           Connected Devices:
//         </Text>
//         {connectedDevices.length > 0 ? (
//           <FlatList
//             data={connectedDevices}
//             renderItem={({item}) => (
//               <DeviceList
//                 peripheral={item}
//                 // connect={connectToPeripheral}
//                 // disconnect={disconnectFromPeripheral}
//               />
//             )}
//             keyExtractor={item => item.id}
//           />
//         ) : (
//           <Text style={styles.noDevicesText}>No connected devices</Text>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };
// export default BLEDevices;


