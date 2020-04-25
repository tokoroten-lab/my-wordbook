import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {WordInfoType} from 'models/WordInfo';

interface Props {
  wordInfo: WordInfoType;
}

function WordInfoView(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{props.wordInfo.word}</Text>
      <Text>Appear count: {props.wordInfo.count}</Text>
      <Text>Recognition level: {props.wordInfo.recognitionLevel}</Text>
      <Text>Unrecognition level: {props.wordInfo.unrecognitionLevel}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default WordInfoView;
