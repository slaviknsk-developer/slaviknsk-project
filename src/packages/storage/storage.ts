import { LocalStorage, StorageInstance } from './types';

let storage: StorageInstance;

/**
 * Compare instance with localStorage
 */
const isLocalStorage = (instance: StorageInstance): instance is LocalStorage => {
  for (let key in localStorage) {
    if (!instance[key]) return false;
    if (typeof localStorage[key] !== typeof instance[key]) return false;
  }
  return true;
};

/**
 * Set storage
 */
const setStorage = (instance: StorageInstance) => {
  storage = instance;
};

/**
 * Set item to storage
 */
const setItem = (name: string, value: any) => {
  if (!storage) throw new Error('Storage must be defined');
  if (isLocalStorage(storage)) {
    storage.setItem(name, value);
    return;
  }
  throw new Error('Current storage is not supported');
};

/**
 * Get item from storage
 */
const getItem = (name: string) => {
  if (!storage) throw new Error('Storage must be defined');
  if (isLocalStorage(storage)) return storage.getItem(name);
  throw new Error('Current storage is not supported');
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { setStorage, setItem, getItem };
