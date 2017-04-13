import { NgModule } from '@angular/core';

import { CreditCardMaskPipe } from './other/credit-card-mask.pipe';
import { AllWordsCapitalizePipe } from './str/all-words-capitalize.pipe';
import { ReverseStrPipe } from './str/reverse-str-pipe';
import { TempConverterPipe } from './other/temp-converter.pipe';
import { TrimPipe } from './str/trim.pipe';
import { CapitalizePipe } from './str/capitalize.pipe';
import { WikipediaMobileUrlPipe} from './other/wikipedia-mobile-url.pipe';
import { MathRoundPipe } from './math/round.pipe';
import { MathFloorPipe } from './math/floor.pipe';
import { MathCeilPipe } from './math/ceil.pipe';
import { MathAbsPipe } from './math/abs.pipe';
import { MathSqrtPipe } from './math/sqrt.pipe';
import { MathPowPipe } from './math/pow.pipe';

export * from './other/credit-card-mask.pipe';
export * from './str/all-words-capitalize.pipe';
export * from './str/reverse-str-pipe';
export * from './other/temp-converter.pipe';
export * from './str/trim.pipe';
export * from './str/capitalize.pipe';
export * from './other/wikipedia-mobile-url.pipe';
export * from './math/round.pipe';
export * from './math/floor.pipe';
export * from './math/ceil.pipe';
export * from './math/abs.pipe';
export * from './math/sqrt.pipe';
export * from './math/pow.pipe';

export const PIPES = [
  CreditCardMaskPipe,
    AllWordsCapitalizePipe,
    ReverseStrPipe,
    TempConverterPipe,
    TrimPipe,
    CapitalizePipe,
    WikipediaMobileUrlPipe,
    MathRoundPipe,
    MathFloorPipe,
    MathCeilPipe,
    MathAbsPipe,
    MathSqrtPipe,
    MathPowPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }