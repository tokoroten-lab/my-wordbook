import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
} from 'react-native';
import themeManager from '../../theme/ThemeManager';
import modelManager, {
  SortingAxisType,
  SortingAxisNameType,
} from '../../models/ModelManager';
import WordInfoView from './WordInfoView';
import SortingAxis from './SortingAxis';

function LineView() {
  return <SafeAreaView style={styles.line} />;
}

function ListScreen() {
  const [wordInfoList, setWordInfoList] = useState(
    modelManager.getWordInfoList(),
  );

  const [searchText, setSearchText] = useState('');

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
      modelManager.getWordInfoList(
        [primarySortingAxis, secondarySortingAxis],
        searchText,
      ),
    );
  }, [searchText, primarySortingAxis, secondarySortingAxis]);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <SafeAreaView style={styles.searchLabel}>
          <Text style={styles.searchLabelText}>Search</Text>
        </SafeAreaView>
        <LineView />
        <SafeAreaView style={styles.searchInput}>
          <TextInput
            placeholder="Input to search word"
            onChangeText={setSearchText}
          />
        </SafeAreaView>
        <LineView />
      </SafeAreaView>
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
      <LineView />
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
    backgroundColor: themeManager.currentTheme.primaryBackground,
  },
  sortingAxisList: {
    alignItems: 'flex-end',
    padding: 8,
  },
  wordInfoList: {
    flex: 1,
    marginTop: 8,
  },
  separator: {
    borderBottomColor: themeManager.currentTheme.separator,
    borderBottomWidth: 1,
    padding: 4,
    margin: 8,
  },
  searchLabel: {
    paddingVertical: 8,
    paddingLeft: 4,
  },
  searchLabelText: {
    fontSize: 18,
  },
  searchInput: {
    paddingHorizontal: 4,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: themeManager.currentTheme.separator,
  },
});

export default ListScreen;
