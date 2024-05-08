/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

//screens//

import Splash from '../screens/Splash/Splash';
import Home from '../screens/Home/Home';



const Stack = createStackNavigator();

const MainNavigator = () => {
  const BounceTransition = {
    ...TransitionPresets.SlideFromRightIOS,
    cardStyleInterpolator: ({current, layouts}) => {
      const translateX = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [layouts.screen.width, 0],
      });

      const scale = current.progress.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.4, 1],
      });

      return {
        cardStyle: {
          transform: [{translateX}, {scale}],
        },
      };
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          ...BounceTransition, // Slide animation for iOS
          gestureEnabled: false, // Enable gestures for sliding back
          gestureDirection: 'horizontal', // Set the direction of the gesture
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
         
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
