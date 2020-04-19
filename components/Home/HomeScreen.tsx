import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.openDrawer()} title="Open menu" />
    </View>
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
