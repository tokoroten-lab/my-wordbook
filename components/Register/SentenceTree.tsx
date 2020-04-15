import React, {useState, useEffect} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.sentence}>{sentenceTree.normal}</Text>
      <FlatList
        style={styles.wordList}
        data={sentenceTree.words}
        renderItem={({item}) => <WordTree wordTree={item} />}
        keyExtractor={(_, index) => String(index)}
        initialNumToRender={props.initialNumToRender}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sentence: {
    padding: 8,
  },
  wordList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    marginHorizontal: 8,
    padding: 4,
    backgroundColor: 'bisque',
  },
});

export default SentenceTree;
