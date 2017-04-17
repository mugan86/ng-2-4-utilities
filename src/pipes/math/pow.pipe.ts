
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Math.pow(x, y) returns the value of x to the power of y:
 * Math.pow(8,2) = 64
 */

@Pipe({name: 'mathPow'})
export class MathPowPipe implements PipeTransform {
  transform(x: number, y:number): any {
    if (x && !isNaN(x) && y && !isNaN(y)) return Math.pow(x, y);
    return -1;
  }
}
