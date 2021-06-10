import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import Counter from './src/screens/Counter';
import PictureScreen from './src/screens/PictureScreen';
import RandomColor from './src/screens/RandomColor';
import AdjustColor from './src/screens/AdjustColor';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListScreen: ListScreen,
    Counter: Counter,
    Pictures: PictureScreen,
    RandomColor: RandomColor,
    AdjustColor: AdjustColor,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
