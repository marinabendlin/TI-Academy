
var nome = prompt("Digite seu nome");
var num = parseInt(prompt("Olá" + " " + nome + ", digite um numero para comparar com 'n'."));
var n = num;
var bool = (n == num);
var soma = (n + num);
var sub = (n - num);
var div = (n % num);
var qua = (n * num); 

function{    
    if(typeof(num) === typeof(String){
        document.write("O numero que você digitou é uma String <br>");   
            }

document.write ("Seja bem vindo " + "  "+ nome + "<br>");
document.write ("Você digitou o numero_" + n + "<br>");
document.write ("O retorno da comparação boolena é_" + bool + "<br>");
document.write ("A soma dos valores é_" + soma + "<br>");
document.write ("A subtração dos valores é_" + sub + "<br>");
document.write ("O resto da divisão é_" + div + "<br>");
document.write ("o quadrado do numero digitado é_ " + qua + "<br>");



var opcaofrutas = prompt( nome + ", escolha sua fruta favorita, entre: Laranja, Pera, Uva e Manga ");
switch(opcaofrutas){
    case "Laranja":
        document.write("Sua fruta favorita é: " + opcaofrutas);
    break;
    case "Pera":
        document.write("Sua fruta favorita é: " + opcaofrutas);
    break;
    case "Uva":
        document.write("Sua fruta favorita é: " + opcaofrutas);
    break;
    case "Manga":
        document.write("Sua fruta favorita é: " + opcaofrutas);
    break;
    default:
        document.write( nome  + " não temos essa opção "+ opcaofrutas );
    break;
}
