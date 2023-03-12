import { Injectable } from '@angular/core';
import { LoggerService } from './Logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private loggerService: LoggerService) {}
  add(n1: number, n2: number) {
    const result = n1 + n2;
    this.loggerService.log('add method is called');
    return result;
  }

  subtract(n1: number, n2: number) {
    this.loggerService.log('subtract method is called');
    const result = n1 - n2;
    return result;
  }
}
