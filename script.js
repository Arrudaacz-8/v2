var cidade = "Macapá";
let estado = "Amapá";

console.log("Cidade:", cidade);
console.log("Estado:", estado);

estado = "Pará";
console.log("Novo estado:", estado);

console.log("--------------------------------------------------");

let nome = "Thiago", idade = 18, ativo = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Ativo:", ativo);

console.log("--------------------------------------------------");

let produto = "Notebook";
let preco = 3500;

console.log("O produto " + produto + " custa R$ " + preco + ".");
console.log('O produto ${produto} custa R$ ${preco}.');
console.log("--------------------------------------------------");

let aluno = {
  nome: "Alanis",
  matricula: "2023120230019",
  curso: "Informática"
};

console.log("Nome do aluno:", aluno.nome);
console.log("Matrícula:", aluno.matricula);
console.log("Curso:", aluno.curso);

console.log("--------------------------------------------------");

let x = 8;
let y = 3;

console.log("Soma:", x + y);
console.log("Subtração:", x - y);
console.log("Multiplicação:", x * y);
console.log("Divisão:", x / y);
console.log("Resto da divisão:", x % y);
console.log("Potência:", x ** y);

console.log("Sem parênteses:", x + y * 2);
console.log("Com parênteses:", (x + y) * 2);

console.log("--------------------------------------------------");

let contador = 10;

contador += 5;
console.log("Após += 5:", contador);

contador -= 3;
console.log("Após -= 3:", contador);

contador *= 2;
console.log("Após *= 2:", contador);

contador /= 4;
console.log("Após /= 4:", contador);

console.log("--------------------------------------------------");

let a = 5;
let b = "5";

console.log("a == b :", a == b); 
console.log("a === b:", a === b); 
console.log("a != b :", a != b);   
console.log("a !== b:", a !== b); 
console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);