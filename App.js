import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GradeFrom } from './app/screens/GradeForm';
import { ListGrade } from './app/screens/ListGrade';

export default function App() {
  const StakeGrade = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <StakeGrade.Navigator>
      <StakeGrade.Screen name='ListGradeNav' component={ListGrade}/>
        <StakeGrade.Screen name='GradeFromNav' component={GradeFrom}/>
      </StakeGrade.Navigator>
    </NavigationContainer>
  );
}


