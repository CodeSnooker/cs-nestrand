import { Test, TestingModule } from '@nestjs/testing';
import { RandomNumberServiceOptions } from './random-number-service-options';
import { RandomNumberService } from './random-number.service';

describe('RandomNumberService', () => {
  let service: RandomNumberService;
  const options: Partial<RandomNumberServiceOptions> = {};

  const providers = [
    {
      provide: RandomNumberService,
      useValue: new RandomNumberService(options),
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: providers,
    }).compile();

    service = module.get<RandomNumberService>(RandomNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('#1', () => {
    expect(service.generate()).toBeDefined();
  });
});
