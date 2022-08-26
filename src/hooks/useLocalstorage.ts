import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useLocalstorage = (
  initialState: number,
  key: string
): [value: number, setValue: Dispatch<SetStateAction<number>>] => {
  const get = () => {
    const storage = localStorage.getItem(key);

    return storage ? +storage : initialState;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    localStorage.setItem(key, value.toString());
  }, [key, value]);

  return [+value, setValue];
};

export default useLocalstorage;
