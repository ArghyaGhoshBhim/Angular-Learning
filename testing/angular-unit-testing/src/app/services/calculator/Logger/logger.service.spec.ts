import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let loggerService: LoggerService;
  beforeEach(() => {
    loggerService = new LoggerService();
  });
  it('should not have any message initially', () => {
    let result = loggerService.message.length;
    expect(result).toBe(0);
  });

  it('should add the message when the log is called', () => {
    //arrange
    //let loggerService=new LoggerService();

    //act
    loggerService.log('message');
    //assert
    expect(loggerService.message.length).toBe(1);
  });
  it('should clear all the messages when clear method call', () => {
    //arrange
    //let loggerService=new LoggerService();
    loggerService.log('message');

    //act
    loggerService.clear();
    //assert
    expect(loggerService.message.length).toBe(0);
  });
});
