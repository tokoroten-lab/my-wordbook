import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import Document from '../../models/Document';
import ParagraphTree from './ParagraphTree';

interface Props {
  documentTree: Document;
  initialNumToRender: number;
}

function DocumentTree(props: Props) {
  const [documentTree, setDocumentTree] = useState(props.documentTree);

  useEffect(() => {
    setDocumentTree(props.documentTree);
  }, [props.documentTree]);

  return (
    <ScrollView style={styles.container}>
      <FlatList
        style={styles.paragraphList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={documentTree.paragraphs}
        renderItem={({item}) => (
          <ParagraphTree paragraphTree={item} initialNumToRender={100} />
        )}
        keyExtractor={(_, index) => String(index)}
        initialNumToRender={props.initialNumToRender}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  paragraphList: {
    backgroundColor: 'cornsilk',
  },
  separator: {
    borderBottomColor: 'chocolate',
    borderBottomWidth: 1,
    padding: 4,
    margin: 8,
  },
});

export default DocumentTree;
