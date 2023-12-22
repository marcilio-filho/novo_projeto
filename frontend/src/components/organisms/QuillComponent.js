import React, { useRef, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import Icons from '../Icons';
import Artigos from './artigos.json';
import Autores from './autores.json';
import CommBar from './CommandBar';

const iconsKeys = Icons.iconsKeys;
const Artigo = Artigos[0]; // Assuming you want the first article
const Autor = Autores.find(autor => autor.id === Artigo.autor);
const Data = new Date(Artigo.data).toLocaleDateString('en-GB', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});
const Tags = Artigo.tags;
const TagsArtigo = (
  <div className='text-left flex gap-x-2 my-4'>
    {Tags.map((tag, index) => (
      <span key={index} className="align-left bg-tertiary-gray text-secondary-gray px-2 py-1 rounded-full text-xs">
        {tag}
      </span>
    ))}
  </div>
);

const textoInicial = `${Artigo.conteudo}`;
const articleHeader = (
  <div className='text-left'>
    <h6 className='text-xl font-serif mb-3'>{Artigo.sobretitulo}</h6>
    <h2 className='text-3xl lg:text-5xl mb-5 font-serif'>{Artigo.titulo}</h2>
    <h3 className='text-xl lg:text-2xl font-serif leading-relaxed text-secondary-gray'>{Artigo.subtitulo}</h3>{TagsArtigo}
    <div className="flex items-center mb-0">
      <img className="rounded-full w-14 h-auto mr-4" src={Autor ? Autor.foto : ''} />
      <div className="flex flex-col">
        <div className="text-xl font-semibold font-serif">{Autor ? Autor.nome : ''}</div>
        <div className="text-primary-gray text-lg font-serif">Publicado em {Data}</div>
      </div>
    </div>     
  </div>
);

const buttonId = 'quill-custom-button'; // Unique identifier for the custom button

/**
 * Custom hook to add a custom button to the Quill editor.
 * @param {Object} quillRef - Reference to the Quill editor.
 */
function useCustomQuillButton(quillRef) {
  useEffect(() => {
    const editor = quillRef.current?.getEditor();

    if (editor && !document.getElementById(buttonId)) {
      const handleButtonClick = () => {
        const selection = editor.getSelection();
        if (selection) {
          const customText = prompt('Enter custom text:');
          if (customText) {
            editor.insertText(selection.index, customText, 'user');
          }
        }
      };

      const spanElement = document.createElement('span');
      spanElement.className = 'ql-formats';

      const buttonElement = document.createElement('button');
      buttonElement.type = 'button';
      buttonElement.className = 'ql-custom-button';
      buttonElement.id = buttonId;
      
      const iconElement = document.createElement('i');
      iconElement.style = 'color: #ccc; display: flex; align-items: center; justify-content: center;';
      iconElement.className = iconsKeys.home;
      buttonElement.appendChild(iconElement);

      spanElement.appendChild(buttonElement);
      buttonElement.addEventListener('click', handleButtonClick);

      const toolbar = editor.getModule('toolbar');
      toolbar.container.appendChild(spanElement);
    }
  }, [quillRef]);
}



const QuillComponent = () => {
  const quillRef = useRef(null);
  const [text, setText] = useState(textoInicial);

  // Using the custom hook for adding a custom button
  useCustomQuillButton(quillRef);

  const handleTextChange = (content) => {
    setText(content);
  };

  // Toolbar modules for ReactQuill

 
  const modules = {
    toolbar: [
      [{ 'header': [4, false] }],
      ['bold', 'underline', 'strike', 'blockquote'],
      [{ 'background': ['#ffff0040', '#00800033', '#ff000033', '#0000ff33', '#ffa50033'] }],
      ['link'],
      ['clean'],
    ],
  };

  return (
    <div className='max-w-[60ch] lg:m-auto lg:mt-10'>
      {articleHeader}  
      <CommBar getSelectedText={() => quillRef.current?.getEditor().getSelection()?.toString()} />
      <ReactQuill
        ref={quillRef}
        theme="bubble"
        value= {text}
        onChange={handleTextChange}
        modules={modules}
      />
    </div>
  );
};

export default QuillComponent;
