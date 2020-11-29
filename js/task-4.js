const CANCEL_MSG = "Отменено пользователем!";
const NO_MONEY = "Недостаточно средств на счете!";
let credits = 23580;
const pricePerDroid = 3000;
const userInput = prompt(
  "Укажите количество дроидов, которое Вы хотите купить!"
);
let totalPrice = Number(userInput) * pricePerDroid;
let message;
if (userInput === null) {
  message = CANCEL_MSG;
} else if (Number(userInput) * pricePerDroid > credits) {
  message = NO_MONEY;
} else {
  message = `Вы купили ${userInput} дроидов, на счете осталось ${(credits -= totalPrice)} кредитов.`;
}
console.log(message);
