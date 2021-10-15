window.onload = function(){
     
const tab = document.querySelector("#tabuada");
const btn = document.querySelector("#calcular");
const resp= document.querySelector("#resposta");

btn.addEventListener('click', function(){
    let numero = Number(tab.value); 
    let tabuada=0; 
   
    if(  isNaN(numero) ){
        resp.innerHTML = "Digite um valor numérico valido" ;
    } else {
        if( numero < 1 || numero > 10  ){
            resp.innerHTML = "Digite um valor entre 1 e 10";
        } else {
            console.log(`Tabuada do ${numero}`); 
            resp.innerHTML =`Tabuada do ${tab.value}`
    while(tabuada <= 10){
                
            resp.innerHTML +=`<br> ${numero} x ${tabuada} = ${(numero * tabuada)}` ;
            tabuada++;
            }    
      
        }
    }
})

}