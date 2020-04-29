import React from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import themeManager from '../../theme/ThemeManager';

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
    backgroundColor: themeManager.currentTheme.primaryBackground,
  },
});

export default HomeScreen;
