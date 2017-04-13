import { Pipe, PipeTransform } from '@angular/core';

/**
 * Math.sqrt(x) returns the square root of x
 * Math.sqrt(64) = 8
 */

@Pipe({name: 'mathSqrt'})
export class MathSqrtPipe implements PipeTransform {
  transform(value: number): any {
    return Math.sqrt(value);
  }
}
