import { NgModule } from '@angular/core';

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
  exports: DIRECTIVES
})
export class DirectivesModule { }