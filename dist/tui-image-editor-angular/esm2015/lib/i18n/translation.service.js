import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { en } from './en';
import { nl } from './nl';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class TranslationService {
    constructor(document, service) {
        this.document = document;
        this.service = service;
        this.availableLanguages = { en, nl };
        Object.keys(this.availableLanguages).forEach((language) => {
            this.service.setTranslation(language, this.availableLanguages[language], true);
        });
        let browserLanguages = window.navigator.languages;
        let firstSupportedBrowserLanguage = browserLanguages.find((item) => Object.keys(this.availableLanguages).some((key) => key == item));
        service.use(firstSupportedBrowserLanguage || 'nl');
    }
    get window() {
        return this.document.defaultView;
    }
    changeLanguage(lang) {
        this.service.use(lang);
    }
    loadCustomMessages(lang, messagesJson) {
        this.service.setTranslation(lang, messagesJson, true);
    }
    getTranslation(key, params) {
        return this.service.instant(key, params);
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i1.TranslateService)); };
TranslationService.ɵprov = i0.ɵɵdefineInjectable({ token: TranslationService, factory: TranslationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TranslationService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i1.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci9zcmMvbGliL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFHMUIsTUFBTSxPQUFPLGtCQUFrQjtJQU8zQixZQUF1QyxRQUFhLEVBQVMsT0FBeUI7UUFBL0MsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBTjlFLHVCQUFrQixHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBT3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDbEQsSUFBSSw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNySSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFYRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3JDLENBQUM7SUFXRCxjQUFjLENBQUMsSUFBWTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBWSxFQUFFLFlBQVk7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsY0FBYyxDQUFDLEdBQVcsRUFBRSxNQUFlO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7O29GQTFCUSxrQkFBa0IsY0FPUCxRQUFROzBEQVBuQixrQkFBa0IsV0FBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsVUFBVTs7c0JBUU0sTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBlbiB9IGZyb20gJy4vZW4nO1xuaW1wb3J0IHsgbmwgfSBmcm9tICcuL25sJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBhdmFpbGFibGVMYW5ndWFnZXMgPSB7IGVuLCBubCB9O1xuXG4gICAgZ2V0IHdpbmRvdygpOiBXaW5kb3cge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSByZWFkb25seSBkb2N1bWVudDogYW55LCBwdWJsaWMgc2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmF2YWlsYWJsZUxhbmd1YWdlcykuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRUcmFuc2xhdGlvbihsYW5ndWFnZSwgdGhpcy5hdmFpbGFibGVMYW5ndWFnZXNbbGFuZ3VhZ2VdLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBicm93c2VyTGFuZ3VhZ2VzID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXM7XG4gICAgICAgIGxldCBmaXJzdFN1cHBvcnRlZEJyb3dzZXJMYW5ndWFnZSA9IGJyb3dzZXJMYW5ndWFnZXMuZmluZCgoaXRlbSkgPT4gT2JqZWN0LmtleXModGhpcy5hdmFpbGFibGVMYW5ndWFnZXMpLnNvbWUoKGtleSkgPT4ga2V5ID09IGl0ZW0pKTtcbiAgICAgICAgc2VydmljZS51c2UoZmlyc3RTdXBwb3J0ZWRCcm93c2VyTGFuZ3VhZ2UgfHwgJ25sJyk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGFuZ3VhZ2UobGFuZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS51c2UobGFuZyk7XG4gICAgfVxuXG4gICAgbG9hZEN1c3RvbU1lc3NhZ2VzKGxhbmc6IHN0cmluZywgbWVzc2FnZXNKc29uKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRUcmFuc2xhdGlvbihsYW5nLCBtZXNzYWdlc0pzb24sIHRydWUpO1xuICAgIH1cblxuICAgIGdldFRyYW5zbGF0aW9uKGtleTogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pbnN0YW50KGtleSwgcGFyYW1zKTtcbiAgICB9XG59XG4iXX0=