import { TestBed } from '@angular/core/testing';
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
/** 
describe('CalculatorService using TestBed', () => {
  //open 1
  //let mockLoggerService: LoggerService;
  let mockLoggerService: jasmine.SpyObj<LoggerService>;
  let calculatorService: CalculatorService;
  beforeEach(() => {
    //open 1
    // mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    const mock1LoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: mock1LoggerService,
        },
      ],
    });
    calculatorService = TestBed.inject(CalculatorService);
    //instead of open 1 we can use this code to spy logger service log object
    mockLoggerService = TestBed.inject(
      LoggerService
    ) as jasmine.SpyObj<LoggerService>;
  });

  it('should add two numbers', () => {
    // console.log('add two numbers');
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two number', () => {
    //  console.log('subtract two numbers');
    let result = calculatorService.subtract(2, 3);
    expect(result).toBe(-1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
*/

function setup() {
  //open 1
  // mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
  const mock1LoggerService = jasmine.createSpyObj('LoggerService', ['log']);
  TestBed.configureTestingModule({
    providers: [
      CalculatorService,
      {
        provide: LoggerService,
        useValue: mock1LoggerService,
      },
    ],
  });
  const calculatorService = TestBed.inject(CalculatorService);
  //instead of open 1 we can use this code to spy logger service log object
  const mockLoggerService = TestBed.inject(
    LoggerService
  ) as jasmine.SpyObj<LoggerService>;
  return { calculatorService, mockLoggerService };
}

describe('CalculatorService using TestBed and setup() function', () => {
  it('should add two numbers', () => {
    const { calculatorService, mockLoggerService } = setup();
    // console.log('add two numbers');
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two number', () => {
    const { calculatorService, mockLoggerService } = setup();
    //  console.log('subtract two numbers');
    let result = calculatorService.subtract(2, 3);
    expect(result).toBe(-1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
