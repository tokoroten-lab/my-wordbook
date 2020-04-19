import React, {useState, useEffect} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  paragraph: {
    padding: 12,
  },
  sentenceList: {
    marginBottom: 8,
    marginHorizontal: 8,
    backgroundColor: 'papayawhip',
  },
});

export default ParagraphTree;
