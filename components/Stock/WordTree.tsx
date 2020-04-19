import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Word from '../../models/Word';

interface Props {
  wordTree: Word;
}

function WordTree(props: Props) {
  const [wordTree, setWordTree] = useState(props.wordTree);

  useEffect(() => {
    setWordTree(props.wordTree);
  }, [props.wordTree]);

  return (
    <View>
      <Text style={styles.word}>{wordTree.normal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  word: {
    textDecorationLine: 'underline',
    marginRight: 6,
    marginTop: 4,
  },
});

export default WordTree;
