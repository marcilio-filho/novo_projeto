import { useState } from 'react';

export const useToggleVisibility = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    const element = document.getElementById(elementId);
    if (element) {
      setIsVisible(!isVisible);
      element.style.display = isVisible ? 'none' : 'block';
    }
  };

  return toggleVisibility;
};

export default useToggleVisibility;
