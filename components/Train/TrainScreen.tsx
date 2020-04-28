import React from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';

function TrainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wordInfo}>
        <Text style={styles.word}>Word</Text>
        <Text style={styles.evaluation}>123.456789</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonGroup}>
        <SafeAreaView style={styles.button}>
          <Button
            title="Complete"
            color="#d2691e"
            accessibilityLabel="Complete"
            onPress={() => console.log('complete')}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Good"
            color="#805c5c"
            accessibilityLabel="Good"
            onPress={() => console.log('good')}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Bad"
            color="#5f9ea0"
            accessibilityLabel="Good"
            onPress={() => console.log('bad')}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Incomplete"
            color="#483d8b"
            accessibilityLabel="Incomplete"
            onPress={() => console.log('incomplete')}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  wordInfo: {
    alignItems: 'center',
    marginVertical: 32,
  },
  word: {
    fontSize: 24,
  },
  evaluation: {
    fontSize: 18,
    color: '#dc143c',
  },
  buttonGroup: {},
  button: {
    paddingVertical: 4,
  },
});

export default TrainScreen;
