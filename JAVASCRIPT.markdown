# 📜 Comandos JavaScript: Do Básico ao Avançado

Este documento lista **200 comandos, funções, métodos e conceitos do JavaScript**, organizados por categoria e ordenados do básico ao avançado. Cada item inclui uma breve descrição e, quando aplicável, um exemplo. As categorias são:

1. **🔍 Básicos (Sintaxe, Variáveis, Operadores, Controle de Fluxo)**
2. **🛠️ Intermediários (Funções, Arrays, Objetos, DOM)**
3. **🚀 Avançados (ES6+, Async, Módulos, Web APIs)**

---

## 1. 🔍 Comandos Básicos

Comandos fundamentais para sintaxe, manipulação de variáveis e controle de fluxo.

### Sintaxe e Declarações
1. **`var`** - Declara uma variável com escopo global ou de função.  
   - Exemplo: `var x = 10;`
2. **`let`** - Declara uma variável com escopo de bloco.  
   - Exemplo: `let y = 20;`
3. **`const`** - Declara uma constante com escopo de bloco.  
   - Exemplo: `const PI = 3.14;`
4. **`if`** - Executa um bloco se a condição for verdadeira.  
   - Exemplo: `if (x > 5) { console.log("Maior"); }`
5. **`else`** - Executa um bloco se a condição do `if` for falsa.  
   - Exemplo: `else { console.log("Menor ou igual"); }`
6. **`else if`** - Testa uma nova condição após `if`.  
   - Exemplo: `else if (x === 5) { console.log("Igual"); }`
7. **`switch`** - Avalia uma expressão e executa casos correspondentes.  
   - Exemplo: `switch (x) { case 1: console.log("Um"); break; }`
8. **`break`** - Interrompe um loop ou switch.  
   - Exemplo: `break;`
9. **`continue`** - Pula para a próxima iteração de um loop.  
   - Exemplo: `continue;`
10. **`return`** - Retorna um valor de uma função.  
    - Exemplo: `return x * 2;`

### Operadores
11. **`=`** - Atribuição.  
    - Exemplo: `x = 5;`
12. **`==`** - Comparação de igualdade (com coerção).  
    - Exemplo: `if (x == "5") {}`
13. **`===`** - Comparação estrita (sem coerção).  
    - Exemplo: `if (x === 5) {}`
14. **`!=`** - Comparação de desigualdade.  
    - Exemplo: `if (x != 5) {}`
15. **`!==`** - Comparação estrita de desigualdade.  
    - Exemplo: `if (x !== "5") {}`
16. **`>`** - Maior que.  
    - Exemplo: `if (x > 5) {}`
17. **`<`** - Menor que.  
    - Exemplo: `if (x < 5) {}`
18. **`>=`** - Maior ou igual.  
    - Exemplo: `if (x >= 5) {}`
19. **`<=`** - Menor ou igual.  
    - Exemplo: `if (x <= 5) {}`
20. **`+`** - Adição ou concatenação.  
    - Exemplo: `let z = x + y;`
21. **`-`** - Subtração.  
    - Exemplo: `let z = x - y;`
22. **`*`** - Multiplicação.  
    - Exemplo: `let z = x * y;`
23. **`/`** - Divisão.  
    - Exemplo: `let z = x / y;`
24. **`%`** - Módulo (resto).  
    - Exemplo: `let z = x % y;`
25. **`++`** - Incremento.  
    - Exemplo: `x++;`
26. **`--`** - Decremento.  
    - Exemplo: `x--;`
27. **`&&`** - Operador AND lógico.  
    - Exemplo: `if (x > 0 && y > 0) {}`
28. **`||`** - Operador OR lógico.  
    - Exemplo: `if (x > 0 || y > 0) {}`
29. **`!`** - Operador NOT lógico.  
    - Exemplo: `if (!x) {}`

### Loops
30. **`for`** - Loop com contador.  
    - Exemplo: `for (let i = 0; i < 5; i++) { console.log(i); }`
31. **`while`** - Loop enquanto a condição for verdadeira.  
    - Exemplo: `while (x > 0) { x--; }`
32. **`do...while`** - Loop que executa pelo menos uma vez.  
    - Exemplo: `do { x--; } while (x > 0);`
33. **`for...in`** - Itera sobre propriedades de um objeto.  
    - Exemplo: `for (let key in obj) { console.log(key); }`
34. **`for...of`** - Itera sobre valores iteráveis.  
    - Exemplo: `for (let value of array) { console.log(value); }`

