// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnalogClock from './AnalogClock'
import AnalogClockAus from './AnalogClockAus'

export default function App() {
  return (
    <View style={styles.container}>

<AnalogClock 
minuteHandLength={110}
/>

<Text>Locale</Text>

<AnalogClockAus 
minuteHandLength={110}
/>

<Text>Sydney</Text>


    </View>
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
