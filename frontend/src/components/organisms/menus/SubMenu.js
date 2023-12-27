import React, { useState, useRef, useEffect } from 'react';
import Button from "../../atoms/buttons/Button";
import Icons from '../../Icons';

function SubMenu({mainButton, buttons, title, description}) {

  const [isVisible, setIsVisible] = useState(false);
  const subMenuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target)) {
        // Do nothing if the main button is clicked
        return;
      }
    if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <div onClick={toggleVisibility} ref={buttonRef} className='relative flex justify-center' >
    <Button 
        text={mainButton.text}
        icon={mainButton.icon}
        tooltip={mainButton.tooltip}
        className={mainButton.className}
        
    />
    

    {isVisible && (
    
    <div ref={subMenuRef} className="z-50 lg:block md:block lg:absolute md:absolute lg:top-5 md:top-5 md:-left-[60px] lg:-left-[60px] fixed inset-0 flex justify-center items-center bg-black/20 sm:bg-transparent">
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/20 " onClick={toggleVisibility}></div>  
      <div className='z-50 md:relative items-center justify-center flex flex-col mt-3 rounded-lg min-w-min max-w-min shadow-xl bg-white'>  
        <div className="lg:hidden md:hidden flex justify-between items-top w-full p-4 border-b-[1px] border-gray-200">
            <div className="text-lg font-semibold text-left w-full">
                {title}
            </div>
            <div className='pl-3 text-lg'>{Icons.icons.close}</div>
            <span className="text-sm hidden">
                {description}
            </span>
        </div>
        <div className="flex justify-start items-center flex-wrap pt-1 pb-3 gap-y-1">
      {buttons.map((button) => (
        <div className= "w-full flex items-center justify-start py-1 px-3 transition duration-200 ease-in-out">
        <Button
          key={button.key}
          icon={button.icon}
          text={button.text}
          tooltip={button.tooltip}
          onClick={button.onClick}
          className={`tt text-lg flex justify-start px-4 py-2 rounded-md w-full gap-x-4 hover:bg-light-gray hover:text-ubique-blue transition duration-300 ease-in-out ${button.className}`}
        />
        </div>
      ))}
    </div>
    </div>
    </div>
    )}</div>
    </>
  );
}

export default SubMenu;