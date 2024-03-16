import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen'
import CourseDetailScreen from '../Screens/CourseDetailScreen';
import TabNavigation from './TabNavigation';
import MembershipModal from '../Screens/MembershipModal';
import WatchLessons from '../Screens/WatchLessons';
const Stack=createStackNavigator();
export default function HomeNavigation() {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='home' component={TabNavigation}/>
    <Stack.Screen name='course-detail' component={CourseDetailScreen}/>
    <Stack.Screen name="membership" component={MembershipModal}
    options={{
      presentation:'modal'
    }}
    />
      <Stack.Screen name='watch-lesson' component={WatchLessons}/>
   </Stack.Navigator>
  )
}