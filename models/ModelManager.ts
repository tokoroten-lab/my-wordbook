import Realm from 'realm';
import Document from './Document';
import Pragraph from './Paragraph';
import Sentence from './Sentence';
import Word from './Word';
import WordInfoSchema from './WordInfo';

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
        WordInfoSchema,
      ],
    });
  }

  public static get instance(): ModelManager {
    if (!ModelManager._instance) {
      ModelManager._instance = new ModelManager();
    }

    return ModelManager._instance;
  }

  public stock(document: Document): object {
    let stockedDocument = {};
    const words: Word[] = document.words;

    words.forEach((word: Word) => {
      this.updateWordInfo(word);
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

  private updateWordInfo(word: Word): void {
    if (!this.getWordInfo(word)) {
      this.realm.write(() => {
        this.realm.create('WordInfo', {
          word: word.normal,
        });
      });
    }

    this.realm.write(() => {
      const wordInfo: any = this.getWordInfo(word);
      ++wordInfo.count;
    });
  }

  private getWordInfo(word: Word): Realm.Object | undefined {
    return this.realm.objectForPrimaryKey('WordInfo', word.normal);
  }
}

export default ModelManager.instance;
