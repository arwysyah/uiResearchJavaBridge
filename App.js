/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ButtonAnimation from './src/components/ButtoAnimation';
import SimpleToast from './src/components/SimpleToast';
// import HomeView from './src/screen/Home';
import SwitchNative from './src/components/SwitchNative';
const rand = Math.random();
const App = () => {
  const onPress = () => {
    SimpleToast.createFunction('testName', 'testLocation');
  };
  // const ir = require('./src/assets/dummy.png');
  // console.log(ir);
  const returnFromNative = async () => {
    try {
      const data = await SimpleToast.returnFromNative('Party', 'My House');
      console.log(`Created a new event with id ${data}`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <StatusBar translucent={true} />
      <View style={styles.container}>
        {/* <HomeView /> */}
        <Button
          title="Invoke Native Module Toast!"
          style={{alignItems: 'center'}}
          color="#841584"
          onPress={onPress}
        />

        <SwitchNative
          style={{height: 60, width: 100, alignItems: 'center', top: 10}}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: 'black',
            height: 30,
            top: 20,
            justifyContent: 'center',
          }}
          onPress={returnFromNative}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            {' '}
            Return From Native
          </Text>
        </TouchableOpacity>
        <ButtonAnimation
          isOn={true}
          title={'Button Animation'}
          style={{
            height: 60,
            width: 100,
            alignItems: 'center',
            top: 40,
          }}
        />
      </View>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
