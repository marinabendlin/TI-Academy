//concat( ) "junta" dois ou mais arrays;
/*  let nomes= ["Marcelo", "Suelem", "Raphel", "Você", "Nos Todos"];
    let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];

    let todosOsNomes = nomes.concat(nomes2);

    console.log(nomes);
    console.log(nomes2);
    console.log(todosOsNomes);
    let qtdArrayNome = `O array nomes possui ${todosOsNomes.length} elementos`;
    console.log(qtdArrayNome);*/


//indexOf( ) Procura um determinado elemento de um array, retorna uma posição
//               0        1       2          3
/*  let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];
    let buscaNome="José";

    if( nomes2.indexOf(buscaNome) != (-1) ){
       alert(`Eu encontrei o nome ${buscaNome} e está na posição ${nomes2.indexOf(buscaNome)}`);
    } else{
       alert(`Não encontrei o ${buscaNome}`);
    }*/


//join( ) Transforma elementos de um array em uma string
/*  let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];
    console.log(nomes2); //
    console.log(nomes2.join()); // "Pedro", "Paulo", "Maria", "Samanta"*/


//push( ) insere elementos no fim do array
/*  let frutas = ["Uva", "Pera","Jaca","Nevascaranga"];
    frutas.push("Maçã","Laranja");
    frutas.push("Laranja");
    
    console.log( frutas.indexOf("Jaca") );
    let insertFruta = "Amora";

if(frutas.indexOf(insertFruta) == -1){
    console.log(`A fruta ${insertFruta} não está na lista`);
    frutas.push(insertFruta);

    } else {
    console.log(`A fruta ${insertFruta} já está na lista`);
    }
    
    console.log(frutas);*/


//pop( ) Remove o último elemento de um array
/*  let frutas = ["Uva", "Pera","Jaca","Nevascaranga"];
    frutas.pop();
    
    console.log(frutas);*/


//reverse( ) Inverte a ordem dos elementos de um array
/*  let frutas = ["Uva", "Pera","Jaca","Nevascaranga"];
    frutas.reverse();
    
    console.log(frutas);
    console.log(frutas[0]);*/


//shift( ) Remove o primeiro elemento de um array
/*  let frutas = ["Uva", "Pera","Jaca","Nevascaranga"];
    frutas.shift();
    
    console.log(frutas);*/


//sort( ) Ordena elementos de um array em ordem crescente
/*  let numeros = ['200', '2', '1', '189', '3', '67'];
    let alfa = ['n', 'p', 'c', 'a', 'b','j'];
    numeros.sort();
    
    console.log(numeros);*/

//toString( ) Converte um array em uma sting e retorna esta string
/*  let frutas = ["Uva", "Pera","Jaca","Nevascaranga"];
    
    console.log(  frutas.toString() );*/


//unshift( ) Insere um elemento no ínicio do array


//splice( ) corta ou remove um elemento de um array em um ponto indicado agrupar com indexOf
/*  let nomes = ["Mariana","Patati Patatá", "Xuxa", "Balão Mágico"];
    let indice = nomes.indexOf("Balão Mágico");
    
    let novaLista = nomes.splice(indice,1);
    
    console.log(novaLista);*/

