import { NgModule, ModuleWithProviders } from '@angular/core';

import { DefaultImage } from './default-image.directive';
import { SampleDirective } from './utilities.directive';

export const DIRECTIVES = [
  DefaultImage,
  SampleDirective
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DirectivesModule,
    };
  }
}
