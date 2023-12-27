import React from "react";
import Tooltip from "../tooltips/Tooltip";

function Button({ icon, text, className, onClick, tooltip }) {

  return (
    <>      
        <button onClick={onClick} aria-label={tooltip} className={`tt flex items-center gap-x-3 ${className}`}>
            <span className="w-4">
                {icon}
            </span>  
            <span className="whitespace-nowrap">
                {text}
             </span>
                <Tooltip text={tooltip}/>
        </button>
    </>
  );
}

export default Button;
