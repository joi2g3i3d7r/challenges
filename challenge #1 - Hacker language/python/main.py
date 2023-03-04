import functools
import time
import timeit


def translateText(inputText):
  leet_keys = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  ]

  leet_values = [
  '4',
  '|3',
  '[',
  ')',
  '3',
  '|=',
  '&',
  '#',
  '1',
  ',_|',
  '>|',
  '|_',
  '/\\/\\',
  '^/',
  '0',
  '|*',
  '(_,)',
  '|2',
  '5',
  '7',
  '(_)',
  '\\/',
  '\\/\\/',
  '><',
  '`/',
  '2',
  'L',
  'R',
  'E',
  'A',
  'S',
  'b',
  'T',
  'B',
  'g',
  '()',
  ]

  leet_dictionary = dict(zip(leet_keys, leet_values))
  translated = map(lambda character: leet_dictionary.get(character.upper(), character), inputText)
  text_translated_list = list(translated)
  text_translated = ''.join(text_translated_list)
  return text_translated

start_time = time.time()
text_translated = translateText("Hello world, 123")
end_time = time.time()

function_timeit = timeit.timeit(functools.partial(translateText, "Hello world, 123"), number=1000)

print(f"** function execution time: {end_time - start_time}\n** function average execution time: {function_timeit}\n** result: {text_translated}")
