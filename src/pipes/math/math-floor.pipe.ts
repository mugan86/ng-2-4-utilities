import { Pipe, PipeTransform } from '@angular/core';

/**
 * Math.floor(x) returns the value of x rounded down to its nearest integer
 * Math.round(4.7) = 4
 * Math.round(4.4) = 4
 */

@Pipe({name: 'mathFloor'})
export class MathFloorPipe implements PipeTransform {
  transform(value: number): any {
    return Math.floor(value);
  }
}