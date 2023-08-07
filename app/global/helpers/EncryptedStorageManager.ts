import EncryptedStorage from 'react-native-encrypted-storage';

export default {
  saveObject: function (key: EncryptedStorageKeys, value: any) {
    return storeObject(key, value);
  },
  saveValue: function (key: EncryptedStorageKeys, value: string) {
    return storeValue(key, value);
  },
  remove: function (key: EncryptedStorageKeys) {
    return removeData(key);
  },
  clearAll: function () {
    return clearAllData();
  },
  fetch: function (key: EncryptedStorageKeys) {
    return fetchData(key);
  },
  fetchObject: function <ObjectType>(key: EncryptedStorageKeys) {
    return fetchObject<ObjectType>(key);
  },
};

const clearAllData = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      await EncryptedStorage.clear();
      console.log('clearAllData');
      resolve(true);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};

const fetchData = (key: EncryptedStorageKeys) => {
  return new Promise<string | null>(async (resolve, reject) => {
    try {
      const value = await EncryptedStorage.getItem(key);
      console.log(value);
      resolve(value);
    } catch (error) {
      console.log(error);
      resolve(null);
    }
  });
};

function fetchObject<ObjectType>(key: EncryptedStorageKeys) {
  return new Promise<ObjectType | null>(async (resolve, reject) => {
    try {
      const value = await EncryptedStorage.getItem(key);
      if (value == null) {
        resolve(null);
        return;
      }
      const object = JSON.parse(value) as ObjectType;
      console.log(object);
      resolve(object);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

const storeObject = (key: EncryptedStorageKeys, value: any) => {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const jsonValue = JSON.stringify(value);
      await EncryptedStorage.setItem(key, jsonValue);
      resolve(true);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};

const storeValue = (key: EncryptedStorageKeys, value: string) => {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      await EncryptedStorage.setItem(key, value);
      resolve(true);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};

const removeData = (key: EncryptedStorageKeys) => {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      await EncryptedStorage.removeItem(key);
      resolve(true);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};

export type EncryptedStorageKeys =
  | 'AllAccounts'
  | 'LoggedInAccount'
  | 'USER_ACCESS_TOKEN'
  | 'PIN_CODE'
  | 'USER_REFRESH_TOKEN'
  | 'DEVICE_TOKEN';
