import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

export default {
  /**
   * Used to save any object to cache
   **/
  saveObject: function (key: TCacheKeys, value: any) {
    return storeObject(key, value);
  },
  /**
   * Used to save any premitive variables
   **/
  saveValue: function (key: TCacheKeys, value: string) {
    return storeValue(key, value);
  },
  /**
   * Will remove stored value/object of specified key
   **/
  remove: function (key: TCacheKeys) {
    return removeData(key);
  },
  /**
   * Will remove all values except few specified keys
   **/
  clearAll: function (forceClearAll: boolean = false) {
    return clearAllData(
      forceClearAll
        ? []
        : [
            // mention keys which want to persist
          ],
    );
  },
  /**
   * Will return the object/value of specfic key otherwise return null
   **/
  fetch: function <ObjectType = string>(
    key: TCacheKeys,
    allowNull: boolean = false,
  ) {
    return fetchData<ObjectType>(key, allowNull);
  },
  fetchObject: function <ObjectType>(
    key: TCacheKeys,
    allowNull: boolean = false,
  ) {
    return fetchObjectData<ObjectType>(key, allowNull);
  },
  multifetch: function (keys: TCacheKeys[]) {
    return multifetch(keys);
  },
};

const clearAllData = (exemtedKeys: TCacheKeys[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    AsyncStorage.multiGet(exemtedKeys)
      .then(async data => {
        if (Platform.OS == 'ios') {
          await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
        } else {
          await AsyncStorage.clear();
        }
        let mutliArray: [string, string][] = [];
        data.forEach(item => {
          if (item[1]) {
            mutliArray.push([item[0], item[1]]);
          }
        });
        AsyncStorage.multiSet(mutliArray)
          .then(item => {
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

const multifetch = (
  keys: TCacheKeys[],
): Promise<{key: TCacheKeys; value: string | null}[]> => {
  return new Promise<{key: TCacheKeys; value: string | null}[]>(
    (resolve, reject) => {
      AsyncStorage.multiGet(keys)
        .then(async data => {
          let mutliArray: {key: TCacheKeys; value: string | null}[] = [];
          data.forEach(item => {
            mutliArray.push({
              key: item[0] as TCacheKeys,
              value: item[1],
            });
          });
          resolve(mutliArray);
        })
        .catch(error => {
          reject(error);
        });
    },
  );
};

function fetchData<T>(key: TCacheKeys, allowNull: boolean) {
  return new Promise<T | string | null>((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(value => {
        if (value == null) {
          if (allowNull) {
            resolve(null);
          }
          return;
        }
        // console.log('fetchData', key, value);
        if (value[0] == '{' || value[0] == '[') {
          const object = JSON.parse(value);
          resolve(object);
        } else {
          resolve(value);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

function fetchObjectData<T>(key: TCacheKeys, allowNull: boolean) {
  return new Promise<T | null>((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(value => {
        if (value == null) {
          if (allowNull) {
            resolve(null);
          }
          return;
        }
        // console.log('fetchData', key, value);
        const object = JSON.parse(value);
        resolve(object);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const storeObject = (key: TCacheKeys, value: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem(key, jsonValue)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

const storeValue = (key: TCacheKeys, value: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // console.log('storeValue', key, value);
    AsyncStorage.setItem(key, value)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

const removeData = (key: TCacheKeys): Promise<void> => {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(key)
      .then(value => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export type TCacheKeys =
  | 'IS_BIOMETRIC_ENABLED'
  | 'IS_ALREADY_LOGIN'
  | 'MIGRATION_VERSION'
  | 'LAST_ENTERED_PINCODE_REFERENCE_DATETIME'
  | 'FirstTimeUser';
