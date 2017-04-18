import { Pipe, PipeTransform } from '@angular/core';

/**
 *  returns the absolute (positive) value of x
 * Math.abs(-4.7) = 4.7
 * Math.abs(4.4) = 4.4
 */

@Pipe({name: 'mathMultiply'})
export class MathMultiplyPipe implements PipeTransform {
  transform(value: number, values: number[]): any {
    if (value && !isNaN(value)) this.makeAllMultiplies(value, values);
    return -1;
  }

  makeAllMultiplies(startValue:number, numbersToSum: number[])
  {
    for (let i = 0; i < numbersToSum.length; i++)
    {
        startValue = startValue * numbersToSum[i];
    }
    return startValue;
  }
}