import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './src/utilities.component';
import { SampleDirective } from './src/utilities.directive';
import { CreditCardMaskPipe } from './src/pipes/credit-card-mask.pipe';
import { AllWordsCapitalizePipe } from './src/pipes/all-words-capitalize.pipe';
import { ReverseStrPipe } from './src/pipes/reverse-str-pipe';
import { TempConverterPipe } from './src/pipes/temp-converter.pipe';
import { TrimPipe } from './src/pipes/trim.pipe';
import { UtilitiesService } from './src/utilities.service';

export * from './src/utilities.component';
export * from './src/utilities.directive';
export * from './src/pipes/credit-card-mask.pipe';
export * from './src/pipes/all-words-capitalize.pipe';
export * from './src/pipes/reverse-str-pipe';
export * from './src/pipes/temp-converter.pipe';
export * from './src/pipes/trim.pipe';
export * from './src/utilities.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    CreditCardMaskPipe,
    AllWordsCapitalizePipe,
    ReverseStrPipe,
    TempConverterPipe,
    TrimPipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    CreditCardMaskPipe,
    AllWordsCapitalizePipe,
    ReverseStrPipe,
    TempConverterPipe, TrimPipe
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
