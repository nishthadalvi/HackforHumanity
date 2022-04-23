import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NativeBaseProvider, TextArea, Box } from 'native-base';
import ProfileClass from './classes/ProfileClass';
import AlertsClass from './classes/AlertsClass';
import {NavigationContainer} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import MapView from 'react-native-maps';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator initialRouteName="Search" activeColor='#FD8F52' inactiveColor='#363636' barStyle = {{backgroundColor: '#FFFFFF'}}>
          <Tab.Screen name="Alerts" component={AlertsClass} options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                  ),
                }}/>
          <Tab.Screen name="Search" component={SearchClass} options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                  ),
                }}/>
          <Tab.Screen name="Profile" component={ProfileClass} options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                  ),
                }}/>
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function SearchClass(props){
  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={{ flexDirection:'row'}}>
          <View style={{flex: 1, height: 100,}}>
            <LinearGradient style={{height: 100, paddingTop: 50,}} colors={['#FE676E', '#FD8552', '#FFDC82']} start={[0,0]} end={[1,0]}>
            <Text style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>SPOT</Text>
            </LinearGradient>
          </View>
        </View>
        <Box style={{paddingTop: 30,}} alignItems="center" w="100%">
          <TextArea numberOfLines={1} rounded='full' h={10} placeholder="Search" w="90%" maxW="400" />
        </Box>
        <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
      </View>
    </HideKeyboard>
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