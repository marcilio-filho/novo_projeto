import React from "react";
function Tooltip({ text }) {
    const width = text.length > 0 ? text.length * 8 : 0;
  return (
    <>
        <span
          className="ttt p-4 absolute hidden -translate-x-1/2 left-1/2 transform translate-y-2"
          style={{ width: `${Math.min(width, 150)}px` }}>
              {text}
        </span>
    </>
  );
}
export default Tooltip;
