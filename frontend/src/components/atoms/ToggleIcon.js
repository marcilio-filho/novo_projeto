import React, { useState } from "react";
import Toast from "./Toasts";

function ToggleIcon({ initial, action, icone1, icone2, tooltip, text1, text2, colors }) {
  const [Ativo, setAtivo] = useState(initial);
  const [showToast, setShowToast] = useState(false); // State to control Toast visibility

  const toggleAtivo = () => {
    setAtivo(!Ativo);
    setShowToast(true); // Show the toast when the button is clicked
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
    if (action && typeof action === "function") {
      action(Ativo); // Call the provided action function with the current state

    }
  };
  return (
    <>
    <div className="relative hover:bg-gray-800 px-2 py-2 rounded-md transition duration-300 ease-in-out">
    <button className="tt" onClick={toggleAtivo}>
      {Ativo ? icone2 : icone1}
      <span className="ttt">{tooltip}</span>  
    </button>
    </div>
    {showToast && <Toast text={Ativo === true ? text1 : text2 } type={colors} />}
    </>
  );
}

export default ToggleIcon;
