// FOREACH - aplica a funçao em cada um dos elementos do array

// const array = [1, 2, 3, 4, 5];

// let sum = 0;

// array.forEach((valor, indice, array) => {
//   sum += valor;
// })

// console.log(sum)

// const letters = ['a', 'b', 'c', 'd', 'b', 'c', 'e']

// let count = {};

// letters.forEach(N => {
//   if(count[N]) {
//     count[N]++
//   } else {
//     count[N] = 1
//   }
// })

// console.log(count)





// MAP - retorna um novo array, aplicando a função dada

// const numbers = [1 , 2 , 3, 4 , 5];

// const numberDuble = numbers.map(double)

// function double(valor, indice, array) {
//     return valor * 2
// }

// console.log(numberDuble);

// const numberMultiplied = numbers.map(valorIndice)

// function valorIndice(valor, indice, array) {
//   return valor * indice;
// }

// console.log(numberMultiplied)


//EXEMPLO 2

// const produtos = [
//   {
//     name: 'laptopl',
//     price: 1000,
//     count: 5
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//     count: 2
//   },
//   {
//     name: 'phone',
//     price: 500,
//     count: 10
//   },

// ]


// const valorTotalDosProdutos = produtos.map(item => (
// {
//   name: item.name,
//   valorTotal: item.price * item.count,
// }));

// console.log(valorTotalDosProdutos)

// const str = ['1', '2', '3', '4'];

// console.log(str)

// const number = str.map(item => Number(item)) //Number é uma funçao JS.

// console.log(number)





// FILTER - retorna um novo array com os elementos para os quais a função retornar TRUE

// const numbers = [1, 2, 3, 4, 5, 6];

// const even = numbers.filter(isEven)

// function isEven(value) {
//   return value % 2 === 0;
// }

// console.log(even);

// const people = [
//   {
//     name: 'Florin',
//     age: 26,
//   },
//   {
//     name: 'Iven',
//     age: 18,
//   },
//   {
//     name: 'Jai',
//     age: 15,
//   },

// ];

// const peopleOver18 = people.filter(person => person.age >= 18)

// console.log(peopleOver18)

// const number = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];

// const nums = number.filter((valor, indice, array) => {
//   return array.indexOf(valor) === indice;

// });

// console.log(nums)




// FILL - substitui os valors do array pelo valor passado no parametro

// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(0)

// console.log(numbers)

// numbers.fill((valorASerTrocado, aPartirDe, ateTal)). //o numero 'ateTal', não é incluso, era ira substituir até o anterior.

// numbers.fill(10, 0, 1)

// console.log(numbers) // saida [ 10, 2, 3, 4, 5 ]

// function preencherNumeros(n) {
//   return Array(n).fill(0).map((_, indice) => indice + 1); // _ significa todos os elementos
// }

// console.log(preencherNumeros(10))






//REDUCE - comprime o array é um unico valor

// const numbers = [ 1, 2, 3, 4, 5, 6, 7 ];

// const total = numbers.reduce(sum, 0) //callback e valor inicial

// function sum(valorAcumulado, valor) {
//   return valorAcumulado + valor
// }

// const max = numbers.reduce(callback, -Infinity)

// function callback (acumulado, valor) {
//   if(acumulado > valor) {
//     return acumulado;
//   } else {
//     return valor;
//   }
// }

// console.log(max)

// const produtos = [
//   {
//     name: 'laptopl',
//     price: 1000,
//     count: 5
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//     count: 2
//   },
//   {
//     name: 'phone',
//     price: 500,
//     count: 10
//   },
// ]

// const valorTotalDaLoja = produtos.reduce((acc, item) => (acc+(item.price * item.count)),0)

// console.log(valorTotalDaLoja)





//SLICE - retorna uma copia de uma porção do array

// const numbers = [ 1, 2, 3, 4, 5];

// const numbersFrom2 = numbers.slice(1, 4) // ele retorna o elemento 1 indice antes do pedido como segundo parametro

// console.log(numbersFrom2)




//SPLICE - remove ou adicionar um elemento alterando o array original. se atribuiur a um novo objeto, os numeros removidos são inseridos nesse novo objeto

