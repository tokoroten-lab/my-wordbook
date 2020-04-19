class ModelManager {
  private static _instance: ModelManager;

  private constructor() {
    //
  }

  public static get instance() {
    if (!ModelManager._instance) {
      ModelManager._instance = new ModelManager();
    }

    return ModelManager._instance;
  }
}

export default ModelManager;
