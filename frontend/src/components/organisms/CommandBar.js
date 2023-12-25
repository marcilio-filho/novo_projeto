import React from 'react';
import useShow from '../../hooks/useShow';
import Icons from '../Icons';
import SubMenu from './subMenu';
import ToggleIcon from '../atoms/ToggleIcon';
import CounterButton from '../atoms/CounterButton';
import ActionButton from '../atoms/ActionButton';
import IconButton from '../atoms/IconButton';
import IconButtonShowComponent from '../atoms/IconButtonShowComponent';


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

  const submenuStudyTools = [
    {
      name: 'Questões objetivas',
      icon: Icons.icons.teste,
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      },
    },
    {
      name: 'Questões discursivas',
      icon: Icons.icons.pena,
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      },
    },
    {
      name: 'Questões de fixação',
      icon: Icons.icons.paragrafo,
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      },
    },
    {
        name: 'Ler resumo',
        icon: Icons.icons.lista,
        onClick: (itemName) => {
          alert(`Clicked ${itemName}`);
        },
      },
      {
        name: 'Flashcards',
        icon: Icons.icons.cards,
        onClick: (itemName) => {
          alert(`Clicked ${itemName}`);
        },
      },
    // Add more submenu items as needed
  ];

  const submenuShareButtons = [
    {
      name: 'Facebook',
      icon: Icons.icons.facebook,
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      },
    },
    {
      name: 'WhatssApp',
      icon: Icons.icons.whatsapp,
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      },
    },
    {
      name: 'Twitter',
      icon: Icons.icons.twitter,
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      },
    },
    {
      name: 'Threads',
      icon: Icons.icons.threads,
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      }
    },
    // Add more submenu items as needed
  ];

  const submenuAI = [
    {
        name: 'Tirar dúvidas',
        icon: Icons.icons.duvida,
        onClick: (itemName) => {
            alert(`Clicked ${itemName}`);
          }
    },
    {
        name: 'Resumir o texto',
        icon: Icons.icons.lista,
        onClick: (itemName) => {
            alert(`Clicked ${itemName}`);
          }
    },
    {
        name: 'Perguntas e respostas',
        icon: Icons.icons.duvida,
        onClick: (itemName) => {
            alert(`Clicked ${itemName}`);
          }
    },
    {
        name: 'Traduzir',
        icon: Icons.icons.traduzir,
        onClick: (itemName) => {
          alert(`Clicked ${itemName}`);
        },
    },   
  ];
  const submenuMore = [
    {
      name: 'Imprimir',
      icon: Icons.icons.imprimir,
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      },
    },
    {
      name: 'Baixar como .pdf',
      icon: Icons.icons.pdf,
      tooltip: "Clique para baixar o Pdf",
      onClick: (itemName) => {
        alert(`Clicked ${itemName}`);
      },
    },
    {
        name: 'Restaurar original',
        icon: Icons.icons.reset,
        onClick: (itemName) => {
            alert(`Clicked ${itemName}`);
        },
    },

    // Add more submenu items as needed
  ];

 
  function manf() {
    alert("manf");
  }
  

  return (
    <div className="bg-black text-white rounded-lg my-6 py-1 px-5 flex justify-between">
    
      <div className="flex items-center justify-start">

      <CounterButton
        initialLiked={true}
        initialCount={23}
        icone1={Icons.icons.curtir}
        icone2={Icons.icons.curtirsolido}
        tooltip={"Gostei!"}
      />
      <CounterButton initialLiked={false} initialCount={23} icone1={Icons.icons.descurtir} icone2={Icons.icons.descurtirsolido} tooltip={"Não gostei!"} />

      <div className="flex gap-2 items-center">
          {Icons.icons.comentar}
          <span className="text-sm">35</span>
        </div>
      </div>
      
      <div className="flex items-center justify-end">
        
        {Icons.icons.tag}

        {/*BOTAO DE OUVIR*/}
        <ActionButton 
            icone={Icons.icons.ondas}
            tooltip={"Ouvir o texto"}
            text={""}
            action={manf}
        />

        {/*BOTAO DE OUVIR*/}
        <ActionButton 
            icone={Icons.icons.settings}
            tooltip={"Preferências"}
            text={""}
            action={manf}
        />

        {/*BOTAO DE ESTUDOS*/}
        <IconButtonShowComponent
            icon = {Icons.icons.chapeu}
            tooltip={"Ferramentas de estudo"}
            appendix = 
            <SubMenu items={submenuStudyTools}  />
        />

        {/*BOTAO DE COMPARTILHAR*/}
        <IconButtonShowComponent
            icon = {Icons.icons.compartilhar}
            tooltip={"Opções de compartilhamento"}
            appendix = 
            <SubMenu items={submenuShareButtons} />
        />

{/*}
        BOTAO DE EXEMPLO PARA MODELEO
        <button onClick={() => handleAction('summarize')} title="Bora?" className="flex">
            {Icons.icons.chip}
        </button>
*/}


        {/*BOTÃO DE FERRAMENTAS DE AI*/}
        <IconButtonShowComponent
            icon = {Icons.icons.chip}
            tooltip={"Inteligência artificial"}
            appendix = 
            <SubMenu items={submenuAI} />
        />

        {/*BOTÃO DE SALVAR*/}
        <ToggleIcon 
            initial={true}
            icone1={Icons.icons.salvar}
            icone2={Icons.icons.salvarsolido}
            text1={"Seu texto foi incluído na sua lista de leitura"}
            text2={"Seu texto foi removido da lista de leitura"}
            colors={"success"}
            tooltip={"Guardar texto"}
            action={"//digite aqui o nome da funcao que será rodada"}
        />
        
        {/*BOTÃO DE MAIS OPÇÕES*/}
        <IconButtonShowComponent
            icon = {Icons.icons.elipse}
            tooltip={"Mais opções"}
            appendix = 
            <SubMenu items={submenuMore} />
        />

     
      </div>
    </div>
  );
};

export default CommandBar;
