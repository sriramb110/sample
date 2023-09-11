import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri:'https://picsum.photos/500/300'}} style={styles.bgImage}>
      <Text style={styles.text}>Hello</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    flex:1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    backgroundColor: 'yellow',
    fontSize:40,
    fontWeight: 'bold'
  }
});