### Tipos e Conversão
35. **`typeof`** - Retorna o tipo de uma variável.  
    - Exemplo: `console.log(typeof x);`
36. **`instanceof`** - Verifica se um objeto é instância de uma classe.  
    - Exemplo: `console.log(x instanceof Array);`
37. **`Number()`** - Converte para número.  
    - Exemplo: `let num = Number("123");`
38. **`String()`** - Converte para string.  
    - Exemplo: `let str = String(123);`
39. **`Boolean()`** - Converte para booleano.  
    - Exemplo: `let bool = Boolean(1);`
40. **`parseInt()`** - Converte string para inteiro.  
    - Exemplo: `let int = parseInt("123");`
41. **`parseFloat()`** - Converte string para número com decimal.  
    - Exemplo: `let float = parseFloat("123.45");`

---

## 2. 🛠️ Comandos Intermediários

Comandos para manipulação de funções, arrays, objetos e interação com o DOM.

### Funções
42. **`function`** - Declara uma função.  
    - Exemplo: `function soma(a, b) { return a + b; }`
43. **`function expression`** - Função anônima atribuída a variável.  
    - Exemplo: `const soma = function(a, b) { return a + b; };`
44. **`arrow function`** - Sintaxe concisa para funções (ES6).  
    - Exemplo: `const soma = (a, b) => a + b;`
45. **`call()`** - Chama função com um contexto específico.  
    - Exemplo: `fn.call(obj, arg1, arg2);`
46. **`apply()`** - Chama função com argumentos como array.  
    - Exemplo: `fn.apply(obj, [arg1, arg2]);`
47. **`bind()`** - Cria nova função com contexto fixo.  
    - Exemplo: `const boundFn = fn.bind(obj);`

### Arrays
48. **`Array()`** - Cria um array.  
    - Exemplo: `let arr = new Array(1, 2, 3);`
49. **`push()`** - Adiciona elemento ao final.  
    - Exemplo: `arr.push(4);`
50. **`pop()`** - Remove elemento do final.  
    - Exemplo: `let last = arr.pop();`
51. **`shift()`** - Remove elemento do início.  
    - Exemplo: `let first = arr.shift();`
52. **`unshift()`** - Adiciona elemento ao início.  
    - Exemplo: `arr.unshift(0);`
53. **`slice()`** - Retorna uma cópia de parte do array.  
    - Exemplo: `let newArr = arr.slice(1, 3);`
54. **`splice()`** - Adiciona/remove elementos em índice.  
    - Exemplo: `arr.splice(1, 1, "novo");`
55. **`concat()`** - Concatena arrays.  
    - Exemplo: `let combined = arr1.concat(arr2);`
56. **`join()`** - Junta elementos em string.  
    - Exemplo: `let str = arr.join(", ");`
57. **`reverse()`** - Inverte a ordem do array.  
    - Exemplo: `arr.reverse();`
58. **`sort()`** - Ordena o array.  
    - Exemplo: `arr.sort((a, b) => a - b);`
59. **`forEach()`** - Executa função para cada elemento.  
    - Exemplo: `arr.forEach(item => console.log(item));`
60. **`map()`** - Cria novo array com resultados de função.  
    - Exemplo: `let doubled = arr.map(x => x * 2);`
61. **`filter()`** - Cria array com elementos que passam no teste.  
    - Exemplo: `let evens = arr.filter(x => x % 2 === 0);`
62. **`reduce()`** - Reduz array a um único valor.  
    - Exemplo: `let sum = arr.reduce((acc, curr) => acc + curr, 0);`
63. **`find()`** - Retorna primeiro elemento que satisfaz condição.  
    - Exemplo: `let found = arr.find(x => x > 5);`
64. **`findIndex()`** - Retorna índice do primeiro elemento que satisfaz condição.  
    - Exemplo: `let index = arr.findIndex(x => x > 5);`
65. **`includes()`** - Verifica se array contém elemento.  
    - Exemplo: `let hasValue = arr.includes(5);`
66. **`indexOf()`** - Retorna índice da primeira ocorrência.  
    - Exemplo: `let index = arr.indexOf(5);`
67. **`lastIndexOf()`** - Retorna índice da última ocorrência.  
    - Exemplo: `let index = arr.lastIndexOf(5);`

### Objetos
68. **`Object.create()`** - Cria objeto com protótipo especificado.  
    - Exemplo: `let obj = Object.create(parent);`
69. **`Object.keys()`** - Retorna array com chaves do objeto.  
    - Exemplo: `let keys = Object.keys(obj);`
