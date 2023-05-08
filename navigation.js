import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BandsScreen from './screens/BandsScreen';
import StylesScreen from './screens/StylesScreen';
import StatsScreen from './screens/StatsScreen';

import { Feather } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Bands" 
        key='Bands'
        component={BandsScreen} 
        options={{
          tabBarIcon: ({size, color}) => (<Feather name={"music"} color={color} size={size} />)
        }}/>
      <Tab.Screen 
        name="Stats" 
        key='Stats'
        component={StatsScreen} 
        options={{
          tabBarIcon: ({size, color}) => (<Feather name={"trending-up"} color={color} size={size} />)
        }}/>
      <Tab.Screen 
        name="Styles"
        key='Styles'
        component={StylesScreen} 
        options={{
          tabBarIcon: ({size, color}) => (<Feather name={"folder"} color={color} size={size} />)
        }}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigation