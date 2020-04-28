import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import modelManager, {
  RealmWordInfoType,
  SortingAxisType,
} from '../../models/ModelManager';
import WordInfo from '../../models/WordInfo';

function shuffleWords(words: RealmWordInfoType[]): void {
  words.sort(() => Math.random() - 0.5);
}

function selectWord(limit: number): RealmWordInfoType {
  const sortingAxis: SortingAxisType = {
    name: 'evaluation',
    isDescend: true,
  };

  const words = modelManager.getWordInfoList([sortingAxis], '', limit);

  shuffleWords(words);

  return words[0];
}

function TrainScreen() {
  const WORDS_LIMIT = 10;

  const [wordInfo, setWordInfo] = useState<RealmWordInfoType>(
    selectWord(WORDS_LIMIT),
  );

  const recognizeWord = (diffRecognition: number): void => {
    setWordInfo(selectWord(WORDS_LIMIT));
    modelManager.recognizeWord(wordInfo, diffRecognition);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wordInfo}>
        <Text style={styles.word}>{wordInfo.word}</Text>
        <Text style={styles.evaluation}>
          {WordInfo.calcEvaluationFromWordInfo(wordInfo)}
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonGroup}>
        <SafeAreaView style={styles.button}>
          <Button
            title="Complete"
            color="#d2691e"
            accessibilityLabel="Complete"
            onPress={() => recognizeWord(100)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Good"
            color="#805c5c"
            accessibilityLabel="Good"
            onPress={() => recognizeWord(1)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Bad"
            color="#5f9ea0"
            accessibilityLabel="Bad"
            onPress={() => recognizeWord(-1)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Incomplete"
            color="#483d8b"
            accessibilityLabel="Incomplete"
            onPress={() => recognizeWord(-100)}
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
