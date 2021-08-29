/* 
    var / let / const
*/

/* 
var nome ="marcelo"; // var global
let sobreNome = "weihmayr" 

if(true){
    console.log("Var nome= "+ nome);
    var nm = nome;
    console.log("Chamando o sobreNome " + sobreNome);
    let sn = "da Silva" 
    console.log(sobreNome);
}
console.log("Meu nome é "+ nm + " " + sobreNome + " " + sn);
console.log("Var nome= "+ nm);
 */

//var teste;

// variável "VAR" - Particularidades : ela fora é um nivel maior do escopo / como se tivesse em cima

/* 
         OBJETOS
pode ser qualquer coisa, como um carro, que possuem propriedades, como cor, estilo, ligar, banco, marca, etc...
Podemos fazer implementação no JS de algumas formas, como veremos a seguir:
*/

var Pessoa = { // usar ":" para atribuição de propriedades depois ","
    nome: "Marcelo",
    rua : "R. lá";
    ncasa: "777",
	dados: function(){        
        document.write( // quero imprimir os dados que ja tenho
            "Nome...:"+this.nome+ "<br>" + // this referencia ao objeto
            "Rua...:"+this.rua+ "<br>" +
            "Nº...:"+this.ncasa+ "<br>")
    }

    }

console.log("Nome"+pessoa.nome+ "enderço"+pessoa.rua+"N"+pessoa.ncasa);

    dados: function(){        
        document.write( // quero imprimir os dados que ja tenho
            "Nome...:"+this.nome+ "<br>" + // this referencia ao objeto
            "Rua...:"+this.rua+ "<br>" +
            "Nº...:"+this.ncasa+ "<br>")
    }


Pessoa.dados();


// console.log("Nome: " + Pessoa.nome+ " Endereço: " + Pessoa.rua + " Nº:" + Pessoa.ncasa)