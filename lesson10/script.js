// let h1 = document.getElementById('h1')
// h1.innerText = 'heading'
// console.log(h1);

// ! объявление переменных

// * через ключевое слово let

// такой переменной можно переприсвоить значение
// и даже значение с другим типом данных

let hello;
hello = "hello, js!";
hello = "привет, js!";

// console.log('тип вначале:', typeof hello)
// hello = 1000
// console.log('тип после:', typeof hello)
// console.log(hello)

// * через ключевое слово const

// c const нужно определить значение в момент создания переменной
// нельзя переприсваивать значение
const language = "JavaScript";
// language = 'JS'

// ! примитивные типы данных в JS

// * 1. string - строка

// при создании строк в JS можно использовать двойные, одинарные и косые кавычки
// "Earth", 'Earth', `Earth`
// вопрос выбора - стилизационный

let planet = "Земля";

// строки можно складывать (конкатенация)

let greeting = "We are from " + planet + "!";

let planetNumber = 3;

// в строках в косых кавычках мы можем использовать динамические данные
// этот синтаксис называется 'шаблонными строками'

let greeting1 = `Мы живем на планете ${planet} в Солнечной системе. Это ${planetNumber} планета от Солнца`;

// console.log(greeting1)

// * 2. number - число
// целые числа и числа с плавающей точкой - это один тип данных number в js

let n1 = 42;
let n2 = 3.14;
let n3 = -40;

let lastInteger = Number.MAX_SAFE_INTEGER;

// console.log(lastInteger)

// console.log(typeof n1)
// console.log(typeof n3)

// * 3. boolean - булево значение

let isStudent = true;
let isBackend = false;

// пример тернарного оператора в JS
let hasLicense = true;
// значение переменной зависит от булевого значения другой
let canIDrive = hasLicense ? "You can drive a car! 🚘" : "Please stop! 👮";

// console.log(canIDrive)

// * 4. undefined - неопределенное значение
// не явное указание на отсутствие значения
// часто приходит как результат недопустимых операций

let object;

// * 5. null - пустое значение
// явное указание на отсутствие значения

let user = null;

// * 6. bigint - большое число
// для операция над числами больше чем Number.MAX_SAFE_INTEGER

let bigNumber = 1000n;
let bigResult = bigNumber + 1000n;

// console.log(typeof bigResult)

// * 7. symbol - символ
// уникальное значение используемое в объектах
// неперезаписываемое свойство объекта

let symbolId = Symbol(10);
// console.log(typeof symbolId)

// ! Операции над данными в JS

// ? приведение типов

// * 1.  преобразование в строку

// при сложении числа и строки выходит строка
let sum = 14 + 2 + "2";

// с помощью String()
let sum1 = String(42) + " - ответ на главный вопрос";

// * 2. преобразование в число

// с помощью Number()
// но преобразовывать можно только с троки с допустимыми для числа значениями символов
// иначе в ответе придет NaN (not a number)
let sum2 = 2 + Number("16");
// console.log(sum2)

// parseInt()
// метод преобразует строку в число до первого недопустимого символа
let sum3 = 42 + parseInt("30€");

// console.log(sum3)

// * 3. преобразование в булевое значение

// значение для false в js:

// false
// 0
// undefined
// null
// ""
// NaN
// 0n (bigint)
// -0

// остальные значения считаются истинными

// ! математические операторы

// * арифметические операции

let b1 = 12 + 45; // сложение
let b2 = 12 - 45; // вычитание
let b3 = 12 * 45; // умножение
let b4 = 12 / 45; // деление
let b5 = 12 ** 4; // возведение в степень
let b6 = 15 % 2; // остаток от деление
let b7 = Math.sqrt(25); // квадратный корень

// случайное число от 1 до 0
let random = Math.random();

// случайное число от 1 до 100
// Math.floor - округляет до целого числа
let random1 = Math.floor(Math.random() * 100) + 1;

// * операторы сравнения

// >, <, ==, ===, !, !==, &&, ||
// скобки в выражениях приоритизирует операции

// == - равенство с приведением типов
// console.log(99 == '99')

// === - строгое хорошее равенство (рекомендуется к использованию)
// console.log(99 === '99')

const r1 = 25 !== '25' // будет true
const r2 = !true // будет false

// операторы && (и), ||(или)

// console.log(true || false) // true
// console.log(true && false) // false


// порядок приоритета при операциях:

// 1. ! (NOT)
// && (AND)
// || (OR)

const a = 5
const b = 10

const res = (a > 0 && b < 20) || (a === 0)
// const res1 = a > 0 && b < 20 || a === 0


// console.log(res)