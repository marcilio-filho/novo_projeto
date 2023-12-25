import React from "react";

function Button({ icone, text, tooltip, className, onClick }) {
  const handleClick = () => {
    if (onClick && typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      <span className="tt">
        {icone}
        {text}
        <span className='ttt'>
            {tooltip}
        </span>
      </span>
    </button>
  );
}

export default Button;
