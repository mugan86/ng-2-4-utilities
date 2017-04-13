import { Pipe, PipeTransform } from '@angular/core';

/**
 * Math.ceil(x) returns the value of x rounded up to its nearest integer
 * Math.ceil(4.7) = 5
 * Math.ceil(4.4) = 5
 */

@Pipe({name: 'mathCeil'})
export class MathCeilPipe implements PipeTransform {
  transform(value: number): any {
    return Math.ceil(value);
  }
}