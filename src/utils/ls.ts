import { PaletteMode } from '@mui/material';

type Instance = typeof localStorage;

let storageInstance: Instance = localStorage;

const { themeMode } = {
  themeMode: 'themeMode',
};

/**
 * Methods to interact with storage
 */
export const storage = {
  /**
   * Set instance of storage
   */
  setStorage: (instance: Instance) => {
    storageInstance = instance;
  },
  /**
   * Method set themeMode to storage
   */
  setThemeMode: (mode: PaletteMode) => {
    if (!storageInstance) throw new Error('Instance must be defined');
    storageInstance.setItem(themeMode, mode);
  },
  /**
   * Method get themeMode from storage
   */
  getThemeMode: () => {
    if (!storageInstance) throw new Error('Instance must be defined');
    return storageInstance.getItem(themeMode) as PaletteMode | null;
  },
};