70. **`Object.values()`** - Retorna array com valores do objeto.  
    - Exemplo: `let values = Object.values(obj);`
71. **`Object.entries()`** - Retorna array de pares [chave, valor].  
    - Exemplo: `let entries = Object.entries(obj);`
72. **`Object.assign()`** - Copia propriedades de objetos.  
    - Exemplo: `let newObj = Object.assign({}, obj1, obj2);`
73. **`Object.freeze()`** - Congela objeto, impede alterações.  
    - Exemplo: `Object.freeze(obj);`
74. **`Object.seal()`** - Impede adição/remoção de propriedades.  
    - Exemplo: `Object.seal(obj);`
75. **`hasOwnProperty()`** - Verifica se objeto tem propriedade.  
    - Exemplo: `let hasProp = obj.hasOwnProperty("key");`

### DOM (Document Object Model)
76. **`document.getElementById()`** - Seleciona elemento por ID.  
    - Exemplo: `let el = document.getElementById("myId");`
77. **`document.querySelector()`** - Seleciona primeiro elemento por seletor CSS.  
    - Exemplo: `let el = document.querySelector(".class");`
78. **`document.querySelectorAll()`** - Seleciona todos os elementos por seletor CSS.  
    - Exemplo: `let els = document.querySelectorAll(".class");`
79. **`document.createElement()`** - Cria novo elemento HTML.  
    - Exemplo: `let div = document.createElement("div");`
80. **`appendChild()`** - Adiciona elemento como filho.  
    - Exemplo: `parent.appendChild(div);`
81. **`removeChild()`** - Remove elemento filho.  
    - Exemplo: `parent.removeChild(div);`
82. **`setAttribute()`** - Define atributo de elemento.  
    - Exemplo: `el.setAttribute("class", "newClass");`
83. **`getAttribute()`** - Obtém valor de atributo.  
    - Exemplo: `let value = el.getAttribute("class");`
84. **`addEventListener()`** - Adiciona ouvinte de evento.  
    - Exemplo: `el.addEventListener("click", () => alert("Clicado"));`
85. **`removeEventListener()`** - Remove ouvinte de evento.  
    - Exemplo: `el.removeEventListener("click", handler);`
86. **`innerHTML`** - Define/obtém HTML interno de elemento.  
    - Exemplo: `el.innerHTML = "<p>Texto</p>";`
87. **`textContent`** - Define/obtém texto puro de elemento.  
    - Exemplo: `el.textContent = "Texto";`
88. **`classList.add()`** - Adiciona classe CSS.  
    - Exemplo: `el.classList.add("active");`
89. **`classList.remove()`** - Remove classe CSS.  
    - Exemplo: `el.classList.remove("active");`
90. **`classList.toggle()`** - Alterna classe CSS.  
    - Exemplo: `el.classList.toggle("active");`

---

## 3. 🚀 Comandos Avançados

Comandos para funcionalidades modernas (ES6+), programação assíncrona, módulos e APIs avançadas.

### ES6+ (ECMAScript 2015 e posterior)
91. **`destructuring assignment`** - Desestrutura arrays/objetos.  
    - Exemplo: `let [a, b] = [1, 2];`
92. **`spread operator (...`** - Expande elementos.  
    - Exemplo: `let newArr = [...arr1, ...arr2];`
93. **`rest parameter (...`** - Agrupa argumentos em array.  
    - Exemplo: `function sum(...args) { return args.reduce((a, b) => a + b); }`
94. **`default parameters`** - Define valores padrão para parâmetros.  
    - Exemplo: `function greet(name = "Guest") { return "Hi, " + name; }`
95. **`template literals`** - Strings com interpolação.  
    - Exemplo: `let str = `Hello, ${name}!`;`
96. **`class`** - Define uma classe.  
    - Exemplo: `class Person { constructor(name) { this.name = name; } }`
97. **`extends`** - Herda de outra classe.  
    - Exemplo: `class Student extends Person {}`

### Programação Assíncrona
98. **`Promise`** - Representa um valor futuro.  
    - Exemplo: `let p = new Promise((resolve, reject) => resolve("Ok"));`
99. **`then()`** - Executa callback após Promise resolvida.  
    - Exemplo: `p.then(value => console.log(value));`
100. **`catch()`** - Captura erros de Promise.  
     - Exemplo: `p.catch(err => console.log(err));`
101. **`finally()`** - Executa após Promise resolvida/rejeitada.  
     - Exemplo: `p.finally(() => console.log("Fim"));`
