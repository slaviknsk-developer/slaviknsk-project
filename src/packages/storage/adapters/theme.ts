import storage from '../storage';

const name = 'theme';

/**
 * Set theme in storage
 */
export const setTheme = (mode: string) => {
  storage.setItem(name, mode);
};

/**
 * Get theme from storage
 */
export const getTheme = () => {
  return storage.getItem(name);
};
