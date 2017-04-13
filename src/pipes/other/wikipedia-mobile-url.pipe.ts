import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'wikipediaMobileUrl'
})

export class WikipediaMobileUrlPipe implements PipeTransform
{
     transform(text: string): string{
        return text.replace('wikipedia', 'm.wikipedia');
    }
}