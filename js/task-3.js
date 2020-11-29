const ADMIN_PASSWORD = "jqueryismyjam";
const CANCEL_MSG = "Отменено пользователем!";
const WELCOME_MSG = "Добро пожаловать!";
const ACCESS_DND_MSG = "Доступ запрещен, неверный пароль!";
let message;
const userInput = prompt("Введите пароль!");

if (userInput === null) {
  message = CANCEL_MSG;
} else if (userInput === ADMIN_PASSWORD) {
  message = WELCOME_MSG;
} else {
  message = ACCESS_DND_MSG;
}

alert(message);
