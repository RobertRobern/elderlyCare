import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'


export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 0.07030526143686631,
          longitude: 34.2870489708059, 
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scroll: {
    // flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '30%',
  },

});