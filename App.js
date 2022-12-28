import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import NotaEditor from './src/componentes/NotaEditor';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NotaEditor/>
      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
  },
});
