import React, { useState, useRef, useEffect } from "react";
import Toast from "./Toasts";

function ToggleIcon({ initial, name1, name2, onClick, icon1, icon2, tooltip1, tooltip2, toast1, toast2, colors, appendix }) {
  const [isActive, setIsActive] = useState(initial);
  const [isHovered, setIsHovered] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // New state for visibility of appendix
  const buttonRef = useRef();
  const divRef = useRef(); // New ref for appendix

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((buttonRef.current && !buttonRef.current.contains(event.target)) &&
          (divRef.current && !divRef.current.contains(event.target))) {
        setIsActive(false);
        setIsVisible(false); // Hide appendix when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleActive = () => {
    setIsActive(!isActive);
    setIsVisible(!isVisible); // Toggle visibility of appendix
    if (colors) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    if (onClick && typeof onClick === "function") {
      onClick(!isActive);
    }
  };

  const getDisplayedIcon = () => {
    if (icon2) {
      if (isHovered) {
        return isActive ? icon1 : icon2;
      }
      return isActive ? icon2 : icon1;
    }
    return icon1;
  };

  const getDisplayedName = () => (name2 && isActive) ? name2 : name1;
  const getDisplayedToast = () => (toast2 && isActive) ? toast1 : toast2;
  const getDisplayedTooltipText = () => (tooltip2 && isActive) ? tooltip2 : tooltip1;
  const tooltipWidth = getDisplayedTooltipText().length * 8;

  return (
    <>
      <div 
        className="relative flex y-100  px-2 py-2 w-auto h-10 rounded-md transition duration-300 ease-in-out active:opacity-90"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button ref={buttonRef} className="tt flex" onClick={toggleActive} aria-label={getDisplayedTooltipText()}>
          {getDisplayedIcon()}
          <span className="ml-2">{getDisplayedName()}</span>
          <span 
            className="ttt absolute hidden -translate-x-1/2 left-1/2 transform translate-y-2"
            style={{ width: `${Math.min(tooltipWidth, 150)}px` }}
          >
            {getDisplayedTooltipText()}
          </span>
        </button>
      </div>
      {isVisible && (
                <div ref={divRef}>
                    {appendix}
                </div>
            )}
      {isActive && showToast && <Toast text={getDisplayedToast()} type={colors} />}
    </>
  );
}

export default ToggleIcon;
