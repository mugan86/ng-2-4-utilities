import { Pipe, PipeTransform } from '@angular/core';

/**
 *  returns the absolute (positive) value of x
 * Math.abs(-4.7) = 4.7
 * Math.abs(4.4) = 4.4
 */

@Pipe({name: 'mathSubtract'})
export class MathSubtractPipe implements PipeTransform {
  transform(value: number, values: number[]): any {
    if (value && !isNaN(value)) return this.makeAllSubtracts(value, values);
    return -1;
  }

  makeAllSubtracts(startValue:number, numbersToSum: number[])
  {
    for (let i = 0; i < numbersToSum.length; i++)
    {
        startValue = startValue - numbersToSum[i];
    }
    return startValue;
  }
}