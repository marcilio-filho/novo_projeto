/*
@fortawesome/fontawesome-svg-core
@fortawesome/free-solid-svg-icons
@fortawesome/react-fontawesome
@fortawesome/pro-regular-svg-icons 
@fortawesome/pro-light-svg-icons
@fortawesome/pro-duotone-svg-icons
@fortawesome/pro-thin-svg-icons
@fortawesome/pro-solid-svg-icons
@fortawesome/sharp-solid-svg-icons
@fortawesome/sharp-regular-svg-icons
@fortawesome/sharp-light-svg-icons
@fortawesome/sharp-thin-svg-icons
@fortawesome/free-brands-svg-icons
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/styles.scss';


//FREE SOLID
import { 
  faPlay,
  faComment,
  faN,
  faSquare,
  faHighlighter,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';


//DUOTONE
import {
  
  
} from '@fortawesome/pro-duotone-svg-icons';

//PRO SOLID
import {
  faUnderline,
  faEllipsisH,
} from '@fortawesome/pro-solid-svg-icons';

//PRO LIGHT
import {
  faHome,
} from '@fortawesome/pro-light-svg-icons';

//SHARP SOLID
import {

} from '@fortawesome/sharp-solid-svg-icons';

//SHARP REGULAR
import {
  faLanguage,
  faBroomWide,
  faPencil,
  faNotebook,
  faPenLine,
  faMicrophoneLines,  
  faSealQuestion,
  faTags,
  faFeather,
  faBook,
} from '@fortawesome/sharp-regular-svg-icons';

//SHARP LIGHT
import {
  faThumbsUp,
  faMessage,
  faBookmark,
  faHeadphones,
  faList,
  faShareFromSquare,
  faMessages,
  faBallotCheck,
  faMemoCircleInfo,
  faMessagesQuestion,
  faTypewriter,
  faParagraph,
  faFeather as faFeatherL,
  faCardsBlank,
  faLockOpen,
  faLock,

} from '@fortawesome/sharp-light-svg-icons';

//SHARP THIN
import {
  
  
} from '@fortawesome/sharp-thin-svg-icons';


//
import {
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'


const icons = {
  home: <FontAwesomeIcon icon={faHome} className="duotone-icon" />,
  elipse: <FontAwesomeIcon icon={faEllipsisH} style={{ "color": "black" }} />,
  play: <FontAwesomeIcon icon={faPlay} />,
  compartilhar: <FontAwesomeIcon icon={faShareFromSquare} />,
  comentar: <FontAwesomeIcon icon={faMessage} />,
  salvar: <FontAwesomeIcon icon={faBookmark} />,
  curtir: <FontAwesomeIcon icon={faThumbsUp} />,
  sublinhar: <FontAwesomeIcon icon={faUnderline} />,
  negrito: <FontAwesomeIcon icon={faN} />,
  destacar: <FontAwesomeIcon icon={faHighlighter} className="duotone-icon" />,
  pintar: <FontAwesomeIcon icon={faPalette} />,
  anotar: <FontAwesomeIcon icon={faPencil} />,
  editar: <FontAwesomeIcon icon={faPenLine} />,
  lapis: <FontAwesomeIcon icon={faPencil} />,
  quadrado: <FontAwesomeIcon icon={faSquare} />,
  ouvir: <FontAwesomeIcon icon={faHeadphones} />,
  lista: <FontAwesomeIcon icon={faList} />,
  limpar: <FontAwesomeIcon icon={faBroomWide} />,
  traduzir: <FontAwesomeIcon icon={faLanguage} />,
  typewriter: <FontAwesomeIcon icon={faTypewriter} />,
  mensagens: <FontAwesomeIcon icon={faMessages} />,
  caderno: <FontAwesomeIcon icon={faNotebook} />,
  teste: <FontAwesomeIcon icon={faBallotCheck} />,
  interrogacao: <FontAwesomeIcon icon={faSealQuestion} />,
  pergunta: <FontAwesomeIcon icon={faMessagesQuestion} />,
  info: <FontAwesomeIcon icon={faMemoCircleInfo} />,
  tag: <FontAwesomeIcon icon={faTags} />,
  feather: <FontAwesomeIcon icon={faFeather} />,
  pena: <FontAwesomeIcon icon={faFeatherL} />,
  livroaberto: <FontAwesomeIcon icon={faBook} />,
  paragrafo: <FontAwesomeIcon icon={faParagraph} />,
  twitter: <FontAwesomeIcon icon={faXTwitter} />,
  whatsapp: <FontAwesomeIcon icon={faWhatsapp} />,
  cards: <FontAwesomeIcon icon={faCardsBlank} />,
  cadeadoAberto: <FontAwesomeIcon icon={faLockOpen} />,
  cadeadoFechado: <FontAwesomeIcon icon={faLock} />,
};

const iconsKeys = {
  home: 'fa-regular fa-house',
};

export default { icons, iconsKeys };