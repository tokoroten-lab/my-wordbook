import React, {useState} from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import modelManager from '../../models/ModelManager';
import WordInfoView from './WordInfoView';

function ListScreen() {
  const [wordInfoList] = useState(modelManager.getWordInfoList());

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