102. **`async`** - Declara função assíncrona.  
     - Exemplo: `async function fetchData() { return await fetch(url); }`
103. **`await`** - Pausa execução até Promise resolver.  
     - Exemplo: `let data = await fetch(url);`
104. **`Promise.all()`** - Executa múltiplas Promises em paralelo.  
     - Exemplo: `Promise.all([p1, p2]).then(results => console.log(results));`
105. **`Promise.race()`** - Retorna a primeira Promise resolvida/rejeitada.  
     - Exemplo: `Promise.race([p1, p2]).then(result => console.log(result));`

### Módulos
106. **`import`** - Importa módulos.  
     - Exemplo: `import { func } from "./module.js";`
107. **`export`** - Exporta módulos.  
     - Exemplo: `export function func() { return "Hello"; }`
108. **`export default`** - Exporta valor padrão.  
     - Exemplo: `export default class MyClass {}`

### Funções Matemáticas
109. **`Math.random()`** - Gera número aleatório entre 0 e 1.  
     - Exemplo: `let rand = Math.random();`
110. **`Math.floor()`** - Arredonda para baixo.  
     - Exemplo: `let floor = Math.floor(3.7);`
111. **`Math.ceil()`** - Arredonda para cima.  
     - Exemplo: `let ceil = Math.ceil(3.2);`
112. **`Math.round()`** - Arredonda para o mais próximo.  
     - Exemplo: `let round = Math.round(3.5);`
113. **`Math.max()`** - Retorna o maior valor.  
     - Exemplo: `let max = Math.max(1, 2, 3);`
114. **`Math.min()`** - Retorna o menor valor.  
     - Exemplo: `let min = Math.min(1, 2, 3);`
115. **`Math.abs()`** - Retorna valor absoluto.  
     - Exemplo: `let abs = Math.abs(-5);`
116. **`Math.pow()`** - Calcula potência.  
     - Exemplo: `let pow = Math.pow(2, 3);`
117. **`Math.sqrt()`** - Calcula raiz quadrada.  
     - Exemplo: `let sqrt = Math.sqrt(16);`

### Manipulação de Strings
118. **`charAt()`** - Retorna caractere em índice.  
     - Exemplo: `let char = "hello".charAt(0);`
119. **`slice()`** - Extrai parte da string.  
     - Exemplo: `let part = "hello".slice(1, 3);`
120. **`substring()`** - Extrai parte da string.  
     - Exemplo: `let part = "hello".substring(1, 3);`
121. **`split()`** - Divide string em array.  
     - Exemplo: `let arr = "a,b,c".split(",");`
122. **`trim()`** - Remove espaços em branco.  
     - Exemplo: `let clean = "  hello  ".trim();`
123. **`toUpperCase()`** - Converte para maiúsculas.  
     - Exemplo: `let upper = "hello".toUpperCase();`
124. **`toLowerCase()`** - Converte para minúsculas.  
     - Exemplo: `let lower = "HELLO".toLowerCase();`
125. **`includes()`** - Verifica se string contém substring.  
     - Exemplo: `let has = "hello".includes("ell");`
126. **`replace()`** - Substitui primeira ocorrência.  
     - Exemplo: `let newStr = "hello".replace("l", "p");`
127. **`replaceAll()`** - Substitui todas as ocorrências.  
     - Exemplo: `let newStr = "hello".replaceAll("l", "p");`

### Web APIs
128. **`fetch()`** - Faz requisições HTTP.  
     - Exemplo: `fetch("https://api.com").then(res => res.json());`
129. **`setTimeout()`** - Executa função após delay.  
     - Exemplo: `setTimeout(() => console.log("Oi"), 1000);`
130. **`setInterval()`** - Executa função repetidamente.  
     - Exemplo: `setInterval(() => console.log("Tick"), 1000);`
131. **`clearTimeout()`** - Cancela setTimeout.  
     - Exemplo: `clearTimeout(timeoutId);`
132. **`clearInterval()`** - Cancela setInterval.  
     - Exemplo: `clearInterval(intervalId);`
133. **`localStorage.setItem()`** - Armazena dados no localStorage.  
     - Exemplo: `localStorage.setItem("key", "value");`
134. **`localStorage.getItem()`** - Recupera dados do localStorage.  
     - Exemplo: `let value = localStorage.getItem("key");`
135. **`localStorage.removeItem()`** - Remove item do localStorage.  
     - Exemplo: `localStorage.removeItem("key");`
