import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';


/**
 * Custom module with all my components
 */
import { PipesStringModule } from './str';
import { PipesMathModule } from './math';
import { PipesOtherModule } from './other';


@NgModule({
  declarations: [
    ,
  ],
  imports: [
    PipesStringModule,
    PipesMathModule,
    PipesOtherModule
   
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipesModule { }