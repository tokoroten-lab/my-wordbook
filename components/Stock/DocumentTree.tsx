import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import themeManager from '../../theme/ThemeManager';
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
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.paragraphList}
        ItemSeparatorComponent={() => <SafeAreaView style={styles.separator} />}
        data={documentTree.paragraphs}
        renderItem={({item}) => (
          <ParagraphTree paragraphTree={item} initialNumToRender={100} />
        )}
        keyExtractor={(_, index) => String(index)}
        initialNumToRender={props.initialNumToRender}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  paragraphList: {
    backgroundColor: themeManager.currentTheme.secondaryBackground,
  },
  separator: {
    borderBottomColor: themeManager.currentTheme.separator,
    borderBottomWidth: 1,
    padding: 4,
    margin: 8,
  },
});

export default DocumentTree;
