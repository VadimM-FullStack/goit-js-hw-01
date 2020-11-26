let cost;
const userInput = prompt("Введите страну доставки");
if (userInput === null) {
  console.log("Отменено пользователем!");
} else {
  const country = userInput.toUpperCase();

  switch (country) {
    case "КИТАЙ":
      cost = 100;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case "ЧИЛИ":
      cost = 250;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case "АВСТРАЛИЯ":
      cost = 170;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case "ИНДИЯ":
      cost = 80;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case "ЯМАЙКА":
      cost = 120;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    default:
      console.log("В вашей стране доставка не доступна");
  }
}
