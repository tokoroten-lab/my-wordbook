import React, {useState, useEffect} from 'react';
import {Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import themeManager from '../../theme/ThemeManager';
import Paragraph from '../../models/Paragraph';
import SentenceTree from './SentenceTree';

interface Props {
  paragraphTree: Paragraph;
  initialNumToRender: number;
}

function ParagraphTree(props: Props) {
  const [paragraphTree, setParagraphTree] = useState(props.paragraphTree);

  useEffect(() => {
    setParagraphTree(props.paragraphTree);
  }, [props.paragraphTree]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>{paragraphTree.normal}</Text>
      <FlatList
        style={styles.sentenceList}
        data={paragraphTree.sentences}
        renderItem={({item}) => (
          <SentenceTree sentenceTree={item} initialNumToRender={100} />
        )}
        keyExtractor={(_, index) => String(index)}
        initialNumToRender={props.initialNumToRender}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  paragraph: {
    padding: 12,
    color: themeManager.currentTheme.secondaryText,
  },
  sentenceList: {
    marginBottom: 8,
    marginHorizontal: 8,
    backgroundColor: themeManager.currentTheme.teritaryBackground,
  },
});

export default ParagraphTree;
