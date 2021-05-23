export class LocalStorage {

    private static local = window.localStorage;
  
    /**
     * get item from local storage
     * @param key
     */
    public static getItem(key: string): string {
      return LocalStorage.local.getItem(key);
    }
  
    /**
     * set item to localstorage
     * @param key
     * @param value
     */
    public static setItem(key: string, value: string) {
      return LocalStorage.local.setItem(key, value);
    }
  
    /**
     * remove item
     * @param key
     */
    public static removeItem(key: string) {
      LocalStorage.local.removeItem(key);
    }
  
    /**
     * clear local storage
     */
    public static clear() {
      LocalStorage.local.clear();
    }
  
  }
  