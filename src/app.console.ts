/* eslint-disable @typescript-eslint/require-await */
import { Command, Console } from 'nestjs-console';

@Console()
export class AppConsole {
  @Command({
    command: 'test',
    description: 'Test command',
  })
  async hello(): Promise<void> {
    while (true) {
      console.log('CONSOLE_ENV: ', process.env.CONSOLE_ENV);
      console.log('Hello, world!');
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}
