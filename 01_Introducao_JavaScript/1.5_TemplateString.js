/**
 * Template String (Template Literals)
 * 
 * A partir do ECMAScript 6 (ES6), o JavaScript introduziu as Template Strings (ou Template Literals),
 * que permitem criar strings de forma mais flexível e legível. 
 * 
 * Características principais:
 * - Permite interpolação de variáveis e expressões utilizando `${}` dentro da string.
 * - Suporta múltiplas linhas sem a necessidade de caracteres especiais.
 * - Utiliza crases (`` ` ``) ao invés de aspas simples ou duplas.
 * 
 * Exemplo prático:
 */

const nome = 'Joao Miguel';
const idade = 30;

// Interpolação de variáveis usando template string
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); 

// Exemplo de string multilinha com template string
console.log(`
    Dados do usuário:
    Nome: ${nome}
    Idade: ${idade}
`);
