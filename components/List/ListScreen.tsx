import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import modelManager, {
  SortingAxisType,
  SortingAxisNameType,
} from '../../models/ModelManager';
import WordInfoView from './WordInfoView';
import SortingAxis from './SortingAxis';

function ListScreen() {
  const [wordInfoList, setWordInfoList] = useState(
    modelManager.getWordInfoList(),
  );

  const [primarySortingAxis, setPrimarySortingAxis] = useState<SortingAxisType>(
    {
      name: 'evaluation',
      isDescend: true,
    },
  );

  const [secondarySortingAxis, setSecondarySortingAxis] = useState<
    SortingAxisType
  >({
    name: 'unrecognitionLevel',
    isDescend: true,
  });

  useEffect(() => {
    setWordInfoList(
      modelManager.getWordInfoList([primarySortingAxis, secondarySortingAxis]),
    );
  }, [primarySortingAxis, secondarySortingAxis]);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.sortingAxisList}>
        <SortingAxis
          axisLevel="Primary"
          defaultAxisName={primarySortingAxis.name}
          defaultIsDescend={primarySortingAxis.isDescend}
          onAxisNameValueChange={(name: SortingAxisNameType) => {
            setPrimarySortingAxis((prevAxis) => {
              return {
                name,
                isDescend: prevAxis.isDescend,
              };
            });
          }}
          onIsDescendValueChange={(isDescend: boolean) => {
            setPrimarySortingAxis((prevAxis) => {
              return {
                name: prevAxis.name,
                isDescend,
              };
            });
          }}
        />
        <SortingAxis
          axisLevel="Secondary"
          defaultAxisName={secondarySortingAxis.name}
          defaultIsDescend={secondarySortingAxis.isDescend}
          onAxisNameValueChange={(name: SortingAxisNameType) => {
            setSecondarySortingAxis((prevAxis) => {
              return {
                name,
                isDescend: prevAxis.isDescend,
              };
            });
          }}
          onIsDescendValueChange={(isDescend: boolean) => {
            setSecondarySortingAxis((prevAxis) => {
              return {
                name: prevAxis.name,
                isDescend,
              };
            });
          }}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.wordInfoList}>
        <FlatList
          ItemSeparatorComponent={() => (
            <SafeAreaView style={styles.separator} />
          )}
          data={wordInfoList}
          renderItem={({item}) => <WordInfoView wordInfo={item} />}
          keyExtractor={(item) => item.word}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sortingAxisList: {
    alignItems: 'flex-end',
    padding: 8,
  },
  wordInfoList: {
    flex: 1,
  },
  separator: {
    borderBottomColor: 'chocolate',
    borderBottomWidth: 1,
    padding: 4,
    margin: 8,
  },
});

export default ListScreen;
