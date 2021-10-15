window.onload = function(){


 let produtos = [
     {descricao:'Biscoito Mirabel', preco:2.20},
     {descricao:'Marmelada', preco:3.20},
     {descricao:'Sabonete', preco:4.20},
     {descricao:'Pamonha',preco:1.80},
    
 ]

 const listaProdutos = document.querySelector("#listaProdutos");
 const Total = document.querySelector("#total");

  ( ()=>{
        let
         total=0;
         
        for( let pro of produtos ){
            const filhoLi = document.createElement('li');

            for( listaP in pro ){
                if( listaP == 'preco' ){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP] );
                    total += pro[listaP];
                } else {
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}` ;    
                }
                
                //console.log( pro[listaP] )  

            }
        }
        Total.value = total.toFixed(2); 
  } )(produtos)
    
}
