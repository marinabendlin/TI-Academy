/*
Estrutura de condições e operadores logicos
==
===
!=
!==
<
>
<=
>=
*/

//(==)igualdade / comparação de valores
var v1 = 1; //
var v2 = 1;
if (v1 == v2){
	console.log("sim é verdade");}
else{
	console.log("isto é falso");}

//(===)identico
var v3 = 1;
var v4 = 1;
if (v3 === v4){
	console.log("V3 é exatamente igual a V4");}
else{
	console.log("V3 é exatamente igual a V4");
	console.log("V4");}

//(!=) diferente
var v5 = 1;
var v6 = 1;
if (v5 != v6){
	console.log("V5 é diferente de V6");}
else{
	console.log("são iguais");}

//(!==) Estritamente diferente
var v7 = 1;
var v8 = 1;
if (v7 !== v8){
	console.log("exatamente diferentes");}
else{
	console.log("são iguais");}

//(<) menor que
var va = 1;
var vb = 10;
if (va < vb){
	console.log("sim va é menor que vb");}

//(>) maior que
var va = 10;
var vb = 1;
if (va > vb){
	console.log("sim va é menor que vb");}

//(<=) menor ou igual 
var vc = 1;
var vd = 10;
if (va <=v2 vb){
	console.log("Vc="+ vc+ "sim va é menor que vd=" +vd);}

//(>=) maior ou igual 
var vc = 10;
var vd = 1;
if (va <=v2 vb){
	console.log("Vc="+ vc+ "sim va é maior que vd=" +vd);}

/* if/ else e operadores lógicos

AND 'e'			LOGICO (&&) E comercial
OR 'ou'  		logico (||) pipe/pipe
NOT 'negação'	logico (!) exclamação */

//&& todas as condições precisam ser atendidas
var a=0;
var b=0;
if (a==0 && b==0){
	console.log("verdadeiro")}
else{console.log("falso")}

//|| algumas condições precisam ser atendidas
var a=0;
var b=0;
if (a==0 || b==0){
	console.log("ok")}
else{console.log("!ok")}

//! negação
var a=1;
var b=0;
if (!typeof(s)){
	console.log("não é uma string")}
else{console.log("é uma string")
console.log (typeof(s))}

//SWITCH
var op=1;

switch (op){
	case1: alert("estou sendo enviado pelo case 1")
	break;
	case2: console.log("estou sendo enviado pelo case 1")
	break;
	case3: document.write("estou sendo enviado pelo case 3")
	break;
	default: // caso nenhuma anterior, entao default
	console.log("nenhuma das opções");
	break;
}


