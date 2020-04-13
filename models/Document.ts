/// <reference types="realm" />

import nlp from 'compromise'
import IModelData from './interfaces/IModelData'
import Normalizer from './utils/Normalizer'

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
    return Normalizer.normalize(document)
  }
}

export default Document
