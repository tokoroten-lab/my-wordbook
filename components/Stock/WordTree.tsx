import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import themeManager from '../../theme/ThemeManager';
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
    <SafeAreaView>
      <Text style={styles.word}>{wordTree.normal}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  word: {
    textDecorationLine: 'underline',
    marginRight: 6,
    marginTop: 4,
    color: themeManager.currentTheme.secondaryText,
  },
});

export default WordTree;
