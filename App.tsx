import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import RegisterView from './components/Register/RegisterView';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RegisterView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
