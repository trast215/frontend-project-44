import { game, random } from './index.js';

const randomQuestionCalc = () => {
  const number1 = random(100);
  const number2 = random(100);
  const operation = random(3);
  let correctAnswer = 0;
  let question = '';
  if (operation === 1) {
    correctAnswer = String(number1 * number2);
    question = `${number1} * ${number2}`;
  } else if (operation === 2) {
    correctAnswer = String(number1 + number2);
    question = `${number1} + ${number2}`;
  } else {
    correctAnswer = String(number1 - number2);
    question = `${number1} - ${number2}`;
  }
  return [question, correctAnswer];
};
const description = 'What is the result of the expression?';
const startCalc = () => game(description, randomQuestionCalc);
export default startCalc;
