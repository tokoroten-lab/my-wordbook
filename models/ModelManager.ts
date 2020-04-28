import Realm from 'realm';
import Document from './Document';
import Pragraph from './Paragraph';
import Sentence from './Sentence';
import Word from './Word';
import WordInfo, {WordInfoType} from './WordInfo';

export type RealmWordInfoType = Realm.Object & WordInfoType;

export type SortingAxisNameType =
  | 'word'
  | 'count'
  | 'recognitionLevel'
  | 'unrecognitionLevel'
  | 'evaluation';

export type SortingAxisType = {
  name: SortingAxisNameType;
  isDescend: boolean;
};

class ModelManager {
  private static _instance: ModelManager;
  private readonly realm: Realm;

  private constructor() {
    this.realm = new Realm({
      schema: [
        Document.schema,
        Pragraph.schema,
        Sentence.schema,
        Word.schema,
        WordInfo.schema,
      ],
    });
  }

  public static get instance(): ModelManager {
    if (!ModelManager._instance) {
      ModelManager._instance = new ModelManager();
    }

    return ModelManager._instance;
  }

  public stockDocument(document: Document): object {
    let stockedDocument = {};
    const words: Word[] = document.words;

    words.forEach((word: Word) => {
      this.appearWord(word);
    });

    this.realm.write(() => {
      stockedDocument = this.realm.create('Document', document.json);
      console.log(stockedDocument);
    });

    return stockedDocument;
  }

  public deleteAll(): void {
    this.realm.write(() => {
      this.realm.deleteAll();
    });
  }

  public getWordInfoList(
    sortingAxes: SortingAxisType[] = [],
    searchText: string = '',
    limit: number = 1000,
  ): RealmWordInfoType[] {
    const wordInfoList: RealmWordInfoType[] = this.realm
      .objects<WordInfoType>('WordInfo')
      .filtered(`word CONTAINS '${searchText.toLowerCase()}'`)
      .slice();

    wordInfoList.sort((lhs: RealmWordInfoType, rhs: RealmWordInfoType) => {
      for (let i = 0; i < sortingAxes.length; ++i) {
        const {name, isDescend} = sortingAxes[i];

        if (name === 'evaluation') {
          const lhsEval: number = WordInfo.calcEvaluationFromWordInfo(lhs);
          const rhsEval: number = WordInfo.calcEvaluationFromWordInfo(rhs);

          if (lhsEval < rhsEval) {
            return isDescend ? 1 : -1;
          } else if (lhsEval > rhsEval) {
            return isDescend ? -1 : 1;
          }
        } else {
          if (lhs[name] < rhs[name]) {
            return isDescend ? 1 : -1;
          } else if (lhs[name] > rhs[name]) {
            return isDescend ? -1 : 1;
          }
        }
      }

      return 0;
    });

    return wordInfoList.splice(0, limit);
  }

  public recognizeWord(wordInfo: RealmWordInfoType, diffRecognition: number) {
    this.realm.write(() => {
      if (diffRecognition < 0) {
        wordInfo.unrecognitionLevel -= diffRecognition;
      } else {
        wordInfo.recognitionLevel += diffRecognition;
      }
    });
  }

  private appearWord(word: Word): void {
    if (!this.getWordInfo(word)) {
      this.realm.write(() => {
        this.realm.create('WordInfo', {
          word: word.normal,
        });
      });
    }

    this.realm.write(() => {
      const wordInfo: RealmWordInfoType = this.getWordInfo(word)!;
      ++wordInfo.count;
    });
  }

  private getWordInfo(word: Word): RealmWordInfoType | undefined {
    return this.realm.objectForPrimaryKey('WordInfo', word.normal);
  }
}

export default ModelManager.instance;
