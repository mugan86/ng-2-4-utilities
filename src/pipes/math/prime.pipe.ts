import { Pipe, PipeTransform } from '@angular/core';

/**
 *  returns the absolute (positive) value of x
 * Math.abs(-4.7) = 4.7
 * Math.abs(4.4) = 4.4
 */

@Pipe({name: 'mathPrime'})
export class MathPrimePipe implements PipeTransform {
  transform(value: number): any {
    let startNumber = 1;
    if (value && !isNaN(value)) return ;
    return -1;
  }

  //create prime function

  isPrime(number: number): Boolean
  {
    let divisibleTimes = 0;
    //Check if divisible more one time
    for (let i = 2; i < number; i++)
    {
        if (number % 2 == 0) divisibleTimes++;
        if (divisibleTimes > 1) return false;
    }
    return true;
  }
}