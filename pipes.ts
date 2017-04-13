import { NgModule } from '@angular/core';

import { CreditCardMaskPipe } from './src/pipes/other/credit-card-mask.pipe';
import { AllWordsCapitalizePipe } from './src/pipes/str/all-words-capitalize.pipe';
import { ReverseStrPipe } from './src/pipes/str/reverse-str-pipe';
import { TempConverterPipe } from './src/pipes/other/temp-converter.pipe';
import { TrimPipe } from './src/pipes/str/trim.pipe';
import { CapitalizePipe } from './src/pipes/str/capitalize.pipe';
import { ConcatPipe } from './src/pipes/str/concat.pipe';
import { WikipediaMobileUrlPipe} from './src/pipes/other/wikipedia-mobile-url.pipe';
import { MathRoundPipe } from './src/pipes/math/round.pipe';
import { MathFloorPipe } from './src/pipes/math/floor.pipe';
import { MathCeilPipe } from './src/pipes/math/ceil.pipe';
import { MathAbsPipe } from './src/pipes/math/abs.pipe';
import { MathSqrtPipe } from './src/pipes/math/sqrt.pipe';
import { MathPowPipe } from './src/pipes/math/pow.pipe';

export * from './src/pipes/other/credit-card-mask.pipe';
export * from './src/pipes/str/all-words-capitalize.pipe';
export * from './src/pipes/str/reverse-str-pipe';
export * from './src/pipes/other/temp-converter.pipe';
export * from './src/pipes/str/trim.pipe';
export * from './src/pipes/str/capitalize.pipe';
export * from './src/pipes/str/concat.pipe';
export * from './src/pipes/other/wikipedia-mobile-url.pipe';
export * from './src/pipes/math/round.pipe';
export * from './src/pipes/math/floor.pipe';
export * from './src/pipes/math/ceil.pipe';
export * from './src/pipes/math/abs.pipe';
export * from './src/pipes/math/sqrt.pipe';
export * from './src/pipes/math/pow.pipe';

export const PIPES = [
  CreditCardMaskPipe,
    AllWordsCapitalizePipe,
    ReverseStrPipe,
    TempConverterPipe,
    TrimPipe,
    CapitalizePipe,
    ConcatPipe,
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