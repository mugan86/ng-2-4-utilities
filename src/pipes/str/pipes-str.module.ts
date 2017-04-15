import { NgModule, ModuleWithProviders } from '@angular/core';

import { AllWordsCapitalizePipe } from './all-words-capitalize.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { ConcatPipe } from './concat.pipe';
import { ReverseStrPipe } from './reverse-str.pipe';
import { TrimPipe } from './trim.pipe';

export const PIPES = [
  AllWordsCapitalizePipe,
  CapitalizePipe,
  ConcatPipe,
  ReverseStrPipe,
  TrimPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesStringModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipesStringModule,
    };
  }
}