import { Pipe, PipeTransform } from '@angular/core';

/**
 *  returns the absolute (positive) value of x
 * Math.abs(-4.7) = 4.7
 * Math.abs(4.4) = 4.4
 */

@Pipe({name: 'mathFactorial'})
export class MathFactorialPipe implements PipeTransform {
  transform(value: number): any {
    let startNumber = 1;
    if (value && !isNaN(value)) return this.getFactorial(value, startNumber,startNumber);
    return -1;
  }

  //create factorial function with recursivity

  getFactorial(number: number, startNumber: number, result: number): any
  {
    if (startNumber <= number) return this.getFactorial(number, startNumber + 1 ,result * (result+1));
    return startNumber;
  }
}