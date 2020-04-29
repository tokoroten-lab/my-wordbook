import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import themeManager from '../../theme/ThemeManager';
import modelManager, {
  RealmWordInfoType,
  SortingAxisType,
} from '../../models/ModelManager';
import WordInfo from '../../models/WordInfo';
import axios from 'axios';
import cheerio from 'react-native-cheerio';

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

  const [wordMeaning, setWordMeaning] = useState('');

  const [isDisplayingWordMeaning, setIsDisplayingWordMeaning] = useState(false);

  const recognizeWord = (diffRecognition: number): void => {
    setWordInfo(selectWord(WORDS_LIMIT));
    setIsDisplayingWordMeaning(false);
    modelManager.recognizeWord(wordInfo, diffRecognition);
  };

  const setMeaning = (word: string) => {
    setWordMeaning('');
    axios
      .get(`https://ejje.weblio.jp/content/${word}`)
      .then(({data}) => {
        const $ = cheerio.load(data);
        setWordMeaning($('td.content-explanation.ej').text());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setMeaning(wordInfo.word);
  }, [wordInfo]);

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
            color={themeManager.currentTheme.completeButtonBackground}
            accessibilityLabel="Complete"
            onPress={() => recognizeWord(100)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Good"
            color={themeManager.currentTheme.goodButtonBackground}
            accessibilityLabel="Good"
            onPress={() => recognizeWord(1)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Bad"
            color={themeManager.currentTheme.badButtonBackground}
            accessibilityLabel="Bad"
            onPress={() => recognizeWord(-1)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Incomplete"
            color={themeManager.currentTheme.incompleteButtonBackground}
            accessibilityLabel="Incomplete"
            onPress={() => recognizeWord(-100)}
          />
        </SafeAreaView>
        <SafeAreaView
          style={StyleSheet.flatten([
            styles.button,
            styles.displayMeaningButton,
          ])}>
          <Button
            title="Display meaning"
            color={themeManager.currentTheme.incompleteButtonBackground}
            accessibilityLabel="Display meaning"
            onPress={() => setIsDisplayingWordMeaning(true)}
          />
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView>
        {isDisplayingWordMeaning ? <Text>{wordMeaning}</Text> : null}
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: themeManager.currentTheme.primaryBackground,
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
    color: themeManager.currentTheme.accentText,
  },
  buttonGroup: {},
  button: {
    paddingVertical: 4,
  },
  displayMeaningButton: {
    marginTop: 20,
  },
});

export default TrainScreen;
