import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/register-screen';
import HomeScreen from './screens/home-screen';

const Stack = createNativeStackNavigator();

const isLoggedIn = true;

export default function App() {
  if (!isLoggedIn) {
    return <RegisterScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
