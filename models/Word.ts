/// <reference types="realm" />

import IModelData from './interfaces/IModelData'

class Word implements IModelData {
  public static schema: Realm.ObjectSchema = {
    name: 'Word',
    properties: {
      raw: 'string',
      normal: 'string'
    }
  }

  public readonly raw: string
  public readonly normal: string

  constructor(raw: string, normal: string) {
    this.raw = raw
    this.normal = normal
  }
}

export default Word
