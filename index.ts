import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './src/utilities.component';
import { SampleDirective } from './src/directives/utilities.directive';
import { DefaultImage } from './src/directives/default-image.directive';
import { CreditCardMaskPipe } from './src/pipes/other/credit-card-mask.pipe';
import { AllWordsCapitalizePipe } from './src/pipes/str/all-words-capitalize.pipe';
import { ReverseStrPipe } from './src/pipes/str/reverse-str-pipe';
import { TempConverterPipe } from './src/pipes/other/temp-converter.pipe';
import { TrimPipe } from './src/pipes/str/trim.pipe';
import { CapitalizePipe } from './src/pipes/str/capitalize.pipe';
import { WikipediaMobileUrlPipe} from './src/pipes/other/wikipedia-mobile-url.pipe';
import { MathRoundPipe } from './src/pipes/math/round.pipe';
import { MathFloorPipe } from './src/pipes/math/floor.pipe';
import { MathCeilPipe } from './src/pipes/math/ceil.pipe';
import { MathAbsPipe } from './src/pipes/math/abs.pipe';
import { MathSqrtPipe } from './src/pipes/math/sqrt.pipe';
import { MathPowPipe } from './src/pipes/math/pow.pipe';
import { UtilitiesService } from './src/utilities.service';

export * from './src/utilities.component';
export * from './src/directives/default-image.directive';
export * from './src/directives/utilities.directive';
export * from './src/pipes/other/credit-card-mask.pipe';
export * from './src/pipes/str/all-words-capitalize.pipe';
export * from './src/pipes/str/reverse-str-pipe';
export * from './src/pipes/other/temp-converter.pipe';
export * from './src/pipes/str/trim.pipe';
export * from './src/pipes/str/capitalize.pipe';
export * from './src/pipes/other/wikipedia-mobile-url.pipe';
export * from './src/pipes/math/round.pipe';
export * from './src/pipes/math/floor.pipe';
export * from './src/pipes/math/ceil.pipe';
export * from './src/pipes/math/abs.pipe';
export * from './src/pipes/math/sqrt.pipe';
export * from './src/pipes/math/pow.pipe';
export * from './src/utilities.service';

//Add import/exports components list
const COMPONENTS = [
  SampleComponent,
    SampleDirective,
    DefaultImage,
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
  imports: [
    CommonModule
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ]
})
export class UtilitiesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilitiesModule,
      providers: [UtilitiesService]
    };
  }
}
