import { NgModule, ModuleWithProviders  } from '@angular/core';

import { PipesStringModule } from './str';
import { PipesMathModule } from './math';
import { PipesOtherModule } from './other';

export const PIPES = [
    PipesStringModule,
    PipesMathModule,
    PipesOtherModule
];

@NgModule({
  imports: [ PIPES ],
  exports: [ PIPES ]
})
export class PipesModule { }