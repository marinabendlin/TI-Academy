/* concat() Junta os elementos de dois ou mais arrays e retorna uma cópia com os elementos juntos*/

var frutas= ["uva","banana","amora","melão"]; // var frutas = Array()
console.log (`qtd do array: ${frutas.legth} fruta: ${frutas[0]}`)

var frutas2= ["maça","pera","laranja"]; 

var todasAsFrutas= frutas1.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas); 

/* indexOf() procura por um elemento específico no array e retorna a sua posição*/
var retornoIndexOf = todasAsFrutas.indexOf("amora");
console.log(retornoIndexOf);//2

/* join() junta todos os elementos de um array em uma string*/
var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray)

/* push() insere um novo elemento no final do array*/
var outraLista = ["bola","peteca"];
var novaLista = outraLista.push("boneca","qualquer brinquedo");
console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

/* pop() remove o último elemento do array*/
console.log(outraLista.pop());
console.log(outraLista)

/* reverse() inverte a ordem dos elemento do array*/
console.log(outraLista.reverse());

/* shift() remove o primeiro elemento do array*/
var removerPrimeiro = ["fusca","variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

/* short() ordena os elementos do array em ordem crescente*/
var alfa = [4, 6, 9 , 2];
alfa.sort();
console.log(alfa);

/* toString() converte um array em string e retorna essa string */
// vide join

/*unshift() insere um novo elemento no inicio do array*/
alfa.unshift (10);
console.log(alfa);

/*splice() corta o array em um ponto indicado doi parametros indice e quantos elementos quer remover a partir da posição.*/
var frutas= ["uva","banana","amora","melão"];
var idx = f.indexOf("banana");
console.log(idx);
console.log(f.splice(idx,1));
console.log(f);

//var r = f.splice();
//console.log(f);

//arrays de objetos
var dados = [
	{nome:"Marcelo"} //0
	{nome:"Raphael"} //1
]
//console.log(dados[0].nome)
//console.log(dados[1].nome)

function Pessoa2(nome, sobrenome, idade){        
    this.nome =nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.doc={rg:'777';
    cpf: '8989'
    }
}
var pessoa2 = new Pessoa2("Raphael"," "," ",['22','55'])
//console.log("Nome:"+pessoa 2.nome+ ' ' + pessoa2.doc.rg);
console.log (`Nome ${pessoa2.nome} - rg: ${pessoa2.doc.rg}`);