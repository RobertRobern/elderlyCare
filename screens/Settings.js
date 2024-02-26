import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardView } from '../components/CardView'
import { componentStyles, textStyle } from '../theme/style'
import { Checkbox, RadioButton, Switch } from 'react-native-ui-lib'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/Profile'
import BLEDevices from '../screens/BLEDevices'
import Camera from '../screens/Camera'
import { useNavigation } from '@react-navigation/native'

export default function Settings() {
  const [darkMode, SetDarkMode] = useState(false);

  const navigation  = useNavigation();


  useEffect(() => {
    // SetDarkMode(darkMode);
  });
  return (

    <ScrollView style={styles.scrollView}>
      <View style={componentStyles.columnContainer}>
        <View>
          <View style={{ marginLeft: 8, }}>
            <Text style={textStyle.h4}>Profile</Text>
          </View>
          <CardView>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Profile')} >
              <View
                style={[
                  componentStyles.rowContainer,
                  { justifyContent: 'flex-start', gap: 10 }
                ]}>

                <MaterialCommunityIcons name="account-settings" color={'black'} size={35} />
                <Text style={textStyle.h5}>Personalize your profile</Text>

              </View>
            </TouchableOpacity>

          </CardView>
        </View>

        <View>
          <View style={{ marginLeft: 8, }}>
            <Text style={textStyle.h4}>Theme</Text>
          </View>
          <CardView>

            <View
              style={[
                componentStyles.rowContainer,
                { justifyContent: 'space-between' }
              ]}>
              <Text
                style={textStyle.h5}>Change to dark mode</Text>
              <Switch
                id='dark-mode'
                value={darkMode}
                onColor={'green'}
                offColor={'grey'}
                onValueChange={() => SetDarkMode(true)}
              />
            </View>
          </CardView>
        </View>

        {/* <View>

          <View style={{ marginLeft: 8, }}>
            <Text style={textStyle.h4}>Scan QR Code</Text>
          </View>
          <CardView>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Camera')}>
              <View
                style={[
                  componentStyles.rowContainer,
                  { justifyContent: 'flex-start', gap: 10 }
                ]}>
                <MaterialCommunityIcons name="camera" color={'black'} size={35} />
                <Text style={textStyle.h5}>Scan QR code</Text>

              </View>
            </TouchableOpacity>

          </CardView>
        </View> */}

        <View>

          <View style={{ marginLeft: 8, }}>
            <Text style={textStyle.h4}>Bluetooth</Text>
          </View>
          <CardView>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Devices')}>
              <View
                style={[
                  componentStyles.rowContainer,
                  { justifyContent: 'flex-start', gap: 10 }
                ]}>
                <MaterialCommunityIcons name="bluetooth" color={'black'} size={35} />
                <Text style={textStyle.h5}>Pair Bluetooth</Text>

              </View>
            </TouchableOpacity>

          </CardView>
        </View>

        <View>

          <View style={{ marginLeft: 8, }}>
            <Text style={textStyle.h4}>Scan QR Code</Text>
          </View>
          <CardView>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Barcode')}>
              <View
                style={[
                  componentStyles.rowContainer,
                  { justifyContent: 'flex-start', gap: 10 }
                ]}>
                <MaterialCommunityIcons name="camera" color={'black'} size={35} />
                <Text style={textStyle.h5}>Scan QR code</Text>

              </View>
            </TouchableOpacity>

          </CardView>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
/* Integration of elderly and care giver's app algorithm 
elderly(mary).
elderly(albert).
elderly(jane).

elderly(millicent).
elderly(mike).
elderly(awino).

% family_member(robert, [mary,jane,albert]).

list_family(mary[robert,steve,otieno]).
list_family(albert[lornah,james,bright]).

is_careGiver(X, mary):- list_family(X,TAIL).

% is_family(robert, mary) :- robert is a relative
% careGiver(robert).
% careGiver(lornah).
% friend(lornah).
% family_member(robert, mary).
% family_friend(lornah, mary).
% isResponsible(X, mary):- family_member(X, mary); family_friend(Y, mary).
*/