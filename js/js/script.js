let greeting = 'Привет! Как тебя зовут?'
let name = prompt(greeting);

while (name == '' || name == null)
{
   name = prompt(greeting);
}
alert(name + ', я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "угадал".');

let number = random(100);
let guess = prompt('Какое число я загадал?');
let numberOfGuesses = 1;

while (guess != number)
{
   numberOfGuesses = numberOfGuesses + 1;
   if (guess > number)
   {
      guess = prompt('Ты шо даун, куда так много?')
   }
   else if (guess < number)
   {
      guess = prompt('Раздупляйся уже, это мало');
   }
}

alert('Ты умничка! Это число ' + number + '.Тебе понадобилось ' + numberOfGuesses + ' попыток');