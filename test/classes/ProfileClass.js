import React, { useState } from 'react';
import { StatusBar,} from 'expo-status-bar';
import { Avatar, HStack, Switch } from "native-base"
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet, Text, View, Button, Alert} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileClass(){
  return (
      <View style={styles.container}>
        <View style={{ flexDirection:'row'}}>
          <View style={{flex: 1, height: 100,}}>
            <LinearGradient style={{height: 100, paddingTop: 50,}} colors={['#FE676E', '#FD8552', '#FFDC82']} start={[0,0]} end={[1,0]}>
            <Text style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>SPOT</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={{ flexDirection:'row'}}>
          <View style={{flex: 1, height: 100, }}>
            <LinearGradient style={{height: 130, paddingTop: 25, alignItems:"center"}} colors={['#FE676E', '#FD8552', '#FFDC82']} start={[0,0]} end={[1,0]}>
              <Avatar size='xl' bg='coolGray.100' style={{ borderColor: '#FD8F52', borderStyle: 'solid', borderWidth: 1, p: 4, }}/>
            </LinearGradient>
            <View style={{alignItems:"center"}}>
            </View> 
          </View>
        </View>
        <Text style={{ paddingTop: 75, fontSize: 30, fontWeight: 'bold'}}>Name</Text>
        <HStack style={{paddingTop: 40,}} alignItems="center" space={100}>
          <Text style={{fontSize: 25,}}>Donations</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>##</Text>
        </HStack>
        <HStack style={{paddingTop: 40,}} alignItems="center" space={90}>
          <Text style={{fontSize: 25,}}>Allow Notifications</Text>
          <Switch size="md" onTrackColor={'#FE676E'} onThumbColor='white'/>
        </HStack>
        <HStack style={{paddingTop: 40,}} alignItems="center" space={70}>
          <Text style={{fontSize: 25,}}>Location Permissions</Text>
          <Switch size="md" onTrackColor={'#FE676E'} onThumbColor='white'/>
        </HStack>
        <HStack style={{paddingTop: 40,}} alignItems="center" space={68}>
          <Button title="Logout" onPress={() => Alert.alert('Logout pressed!')}/>
        </HStack>
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