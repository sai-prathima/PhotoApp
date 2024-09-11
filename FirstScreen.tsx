import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator();
import Home from "./Screens/Home";
import Details from "./Screens/Details";
const FirstScreen=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="screenA" component={Home} />
                <Stack.Screen name="screenB" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default FirstScreen;