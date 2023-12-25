import React, { useState } from "react";

function CounterButton({ initialLiked, initialCount, icone1, icone2, tooltip }) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);

  const toggleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <div className="relative flex items-center justify-start gap-2">
      <button className="tt" onClick={toggleLike}>
        {liked ? icone2 : icone1}
        <span className='ttt'>
            {tooltip}
            </span>
      </button>
        <span className="text-sm">{count}</span>
      </div>

  );
}

export default CounterButton;
