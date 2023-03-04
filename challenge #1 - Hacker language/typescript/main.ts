import * as fs from 'fs';
import * as path from 'path';

const translateTextFunc = (text: string): string => {
  const leetDictionary: Record<string, string> = {
    'A': '4',
    'B': '|3',
    'C': '[',
    'D': ')',
    'E': '3',
    'F': '|=',
    'G': '&',
    'H': '#',
    'I': '1',
    'J': ',_|',
    'K': '>|',
    'L': '|_',
    'M': '/\\/\\',
    'N': '^/',
    'O': '0',
    'P': '|*',
    'Q': '(_,)',
    'R': '|2',
    'S': '5',
    'T': '7',
    'U': '(_)',
    'V': '\\/',
    'W': '\\/\\/',
    'X': '><',
    'Y': '`/',
    'Z': '2',
    '1': 'L',
    '2': 'R',
    '3': 'E',
    '4': 'A',
    '5': 'S',
    '6': 'b',
    '7': 'T',
    '8': 'B',
    '9': 'g',
    '0': '()',
  }

  const textTranslated = Array
    .from((text), (character) => leetDictionary[character.toUpperCase()] || character)
    .join('');

  return textTranslated;
}

const getInputText = (): Promise<string> => new Promise((resolve, reject) => {
  const chunks: Buffer[] = [];
  const reader = fs.createReadStream(path.join('..', 'text.txt'));

  reader.on('data', (chunk: Buffer) => chunks.push(chunk));

  reader.on('error', (error) => reject(error));

  reader.on('end', () => {
    const inputText = Buffer.concat(chunks).toString();
    resolve(inputText);
  });
});

const main = async (): Promise<void> => {
  const inputText: string = await getInputText();

  const executionRate: number = 1_000;

  const executionTime: number = Array
    .from({ length: executionRate }, () => {
      const startTime = performance.now();
      translateTextFunc(inputText);
      const endTime = performance.now();
      return endTime - startTime;
    })
    .reduce((prev, curr) => prev + curr, 0);

  const startTime = performance.now();
  const textTranslated = translateTextFunc(inputText);
  const endTime = performance.now();

  console.log(`** result: ${textTranslated}\n** function execution time: ${endTime - startTime}\n** average function execution time: ${executionTime / executionRate}`);
}

main();
