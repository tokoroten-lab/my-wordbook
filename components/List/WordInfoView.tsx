import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import WordInfo, {WordInfoType} from '../../models/WordInfo';

interface Props {
  wordInfo: WordInfoType;
}

function WordInfoView(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.rightContainer}>
        <Text style={styles.word}>{props.wordInfo.word}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.rightContainer}>
        <Text style={styles.wordInfo}>
          Appear count: {props.wordInfo.count}
        </Text>
        <Text style={styles.wordInfo}>
          Recognition level: {props.wordInfo.recognitionLevel}
        </Text>
        <Text style={styles.wordInfo}>
          Unrecognition level: {props.wordInfo.unrecognitionLevel}
        </Text>
        <Text style={styles.wordInfo}>
          Evaluation: {WordInfo.calcEvaluationFromWordInfo(props.wordInfo)}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  word: {
    fontSize: 22,
  },
  wordInfo: {
    color: '#4a3b12',
  },
});

export default WordInfoView;
