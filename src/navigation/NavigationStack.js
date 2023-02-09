import { createStackNavigator } from '@react-navigation/stack';
import PrincipalView from '../screens/PrincipalView';
import Login from '../screens/Login';
import SiginUp from '../screens/SiginUp';

const Stack = createStackNavigator();

export default function NavigationStack() {
	return (
		<Stack.Navigator initialRouteName='Principal'>
			<Stack.Screen
				name='Principal'
				component={PrincipalView}
				options={{ title: '', headerTransparent: true }}
			/>
			<Stack.Screen
				name='Login'
				component={Login}
				options={{ title: '', headerTransparent: true }}
			/>
			<Stack.Screen
				name='SiginUp'
				component={SiginUp}
				options={{ title: '', headerTransparent: true }}
			/>
		</Stack.Navigator>
	);
}
