for (int index = 1; index < 101; index++)
{
  string message = string.Empty;

  if (index % 3 == 0)
    message += "Fizz";

  if (index % 5 == 0)
    message += "Buzz";

  Console.WriteLine(
    string.IsNullOrEmpty(message) ? index : message
  );
}
