/* Desafio 1 */
function fibonacci(n) {
  let ref = n;  
  let array = [0, 1];  
  let fibo = 0; 

  while (fibo <= ref) {
      fibo = array[array.length - 1] + array[array.length - 2];   
      if (fibo <= ref) {
          array.push(fibo); 
          console.log(fibo);  
      }
  }
  
  if(array.includes(n)){
      return console.log(`O numero ${n} pertence a sequencia de Fibonacci`)
  }else{
      return console.log(`O numero ${n} não pertence a sequencia de Fibonacci`)
  };  
}

fibonacci(144);

/* ====================== */

/* 2° Desafio  */
const string = 'Teste para o programA de estAgio'; 

const stringLowerCase = string.toLowerCase();

const stringWithoutA = stringLowerCase.split('a').join('');

if (stringLowerCase.includes('a')) {
  console.log(
    `Contém a letra "a" e ocorre ${string.length - stringWithoutA.length} vezes`
  );
} else {
  console.log('Não contem letra a na String');
}

console.log(stringWithoutA);
/* ========================================== */

/* 3° Desafio */
let indice = 12;
let soma = 0;

for (let k = 1; k < indice; k++) {
  soma += k;
  console.log(soma);
}

/* Resposta: Final da soma será 66 */

/* 4° Desafio */

/* 
  Respostas:

  a) Sequencia de numeros impares
  b) Sequencia do numero anterior multiplicado por 2
  c)
  d)
  e) Sequencia fibonacci
  F
*/

/* 5° Desafio  */

/* 
  Primeira ida:
  Deixar Ligar o primeiro interruptor ligado
  ligar o segundo por alguns minutos e apagar

  Ao chegar na sala 
  se esta ligado é o primeiro interruptor da sala 1
  se esta apagado, mas quente é o segundo interruptor
  se esta frio, é do terceiro

  Segunda ida:
  aqui vc exclui o procedimento responsavel por achar o primeiro interruptor, identificando o segundo vc ja tem o resultado dos 3 interruptores
*/