136. **`sessionStorage.setItem()`** - Armazena dados na sessão.  
     - Exemplo: `sessionStorage.setItem("key", "value");`
137. **`sessionStorage.getItem()`** - Recupera dados da sessão.  
     - Exemplo: `let value = sessionStorage.getItem("key");`
138. **`sessionStorage.removeItem()`** - Remove item da sessão.  
     - Exemplo: `sessionStorage.removeItem("key");`
139. **`alert()`** - Exibe alerta simples.  
     - Exemplo: `alert("Hello!");`
140. **`confirm()`** - Exibe diálogo de confirmação.  
     - Exemplo: `let ok = confirm("Proceed?");`
141. **`prompt()`** - Exibe diálogo de entrada.  
     - Exemplo: `let input = prompt("Enter name:");`

### Erros e Depuração
142. **`try`** - Tenta executar código que pode gerar erro.  
     - Exemplo: `try { JSON.parse(invalid); }`
143. **`catch`** - Captura erros.  
     - Exemplo: `catch (e) { console.log(e); }`
144. **`throw`** - Lança erro personalizado.  
     - Exemplo: `throw new Error("Invalid input");`
145. **`finally`** - Executa após try/catch.  
     - Exemplo: `finally { console.log("Done"); }`
146. **`console.log()`** - Exibe mensagem no console.  
     - Exemplo: `console.log("Hello");`
147. **`console.error()`** - Exibe erro no console.  
     - Exemplo: `console.error("Error occurred");`
148. **`console.warn()`** - Exibe aviso no console.  
     - Exemplo: `console.warn("Warning");`
149. **`console.table()`** - Exibe dados em tabela.  
     - Exemplo: `console.table([{ id: 1, name: "John" }]);`
150. **`console.clear()`** - Limpa o console.  
     - Exemplo: `console.clear();`

### Objetos e Protótipos
151. **`prototype`** - Define protótipo de objeto.  
     - Exemplo: `MyClass.prototype.myMethod = function() {};`
152. **`Object.defineProperty()`** - Define propriedade com configurações.  
     - Exemplo: `Object.defineProperty(obj, "key", { value: 42 });`
153. **`Object.getOwnPropertyDescriptor()`** - Obtém descrição de propriedade.  
     - Exemplo: `let desc = Object.getOwnPropertyDescriptor(obj, "key");`
154. **`Object.getPrototypeOf()`** - Obtém protótipo de objeto.  
     - Exemplo: `let proto = Object.getPrototypeOf(obj);`
155. **`Object.setPrototypeOf()`** - Define protótipo de objeto.  
     - Exemplo: `Object.setPrototypeOf(obj, parent);`

### JSON
156. **`JSON.parse()`** - Converte string JSON em objeto.  
     - Exemplo: `let obj = JSON.parse('{"name": "John"}');`
157. **`JSON.stringify()`** - Converte objeto em string JSON.  
     - Exemplo: `let str = JSON.stringify({ name: "John" });`

### Iteradores e Geradores
158. **`Symbol.iterator`** - Define iterador personalizado.  
     - Exemplo: `obj[Symbol.iterator] = function*() { yield 1; };`
159. **`function*`** - Declara função geradora.  
     - Exemplo: `function* gen() { yield 1; yield 2; }`
160. **`yield`** - Pausa gerador e retorna valor.  
     - Exemplo: `yield 1;`
161. **`next()`** - Avança gerador para próximo valor.  
     - Exemplo: `let value = gen.next().value;`

### Coleções
162. **`Map`** - Estrutura chave-valor.  
     - Exemplo: `let map = new Map([["key", "value"]]);`
163. **`Map.set()`** - Define valor em Map.  
     - Exemplo: `map.set("key", "value");`
164. **`Map.get()`** - Obtém valor de Map.  
     - Exemplo: `let value = map.get("key");`
165. **`Map.delete()`** - Remove chave de Map.  
     - Exemplo: `map.delete("key");`
166. **`Map.has()`** - Verifica se chave existe.  
     - Exemplo: `let exists = map.has("key");`
167. **`Set`** - Coleção de valores únicos.  
     - Exemplo: `let set = new Set([1, 2, 3]);`
168. **`Set.add()`** - Adiciona valor a Set.  
     - Exemplo: `set.add(4);`
169. **`Set.delete()`** - Remove valor de Set.  
     - Exemplo: `set.delete(4);`
170. **`Set.has()`** - Verifica se valor existe.  
     - Exemplo: `let exists = set.has(4);`

