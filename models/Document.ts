/// <reference types="realm" />

import IModelData from './interfaces/IModelData'
import Normalizer from './utils/Normalizer'
import Paragraph from './Paragraph'

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
  public readonly paragraphs: Paragraph[]

  constructor(document: string) {
    this.raw = document
    this.normal = Normalizer.normalize(document)
    this.paragraphs = Paragraph.getParagraphs(this.raw)
  }
}

export default Document
