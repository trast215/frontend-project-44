import readlineSync from 'readline-sync';

const IsEvenGame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const IsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const random1 = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(`Question: ${random1}`);
  const read1 = readlineSync.question('Your answer: ');
  const even1 = IsEven(random1);
  if (read1 === even1) {
    console.log('Correct!');
  } else return console.log(`'${read1}' is wrong answer ;(. Correct answer was '${even1}'`);

  const random2 = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(`Question: ${random2}`);
  const read2 = readlineSync.question('Your answer: ');
  const even2 = IsEven(random2);
  if (read2 === even2) {
    console.log('Correct!');
  } else return console.log(`'${read2}' is wrong answer ;(. Correct answer was '${even2}'`);
  const random3 = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(`Question: ${random3}`);
  const read3 = readlineSync.question('Your answer: ');
  const even3 = IsEven(random3);
  if (read3 === even3) {
    console.log('Correct!');
    return console.log(`Congratulations, ${name}!`);
  } return console.log(`'${read3}' is wrong answer ;(. Correct answer was '${even3}'`);
};
export default IsEvenGame;
