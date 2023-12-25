import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialVisibility) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialVisibility);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false); // Set visibility to false when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}
