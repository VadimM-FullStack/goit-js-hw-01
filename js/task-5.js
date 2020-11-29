const AUSTR_CNTR = "АВСТРАЛИЯ";
const CHILI_CNTR = "ЧИЛИ";
const CHINA_CNTR = "КИТАЙ";
const JAMAI_CNTR = "ЯМАЙКА";
const INDIA_CNTR = "ИНДИЯ";
const USER_CANCEL = "Отменено пользователем!";
const NOT_DLVR = "В вашей стране доставка недоступна";
const userInput = prompt("Введите страну доставки");
if (userInput === null) {
  console.log(USER_CANCEL);
} else {
  let country = userInput.toUpperCase();
  let cost = 0;

  switch (country) {
    case CHINA_CNTR:
      cost = 100;
      break;

    case CHILI_CNTR:
      cost = 250;
      break;

    case AUSTR_CNTR:
      cost = 170;
      break;

    case INDIA_CNTR:
      cost = 80;
      break;

    case JAMAI_CNTR:
      cost = 120;
      break;
  }
  if (cost !== 0) {
    console.log(`Доставка в страну ${country} будет стоить ${cost} кредитов`);
  } else {
    console.log(NOT_DLVR);
  }
}
