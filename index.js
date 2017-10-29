import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './src/App';

const AppStack = StackNavigator(
	{
		Home: {
			screen: App
		}
	},
	{
		headerMode: 'screen'
	}
);

AppRegistry.registerComponent('UIUXSample1', () => AppStack);
