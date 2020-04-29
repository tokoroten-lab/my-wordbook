import React, {useState, useEffect} from 'react';
import {Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import themeManager from '../../theme/ThemeManager';
import Sentence from '../../models/Sentence';
import WordTree from './WordTree';

interface Props {
  sentenceTree: Sentence;
  initialNumToRender: number;
}

function SentenceTree(props: Props) {
  const [sentenceTree, setSentenceTree] = useState(props.sentenceTree);

  useEffect(() => {
    setSentenceTree(props.sentenceTree);
  }, [props.sentenceTree]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sentence}>{sentenceTree.normal}</Text>
      <FlatList
        style={styles.wordList}
        data={sentenceTree.words}
        renderItem={({item}) => <WordTree wordTree={item} />}
        keyExtractor={(_, index) => String(index)}
        initialNumToRender={props.initialNumToRender}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  sentence: {
    padding: 8,
    color: themeManager.currentTheme.secondaryText,
  },
  wordList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    marginHorizontal: 8,
    padding: 4,
    backgroundColor: themeManager.currentTheme.quaternaryBackground,
  },
});

export default SentenceTree;
