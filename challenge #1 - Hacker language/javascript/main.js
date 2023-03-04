const fs = require('fs');
const path = require('path');

const translateText = (text = '') => {
  const LEET_ALPHABET = {
    A: '4',
    B: '|3',
    C: '[',
    D: ')',
    E: '3',
    F: '|=',
    G: '&',
    H: '#',
    I: '1',
    J: ',_|',
    K: '>|',
    L: '|_',
    M: '/\\/\\',
    N: '^/',
    O: '0',
    P: '|*',
    Q: '(_,)',
    R: '|2',
    S: '5',
    T: '7',
    U: '(_)',
    V: '\\/',
    W: '\\/\\/',
    X: '><',
    Y: '`/',
    Z: '2',
    1: 'L',
    2: 'R',
    3: 'E',
    4: 'A',
    5: 'S',
    6: 'b',
    7: 'T',
    8: 'B',
    9: 'g',
    0: '()',
  };

  const result = Array
    .from(text, character => LEET_ALPHABET[character.toUpperCase()] || character)
    .join('');

  return Promise.resolve(result);
}

const getInputText = () => new Promise((resolve, reject) => {
  // const chunks = [];
  // const reader = fs.createReadStream(path.join(process.cwd(), 'text.txt'));

  // reader.on('data', (chunk) => chunks.push(chunk));

  // reader.on('error', (error) => reject(error));

  // reader.on('end', () => {
  //   const inputText = Buffer.concat(chunks).toString();
  //   resolve(inputText);
  // });

  fs.readFile('../text.txt', { encoding: 'utf8' }, (err, data) => {
    if (err) reject(err);

    resolve(data);
  });
});

const leetTranslationFunction = async (inputText) => {
  const startTime = performance.now();
  const textTranslated = await translateText(inputText);
  const endTime = performance.now();

  return {
    textTranslated,
    executionTimeMs: endTime - startTime,
  }
}

(async () => {
  const inputText = await getInputText();
  const executionRate = 1_000;

  const { textTranslated, executionTimeMs } = await leetTranslationFunction(inputText);

  // TODO: "drift" o deriva de reloj

  // const results = await Promise.all(Array.from({ length: executionRate }, () => leetTranslationFunction(inputText)));

  // const totalElapsedTime = results
  //   .map((result) => result.executionTimeMs)
  //   .reduce((previous, current) => previous + current, 0);

  let totalElapsedTime = 0;

  for (let i = 0; i < executionRate; i++) {
    const { executionTimeMs } = await leetTranslationFunction(inputText);
    totalElapsedTime += executionTimeMs;
  }

  console.log(`** result: ${textTranslated}`);
  console.log(`** function execution time: ${executionTimeMs}`);
  console.log(`** average function execution time: ${totalElapsedTime / executionRate}`);
})();
