import { game, random } from '../index.js';

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}
const randomQuestionProg = () => {
  let number = random(50);
  const seq = random(11, 5);
  const skip = random(seq);
  const difference = random(21, -20);
  let progression = [];
  let count = 0;
  while (count !== seq) {
    progression.push(number);
    number += difference;
    count += 1;
  }
  const correctAnswer = String(progression[skip]);
  progression = String(progression);
  const question = replaceAll(progression, ',', ' ').replace(correctAnswer, '..', 1);
  return [question, correctAnswer];
};

const description = 'What number is missing in the progression?';
const startProg = () => game(description, randomQuestionProg);
export default startProg;
