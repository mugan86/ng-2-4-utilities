import { NgModule, ModuleWithProviders } from '@angular/core';

import { MathDividePipe } from './divide.pipe';
import { MathMultiplyPipe } from './multiply.pipe';
import { MathRoundPipe } from './round.pipe';
import { MathFloorPipe } from './floor.pipe';
import { MathCeilPipe } from './ceil.pipe';
import { MathAbsPipe } from './abs.pipe';
import { MathSqrtPipe } from './sqrt.pipe';
import { MathPowPipe } from './pow.pipe';
import { MathSubtractPipe } from './subtract.pipe';
import { MathSumPipe } from './sum.pipe';

export const PIPES = [
  MathDividePipe,
  MathMultiplyPipe,
  MathRoundPipe,
  MathFloorPipe,
  MathCeilPipe,
  MathAbsPipe,
  MathSqrtPipe,
  MathPowPipe,
  MathSubtractPipe,
  MathSumPipe
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