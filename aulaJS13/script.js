/*let i=0; //var global
for(let x=0; x < 10; x++ ){
    console.log(`O valor da iteração é ${x} o x mais ele mesmo ${i++} `);
}*/

/*let Pessoas = {
    nome: "Steven Roger",
    idade: 90,
    heroi: "Capitão América",
    }
    for(let propriedades in Pessoas ){
    console.log(Pessoas.nome);
    }*/

/*arr = ["nome"=>"Marcelo"]
arr[nome] */


/*let frutas = ["Melancia", "Manga", "Banana", "Uva"];

    for(let nomeFruta of frutas){
    console.log(nomeFruta);
    } 
    for(let x=0; x < frutas.length; x++ ){
    console.log(`O nome da fruta é ${frutas[x]}`);
    }*/


let Herois = [
   {
       identidadeSecreta: "Steven Roger", // 0
       heroi: "Capitão América",      
       },
   {
       identidadeSecreta: "Tony Stark",  // 1
       heroi: "Homem de Ferro",      
       }
];
Herois.push({identidadeSecreta:"Diana", heroi:"Mulher Maravilha"});
Herois.push({identidadeSecreta:"Bruce Bener", heroi:"Hulk"});

/*let marvel = Herois[1].identidadeSecreta;
console.log(marvel)*/

for(let marvel of Herois ){
   //console.log(marvel);
   for(let m in marvel ){
    console.log(`${m} -> ${marvel[m]}`);
  }
}
