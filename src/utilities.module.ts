import { NgModule, ModuleWithProviders  } from '@angular/core';

import { PipesModule } from './pipes';
import { DirectivesModule } from './directives';

// To Translate imports
import { TranslateModule, TranslateLoader  } from '@ngx-translate/core';
import { createTranslateLoader } from './services/translate-loader';
import { Http } from '@angular/http';
import { LanguageConfigService } from './services/lang-preferences';

export const MODULES = [
    PipesModule,
    DirectivesModule
];

@NgModule({
  imports:
  [  MODULES,
              TranslateModule.forRoot({
                loader: {
                  provide: TranslateLoader,
                  useFactory: (createTranslateLoader),
                  deps: [Http]
                }
              })
  ],
  exports: [ MODULES ]
})
export class UtilitiesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilitiesModule,
      providers:    [
        LanguageConfigService
      ]
    };
  }
}
