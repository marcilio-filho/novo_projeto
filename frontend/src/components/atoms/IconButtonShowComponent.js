import React, { useState, useRef, useEffect } from 'react';

const IconButton = ({ icon, text, tooltip, appendix }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleDiv = () => setIsVisible(!isVisible);
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

    return (
        <div className="relative hover:bg-gray-800 px-2 py-2 rounded-md transition duration-300 ease-in-out">
            <button ref={buttonRef} onClick={toggleDiv} className='tt'>
                {icon}
                {text}
                <span className='ttt'>
                    {tooltip}
                    </span>
            </button>
            {isVisible && (
                <div ref={divRef}>
                    {appendix}
                </div>
            )}
        </div>
    );
};

export default IconButton;
