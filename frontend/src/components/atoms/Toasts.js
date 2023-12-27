import React, { useState, useEffect } from 'react';

const Toast = ({ text, type }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isDisappearing, setIsDisappearing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDisappearing(true);
            setTimeout(() => setIsVisible(false), 1000); // Delay for the animation to complete
        }, 3000); // Message starts disappearing after 3000ms (3 seconds)

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    const cores = {
        success: 'border-green-700 bg-green-500 text-white', 
        danger: 'border-red-700 bg-red-500 text-white', 
        alert: 'border-yellow-700 bg-yellow-500 text-white', 
        neutral: 'border-blue-700 bg-blue-500 text-white'
    };
 
    const typestyle = cores[type];

    return (
        <div className={`fixed flex items-center bottom-5 border-l-4 right-5 py-2 px-4 rounded shadow-lg animate-fade-in ${typestyle} ${isDisappearing ? 'animate-fade-out' : ''}`}>
            {text}
        </div>
    );
};

export default Toast;
