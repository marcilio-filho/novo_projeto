import React, { useState, useEffect } from 'react';
import Icons from '../components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = Icons.icons;
const NomeUsuario = "Manf McLoving";
const FotoUsuario = "https://www.criatives.com.br/wp-content/uploads/2018/12/homem-bonito-03.jpg";
const Artigos = [
  {
    "id": 1,
    "autor": "Manf McLoving",
    "titulo": "Exploring the Depths of the Ocean",
    "sobretitulo": "A Journey into the Unknown",
    "subtitulo": "A Journey into the Unknown: how to fail at everything and still win without advice from no-one!",
    "conteudo": "<h3>A Economia é fim!</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Bom quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
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

const Notas = [
    {
        "id": 1,
        "nota": "Gostei muito desta parte!",
        "data": "10/12/2023",
        "tags": ["inglês","cultura","estados unidos"]
    },
    {
        "id": 2,
        "nota": "Não gostei muito desta parte!",
        "data": "11/12/2023",
        "tags": ["inglês","cultura","estados unidos"]
    },
    {
        "id": 3,
        "nota": "Adorei muito desta parte!",
        "data": "12/12/2023",
        "tags": ["inglês","cultura","estados unidos"]
    }
];
const artigo = Artigos[0];
const Tags = artigo.tags; 

const Test = () => {
    const [showColorButtons, setShowColorButtons] = useState(false);
    const [showCommands, setShowCommands] = useState(false);
    const [commandBoxPosition, setCommandBoxPosition] = useState({ x: 0, y: 0 });
    const handleMouseUp = () => {
        const selection = window.getSelection();
        console.log("Selection:", selection.toString()); // For debugging
        if (selection.toString().length > 0) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          setCommandBoxPosition({ x: rect.left, y: rect.top + window.scrollY -45 }); // Adjust Y position for scrolling
          setShowCommands(true);
        } else {
          setShowCommands(false);
        }
      };
      
    const CommandControlBox = () => {
      if (!showCommands) return null;
      return (
        <div className="flex justify-center lg:ml-10">
          <div className="flex gap-4 px-3 py-2 rounded-sm absolute bg-primary-gray text-white" style={{ top: `${commandBoxPosition.y}px` }}>
            <button onClick={() => setShowColorButtons(true)} style={{ display: showColorButtons ? 'none' : 'block' }} title="Destacar trecho">
              {icons.destacar}
            </button>
            {showColorButtons && (
              <div className='botoes-cores flex gap-4 px-2'>
                <button onClick={() => applyStyle('highlight-yellow')} title="Destacar em amarelo"> <span style={{ color: 'yellow', opacity: 0.8 }}>{icons.pintar}</span></button>
                <button onClick={() => applyStyle('highlight-green')} title="Destacar em verde"> <span style={{ color: 'green', opacity: 0.8 }}>{icons.pintar}</span></button>
                <button onClick={() => applyStyle('highlight-red')} title="Destacar em vermelho"> <span style={{ color: 'red', opacity: 0.8 }}>{icons.pintar}</span></button>
                <button onClick={() => applyStyle('highlight-blue')} title="Destacar em azul"><span style={{ color: 'blue', opacity: 0.8 }}>{icons.pintar}</span></button>
              </div>
            )}
            <button onClick={() => applyStyle('underline')} title="Sublinhar a seleção">{icons.sublinhar}</button>
            <button onClick={() => applyStyle('bold')} title="Negrito">{icons.negrito}</button>
            <button onClick={() => clearSelectionStyle()} title="Limpar formatação">{icons.limpar}</button>
            <div className="flex border-l border-l-1 border-l-white/40 gap-x-3 pl-5">
              <button onClick={() => applyStyle('bold')} title="Criar texto sobre o assunto do trecho">{icons.livroaberto}</button>
              <button onClick={() => applyStyle('bold')} title="Tirar dúvidas sobre o trecho">{icons.pergunta}</button>
              <button onClick={() => applyStyle('bold')} title="Criar questões objetivas sobre o trecho">{icons.teste}</button>
              <button onClick={() => applyStyle('bold')} title="Criar dissertativa sobre o trecho">{icons.feather}</button>
              <button onClick={() => applyStyle('bold')} title="Criar questões de fixação sobre o trecho">{icons.paragrafo}</button>
              <button onClick={() => applyStyle('bold')} title="Traduzir trecho">{icons.traduzir}</button>
            </div>
            
            <div className="flex border-l border-l-1 border-l-white/40 gap-x-3 pl-5">
              <button onClick={() => applyStyle('bold')} title="Comentar publicamente o trecho">{icons.mensagens}</button>
              <button onClick={() => applyStyle('bold')} title="Adicionar etiquetas ao trecho">{icons.tag}</button>
              <button onClick={() => applyStyle('bold')} title="Sugerir edições ou atualizações">{icons.editar}</button>
              <button onClick={() => applyStyle('bold')} title="Adicionar notas privadas">{icons.caderno}</button>
            </div>
          </div>
        </div>
      );
    };
      const applyStyle = (styleType) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
      
        let range = selection.getRangeAt(0);
        let selectedText = range.toString();
      
        let styledText;
        switch (styleType) {
          case 'highlight-yellow':
            styledText = `<span class="highlight-yellow">${selectedText}</span>`;
            break;
          case 'highlight-green':
            styledText = `<span class="highlight-green">${selectedText}</span>`;
            break;  
          case 'highlight-red':
            styledText = `<span class="highlight-red">${selectedText}</span>`;
            break;
          case 'highlight-blue':
            styledText = `<span class="highlight-blue">${selectedText}</span>`;
            break;                    
          case 'underline':
            styledText = `<span class="underline">${selectedText}</span>`;
            break;
          case 'bold':
            styledText = `<span class="bold">${selectedText}</span>`;
            break;
          default:
            return;
        }
      
        range.deleteContents();
        range.insertNode(new DOMParser().parseFromString(styledText, 'text/html').body.firstChild);
      
        // Save to session storage
        const articleContent = document.querySelector('.article-content');
        if (articleContent) {
          sessionStorage.setItem('styledText', articleContent.innerHTML);
        }
        setShowColorButtons(false);
      };
      

      function clearSelectionStyle() {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
      
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
      
        // Remove HTML tags from the selected text
        const clearedText = selectedText.replace(/<\/?[^>]+(>|$)/g, "");
      
        range.deleteContents();
        range.insertNode(new DOMParser().parseFromString(clearedText, 'text/html').body.firstChild);
      
        // Save to session storage
        const articleContent = document.querySelector('.article-content');
        if (articleContent) {
          sessionStorage.setItem('styledText', articleContent.innerHTML);
        }
      }




      useEffect(() => {
        const savedContent = sessionStorage.getItem('styledText');
        if (savedContent) {
          // Set the innerHTML of the article content to the saved content
        }
      }, []);
       
  return (
    <div className="p-5 lg:p-10">
         
    <div className="flex items-center flex-col justify-center lg:flex-row gap-7">
      <div className="flex flex-col gap-4 lg:max-w-2xl">
        <h5 className="text-xl">
          {artigo.sobretitulo}
        </h5>
        <h2 className="text-3xl lg:text-5xl">
          {artigo.titulo}
        </h2>
        <h6 className="text-xl lg:text-2xl text-gray-600">
          {artigo.subtitulo}
        </h6>
        <div>
        {Tags.map((tag, index) => ( 
            <span  key={index}  className="bg-tertiary-gray text-secondary-gray px-2 py-1 rounded-full mr-2 text-xs">{tag}</span>
        ))}
        </div>
        <div className="flex flex-row">
            <div className="px-3">
                <img className="w-15 h-auto rounded-full" src="https://miro.medium.com/v2/resize:fill:44:44/1*iS1UwYrqJUAkVtLVR_mZXQ.jpeg" alt={artigo.autor}></img>
            </div>
            <div className="flex flex-col">
                <div className="font-medium">
                    {artigo.autor}
                </div>
                <div className="text-gray-700">
                    Publicado em 12 de agosto
                </div>
            </div>
        </div>
        
        <div className="border-t border-b border-gray-200 py-3 px-2 flex justify-between">
            <div className="flex justify-start gap-6">
                <div className="flex gap-2 items-center">
                    {icons.curtir}
                    <span className="text-gray-500 text-sm">
                       23
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                    {icons.comentar}
                    <span className="text-gray-500 text-sm">
                        35
                    </span>  
                </div>
               
            </div>
            <div className="flex justify-end gap-6">
                {icons.salvar}
                {icons.ouvir}
                {icons.lista}
                {icons.cards}
                {icons.compartilhar}           
                {icons.elipse}
                {icons.teste}
                {icons.pena}
                {icons.paragrafo}
                {icons.twitter}
                {icons.whatsapp}
            </div>
            
        </div>
      
        <div className="">
            <CommandControlBox />
            <div className="article-content" onMouseUp={handleMouseUp} dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
        </div>
      </div>

    
      <div className="invisible flex flex-col gap-2 lg:max-w-4/12 max-w-8 pl-5">
        {Notas.map((nota) => (
            <div className="p-5 border border-solid border-gray-200 shadow-sm rounded">
                <div className="flex gap-3 items-center">
                    <img src={FotoUsuario} alt="Foto" className="w-8 h-8 rounded-full"></img>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-700">{NomeUsuario}</span>
                        <span className="text-xs text-gray-700">{nota.data}</span>
                    </div>
                </div>
                <div className="mb-2 mt-2 text-sm">
                    {nota.nota}
                </div>
                <div>
                    {nota.tags.map((tag) => (
                        <span className="bg-tertiary-gray text-secondary-gray px-2 py-1 rounded-full mr-1 text-xs">
                            {tag}
                        </span>
                    ))}
                </div>

                <hr className="mt-3 mb-3" />  
                <div>
                    <span className="text-xs mr-3 text-primary-color hover:opacity-90 hover:cursor-pointer">
                        Editar
                    </span>
                    <span className="text-xs text-primary-color hover:opacity-90 hover:cursor-pointer">
                        Apagar
                    </span>
                    
                </div>  
            </div>    
        ))}
      </div>

    </div>
        <div>
            <img className="invisible w-full object-cover rounded-xl" alt="Imagem" src={artigo.imagem}></img>
        </div> 
    </div>
  );
};

export default Test;
