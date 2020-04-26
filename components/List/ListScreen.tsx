import React, {useState} from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import modelManager from '../../models/ModelManager';
import WordInfoView from './WordInfoView';

function ListScreen() {
  const [wordInfoList] = useState(
    modelManager.getWordInfoList([
      {name: 'evaluation', isDescend: true},
      {name: 'unrecognitionLevel', isDescend: true},
      {name: 'recognitionLevel', isDescend: false},
      {name: 'count', isDescend: true},
      {name: 'word', isDescend: false},
    ]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.wordInfoList}
        ItemSeparatorComponent={() => <SafeAreaView style={styles.separator} />}
        data={wordInfoList}
        renderItem={({item}) => <WordInfoView wordInfo={item} />}
        keyExtractor={(item) => item.word}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wordInfoList: {},
  separator: {
    borderBottomColor: 'chocolate',
    borderBottomWidth: 1,
    padding: 4,
    margin: 8,
  },
});

export default ListScreen;
