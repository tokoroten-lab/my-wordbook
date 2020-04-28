import React, {useState} from 'react';
import {StyleSheet, Button, SafeAreaView} from 'react-native';
import modelManager from '../../models/ModelManager';
import Document from '../../models/Document';
import StockTextInput from './StockTextInput';
import DocumentTree from './DocumentTree';

function StockScreen() {
  const [text, setText] = useState('');
  const [documentTree, setDocumentTree] = useState(new Document(''));

  return (
    <SafeAreaView style={styles.container}>
      <StockTextInput
        maxLength={1000}
        value={text}
        defaultValue={''}
        onChangeText={(changedText: string) => setText(changedText)}
      />
      <SafeAreaView style={styles.buttonGroup}>
        <SafeAreaView style={styles.button}>
          <Button
            title="Break down"
            color="rgb(128, 92, 92)"
            accessibilityLabel="Break down text to create document tree"
            onPress={() => setDocumentTree(new Document(text))}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Clear"
            color="rgb(108, 92, 92)"
            accessibilityLabel="Clear text and document tree"
            onPress={() => {
              setText('');
              setDocumentTree(new Document(''));
            }}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button
            title="Stock"
            color="chocolate"
            accessibilityLabel="Stock document tree into database"
            onPress={() => {
              if (documentTree.raw !== '') {
                modelManager.stockDocument(documentTree);
                setText('');
                setDocumentTree(new Document(''));
              }
            }}
          />
        </SafeAreaView>
      </SafeAreaView>
      <DocumentTree documentTree={documentTree} initialNumToRender={10} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginRight: 4,
  },
  documentTreeList: {
    marginTop: 16,
  },
});

export default StockScreen;
