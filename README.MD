# Angular 2/4 Utilities library

## Installation

To install this library, run:

```bash
$ npm install https://github.com/mugan86/ng-2-4-utilities.git#0.1.6 --save
```

## Content of the library (Use in new programming release - 2017/04/19)

### Pipes

#### Math Type pipes

1.- 'abs': 

 * Math.abs(x) returns the absolute (positive) value of x
 * Math.abs(-4.7) = 4.7
 * Math.abs(4.4) = 4.4
 
 Use in layout: 
 ```bash
 {{x | mathAbs}} 
 {{-4.7 | mathAbs}} ---> 4.7
 {{4.7 | mathAbs}} ---> 4.7
 ```
 
2.- 'ceil': 

 * Math.ceil(x) returns the value of x rounded up to its nearest integer
 * Math.ceil(4.7) = 5
 * Math.ceil(4.4) = 5
 
 Use in layout: 
 ```bash
 {{x | mathCeil}} 
 {{4.7 | mathCeil}} ---> 5
 {{4.4 | mathCeil}} ---> 5
 ```
 
3.- 'floor': 

 * Math.floor(x) returns the value of x rounded down to its nearest integer
 * Math.floor(4.7) = 4
 * Math.floor(4.4) = 4
 
 Use in layout: 
 ```bash
 {{x | mathFloor}} 
 {{4.7 | mathFloor}} ---> 4
 {{4.4 | mathFloor}} ---> 4
 ```

4.- 'pow': 

 * Math.pow(x, y) returns the value of x to the power of y:
 * Math.pow(8,2) = 64
 
 Use in layout: 
 ```bash
 {{x | mathPow:y}} 
 {{8 | mathPow: 2}} ---> 64 (8^2 = 64)
 {{2 | mathPow:4}} ---> 16
 ```

5.- 'round': 

 * Math.round(x) returns the value of x rounded to its nearest integer
 * Math.round(4.7) = 5
 * Math.round(4.4) = 4
 
 Use in layout: 
 ```bash
 {{x | mathRound}} 
 {{4.7 | mathRound}} ---> 5
 {{4.4 | mathRound}} ---> 4
 ```
 
6.- 'sqrt': 

 * Math.sqrt(x) returns the square root of x
 * Math.sqrt(64) = 8
 
 Use in layout: 
 ```bash
 {{x | mathSqrt}} 
 {{64 | mathRound}} ---> 8
 {{16 | mathRound}} ---> 4
 ```

7.- 'sum': 

 * x+y returns sum x + y
 
 Use in layout: 
 ```bash
 {{x | sum:y}} 
 {{64 | sum:3}} ---> 67
 ```

8.- 'subtract': 

 * x-y returns sum x - y
 
 Use in layout: 
 ```bash
 {{x | subtract:y}} 
 {{64 | subtract:3}} ---> 61
 ```
9.- 'multiply': 

 * x*y returns sum x * y
 
 Use in layout: 
 ```bash
 {{x | multiply:y}} 
 {{2 | multiply:4}} ---> 8
 ```
 
#### String Type pipes

1.- 'allWordsCapitalize': 

 * Input all words start with capitalize letter
 
 Use in layout: 
 ```bash
 {{'word/s' | allWordsCapitalize}} 
 {{'anartz mugika' | allWordsCapitalize}} ---> 'Anartz Mugika'
 {{'Anartz mugika' | allWordsCapitalize}} ---> 'Anartz Mugika'
 {{'all words start with uppercase letter' | allWordsCapitalize}} ---> 'All Words Start With...'
 
 ```
2.- 'capitalize': 

 * Input all words start with first letter capitalize
 
 Use in layout: 
 ```bash
 {{'word/s' | capitalize}} 
 {{'anartz mugika' | capitalize}} ---> 'Anartz mugika'
 {{'Anartz mugika' | capitalize}} ---> 'Anartz mugika'
 {{'first letter is uppercase' | capitalize}} ---> 'First letter is uppercase...'
 
 ```

3.- 'concat': 

 * Concat two words
 
 Use in layout: 
 ```bash
 {{'word/s' | concat}} 
 {{'anartz mugika' | concat:'text'}} ---> 'anartz mugika test'
 
 ```

4.- 'noVowelHide': 

 * Hide all consonants with '*'
 
 Use in layout: 
 ```bash
 {{'word/s' | noVowelHide}} 
 {{'anartz mugika' | noVowelHide}} ---> 'a*a*****u*i*a'
 
 ```
 
5.- 'reverseStr':

 * Invert all word chars
 
 Use in layout: 
 ```bash
 {{'word/s' | reverseStr}} 
 {{'anartz' | reverseStr}} ---> 'ztrana'
 ```
 
6.- 'trim':

 * Remove all blank spaces in start and finish to select word or phrase
 
 Use in layout: 
 ```bash
 {{'word/s' | trim}} 
 {{'   anartz  ' | trim}} ---> 'anartz'
 ```
 
7.- 'vowelHide':

 * Hide all vowels with '*'
 
 Use in layout: 
 ```bash
 {{'word/s' | vowelHide}} 
 {{'anartz' | vowelHide}} ---> '*n*rtz'
 ```

#### Other Type pipes

1.- 'creditCardMask': 

 * Input all words start with capitalize letter
 
 1.1.- Use in layout: 
 ```bash
 {{'card number' | creditCardMask}} 
 {{343665987286008 | creditCardMask}} ---> '***********6008'
 ```

 1.2.- Transform inside component:
 ```typescript
 import { CreditCardMaskPipe } from 'ng-2-4-utilities';
 @Component()
 export class AppComponent()
 {
    ...
    new CreditCardMaskPipe().transform("343665987286008");
 }
 
 ```
2.- 'tempConverter': 

 * Convert temperature to select unit F->Cº or inverse
 
 2.1.- Use in layout: 
 ```bash
 {{temperature_number | tempConverter:<convert-to: C (Celsius) or F (Farenheit)}} 
 {{32 | tempConverter:'C'}} ---> 0 (Convert 32 F in Cº = 0)
 
 ```

 2.2.- Transform inside component:
 ```typescript
 import { TempConverterPipe } from 'ng-2-4-utilities';
 @Component()
 export class AppComponent()
 {
   //Convert 32 F to Celsius --> 32 --> 0ºC
    ...
    new TempConverterPipe().transform(32,"C"));
 }
 
 ```

3.- 'wikipediaMobileUrl': 

 * Convert Wikipedia normal url to mobile url
 
 Use in layout: 
 ```bash
 {{'url' | wikipediaMobileUrl}} 
 {{'https://es.wikipedia.org/wiki/Angular_(framework)' | wikipediaMobileUrl}} ---> 'https://es.m.wikipedia.org/wiki/Angular_(framework)'
 
 ```

 
## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install https://github.com/mugan86/ng-2-4-utilities.git#0.1.6 --save
```

If you want to use all PipesDirectives
and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { UtilitiesModule } from 'ng-2-4-utilities';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    UtilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Anartz Mugika Ledo](mailto:mugan86@gmail.com)


