import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Matches your dark theme status bar */}
      <StatusBar barStyle="light-content" backgroundColor="#0A0C10" /> 
      
      <WebView 
        // 🔴 PUT YOUR RAILWAY APP URL HERE
        source={{ uri: 'https://monday-form-automator-production.up.railway.app/' }} 
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0C10',
  },
});