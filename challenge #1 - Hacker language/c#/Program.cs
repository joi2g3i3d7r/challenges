using System.Text;
using System.Diagnostics;

namespace Program
{
  class Program
  {
    static async Task Main(string[] args)
    {
      string inputText = await getInputText();
      const int numTasks = 1000;
      Task<IResult>[] tasks = new Task<IResult>[numTasks];

      for (int i = 0; i < numTasks; i++)
      {
        tasks[i] = Task.Run(() => leetTranslationFunction(inputText));
      }

      Task runner = Task
        .WhenAll(tasks)
        .ContinueWith(_ =>
        {
          double? totalElapsedTime = 0.0;
          double? averageElapsedTime;

          foreach (Task<IResult> task in tasks)
          {
            totalElapsedTime += task.Result.executionTimeMs;
          }

          averageElapsedTime = totalElapsedTime / numTasks;

          IResult leetTranslation = leetTranslationFunction(inputText);

          Console.WriteLine($"** result: {leetTranslation.textTranslated}");
          Console.WriteLine($"** function execution time: {leetTranslation.executionTimeMs} milliseconds");
          Console.WriteLine($"** average function execution time: {averageElapsedTime} milliseconds");

        }, TaskScheduler.Default);

      runner.Wait();
    }

    internal interface IResult
    {
      public string? textTranslated { get; set; }

      public double? executionTimeMs { get; set; }
    }

    internal class Result : IResult
    {
      public string? textTranslated { get; set; }
      public double? executionTimeMs { get; set; }
    }

    internal static string translateText(string inputText)
    {
      Dictionary<char, string> leetDictionary = new Dictionary<char, string>();

      leetDictionary.Add('A', "4");
      leetDictionary.Add('B', "|3");
      leetDictionary.Add('C', "[");
      leetDictionary.Add('D', ")");
      leetDictionary.Add('E', "3");
      leetDictionary.Add('F', "|=");
      leetDictionary.Add('G', "&");
      leetDictionary.Add('H', "#");
      leetDictionary.Add('I', "1");
      leetDictionary.Add('J', ",_|");
      leetDictionary.Add('K', ">|");
      leetDictionary.Add('L', "|_");
      leetDictionary.Add('M', "/\\/\\");
      leetDictionary.Add('N', "^/");
      leetDictionary.Add('O', "0");
      leetDictionary.Add('P', "|*");
      leetDictionary.Add('Q', "(_,)");
      leetDictionary.Add('R', "|2");
      leetDictionary.Add('S', "5");
      leetDictionary.Add('T', "7");
      leetDictionary.Add('U', "(_)");
      leetDictionary.Add('V', "\\/");
      leetDictionary.Add('W', "\\/\\/");
      leetDictionary.Add('X', "><");
      leetDictionary.Add('Y', "`/");
      leetDictionary.Add('Z', "2");
      leetDictionary.Add('1', "L");
      leetDictionary.Add('2', "R");
      leetDictionary.Add('3', "E");
      leetDictionary.Add('4', "A");
      leetDictionary.Add('5', "S");
      leetDictionary.Add('6', "b");
      leetDictionary.Add('7', "T");
      leetDictionary.Add('8', "B");
      leetDictionary.Add('9', "g");
      leetDictionary.Add('0', "()");

      StringBuilder outputText = new StringBuilder();

      // CharEnumerator enumerator = inputText.GetEnumerator();

      // while (enumerator.MoveNext())
      // {
      //   char character = enumerator.Current;

      //   if (leetDictionary.ContainsKey(char.ToUpperInvariant(character)))
      //   {
      //     outputText.Append(leetDictionary.GetValueOrDefault(char.ToUpperInvariant(character)));
      //   }
      //   else
      //   {
      //     outputText.Append(character);
      //   }
      // }

      foreach (char character in inputText)
      {
        if (leetDictionary.ContainsKey(char.ToUpperInvariant(character)))
        {
          outputText.Append(leetDictionary.GetValueOrDefault(char.ToUpperInvariant(character)));
        }
        else
        {
          outputText.Append(character);

        }
      }

      return outputText.ToString();
    }

    internal static IResult leetTranslationFunction(string inputText)
    {
      Stopwatch stopwatch = Stopwatch.StartNew();
      string textTranslated = translateText(inputText);
      stopwatch.Stop();
      double timeExecution = stopwatch.Elapsed.TotalMilliseconds;

      return new Result()
      {
        textTranslated = textTranslated,
        executionTimeMs = timeExecution,
      };
    }

    internal static async Task<string> getInputText()
    {
      return await File.ReadAllTextAsync("../text.txt");
    }

  }
}
