// useShow.js
import { useState, useEffect, useRef } from 'react';

function useShow() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleElement = () => {
    setIsVisible((prevVisible) => !prevVisible); // Toggle visibility
  };

  return [isVisible, toggleElement, elementRef];
}

export default useShow;