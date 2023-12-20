import React, { useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'; // You can choose a theme
import COLORS from '../Colors';
import icons from '../Icons';

const QuillComponent = () => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();

      // Check if the custom button is already added to the toolbar
      if (!document.querySelector('.custom-button')) {
        // Define a custom function to handle button click
        const handleButtonClick = () => {
          const selection = editor.getSelection();
          if (selection) {
            const customText = prompt('Enter custom text:');
            if (customText) {
              editor.insertText(selection.index, customText, 'user');
            }
          }
        };

        // Add a custom button to the Quill editor toolbar
        const customButton = document.createElement('button');
        customButton.innerHTML = '<i style="color: white" class="fa-solid fa-house"></i>';
        customButton.className = 'custom-button';
        customButton.addEventListener('click', handleButtonClick);

        const toolbar = quillRef.current.getEditor().getModule('toolbar');
        toolbar.container.appendChild(customButton);
      }
    }
  }, []);

  return (
    <div>
      <ReactQuill ref={quillRef} theme="bubble" />
    </div>
  );
};

export default QuillComponent;
