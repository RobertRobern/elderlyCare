import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Platform, PermissionStatus } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [backToSettings, setBackToSettings] = navigation.navigate('Settings');

  const navigation  = useNavigation();

  useEffect(() => {
    // BleManager.enableBluetooth().then(() => {
    //   console.log('Bluetooth is turned on!');
    // });
    // BleManager.start({showAlert: false}).then(() => {
    //   console.log('BleManager initialized');
    //   handleGetConnectedDevices();
    // });
    // let stopDiscoverListener = BleManagerEmitter.addListener(
    //   'BleManagerDiscoverPeripheral',
    //   peripheral => {
    //     peripherals.set(peripheral.id, peripheral);
    //     setDiscoveredDevices(Array.from(peripherals.values()));
    //   },
    // );
    // let stopConnectListener = BleManagerEmitter.addListener(
    //   'BleManagerConnectPeripheral',
    //   peripheral => {
    //     console.log('BleManagerConnectPeripheral:', peripheral);
    //   },
    // );
    // let stopScanListener = BleManagerEmitter.addListener(
    //   'BleManagerStopScan',
    //   () => {
    //     setIsScanning(false);
    //     console.log('scan stopped');
    //   },
    // );
    // if (Platform.OS === 'android' && Platform.Version >= 23) {
    //   PermissionsAndroid.check(
    //     PermissionsAndroid.PERMISSIONS.CAMERA,
        
    //   ).then(result => {
    //     if (result) {
    //       console.log(PermissionStatus = 'granted')
    //       console.log('Permission is OK');
    //     } else {
    //       PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA,
    //       ).then(result => {
    //         if (result) {
    //           console.log(PermissionStatus)
    //           console.log('User accepted');
    //         } else {
    //           console.log('User refused');
    //         }
    //       });
    //     }
    //   });
    // }
    // return () => {
    //   stopDiscoverListener.remove();
    //   stopConnectListener.remove();
    //   stopScanListener.remove();
    // };
  }, []);

  // if (!permission) {
  //   // Camera permissions are still loading
  //   return <View />;
  // }
  if (PermissionStatus) {
    return <View />;
  }

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
  //       <Button onPress={(status)=>{
  //         requestPermission();
  //         setHasPermission(status==='granted');
  //       }} title="grant permission" />
  //     </View>
  //   );
  // }

  // if (PermissionStatus) {
    
  //   return (
  //         <View style={styles.container}>
  //           <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
  //           <Button onPress={(status)=>{
  //             requestPermission();
  //             setHasPermission(status==='granted');
  //           }} title="grant permission" />
  //         </View>
  //       );
  // }
  const handleBarCodeScanned = ({type, data})=>{
    setScanned(true);
    alert('Bar code with type ${type} and data ${data} has been scanned!');

  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera 
      style={styles.camera} 
      type={type} 
      onBarCodeScanned={scanned?undefined: handleBarCodeScanned}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button} onPress={setScanned(false)}>
            <Text style={styles.text}>Tap to scan Again</Text>
          </TouchableOpacity> */}
          {scanned && <TouchableOpacity style={styles.button} onPress={setScanned(false)}>
            <Text style={styles.text}>Tap to scan Again</Text>
          </TouchableOpacity>}
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
