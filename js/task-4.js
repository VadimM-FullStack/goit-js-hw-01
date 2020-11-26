let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const userInput = prompt(
  "Укажите количество дроидов, которое Вы хотите купить!"
);

if (userInput === null) {
  console.log("Отменено пользователем!");
} else if (Number(userInput) * pricePerDroid > credits) {
  console.log("Недостаточно средств на счете!");
} else {
  totalPrice = Number(userInput) * pricePerDroid;
  console.log(
    `Вы купили ${userInput} дроидов, на счете осталось ${(credits -= totalPrice)} кредитов.`
  );
}
