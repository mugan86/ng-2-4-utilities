import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'noVowelHide'})
export class NoVowelHidePipe implements PipeTransform {
  transform(value: any) {
      if (value.length > 0) {
        return this.replaceAllNoVowelWithAsterisk(value);
      }
      return "Not exist word";
  }

  replaceAllNoVowelWithAsterisk(value: any)
  {
    var str = "";
    for (let i = 0; i < value.length; i++)
    {
        let letter = value.charAt(i);

        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ||
            letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U')
        {
            console.log("Vocal!: " + letter);
        }
        else letter = "*";
        str = str + letter;
    }
    return str;
  }
}