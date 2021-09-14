/**
 * Form의 content를 관리해주는 hook이다.
 */

import { useState } from 'react';

const useForm = () => {
  const [content, setContent] = useState('');
  return [content, setContent];
};

export default useForm;
