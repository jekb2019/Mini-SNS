import { useState } from 'react';

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
