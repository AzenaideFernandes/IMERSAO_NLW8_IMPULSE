import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
   useFonts, 
   Inter_400Regular, 
   Inter_500Medium 
  } from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import Widget  from './src/components/Widget';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}
    >     
     
      <StatusBar 
        style="light" 
        backgroundColor= "transparent"
        translucent
      />

      <Widget />
    </View>
  );
}

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello !</Text>
      <StatusBar style="auto" />
    </View>
  );
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */