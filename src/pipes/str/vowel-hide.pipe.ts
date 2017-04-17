import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'vowelHide'})
export class VowelHidePipe implements PipeTransform {
  transform(value: any) {
      if (value.length > 0) {
        return this.replaceAllVowelWithAsterisk(value);
      }
      return "Not exist word";
  }

  replaceAllVowelWithAsterisk(value: any)
  {
    var str = "";
    for (let i = 0; i < value.length; i++)
    {
        let letter = value.charAt(i);

        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ||
            letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U')
        {
            letter = "*";
        }
        str = str + letter;
    }
    return str;
  }
}