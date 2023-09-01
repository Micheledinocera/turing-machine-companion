export default class Utils{
  static LAW_KEYS=["A","B","C","D","E","F"] ;
  static arrayFromOneToNumber(n:number){
    return Array.from({length: n}, (_, i) => i + 1) as number[]
  }
  static arrayFromZeroToNumber(n:number){
    return Array.from({length: n}, (_, i) => i) as number[]
  }
}