### APIs do Navegador
171. **`window.location`** - Manipula URL da página.  
     - Exemplo: `window.location.href = "https://example.com";`
172. **`window.history.pushState()`** - Adiciona entrada ao histórico.  
     - Exemplo: `history.pushState({}, "", "/new");`
173. **`window.history.replaceState()`** - Substitui entrada no histórico.  
     - Exemplo: `history.replaceState({}, "", "/new");`
174. **`navigator.geolocation.getCurrentPosition()`** - Obtém localização do usuário.  
     - Exemplo: `navigator.geolocation.getCurrentPosition(pos => console.log(pos));`
175. **`requestAnimationFrame()`** - Agenda animação suave.  
     - Exemplo: `requestAnimationFrame(animate);`
176. **`cancelAnimationFrame()`** - Cancela animação.  
     - Exemplo: `cancelAnimationFrame(frameId);`

### Internacionalização
177. **`Intl.DateTimeFormat()`** - Formata datas por localidade.  
     - Exemplo: `let date = new Intl.DateTimeFormat("pt-BR").format(new Date());`
178. **`Intl.NumberFormat()`** - Formata números por localidade.  
     - Exemplo: `let num = new Intl.NumberFormat("pt-BR").format(1234.56);`

### Web Workers
179. **`Worker`** - Cria um Web Worker.  
     - Exemplo: `let worker = new Worker("worker.js");`
180. **`postMessage()`** - Envia mensagem a Worker.  
     - Exemplo: `worker.postMessage("Hello");`
181. **`onmessage`** - Recebe mensagem de Worker.  
     - Exemplo: `worker.onmessage = e => console.log(e.data);`

### Eventos Avançados
182. **`dispatchEvent()`** - Dispara evento personalizado.  
     - Exemplo: `el.dispatchEvent(new Event("custom"));`
183. **`CustomEvent`** - Cria evento personalizado.  
     - Exemplo: `let event = new CustomEvent("custom", { detail: {} });`

### Performance
184. **`performance.now()`** - Mede tempo em milissegundos.  
     - Exemplo: `let time = performance.now();`
185. **`performance.mark()`** - Marca ponto no tempo.  
     - Exemplo: `performance.mark("start");`
186. **`performance.measure()`** - Mede intervalo entre marcas.  
     - Exemplo: `performance.measure("duration", "start", "end");`

### Outros
187. **`eval()`** - Executa string como código (evitar).  
     - Exemplo: `eval("console.log('Hello');");`
188. **`isNaN()`** - Verifica se valor é NaN.  
     - Exemplo: `let notNum = isNaN("text");`
189. **`Number.isInteger()`** - Verifica se é inteiro.  
     - Exemplo: `let isInt = Number.isInteger(42);`
190. **`encodeURI()`** - Codifica URI.  
     - Exemplo: `let uri = encodeURI("http://example.com/ teste");`
191. **`decodeURI()`** - Decodifica URI.  
     - Exemplo: `let decoded = decodeURI(uri);`
192. **`encodeURIComponent()`** - Codifica componente de URI.  
     - Exemplo: `let comp = encodeURIComponent("teste com espaço");`
193. **`decodeURIComponent()`** - Decodifica componente de URI.  
     - Exemplo: `let decoded = decodeURIComponent(comp);`
194. **`at()`** - Acessa elemento de array/string por índice (ES2022).  
     - Exemplo: `let item = arr.at(-1);`
195. **`Symbol`** - Cria identificador único.  
     - Exemplo: `let sym = Symbol("id");`
196. **`Proxy`** - Cria proxy para objeto.  
     - Exemplo: `let proxy = new Proxy(obj, handler);`
197. **`Reflect`** - Fornece métodos para operações em objetos.  
     - Exemplo: `Reflect.get(obj, "key");`
198. **`WeakMap`** - Mapa com chaves fracas.  
     - Exemplo: `let wm = new WeakMap();`
199. **`WeakSet`** - Conjunto com valores fracos.  
     - Exemplo: `let ws = new WeakSet();`
200. **`globalThis`** - Referência ao objeto global.  
     - Exemplo: `console.log(globalThis === window);`

---

## 📝 Notas Finais
- **Compatibilidade**: Alguns métodos (ex.: `at()`) são recentes e requerem navegadores modernos.
- **Boas Práticas**: Evite `eval()`, use `const` por padrão, e prefira APIs modernas (ex.: `fetch` em vez de `XMLHttpRequest`).
- **Exploração**: Consulte a documentação do MDN para detalhes adicionais.