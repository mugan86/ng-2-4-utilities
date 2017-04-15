import { NgModule, ModuleWithProviders } from '@angular/core';

import { DefaultImage } from './default-image.directive';
import { SampleDirective } from './utilities.directive';

export * from './default-image.directive';
export * from './utilities.directive';

export const DIRECTIVES = [
  DefaultImage,
  SampleDirective
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  bootstrap:    DIRECTIVES
})
export class DirectivesModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DirectivesModule,
    };
  }
}