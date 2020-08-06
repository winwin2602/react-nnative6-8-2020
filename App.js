import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';
import Login from './src/loginForm';

const AppStack = createStackNavigator({
  Login: Login,	
  FoodForm: FoodForm,
  FoodList: FoodList,
});

export default createAppContainer(AppStack);