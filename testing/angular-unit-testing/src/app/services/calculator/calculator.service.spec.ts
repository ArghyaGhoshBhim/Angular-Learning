import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  xit('some test case pending', () => {});
  it('should add two numbers', () => {
    const calculatorService = new CalculatorService();
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
  });
  it('should subtract two number', () => {
    const calculatorService = new CalculatorService();
    let result = calculatorService.subtract(2, 3);
    expect(result).toBe(-1);
  });
});
