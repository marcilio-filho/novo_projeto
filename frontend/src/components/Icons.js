/*
@fortawesome/react-fontawesome
@fortawesome/fontawesome-svg-core
@fortawesome/free-solid-svg-icons
@fortawesome/free-brands-svg-icons
@fortawesome/pro-regular-svg-icons 
@fortawesome/pro-light-svg-icons
@fortawesome/pro-duotone-svg-icons
@fortawesome/pro-thin-svg-icons
@fortawesome/pro-solid-svg-icons
@fortawesome/sharp-solid-svg-icons
@fortawesome/sharp-regular-svg-icons
@fortawesome/sharp-light-svg-icons
@fortawesome/sharp-thin-svg-icons

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
  faMicrochipAi,
  
} from '@fortawesome/pro-duotone-svg-icons';

//PRO SOLID
import {

  faUnderline,
} from '@fortawesome/pro-solid-svg-icons';

//PRO LIGHT
import {
  faHome,
} from '@fortawesome/pro-light-svg-icons';

//SHARP SOLID
import {
  faThumbsUp as faThumbsUpSolid,
  faThumbsDown as faThumbsDownSolid,
  faBookmark as faBookMarkSolid,

} from '@fortawesome/sharp-solid-svg-icons';

//SHARP REGULAR
import {
  faLanguage,
  faBroomWide,
  faPencil,
  faNotebook,
  faPenLine,
  faSealQuestion,
  faTags,
  faFeather,
  faBook,
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
  faPrint,
  faGraduationCap,
  faFilePdf,
  faEllipsis,
  faWaveformLines,
  faThumbsDown,
  faMessageQuestion,
  faRotateReverse,
  faGearComplex,

} from '@fortawesome/sharp-regular-svg-icons';

//SHARP LIGHT
import {
  

} from '@fortawesome/sharp-light-svg-icons';

//SHARP THIN
import {
  
  
} from '@fortawesome/sharp-thin-svg-icons';


//BRANDS
import {
  faFacebook,
  faXTwitter,
  faWhatsapp,
  faThreads,

} from '@fortawesome/free-brands-svg-icons'


const icons = {
  home: <FontAwesomeIcon icon={faHome} className="duotone-icon" />,
  //elipse: <FontAwesomeIcon icon={faEllipsisH} style={{ "color": "black" }} />,
  elipse: <FontAwesomeIcon icon={faEllipsis} />,
  reset: <FontAwesomeIcon icon={faRotateReverse} />,
  play: <FontAwesomeIcon icon={faPlay} />,
  compartilhar: <FontAwesomeIcon icon={faShareFromSquare} />,
  comentar: <FontAwesomeIcon icon={faMessage} />,
  salvar: <FontAwesomeIcon icon={faBookmark} />,
  salvarsolido: <FontAwesomeIcon icon={faBookMarkSolid} />,
  curtir: <FontAwesomeIcon icon={faThumbsUp} />,
  curtirsolido: <FontAwesomeIcon icon={faThumbsUpSolid} />,
  descurtir: <FontAwesomeIcon icon={faThumbsDown} />,
  descurtirsolido: <FontAwesomeIcon icon={faThumbsDownSolid} />,
  sublinhar: <FontAwesomeIcon icon={faUnderline} />,
  negrito: <FontAwesomeIcon icon={faN} />,
  destacar: <FontAwesomeIcon icon={faHighlighter} className="duotone-icon" />,
  pintar: <FontAwesomeIcon icon={faPalette} />,
  anotar: <FontAwesomeIcon icon={faPencil} />,
  editar: <FontAwesomeIcon icon={faPenLine} />,
  lapis: <FontAwesomeIcon icon={faPencil} />,
  quadrado: <FontAwesomeIcon icon={faSquare} />,
  ouvir: <FontAwesomeIcon icon={faHeadphones} />,
  ondas: <FontAwesomeIcon icon={faWaveformLines} />,
  lista: <FontAwesomeIcon icon={faList} />,
  limpar: <FontAwesomeIcon icon={faBroomWide} />,
  traduzir: <FontAwesomeIcon icon={faLanguage} />,
  typewriter: <FontAwesomeIcon icon={faTypewriter} />,
  mensagens: <FontAwesomeIcon icon={faMessages} />,
  caderno: <FontAwesomeIcon icon={faNotebook} />,
  teste: <FontAwesomeIcon icon={faBallotCheck} />,
  interrogacao: <FontAwesomeIcon icon={faSealQuestion} />,
  pergunta: <FontAwesomeIcon icon={faMessagesQuestion} />,
  duvida: <FontAwesomeIcon icon={faMessageQuestion} />,
  info: <FontAwesomeIcon icon={faMemoCircleInfo} />,
  tag: <FontAwesomeIcon icon={faTags} />,
  feather: <FontAwesomeIcon icon={faFeather} />,
  pena: <FontAwesomeIcon icon={faFeatherL} />,
  livroaberto: <FontAwesomeIcon icon={faBook} />,
  paragrafo: <FontAwesomeIcon icon={faParagraph} />,
  twitter: <FontAwesomeIcon icon={faXTwitter} />,
  threads: <FontAwesomeIcon icon={faThreads} />,
  facebook: <FontAwesomeIcon icon={faFacebook} />,
  whatsapp: <FontAwesomeIcon icon={faWhatsapp} />,
  cards: <FontAwesomeIcon icon={faCardsBlank} />,
  cadeadoAberto: <FontAwesomeIcon icon={faLockOpen} />,
  cadeadoFechado: <FontAwesomeIcon icon={faLock} />,
  imprimir: <FontAwesomeIcon icon={faPrint} />,
  chip: <FontAwesomeIcon icon={faMicrochipAi} />,
  chapeu: <FontAwesomeIcon icon={faGraduationCap} />,
  pdf: <FontAwesomeIcon icon={faFilePdf} />,
  settings: <FontAwesomeIcon icon={faGearComplex} />,
};

const iconsKeys = {
  home: 'fa-regular fa-house',
  chip: 'fa-duotone fa-microchip-ai',
  typewriter: 'fa-duotone fa-typewriter',
};

export default { icons, iconsKeys };