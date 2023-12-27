import React, { useRef, useEffect, useState } from 'react';
import Icons from '../components/Icons';
import Button from '../components/atoms/buttons/Button';
import Toast from '../components/atoms/toasts/Toast';
import SubMenu from '../components/organisms/menus/SubMenu';
import { useDarkMode } from '../contexts/DarkModeContext';
import ToggleDarkMode from '../components/atoms/buttons/DarkMode';


function App() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  const openWebsite = (url) => {
    window.open(url, '_self'); // '_blank' opens the link in a new tab or window
  };


  // Define two sets of button states
  const initialState = {
    icon: Icons.icons.ondas,
    text: 'Ouvir',
    tooltip: 'Tudo isso depois que eles forem encontrar ele?',
    toast: 'Caramba!',
    type: 'success',
  };

  const alternateState = {
    icon: Icons.icons.anotar,
    text: 'Anotar',
    tooltip: 'Bora simbora?',
    toast: 'Lógico!',
    type: 'alert',
  };

  const [isToggled, setIsToggled] = useState(false);
  const buttonState = isToggled ? alternateState : initialState;
  const [showToast, setShowToast] = useState(false);
  
  const handleButtonClick = () => {
    setIsToggled((prevState) => !prevState);
    setShowToast(!showToast);
  };


  const subMenuMainButton = {
    icon: Icons.icons.anotar,
    text: 'Botão',
    tooltip: 'Tooltip do botão',
    className: "tt",
  }; 

  const subMenuButtons = [
  {
    key: 1,
    icon: Icons.icons.elipse,
    text: 'Ação 1',
    tooltip: 'Tooltip da ação 1',
    className: "",
  },
  {
    key: 2,
    icon: Icons.icons.home,
    text: 'Texto  2',
    tooltip: 'Tooltip da ação 2',
    className: "",
  },
  {
    key: 3,
    icon: Icons.icons.anotar,
    text: 'Texto botão 3',
    tooltip: 'Tooltip da ação 3',
    className: "",
    onClick: () => openWebsite('https://www.grupoubique.com.br'),
  },
  {
    key: 4,
    icon: Icons.icons.anotar,
    text: 'Texto botão 4',
    tooltip: 'Tooltip da ação 4',
    className: "",
    onClick: () => openWebsite('https://www.grupoubique.com.br'),
  },
  {
    key: 5,
    icon: Icons.icons.anotar,
    text: 'Texto botão 5',
    tooltip: 'Tooltip da ação 5',
    className: "",
    onClick: () => openWebsite('https://www.grupoubique.com.br'),
  }
];




  return (
    <div className="App">

{/*}
      <Button
        icon={darkMode ? Icons.icons.sol : Icons.icons.lua}
        text={darkMode ? "Modo Claro" : "Modo Escuro"}
        tooltip={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        onClick={useDarkMode}
  />*/}
    

      <ToggleDarkMode />
  

    {/*BOTÃO COM TOOLTIP, TOAST E TOGGLE APPEARENCE*/}
    <Button
        icon={buttonState.icon}
        text={buttonState.text}
        tooltip={buttonState.tooltip}
        onClick={handleButtonClick}
    />
    {showToast && (
    <Toast 
        text={buttonState.toast} 
        type={buttonState.type} 
        show={setShowToast} 
        />
     )}

    {/*BOTÃO SIMPLES COM APARÊNCIA ÚNICA, COM TOOLTIP E SEM AÇÃO*/}
    <Button
        icon={Icons.icons.ondas}
        text={"Quero"}
        tooltip={"Quero comer"}
        
    />


   <div className="w-[20%] flex flex-col justify-center items-center">  


<div className='flex gap-3'>
    {/*SUBMENU*/}
    <SubMenu 
      title={"Título do submenu"}
      description={"Abra as outras opções deste submenu"}
      mainButton={subMenuMainButton}
      buttons={subMenuButtons}
    />

        {/*SUBMENU*/}
        <SubMenu 
      title={"Título do submenu"}
      description={"Abra as outras opções deste submenu"}
      mainButton={subMenuMainButton}
      buttons={subMenuButtons}
    />

        {/*SUBMENU*/}
        <SubMenu 
      title={"Título do submenu"}
      description={"Abra as outras opções deste submenu"}
      mainButton={subMenuMainButton}
      buttons={subMenuButtons}
    />

        {/*SUBMENU*/}
        <SubMenu 
      title={"Título do submenu"}
      description={"Abra as outras opções deste submenu"}
      mainButton={subMenuMainButton}
      buttons={subMenuButtons}
    />

        {/*SUBMENU*/}
        <SubMenu 
      title={"Título"}
      description={"Abra as outras opções deste submenu"}
      mainButton={subMenuMainButton}
      buttons={subMenuButtons}
     
    />
</div>


    </div>















    </div>
    );
}
export default App;


{/*      
      <ActionButton
        icon={Icons.icons.ondas}
        text={"Ouvir"}
        tooltip={"Ouvir o texto"}
        action={() => alert('Ouvir o texto')}
        className={"bg-black text-white rounded-lg my-6 py-3 px-5 flex justify-between"}
      />

      <div className='h-10 ml-11'>
        <IconButton  
          initial={true}
          name1={"Curtir"}
          name2={"Descurtir"}
          icon1={Icons.icons.curtir}
          icon2={Icons.icons.curtirsolido}  
          tooltip1={"Gostar!"}
          tooltip2={"Descurtir!"}
          toast1={"Você curtiu!"}
          toast2={"Você descurtiu!"}
          colors={"success"}
          
        />
      </div>


      <div className='h-10 ml-11'>
        <IconButton  
          initial={true}
          name1={"Curtir"}
          name2={"Descurtir"}
          icon1={Icons.icons.curtir}
          icon2={Icons.icons.curtirsolido}  
          tooltip1={"Gostar!"}
          tooltip2={"Descurtir!"}
          toast1={"Você curtiu!"}
          toast2={"Você descurtiu!"}
          colors={"success"}
        />
      </div>


      <IconButton2
        initial={true}
        name1={"Curtir"}
        name2={"Descurtir"}
        icon1={Icons.icons.curtir}
        icon2={Icons.icons.curtirsolido}  
        tooltip1={"Gostar!"}
        tooltip2={"Descurtir!"}
        toast1={"Você curtiu!"}
        toast2={"Você descurtiu!"}
        colors={"success"}
        appendix={
           <div id='manf'>
          Bora cagar?
            </div>
        }
      />
      */}
       

