// CommandBar.js
import React from 'react';
import Icons from '../Icons';

const CommandBar = ({ getSelectedText }) => {
  const handleAction = async (actionType) => {
    const selectedText = getSelectedText();

    if (actionType === 'summarize') {
      // Call the function to handle summarization
      await summarizeText(selectedText);
    }
    // Add more actions as needed
  };
  const summarizeText = async (text) => {
    if (!text) return;

    // Logic to make an API request to OpenAI's ChatGPT API
    // Example: Make an API request with 'text' as part of the payload
  };

  return (
    <div className="border-t border-b border-gray-200 my-6 py-3 px-2 flex justify-between">
    <div className="flex justify-start gap-6">
        <div className="flex gap-2 items-center">
            {Icons.icons.curtir}
            <span className="text-gray-500 text-sm">
            23
            </span>
        </div>
        <div className="flex gap-2 items-center">
            {Icons.icons.comentar}
            <span className="text-gray-500 text-sm">
                35
            </span>  
        </div>
    
    </div>
    <div className="flex justify-end gap-6">
        {Icons.icons.salvar}
        {Icons.icons.ouvir}
        {Icons.icons.lista}
        {Icons.icons.cards}
        {Icons.icons.compartilhar}           
        {Icons.icons.elipse}
        <button onClick={() => handleAction('summarize')} title='Bora?'>{Icons.icons.teste}</button>
        {Icons.icons.pena}
        {Icons.icons.paragrafo}
        {Icons.icons.twitter}
        {Icons.icons.whatsapp}
    </div>
    </div>










  );
};

export default CommandBar;

