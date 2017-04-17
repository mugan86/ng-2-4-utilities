import { NgModule } from '@angular/core';

import { AllWordsCapitalizePipe } from './all-words-capitalize.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { ConcatPipe } from './concat.pipe';
import { ReverseStrPipe } from './reverse-str.pipe';
import { TrimPipe } from './trim.pipe';
import { VowelHidePipe } from './vowel-hide.pipe';
import { NoVowelHidePipe } from './no-vowel-hide.pipe';

export const PIPES = [
  AllWordsCapitalizePipe,
  CapitalizePipe,
  ConcatPipe,
  ReverseStrPipe,
  TrimPipe,
  VowelHidePipe,
  NoVowelHidePipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesStringModule { }