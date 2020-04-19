import Realm from 'realm';
import Document from './Document';
import Pragraph from './Paragraph';
import Sentence from './Sentence';
import Word from './Word';

class ModelManager {
  private static _instance: ModelManager;
  private readonly realm: Realm;

  private constructor() {
    this.realm = new Realm({
      schema: [Document.schema, Pragraph.schema, Sentence.schema, Word.schema],
    });
  }

  public static get instance() {
    if (!ModelManager._instance) {
      ModelManager._instance = new ModelManager();
    }

    return ModelManager._instance;
  }

  public stock(document: Document) {
    this.realm.write(() => {
      const stockedDocument = this.realm.create('Document', document.json);
      console.log(stockedDocument);
    });
  }
}

export default ModelManager.instance;
