export enum MODAL_TYPES{
  newGame="new-game",
  cardDetail="card-detail",
  credits="credits",
  createGame="create-game",
  checkCode="check-code"
};

export const SHAPES=["triangle","square","circle"];
export const LANGUAGES=[
  {value:"it",label:"Italiano",iso:"it"},
  {value:"fr",label:"Français",iso:"fr"},
  {value:"en",label:"English",iso:"en"},
  {value:"de",label:"Deutsch",iso:"de"},
  {value:"hu",label:"Magyar",iso:"hu"},
  {value:"br",label:"Português",iso:"pt"},
  {value:"pl",label:"Polski",iso:"pl"},
  {value:"jp",label:"日本語",iso:"ja"},
  {value:"kr",label:"한국어",iso:"ko"},
  {value:"cns",label:"简体中文",iso:"zh"}
];
export const VERIFICATOR_STATES=[null,true,false];
export const LAWS_VERIFICATORS={
  1:[1,16],
  2:[25,3,18],
  3:[28,8,21],
  4:[29,9,138],
  5:[34,37],
  6:[35,38],
  7:[36,39],
  8:[40,41,42],
  9:[46,47,48],
  10:[49,50,51],
  11:[139,89,92],
  12:[140,90,93],
  13:[141,91,95],
  14:[116,117,118],
  15:[113,114,115],
  16:[131,132],
  17:[85,86,87,88],
  18:[55,56],
  19:[137,100,136],
  20:[119,120,121],
  21:[81,82],
  22:[133,134,135],
  23:[74,60,67],
  24:[83,84],
  25:[122,123,124],
  26:[25,28,31],
  27:[26,29,32],
  28:[1,6,11],
  29:[3,8,13],
  30:[4,9,14],
  31:[16,19,22],
  32:[18,21,24],
  33:[34,37,35,38,36,39],
  34:[128,129,130],
  35:[125,126,127],
  36:[57,58,59],
  37:[98,103,108],
  38:[100,105,110],
  39:[1,16,6,19,11,22],
  40:[25,3,18,28,8,21,31,13,24],
  41:[26,4,142,29,9,138,32,14,143],
  42:[116,113,117,114,118,115],
  43:[139,140,89,90,92,93],
  44:[144,141,89,91,94,95],
  45:[40,46,41,47,42,48],
  46:[46,49,47,50,48,51],
  47:[40,49,41,50,42,51],
  48:[139,89,92,140,90,93,141,91,95]
} as Record<number,number[]>
export const IMG_URL='https://turingmachine.info/images/laws//{locale}/{possibility}_Mini_{locale}.jpg';
export const LAW_IMG_URL='https://turingmachine.info/images/criteriacards/{locale}/TM_GameCards_{locale}-{lawId}.png';

export const arrayFromOneToNumber=(n:number)=>{
  return Array.from({length: n}, (_, i) => i + 1) as number[]
}
export const arrayFromZeroToNumber=(n:number)=>{
  return Array.from({length: n}, (_, i) => i) as number[]
}
export const preloadImage=(url:string)=>
{
    var img=new Image();
    img.src=url;
}