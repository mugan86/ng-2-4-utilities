
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Math.sqrt(x) returns the square root of x
 * Math.sqrt(64) = 8
 */

@Pipe({name: 'mathPow'})
export class MathPowPipe implements PipeTransform {
  transform(x: number, y:number): any {
    if (x && !isNaN(x) && y && !isNaN(y)) return Math.pow(x, y);
    return -1;
  }
}
