import { NgModule, ModuleWithProviders } from '@angular/core';

import { MathRoundPipe } from './round.pipe';
import { MathFloorPipe } from './floor.pipe';
import { MathCeilPipe } from './ceil.pipe';
import { MathAbsPipe } from './abs.pipe';
import { MathSqrtPipe } from './sqrt.pipe';
import { MathPowPipe } from './pow.pipe';

export const PIPES = [
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
export class PipesMathModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipesMathModule,
    };
  }
}