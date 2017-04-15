import { NgModule, ModuleWithProviders  } from '@angular/core';

import { PipesModule } from './pipes';
import { DirectivesModule } from './directives';

export const MODULES = [
    PipesModule,
    DirectivesModule
];

@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ]
})
export class UtilitiesModule { }