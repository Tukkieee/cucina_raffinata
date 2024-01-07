import { useState } from 'react';

export const useToggleContent = (initialState = false) => {
  const [showContent, setShowContent] = useState(initialState);

  const toggleContent = () => {
    setShowContent(prevState => !prevState);
  };

  return [ showContent, toggleContent ];
};
