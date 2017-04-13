import { Pipe, PipeTransform } from '@angular/core';

/**
 * Math.abs(x) returns the absolute (positive) value of x
 * Math.abs(-4.7) = 4.7
 * Math.abs(4.4) = 4.4
 */

@Pipe({name: 'mathAbs'})
export class MathAbsPipe implements PipeTransform {
  transform(value: number): any {
    return Math.abs(value);
  }
}