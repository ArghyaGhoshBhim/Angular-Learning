import { CalculatorService } from './calculator.service';
import { LoggerService } from './Logger/logger.service';

describe('CalculatorService', () => {
  xit('some test case pending', () => {});

  /**
   * With out using mocking and spying
   * it is too much expensive operation.
   */

  /** 
  it('should add two numbers', () => {
    let loggerService = new LoggerService();
    const calculatorService = new CalculatorService(loggerService);
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
  });
  it('should subtract two number', () => {
    let loggerService = new LoggerService();
    const calculatorService = new CalculatorService(loggerService);
    let result = calculatorService.subtract(2, 3);
    expect(result).toBe(-1);
  });
*/
  /**
   * Using Spying
   * It will spying the log method in the loggerService
   */

  /*
  it('should add two numbers', () => {
    let loggerService = new LoggerService();
    spyOn(loggerService, 'log');
    const calculatorService = new CalculatorService(loggerService);
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two number', () => {
    let loggerService = new LoggerService();
    spyOn(loggerService, 'log');
    const calculatorService = new CalculatorService(loggerService);
    let result = calculatorService.subtract(2, 3);
    expect(result).toBe(-1);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
*/
  /**
   * Mocking LoginService
   */

  it('should add two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    const calculatorService = new CalculatorService(mockLoggerService);
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two number', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    const calculatorService = new CalculatorService(mockLoggerService);
    let result = calculatorService.subtract(2, 3);
    expect(result).toBe(-1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  //********************BEFOR EACH METHOD******************** */
  /**
   *
   */

  /*
  let mockLoggerService: LoggerService;
  let calculatorService: CalculatorService;
  beforeEach(() => {
    console.log('calling before each method');
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculatorService = new CalculatorService(mockLoggerService);
  });

  it('should add two numbers', () => {
    console.log('add two numbers');
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two number', () => {
    console.log('subtract two numbers');
    let result = calculatorService.subtract(2, 3);
    expect(result).toBe(-1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  */
});
