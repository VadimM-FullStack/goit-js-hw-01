let total = 0;
let userInput;

do {
  userInput = prompt("Введите число!");
  total += Number(userInput);
} while (userInput != null);

alert(`Общая сумма чисел равна ${total}`);
