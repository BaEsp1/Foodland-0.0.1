import { useState } from "react";

export default function useLocalStore(key, initialState) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      return initialState;
    }
  });

  const setValue = (value) => {
    try {
      setStoreValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  return [storeValue, setValue];
}