// const numbers = [ 1, 2, 3, 4, 5];

// numbers.splice(2, 3) //o segundo parametro é O NUMERO DE ELEMENTOS QUE QUEREMOS REMOVER

// console.log(numbers)


// numbers.splice(5, 0, 6, 7 ); //adiciona os numeros a partir do indice passado como primeiro parametro

// console.log(numbers)  



//SORT - converte para string e os coloca em ordem

// const number = [74, 18, 10, 5, 84, 24, 105]

// number.sort(compareFunction);

// console.log(number)

// function compareFunction(a, b) {

//     return a-b;
// }



//CONCAT - concatena arrays

// const a = [1, 2, 3]
// const b = [4, 5, 6]

// const c = a.concat(b);

// console.log(c)






//INCLUDES - verifica se há o valor no array

// const names = ['Florin', 'Ivan', 'Liam'];

// const res = names.includes('Liam')

// console.log(res)




//JOIN - transforma o array em string, por padrão, com virgulas separando os elementos

// const countries = ['Romania', 'USA', "India"]

// const res = countries.join(' - ') // como parametro podemos passar qual o separador

// console.log(res);



// REVERSE - inverte um array 

// const numbers = [1, 2, 3, 4, 5];

// const newArr = numbers.concat().reverse(); //se não usar concat ou spread operators, ele altera o array inicial

// console.log(newArr)
// console.log(numbers)



// //PUSH - add elemtno no array 

// const numbers = [1, 2, 3]

// console.log(total)




//POP - remove o ultimo elemente e o retorna

// const number = [1, 2, 3]

// const poped = number.pop()

// console.log(number)
// console.log(poped)



//UNSHIFT - adiciona elementos no inicio do array e retorna o novo tamanho do array

// const numbers = [1, 2, 3, 4, 5];

// const unshifted =numbers.unshift(0);

// console.log(unshifted)




//SHIFT - remove o primiero elemento do array e o retorna

// const numbers = [1, 2, 3, 4, 5];

// const firstItem = numbers.shift()

// console.log(firstItem)



//INDEXOF - retorna o primeiro indice correspondete ao elemento procurado

// const names = ['Florin', 'Ivan', 'Liam',];

// console.log(names.indexOf('Ivan'))



// EVERY - verifica se TODOS os elementos do array passam pela função de verificação

// const numbers = [1, 2, 3, 4, 5];

// const res = numbers.every(isPositive)

// function isPositive(item) {
//     return item > 0
// }

// console.log(res)

// const numbersNegative = [-1, 2, -3, 4, 5];

// const res2 = numbersNegative.every(isPositive)


// console.log(res2)




//SOME - verifica se ao menos 1 elemento do array supri a função dada

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.some(graterThanFour))

// function graterThanFour(item) {
//     return item > 4
// }




// FIND - verifica qual o PRIMEIRO item q satisfaz a função

// const names = ['Florin', 'Ivan', 'Liam'];

// const res = names.find(findIvan)

// function findIvan(item) {
//     return item === 'Ivan';
// }

// console.log(res)




// FINDINDEX - encontra o elemento que satisfaz a função e retorna seu indice (caso tenha multiplos, retorna o indice do primeiro encontrado)

// const numbers = [1, 2, 3, 4, 5, 3, 3, 3];

// const res = numbers.findIndex(findTrhee)

// function findTrhee(value) {
//     return value === 3;
// } 

// console.log(res)



// //FROM - transforma uma string em array 

// const str = '1234567'

// const res = Array.from(str,x => Number(x));


// console.log(res)

// ou remove numeros duplicados com o Set()

// const numbers = [1, 2, 3, 4, 5, 3, 3, 3];

// const res = Array.from(new Set(numbers));

// console.log(res);




//ISARRAY - verifica se o valor é um array 

// const names = ['Florin', 'Ivan', 'Liam'];
// const str = 'Hello World';
// const number = 17;

// console.log(Array.isArray(str))



//FLAT - concatenas todos os sub arrays dentro de um array

// const arr = [1, [2, [3, [4]]]];

// const res = arr.flat(3) // o parametro especifica quantos arrays eles deve quebrar dentro do array pai

// console.log(res)




























