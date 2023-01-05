import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/screens';
import TrendingProducts from './screens/trendindProducts';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/> 
     {/* <TrendingProducts/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
