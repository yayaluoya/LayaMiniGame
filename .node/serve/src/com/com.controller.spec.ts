import { Test, TestingModule } from '@nestjs/testing';
import { ComController } from './com.controller';

describe('ComController', () => {
  let controller: ComController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComController],
    }).compile();

    controller = module.get<ComController>(ComController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
