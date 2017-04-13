import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'concat'})
export class ConcatPipe implements PipeTransform {
  transform(value: any, concatStr: any) {
      if (value && concatStr) {
        return value.concat(" ", concatStr)
      }
      return "Not concat";
  }
}