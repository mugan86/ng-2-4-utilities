import { Pipe, PipeTransform } from '@angular/core';

/**
 * Math.round(x) returns the value of x rounded to its nearest integer
 * Math.round(4.7) = 5
 * Math.round(4.4) = 4
 */

@Pipe({name: 'math-round'})
export class MathRoundPipe implements PipeTransform {
  transform(value: number): any {
    return Math.round(value);
  }
}