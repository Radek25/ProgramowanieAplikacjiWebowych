export class changePattern{
    value: boolean;
    constructor(val: boolean){
       this.value = val;
    }
    changeToDark(){
      if(this.value === true){
         return(document.body.setAttribute('pattern', 'lightMode'))
      }
      else{
         return(document.body.setAttribute('pattern', 'darkMode'))
      }
   }
}