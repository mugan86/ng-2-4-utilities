import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'creditCardMask'
})
@Injectable()
export class CreditCardMaskPipe  implements PipeTransform {
    transform(plainCreditCard: string): string {

      if (plainCreditCard.length >= 13 && plainCreditCard.length<=19)
      {
        const visibleDigits = 4;
        let maskedSection = plainCreditCard.slice(0, -visibleDigits);
        let visibleSection = plainCreditCard.slice(-4);
        return maskedSection.replace(/./g, '*') + visibleSection;
      }
      return "Credit card number contain 13-19 chars";
        
    }
}
