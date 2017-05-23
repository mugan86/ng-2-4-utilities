import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**********************************************************************
 * Service to manage app all global language.
 * By default, if user not select language, show users browser language
 **********************************************************************/

// Initialize constant to load languages codes, this codes uses to load assets/i18n directory json files
export const langCodes = ['en', 'es', 'eu'];

@Injectable()
export class LanguageConfigService {

    private selectLanguage: String;
    private translate: TranslateService;

    constructor(translate: TranslateService) {
        this.translate = translate;
        this.load();
    }

    private load() {
        // Add HMI all support languages
        this.translate.addLangs(langCodes);
        this.selectLanguage = this.getLanguage();

        console.log(this.selectLanguage);

        // Check if exist selection in preferences
        if (this.selectLanguage === '') { // Not configure select language
            const browserLang = this.translate.getBrowserLang();
            this.selectLanguage = browserLang.match(/en|es|eu/) ? browserLang : 'es';
            this.change(String(this.selectLanguage));
        }

        this.useLanguage();

        console.log('You select language is: ' + this.getLanguage());
        return this.translate;
    }

    private useLanguage() {
        this.translate.setDefaultLang(String(this.selectLanguage));
        this.translate.use(String(this.selectLanguage));
    }

    private getLanguage() {
        const language = window.localStorage.getItem('selectLanguage');
        if (language === null || language === undefined || language === '' || language === '') {
          return '';
        }
        return language;
    }

    // Changes language preference for the whole app
    change(language) {
        window.localStorage.setItem('selectLanguage', language);
    }

    // Returns translated text depending on language set
    getStringByLabel(text: string): string {
        this.translate.get(text).subscribe((res: string) => {
            return res;
        });
        return '';
    }
}
