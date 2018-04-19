export default class Module {
  public static date():void{
    console.warn(`Reload Bundle [${new Date()}]`)
  }
}



export const log = (text:any,error:boolean = false) =>{
    const terminal = document.getElementById(`terminal`);

    if(!error){
        console.log(text);
        if(terminal){
            terminal.innerHTML = terminal.innerHTML+`${text}<br />`
        }
    }else{
        console.error(text);
        if(terminal){
            terminal.innerHTML = terminal.innerHTML+`<span style="color:red">${text}</span><br />`
        }
    }
};