using System;
using System.Text;
using System.Threading;

namespace consoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                var input = Console.OpenStandardInput();
                var buffer = new byte[1024];
                int length;
                while (input.CanRead && (length = input.Read(buffer, 0, buffer.Length)) > 0)
                {
                    var payload = new byte[length];

                    Buffer.BlockCopy(buffer, 0, payload, 0, length);

                    Console.Write("C# Receiving: " + Encoding.UTF8.GetString(payload));
                    Console.Out.Flush();
                }
            }

            // while (true)
            // {
            //     Console.WriteLine("hello from c#");
            //     Thread.Sleep(5000);
            // }
        }
    }
}
