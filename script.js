//Задача 1 Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них

function func1() {
function getMin(num1, num2) {
    if (num1 < num2) {
      return num1
    } else {
      return num2;
    }
  }
  console.log(getMin(9, 88))
}

//Задача 2 Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему

function func2() {
    function getEven(a, b) {
       const max = a
       if(a < b) {
        const max = b
       }
       const min = b
       if(b > a) {
        const min = a
       }
      
        for (let i = max; i >= min; i--) {
          if (i % 2 === 0) {
            console.log(i);
          }
        }
      }
      getEven(18, 77)
    }

    
//Задача 3
// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2
function func3() {
  function power(base, powerItself) {
    let result = base ** powerItself;
    return result;
  }
  let powerItself = 2;
  console.log(power(4, powerItself));
}

//Задача 4 
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function func4() {
  function calcUntil(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(calcUntil(22));
}

// Задача 5 
// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль
function func5() {
  function calc(n, m) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = n; i <= m; i++) {
      if (i % 2 == 0) {
        sumEven += i;
      } else {
        sumOdd += i;
      }
    }
    console.log(sumEven);
    console.log(sumOdd);
  }
  calc(5, 9);
}

// Задача 6
function func6() {
  function compare(strings) {
    if (strings.length == 0) {
      console.log("Null");
    }
    let longString = "";
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > longString.length) {
        longString = strings[i];
      }
    }
    console.log(longString);
  }

  compare([]);
}
