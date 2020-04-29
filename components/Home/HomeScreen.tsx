import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Button, Text} from 'react-native';
import themeManager from '../../theme/ThemeManager';
import modelManager, {
  SortingAxisType,
  RealmWordInfoType,
} from '../../models/ModelManager';

function pickWords(limit: number): RealmWordInfoType[] {
  const sortingAxis: SortingAxisType = {
    name: 'evaluation',
    isDescend: true,
  };

  return modelManager.getWordInfoList([sortingAxis], '', limit);
}

function BackgroundWordsText(wordsLimit: number): string {
  const words: RealmWordInfoType[] = pickWords(wordsLimit);

  const text: string = words.reduce((prev, current) => {
    return prev + current.word + ' ';
  }, '');

  return text;
}

function HomeScreen({navigation}: {navigation: any}) {
  const WORDS_LIMI = 10000;

  const [backgroundWordsText, setBackgroundWordsText] = useState(
    BackgroundWordsText(WORDS_LIMI),
  );

  useEffect(() => {
    navigation.addListener('focus', () => {
      setBackgroundWordsText(BackgroundWordsText(WORDS_LIMI));
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.words}>
        <Text style={styles.word}>{backgroundWordsText}</Text>
      </SafeAreaView>
      <Button
        color={themeManager.currentTheme.teritaryButton}
        onPress={() => navigation.openDrawer()}
        title="My wordbook"
      />
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
  words: {
    position: 'absolute',
    opacity: 0.4,
  },
  word: {
    fontSize: 16,
  },
});

export default HomeScreen;
