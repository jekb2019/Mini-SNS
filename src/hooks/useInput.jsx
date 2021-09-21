import { useState } from 'react';

/**
 * This is a custom hook for managing input states.
 * useInput hook holds the current input value as state.
 * It returns three things
 *  1. value - current input value
 *  2. handlerByEvent - function which updates the value according to the event passed as argument.
 *  3. handlerByValue - function which updates the value with the value passed as argument.
 */

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);

  const handlerByEvent = (e) => {
    setValue(e.target.value);
  };

  const handlerByValue = (value) => {
    setValue(value);
  };

  return [value, handlerByEvent, handlerByValue];
};

export default useInput;
