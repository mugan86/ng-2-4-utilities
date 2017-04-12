import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './src/utilities.component';
import { SampleDirective } from './src/utilities.directive';
import { CreditCardMaskPipe } from './src/pipes/credit-card-mask.pipe';
import { UtilitiesService } from './src/utilities.service';

export * from './src/utilities.component';
export * from './src/utilities.directive';
export * from './src/pipes/credit-card-mask.pipe';
export * from './src/utilities.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    CreditCardMaskPipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    CreditCardMaskPipe
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
