import React, { useState, useRef, useEffect } from 'react';
import Toast from '../../Toasts';


const IconButton = ({ initial, name1, name2, onClick, icon1, icon2, tooltip1, tooltip2, toast1, toast2, colors, appendix }) => {
    const [isVisible, setIsVisible] = useState(initial);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isHovered, setIsHovered] = useState(false); // State for hover
    const [showToast, setShowToast] = useState(false);
    const buttonRef = useRef();
    const divRef = useRef();

    // Handle clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && divRef.current && 
                !buttonRef.current.contains(event.target) && 
                !divRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleActive = () => {
        toggleVisibility();
        if (colors) {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        }
        if (onClick && typeof onClick === "function") {
          onClick(!isVisible);
        }
    };

    const getDisplayedIcon = () => {
        if (icon2) {
            return isHovered ? (isVisible ? icon1 : icon2) : (isVisible ? icon2 : icon1);
        }
        return icon1;
    };

    const getDisplayedName = () => isVisible && name2 ? name2 : name1;
    const getDisplayedToast = () => isVisible && toast2 ? toast2 : toast1;
    const getDisplayedTooltipText = () => isVisible && tooltip2 ? tooltip2 : tooltip1;
    const tooltipWidth = getDisplayedTooltipText().length * 8;

    return (
        <div className="relative hover:bg-gray-800 px-2 py-2 rounded-md transition duration-300 ease-in-out"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <button ref={buttonRef} onClick={toggleActive} aria-label={getDisplayedTooltipText()} className='tt'>
                {getDisplayedIcon()}
                <span className="ml-2">{getDisplayedName()}</span>
                <span className="ttt absolute hidden -translate-x-1/2 left-1/2 transform translate-y-2"
                      style={{ width: `${Math.min(tooltipWidth, 150)}px` }}>
                    {getDisplayedTooltipText()}
                </span> {/* Tooltip text */}
            </button>
            {isVisible && (
                <div ref={divRef}>
                    {appendix}
                </div>
            )}
            {showToast && <Toast text={getDisplayedToast()} type={colors} />}
        </div>
    );
};

export default IconButton;
