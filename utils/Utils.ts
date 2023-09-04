export default class Utils{
  static SHAPES=["triangle","square","circle"];
  static VERIFICATOR_STATES=[null,true,false];

  static arrayFromOneToNumber(n:number){
    return Array.from({length: n}, (_, i) => i + 1) as number[]
  }
  static arrayFromZeroToNumber(n:number){
    return Array.from({length: n}, (_, i) => i) as number[]
  }
}