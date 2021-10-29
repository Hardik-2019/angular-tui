import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class TranslationService {
    readonly document: any;
    service: TranslateService;
    private availableLanguages;
    get window(): Window;
    constructor(document: any, service: TranslateService);
    changeLanguage(lang: string): void;
    loadCustomMessages(lang: string, messagesJson: any): void;
    getTranslation(key: string, params?: Object): any;
    static ɵfac: i0.ɵɵFactoryDef<TranslationService, never>;
    static ɵprov: i0.ɵɵInjectableDef<TranslationService>;
}
//# sourceMappingURL=translation.service.d.ts.map