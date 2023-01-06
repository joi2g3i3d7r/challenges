for index in range(1, 101):
  message = ""

  if index % 3 == 0:
    message += "Fizz"

  if index % 5 == 0:
    message += "Buzz"

  print(message or index)
