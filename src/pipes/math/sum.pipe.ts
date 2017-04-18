import { Pipe, PipeTransform } from '@angular/core';

/**
 *  returns the absolute (positive) value of x
 * Math.abs(-4.7) = 4.7
 * Math.abs(4.4) = 4.4
 */

@Pipe({name: 'mathSum'})
export class MathSumPipe implements PipeTransform {
  transform(value: number, values: number[]): any {
    if (value && !isNaN(value)) return this.makeAllSums(value, values);
    return -1;
  }

  makeAllSums(startValue:number, numbersToSum: number[])
  {
    for (let i = 0; i < numbersToSum.length; i++)
    {
        startValue = startValue + numbersToSum[i];
    }
    return startValue;
  }
}