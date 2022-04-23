import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Checkbox, View, Divider, Slider, TextArea, VStack, Box, Flex, Center } from "native-base"
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function AlertsClass(){
  return (
      <View style={styles.container}>
        <View style={{ flexDirection:'row'}}>
          <View style={{flex: 1, height: 100, }}>
            <LinearGradient style={{height: 100, paddingTop: 50,}} colors={['#FE676E', '#FD8552', '#FFDC82']} start={[0,0]} end={[1,0]}>
              <Text style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>SPOT</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={{paddingTop: 25, width: 350, alignContent: 'center'}}>
          <Box rounded='md' style={{ borderColor: '#FE676E', borderStyle: 'solid', borderWidth: 1, p: 4, paddingBottom: 25, paddingTop: 25, paddingLeft: 10}} width="100%">
            <Text style={{fontSize: 25,}}>Alerts</Text>
          </Box>
        </View>
        <View style={{paddingTop: 25, width: 350, alignContent: 'center'}}>
          <Box rounded='md' style={{ borderColor: '#FE676E', borderStyle: 'solid', borderWidth: 1, p: 4, paddingBottom: 25, paddingTop: 25, paddingLeft: 10}} width="100%">
            <Text style={{fontSize: 25,}}>Alerts</Text>
          </Box>
        </View>
        <View style={{paddingTop: 25, width: 350, alignContent: 'center'}}>
          <Box rounded='md' style={{ borderColor: '#FE676E', borderStyle: 'solid', borderWidth: 1, p: 4, paddingBottom: 25, paddingTop: 25, paddingLeft: 10}} width="100%">
            <Text style={{fontSize: 20,}}>Alerts</Text>
          </Box>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});