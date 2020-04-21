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
}

export default ModelManager.instance;
