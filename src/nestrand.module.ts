import { DynamicModule, Module } from '@nestjs/common';
import { RandomNumberServiceOptions } from './random-number-service-options';
import { RandomNumberService } from './random-number.service';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [TelegramModule],
})
export class NestrandModule {
  static forRoot(options: Partial<RandomNumberServiceOptions>): DynamicModule {
    const providers = [
      {
        provide: RandomNumberService,
        useValue: new RandomNumberService(options),
      },
    ];

    return {
      providers,
      exports: providers,
      module: NestrandModule,
    };
  }
}
