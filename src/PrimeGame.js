import { game, random } from './index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};
const randomQuestionPrime = () => {
  const number1 = random(101, 1);
  const correctAnswer = isPrime(number1);
  const question = number1;
  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startPrime = () => game(description, randomQuestionPrime);
export default startPrime;
