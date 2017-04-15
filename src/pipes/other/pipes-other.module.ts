import { NgModule, ModuleWithProviders } from '@angular/core';

import { CreditCardMaskPipe } from './credit-card-mask.pipe';
import { TempConverterPipe } from './temp-converter.pipe';
import { WikipediaMobileUrlPipe } from './wikipedia-mobile-url.pipe';

export const PIPES = [
  CreditCardMaskPipe,
  TempConverterPipe,
  WikipediaMobileUrlPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesOtherModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipesOtherModule,
    };
  }
}