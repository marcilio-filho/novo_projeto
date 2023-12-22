import React, { useState, useEffect } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaCore from 'froala-editor';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import icons from '../Icons.js'; 
import 'froala-editor/js/languages/pt_br.js'; // Import the Brazilian Portuguese language file


const Artigos = [
  {
    "id": 1,
    "autor": "Manf McLoving",
    "titulo": "Exploring the Depths of the Ocean",
    "sobretitulo": "A Journey into the Unknown",
    "subtitulo": "A Journey into the Unknown: how to fail at everything and still win without advice from no-one!",
    "conteudo": "<h4>A Economia é fim!</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h4>Bora ver essa segunda parte!</h4><p>Bom quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
    "imagem": "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "tags": ["café","ciência","religião"]
  },
  {
    "id": 2,
    "autor": "Manf McLoving",
    "titulo": "The Mysteries of Outer Space",
    "sobretitulo": "Unveiling the Secrets of the Cosmos",
    "subtitulo": "A Journey into the Unknown",
    "conteudo": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imagem": "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "tags": ["café","ciência","religião"]
  },
  {
    "id": 3,
    "autor": "Manf McLoving",
    "titulo": "Advancements in Artificial Intelligence",
    "sobretitulo": "Shaping the Future of Technology",
    "subtitulo": "A Journey into the Unknown",
    "conteudo": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    "imagem": "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "tags": ["café","ciência","religião"]
  }
];
const Artigo = Artigos[0];
const Texto = "<h5 className='text-3xl'>" + Artigo.sobretitulo + "</h5><h2>" + Artigo.titulo + "</h2><h3>" + Artigo.subtitulo + "</h3>" + Artigo.conteudo + "</div></div>";

const FroalaEditorComponent = () => {
  const [model, setModel] = useState(Texto);

  const handleModelChange = (model) => {
    setModel(model);
  };

  const lockEditor = (editor) => {
    editor.edit.off(); // Permanently disable editing
  };

  useEffect(() => {


    




    // Custom button to lock editor
    FroalaCore.DefineIcon('lockEditor', {
      NAME: 'lock',
      template: 'font_awesome_5',
      templateHtml: icons.cadeadoAberto,
    });

    FroalaCore.RegisterCommand('lockEditor', {
      title: 'Lock Editor',
      focus: false,
      undo: false,
      refreshAfterCallback: true,
      callback: function () {
        lockEditor(this);
      }
    });

    // Custom button to open Google
    FroalaCore.RegisterCommand('openGoogle', {
      title: 'Open Google',
      icon: 'insertLink',
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: function () {
        window.open('https://www.google.com', '_blank');
      }
    });
  }, []);

  // Editor configuration
  const config = {
    toolbarInline: true,
    charCounterCount: false,
    quickInsertButtons: [''], // Disabling quick insert buttons
    toolbarButtons: [
      'bold', 'underline', 'strikeThrough', 'quote',
      'backgroundColor', '|',
      'openGoogle', 'lockEditor', 'clearFormatting',
    ],
    language: 'pt_br',
    placeholderText: 'Start typing here...',
    paragraphFormatSelection: true
  };

  return (
    <div className='text-left'>
    <FroalaEditor
      model={model}
      config={config}
      onModelChange={handleModelChange}
    />
    </div>
  );
};

export default FroalaEditorComponent;
