/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */




import { Provider } from 'react-redux';
import { mystore } from './Redux/store';
import FirstScreen from './FirstScreen';


const App = () => {
  
  return (
    <Provider store={mystore}>
      <FirstScreen/>
    </Provider>
  );
};

export default App;

