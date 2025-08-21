//Em javaScript existem 3 Formas de Declarar Variaveis: var, let e const


//var: Declara uma variavel global, pode ser redeclarada e reatribuida
var nome = 'Francisco Douglas';
console.log(nome, typeof nome);

//Reatribuicao de valor
nome = 'Flamengo';
console.log(nome, typeof nome);


//let: Declara uma variavel local, pode ser reatribuida, mas não pode ser redeclarada
let nome_completo = 'Francisco Artur';
console.log(nome_completo, typeof nome_completo);

//Reatribuicao de valor
nome_completo = 'Flamengo';
console.log(nome_completo, typeof nome_completo);

//const: Declara uma variavel local, não pode ser reatribuida, nem redeclarada
const idade = 20;
console.log(idade, typeof idade);

// idade = 21; //Erro: Pois nao podemos reatribuir o valor de uma constante
console.log(idade, typeof idade);