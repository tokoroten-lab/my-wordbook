import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Document from '../../models/Document';
import RegisterTextInput from './RegisterTextInput';
import DocumentTree from './DocumentTree';

function RegisterScreen() {
  const [text, setText] = useState('');
  const [documentTree, setDocumentTree] = useState(new Document(''));
  return (
    <View style={styles.container}>
      <RegisterTextInput
        maxLength={1000}
        value={text}
        defaultValue={''}
        onChangeText={(changedText: string) => setText(changedText)}
      />
      <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <Button
            title="Break down"
            color="rgb(128, 92, 92)"
            accessibilityLabel="Break down text to create document tree"
            onPress={() => setDocumentTree(new Document(text))}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Clear"
            color="rgb(108, 92, 92)"
            accessibilityLabel="Clear text and document tree"
            onPress={() => {
              setText('');
              setDocumentTree(new Document(''));
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Register"
            color="chocolate"
            accessibilityLabel="Register document tree into database"
            onPress={() => onRegisterButton()}
          />
        </View>
      </View>
      <DocumentTree documentTree={documentTree} initialNumToRender={10} />
    </View>
  );
}

function onRegisterButton() {
  console.log('Register button pressed');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default RegisterScreen;
