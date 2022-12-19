// 1. Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.

document.getElementById("first").innerHTML = "1. Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. </br> array = [1, 5, 3, 7, 2, 6, 8, 3]; </br></br>"

const array = [1, 5, 3, 7, 2, 6, 8, 3];
let newArray = [];

let fn = (element) => {
    return element * 2;
}

function map(fn, array) {
    for (let i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i]);
    }
    return newArray;
}
document.getElementById("first").innerHTML += `newArray = ${map(fn, array)} </br></br>`;

// 2. Перепишите функцию, используя оператор '?' или '||'
/*Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('Родители разрешили?');
        }
    }  */

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');

}

console.log(checkAge(30));

/*Классная работа
    Создайте калькулятор
    За каждую операцию будет отвечать отдельная функция, т.е.для сложения - add(a, b), для умножения - multiple(a, b) и т.д.Каждая из них принимает в аргументы только два числа и возвращает результат операции над двумя числами Если число не передано в функцию аргументом - ПО УМОЛЧАНИЮ присваивать этому аргументу 0.

    Основная функция calculate()
    Принимает ТРИ АРГУМЕНТА:
    1 - число
    2 - число
    3 - функция которую нужно выполнить для двух этих чисел.Таким образом получается что основная функция калькулятор будет вызывать переданную ей аргументом функцию для двух чисел, которые передаются остальными двумя аргументами.При делении на 0 выводить ошибку.Функия калькулятор доджна принять на вход 3 аругмента, Если аргументов больше или меньше выводить ошибку.
*/

let add = (num1 = 0, num2 = 0) => {
    return num1 + num2;
}

let min = (num1 = 0, num2 = 0) => {
    return num1 - num2;
}

let mult = (num1 = 0, num2 = 0) => {
    return num1 * num2;
}

let divide = (num1 = 0, num2 = 0) => {
    if (num2 === 0) {
        console.error("Error");
    }
    return num1 / num2;
}


let num1 = parseFloat(prompt("Number 1"));
let num2 = parseFloat(prompt("Number 2"));
let sign = prompt("Sign");

function calculate(num1, num2, func) {
    document.getElementById("first").innerHTML += `${func(num1, num2)}`;
}

switch (sign) {
    case "+": calculate(num1, num2, add);
        break;
    case "-": calculate(num1, num2, min);
        break;
    case "*": calculate(num1, num2, mult);
        break;
    case "/": calculate(num1, num2, divide);
        break;
}
