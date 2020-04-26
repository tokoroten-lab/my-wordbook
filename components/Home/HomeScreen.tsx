import React from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => navigation.openDrawer()} title="Open menu" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
