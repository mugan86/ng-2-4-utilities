import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleComponent } from './src/utilities.component';
import { UtilitiesService } from './src/utilities.service';
import { PipesModule } from './src/pipes';
import { DirectivesModule } from './src/directives';

export * from './src/utilities.component';
export * from './src/utilities.service';
export * from './src/pipes/';
export * from './src/directives';

//Add import/exports components list
const COMPONENTS = [
  SampleComponent
];

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ]
})
export class UtilitiesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilitiesModule,
      providers: [UtilitiesService]
    };
  }
}
