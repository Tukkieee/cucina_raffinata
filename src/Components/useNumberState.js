import { useState } from 'react';

export const useNumberState = (initialValue, formDataKey) => {
  const [number, setNumber] = useState(initialValue);

  const increment = (e) => {
    e.preventDefault()
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decrement = (e) => {
    e.preventDefault()
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };
  const updateFormData = (setFormData) => {
    setFormData(prevData => ({
      ...prevData,
      [formDataKey]: number,
    }));
  };
  return [number, increment, decrement, updateFormData];
};

