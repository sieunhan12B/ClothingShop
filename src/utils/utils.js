// utils/utils.js
export const getLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error reading localStorage:", error);
    return null;
  }
};

export const setLocalStorage = (key, value) => {
  try {
    console.log(`Saving to localStorage: ${key}`, value);
    if (value !== undefined && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      console.warn(`Cannot save ${key}: value is ${value}`);
    }
  } catch (error) {
    console.error(`Error saving to localStorage: ${key}`, error);
  }
};