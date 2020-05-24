import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramService {
  sayHello() {
    return 'hello';
  }
}
