import React, { useRef } from 'react';
import ActionButton from '../components/atoms/ActionButton';
import Icons from '../components/Icons';
import IconButton from '../components/atoms/IconButton';
import ToggleVisibility from '../hooks/useToggleVisibility';
import IconButton2 from '../components/atoms/buttons/IconButtonToggle';

function App() {
  
  return (
    <div className="App">
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
           <div id='manf' className='hidden'>
          Bora cagar?
        </div>
        }
      />

       

    </div>
  );
}

export default App;
