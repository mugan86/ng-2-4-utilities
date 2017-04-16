import { NgModule } from '@angular/core';

import { AllWordsCapitalizePipe } from './all-words-capitalize.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { ConcatPipe } from './concat.pipe';
import { ReverseStrPipe } from './reverse-str.pipe';
import { TrimPipe } from './trim.pipe';
import { VocalHidePipe } from './vocal-hide.pipe';
import { NoVocalHidePipe } from './no-vocal-hide.pipe';

export const PIPES = [
  AllWordsCapitalizePipe,
  CapitalizePipe,
  ConcatPipe,
  ReverseStrPipe,
  TrimPipe,
  VocalHidePipe,
  NoVocalHidePipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesStringModule { }