public class Program {
  public static void main(String[] args) {
    for (int index = 1; index < 101; index++) {
      String message = "";

      if (index % 3 == 0)
        message += "Fizz";

      if (index % 5 == 0)
        message += "Buzz";

      System.out.println(message.isEmpty() ? index : message);
    }
  }
}
