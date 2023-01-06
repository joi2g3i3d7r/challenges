for (let index = 1; index < 101; index++) {
  let message = '';

  if (index % 3 === 0)
    message += 'Fizz'

  if (index % 5 === 0)
    message += 'Buzz'

  console.log(message || index);
}
