/// <reference types="realm" />

import nlp from 'compromise'
import IModelData from './interfaces/IModelData'

class Document implements IModelData {
  public static schema: Realm.ObjectSchema = {
    name: 'Document',
    properties: {
      raw: 'string',
      normal: 'string',
      paragraphs: 'Paragraph[]'
    }
  }

  public readonly raw: string
  public readonly normal: string

  constructor(document: string) {
    this.raw = document
    this.normal = Document.normalize(document)
  }

  private static normalize(document: string): string {
    const doc = nlp(document)
    doc.normalize({
      whitespace: true,
      case: false,
      punctuation: false,
      uncode: false,
      contractions: true,
      acronyms: true,
      parentheses: false,
      possessives: false,
      plurals: false,
      verbs: false,
      honorifics: false
    })
    return doc.out('text')
  }
}

export default Document
