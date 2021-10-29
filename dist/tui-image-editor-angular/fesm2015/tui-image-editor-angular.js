import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, EventEmitter, ɵɵdefineComponent, ɵɵelementStart, ɵɵpipe, ɵɵnamespaceSVG, ɵɵelement, ɵɵelementEnd, ɵɵnamespaceHTML, ɵɵlistener, ɵɵproperty, ɵɵpipeBind1, Component, Output, Input, ɵɵclassMap, ɵɵtext, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtemplate, ɵɵtextInterpolate, ɵɵdirectiveInject, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵNgOnChangesFeature, ɵɵstyleProp, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵProvidersFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DOCUMENT, NgIf, NgForOf, CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe, TranslateModule } from '@ngx-translate/core';
import { __awaiter } from 'tslib';
import { BehaviorSubject } from 'rxjs';
import { NgbPopover, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { RangeValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NumberValueAccessor, CheckboxControlValueAccessor, FormsModule } from '@angular/forms';
import { ColorPickerDirective, ColorPickerModule } from 'ngx-color-picker';
import ImageTracer from 'tui-image-editor/src/js/helper/imagetracer';

const en = {
    'tui-image-editor-angular-menus-buttons-crop-tooltip': 'Crop',
    'tui-image-editor-angular-menus-buttons-delete': 'Delete',
    'tui-image-editor-angular-menus-buttons-deleteAll': 'Delete all',
    'tui-image-editor-angular-menus-buttons-download': 'Download',
    'tui-image-editor-angular-menus-buttons-drag': 'Drag',
    'tui-image-editor-angular-menus-buttons-draw': 'Draw',
    'tui-image-editor-angular-menus-buttons-filter': 'Filter',
    'tui-image-editor-angular-menus-buttons-flip': 'Flip',
    'tui-image-editor-angular-menus-buttons-history': 'History',
    'tui-image-editor-angular-menus-buttons-icon': 'Icon',
    'tui-image-editor-angular-menus-buttons-load': 'Load image',
    'tui-image-editor-angular-menus-buttons-mask': 'Mask',
    'tui-image-editor-angular-menus-buttons-redo': 'Redo',
    'tui-image-editor-angular-menus-buttons-reset': 'Reset',
    'tui-image-editor-angular-menus-buttons-rotate': 'Rotate',
    'tui-image-editor-angular-menus-buttons-shape': 'Shape',
    'tui-image-editor-angular-menus-buttons-text': 'Text',
    'tui-image-editor-angular-menus-buttons-undo': 'Undo',
    'tui-image-editor-angular-menus-buttons-zoomIn': 'ZoomIn',
    'tui-image-editor-angular-menus-buttons-zoomOut': 'ZoomOut',
    'tui-image-editor-angular-submenus-crop-custom': 'Custom',
    'tui-image-editor-angular-submenus-crop-square': 'Square',
    'tui-image-editor-angular-submenus-crop-apply': 'Apply',
    'tui-image-editor-angular-submenus-crop-cancel': 'Cancel',
    'tui-image-editor-angular-submenus-flip-x': 'Flip X',
    'tui-image-editor-angular-submenus-flip-y': 'Flip Y',
    'tui-image-editor-angular-submenus-flip-reset': 'Reset',
    'tui-image-editor-angular-submenus-rotate-slider': 'Rotation',
    'tui-image-editor-angular-submenus-draw-free': 'Free',
    'tui-image-editor-angular-submenus-draw-straight': 'Straight',
    'tui-image-editor-angular-submenus-draw-color': 'Color',
    'tui-image-editor-angular-submenus-draw-strokeWidth': 'Stroke width',
    'tui-image-editor-angular-submenus-shape-rectangle': 'Rectangle',
    'tui-image-editor-angular-submenus-shape-circle': 'Circle',
    'tui-image-editor-angular-submenus-shape-triangle': 'Triangle',
    'tui-image-editor-angular-submenus-shape-fill': 'Fill',
    'tui-image-editor-angular-submenus-shape-stroke': 'Stroke',
    'tui-image-editor-angular-submenus-shape-strokeWidth': 'Stroke width',
    'tui-image-editor-angular-submenus-icon-arrow1': 'Arrow-1',
    'tui-image-editor-angular-submenus-icon-arrow2': 'Arrow-2',
    'tui-image-editor-angular-submenus-icon-arrow3': 'Arrow-3',
    'tui-image-editor-angular-submenus-icon-star1': 'Star-1',
    'tui-image-editor-angular-submenus-icon-star2': 'Star-2',
    'tui-image-editor-angular-submenus-icon-polygon': 'Polygon',
    'tui-image-editor-angular-submenus-icon-location': 'Location',
    'tui-image-editor-angular-submenus-icon-heart': 'Heart',
    'tui-image-editor-angular-submenus-icon-bubble': 'Bubble',
    'tui-image-editor-angular-submenus-icon-customIcon': 'Custom icon',
    'tui-image-editor-angular-submenus-icon-color': 'Color',
    'tui-image-editor-angular-submenus-text-bold': 'Bold',
    'tui-image-editor-angular-submenus-text-italic': 'Italic',
    'tui-image-editor-angular-submenus-text-underline': 'Underline',
    'tui-image-editor-angular-submenus-text-left': 'Left',
    'tui-image-editor-angular-submenus-text-center': 'Center',
    'tui-image-editor-angular-submenus-text-right': 'Right',
    'tui-image-editor-angular-submenus-text-color': 'Color',
    'tui-image-editor-angular-submenus-text-textSize': 'Text size',
    'tui-image-editor-angular-submenus-mask-loadMaskImage': 'Load mask image',
    'tui-image-editor-angular-submenus-mask-apply': 'Apply',
    'tui-image-editor-angular-submenus-filter-grayscale': 'Grayscale',
    'tui-image-editor-angular-submenus-filter-invert': 'Invert',
    'tui-image-editor-angular-submenus-filter-sepia': 'Sepia',
    'tui-image-editor-angular-submenus-filter-sepia2': 'Sepia 2',
    'tui-image-editor-angular-submenus-filter-blur': 'Blur',
    'tui-image-editor-angular-submenus-filter-sharpen': 'Sharpen',
    'tui-image-editor-angular-submenus-filter-emboss': 'Emboss',
    'tui-image-editor-angular-submenus-filter-removeWhite': 'Remove white',
    'tui-image-editor-angular-submenus-filter-removeWhite-distance': 'Distance',
    'tui-image-editor-angular-submenus-filter-brightness': 'Brightness',
    'tui-image-editor-angular-submenus-filter-noise': 'Noise',
    'tui-image-editor-angular-submenus-filter-pixelate': 'Pixelate',
    'tui-image-editor-angular-submenus-filter-colorFilter': 'Color filter',
    'tui-image-editor-angular-submenus-filter-colorFilter-threshold': 'Threshold',
    'tui-image-editor-angular-submenus-filter-tint': 'Tint',
    'tui-image-editor-angular-submenus-filter-multiply': 'Multiply',
    'tui-image-editor-angular-submenus-filter-blend': 'Blend',
    'tui-image-editor-angular-history-noItems': 'No history available',
    'tui-image-editor-angular-history-text-added': 'Added',
    'tui-image-editor-angular-history-text-styleChange-textAlignment-left': 'Align left',
    'tui-image-editor-angular-history-text-styleChange-textAlignment-center': 'Align center',
    'tui-image-editor-angular-history-text-styleChange-textAlignment-right': 'Align right',
    'tui-image-editor-angular-history-text-styleChange-underline': 'Underline',
    'tui-image-editor-angular-history-text-styleChange-underline-true': 'Underline',
    'tui-image-editor-angular-history-text-styleChange-underline-false': 'Not underlined',
    'tui-image-editor-angular-history-text-styleChange-fontStyle-normal': 'Not italic',
    'tui-image-editor-angular-history-text-styleChange-fontStyle-italic': 'Italic',
    'tui-image-editor-angular-history-text-styleChange-fontWeight-normal': 'Normal fontweight',
    'tui-image-editor-angular-history-text-styleChange-fontWeight-bold': 'Bold',
    'tui-image-editor-angular-history-text-styleChange-fontSize': 'Fontsize {{0}}',
    'tui-image-editor-angular-history-text-fill': 'Color',
    'tui-image-editor-angular-history-text-general': 'Text',
    'tui-image-editor-angular-history-text-details': 'Moved/Resized',
    'tui-image-editor-angular-history-mask-general': 'Mask',
    'tui-image-editor-angular-history-mask-details': 'Moved/Resized',
    'tui-image-editor-angular-history-mask-added': 'Added',
    'tui-image-editor-angular-history-mask-apply': 'Applied',
    'tui-image-editor-angular-history-crop': 'Crop',
    'tui-image-editor-angular-history-flip': 'Flip',
    'tui-image-editor-angular-history-flip-reset': 'Reset',
    'tui-image-editor-angular-history-flip-flipX': 'X',
    'tui-image-editor-angular-history-flip-flipY': 'Y',
    'tui-image-editor-angular-history-rotate': 'Rotate',
    'tui-image-editor-angular-history-draw-general': 'Drawing',
    'tui-image-editor-angular-history-draw-details': 'Added/Moved/Resized',
    'tui-image-editor-angular-history-draw-strokeWidth': 'Width {{0}}',
    'tui-image-editor-angular-history-draw-stroke': 'Color',
    'tui-image-editor-angular-history-icon-general': 'Icon',
    'tui-image-editor-angular-history-icon-details': 'Added/Moved/Resized',
    'tui-image-editor-angular-history-icon-colorChange': 'Color changed',
    'tui-image-editor-angular-history-icon-added': 'Added',
    'tui-image-editor-angular-history-icon-fill': 'Color',
    'tui-image-editor-angular-history-load': 'Image loaded',
    'tui-image-editor-angular-history-delete': 'Delete',
    'tui-image-editor-angular-history-delete-all': 'All',
    'tui-image-editor-angular-history-delete-draw': 'Drawing',
    'tui-image-editor-angular-history-delete-shape': 'Shape',
    'tui-image-editor-angular-history-delete-icon': 'Icon',
    'tui-image-editor-angular-history-delete-text': 'Text',
    'tui-image-editor-angular-history-delete-mask': 'Mask',
    'tui-image-editor-angular-history-shape-general': 'Shape',
    'tui-image-editor-angular-history-shape-details': 'Added/Moved/Resized',
    'tui-image-editor-angular-history-applyFilter': 'Apply filter',
    'tui-image-editor-angular-history-removeFilter': 'Remove filter',
    'tui-image-editor-angular-history-shape-strokeWidth': 'Stroke width',
    'tui-image-editor-angular-history-shape-stroke': 'Stroke',
    'tui-image-editor-angular-history-shape-fill': 'Fill',
};

const nl = {
    'tui-image-editor-angular-menus-buttons-crop-tooltip': 'Crop',
    'tui-image-editor-angular-menus-buttons-delete': 'Verwijderen',
    'tui-image-editor-angular-menus-buttons-deleteAll': 'Alles verwijderen',
    'tui-image-editor-angular-menus-buttons-download': 'Downloaden',
    'tui-image-editor-angular-menus-buttons-drag': 'Slepen',
    'tui-image-editor-angular-menus-buttons-draw': 'Tekenen',
    'tui-image-editor-angular-menus-buttons-filter': 'Filters',
    'tui-image-editor-angular-menus-buttons-flip': 'Âfbeelding draaien',
    'tui-image-editor-angular-menus-buttons-history': 'Historiek',
    'tui-image-editor-angular-menus-buttons-icon': 'Icoon',
    'tui-image-editor-angular-menus-buttons-load': 'Afbeelding laden',
    'tui-image-editor-angular-menus-buttons-mask': 'Masker',
    'tui-image-editor-angular-menus-buttons-redo': 'Herhalen',
    'tui-image-editor-angular-menus-buttons-reset': 'Reset',
    'tui-image-editor-angular-menus-buttons-rotate': 'Roteren',
    'tui-image-editor-angular-menus-buttons-shape': 'Vorm',
    'tui-image-editor-angular-menus-buttons-text': 'Tekst',
    'tui-image-editor-angular-menus-buttons-undo': 'Ongedaan maken',
    'tui-image-editor-angular-menus-buttons-zoomIn': 'Inzoomen',
    'tui-image-editor-angular-menus-buttons-zoomOut': 'Uitzoomen',
    'tui-image-editor-angular-submenus-crop-custom': 'Aangepast',
    'tui-image-editor-angular-submenus-crop-square': 'Vierkant',
    'tui-image-editor-angular-submenus-crop-apply': 'Toepassen',
    'tui-image-editor-angular-submenus-crop-cancel': 'Annuleren',
    'tui-image-editor-angular-submenus-flip-x': 'Horizontaal',
    'tui-image-editor-angular-submenus-flip-y': 'Verticaal',
    'tui-image-editor-angular-submenus-flip-reset': 'Annuleren',
    'tui-image-editor-angular-submenus-rotate-slider': 'Rotatie',
    'tui-image-editor-angular-submenus-draw-free': 'Vrij',
    'tui-image-editor-angular-submenus-draw-straight': 'Rechte lijn',
    'tui-image-editor-angular-submenus-draw-color': 'Kleur',
    'tui-image-editor-angular-submenus-draw-strokeWidth': 'Lijndikte',
    'tui-image-editor-angular-submenus-shape-rectangle': 'Rechthoek',
    'tui-image-editor-angular-submenus-shape-circle': 'Cirkel',
    'tui-image-editor-angular-submenus-shape-triangle': 'Driehoek',
    'tui-image-editor-angular-submenus-shape-fill': 'Opvulling',
    'tui-image-editor-angular-submenus-shape-stroke': 'Randkleur',
    'tui-image-editor-angular-submenus-shape-strokeWidth': 'Randdikte',
    'tui-image-editor-angular-submenus-icon-arrow1': 'Pijl-1',
    'tui-image-editor-angular-submenus-icon-arrow2': 'Pijl-2',
    'tui-image-editor-angular-submenus-icon-arrow3': 'Pijl-3',
    'tui-image-editor-angular-submenus-icon-star1': 'Ster-1',
    'tui-image-editor-angular-submenus-icon-star2': 'Ster-2',
    'tui-image-editor-angular-submenus-icon-polygon': 'Polygoon',
    'tui-image-editor-angular-submenus-icon-location': 'Locatie',
    'tui-image-editor-angular-submenus-icon-heart': 'Hart',
    'tui-image-editor-angular-submenus-icon-bubble': 'Bubbel',
    'tui-image-editor-angular-submenus-icon-customIcon': 'Eigen icoon',
    'tui-image-editor-angular-submenus-icon-color': 'Kleur',
    'tui-image-editor-angular-submenus-text-bold': 'Vet',
    'tui-image-editor-angular-submenus-text-italic': 'Cursief',
    'tui-image-editor-angular-submenus-text-underline': 'Onderstreept',
    'tui-image-editor-angular-submenus-text-left': 'Links',
    'tui-image-editor-angular-submenus-text-center': 'Midden',
    'tui-image-editor-angular-submenus-text-right': 'Rechts',
    'tui-image-editor-angular-submenus-text-color': 'Kleur',
    'tui-image-editor-angular-submenus-text-textSize': 'Tekstgrootte',
    'tui-image-editor-angular-submenus-mask-loadMaskImage': 'Masker laden',
    'tui-image-editor-angular-submenus-mask-apply': 'Toepassen',
    'tui-image-editor-angular-submenus-filter-grayscale': 'Grijstinten',
    'tui-image-editor-angular-submenus-filter-invert': 'Kleuren omkeren',
    'tui-image-editor-angular-submenus-filter-sepia': 'Sepia',
    'tui-image-editor-angular-submenus-filter-sepia2': 'Sepia 2',
    'tui-image-editor-angular-submenus-filter-blur': 'Wazig maken',
    'tui-image-editor-angular-submenus-filter-sharpen': 'Scherpte',
    'tui-image-editor-angular-submenus-filter-emboss': 'Reliëf',
    'tui-image-editor-angular-submenus-filter-removeWhite': 'Wit verwijderen',
    'tui-image-editor-angular-submenus-filter-removeWhite-distance': 'Afstand',
    'tui-image-editor-angular-submenus-filter-brightness': 'Helderheid',
    'tui-image-editor-angular-submenus-filter-noise': 'Ruis',
    'tui-image-editor-angular-submenus-filter-pixelate': 'Pixelate',
    'tui-image-editor-angular-submenus-filter-colorFilter': 'Kleurfilter',
    'tui-image-editor-angular-submenus-filter-colorFilter-threshold': 'Drempel',
    'tui-image-editor-angular-submenus-filter-tint': 'Tint',
    'tui-image-editor-angular-submenus-filter-multiply': 'Vermenigvuldigen',
    'tui-image-editor-angular-submenus-filter-blend': 'Mengsel',
    'tui-image-editor-angular-history-noItems': 'Nog geen historiek beschikbaar',
    'tui-image-editor-angular-history-text-added': 'Toegevoegd',
    'tui-image-editor-angular-history-text-styleChange-textAlignment-left': 'Links uitlijnen',
    'tui-image-editor-angular-history-text-styleChange-textAlignment-center': 'Centreren',
    'tui-image-editor-angular-history-text-styleChange-textAlignment-right': 'Rechts uitlijnen',
    'tui-image-editor-angular-history-text-styleChange-underline-true': 'Onderstrepen',
    'tui-image-editor-angular-history-text-styleChange-underline-false': 'Niet onderstrepen',
    'tui-image-editor-angular-history-text-styleChange-fontStyle-normal': 'Niet-cursief',
    'tui-image-editor-angular-history-text-styleChange-fontStyle-italic': 'Cursief',
    'tui-image-editor-angular-history-text-styleChange-fontWeight-normal': 'Niet vet',
    'tui-image-editor-angular-history-text-styleChange-fontWeight-bold': 'Vet',
    'tui-image-editor-angular-history-text-styleChange-fontSize': 'Tekstgrootte {{0}}',
    'tui-image-editor-angular-history-text-fill': 'Kleur',
    'tui-image-editor-angular-history-text-general': 'Tekst',
    'tui-image-editor-angular-history-text-details': 'Verplaatst/Vergroot/Verkleind',
    'tui-image-editor-angular-history-mask-general': 'Masker',
    'tui-image-editor-angular-history-mask-details': 'Verplaatst/Vergroot/Verkleind',
    'tui-image-editor-angular-history-mask-added': 'Toegevoegd',
    'tui-image-editor-angular-history-mask-apply': 'Uitgevoerd',
    'tui-image-editor-angular-history-crop': 'Bijsnijden',
    'tui-image-editor-angular-history-flip': 'Omdraaien',
    'tui-image-editor-angular-history-flip-reset': 'Reset',
    'tui-image-editor-angular-history-flip-flipX': 'X',
    'tui-image-editor-angular-history-flip-flipY': 'Y',
    'tui-image-editor-angular-history-rotate': 'Draaien',
    'tui-image-editor-angular-history-draw-general': 'Tekening',
    'tui-image-editor-angular-history-draw-details': 'Toegevoegd/Verplaatst/Vergroot/Verkleind',
    'tui-image-editor-angular-history-draw-strokeWidth': 'Lijndikte {{0}}',
    'tui-image-editor-angular-history-draw-stroke': 'Kleur',
    'tui-image-editor-angular-history-icon-general': 'Icoon',
    'tui-image-editor-angular-history-icon-details': 'Toegevoegd/Verplaatst/Vergroot/Verkleind',
    'tui-image-editor-angular-history-icon-colorChange': 'Kleur gewijzigd',
    'tui-image-editor-angular-history-icon-added': 'Toegevoegd',
    'tui-image-editor-angular-history-icon-fill': 'Kleur',
    'tui-image-editor-angular-history-load': 'Foto geladen',
    'tui-image-editor-angular-history-delete': 'Verwijderen',
    'tui-image-editor-angular-history-delete-all': 'Alle',
    'tui-image-editor-angular-history-delete-draw': 'Tekening',
    'tui-image-editor-angular-history-delete-shape': 'Vorm',
    'tui-image-editor-angular-history-delete-icon': 'Icoon',
    'tui-image-editor-angular-history-delete-text': 'Tekst',
    'tui-image-editor-angular-history-delete-mask': 'Masker',
    'tui-image-editor-angular-history-shape-general': 'Vorm',
    'tui-image-editor-angular-history-shape-details': 'Toegevoegd/Verplaatst/Vergroot/Verkleind',
    'tui-image-editor-angular-history-applyFilter': 'Filter toepassen',
    'tui-image-editor-angular-history-removeFilter': 'Filter verwijderen',
    'tui-image-editor-angular-history-shape-strokeWidth': 'Randdikte',
    'tui-image-editor-angular-history-shape-stroke': 'Randkleur',
    'tui-image-editor-angular-history-shape-fill': 'Opvulling',
};

class TranslationService {
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
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(ɵɵinject(DOCUMENT), ɵɵinject(TranslateService)); };
TranslationService.ɵprov = ɵɵdefineInjectable({ token: TranslationService, factory: TranslationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TranslationService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: TranslateService }]; }, null); })();

var zoomModes;
(function (zoomModes) {
    zoomModes["DEFAULT"] = "normal";
    zoomModes["ZOOM"] = "zoom";
    zoomModes["HAND"] = "hand";
})(zoomModes || (zoomModes = {}));
var eventNames;
(function (eventNames) {
    eventNames["OBJECT_ACTIVATED"] = "objectActivated";
    eventNames["OBJECT_MOVED"] = "objectMoved";
    eventNames["OBJECT_SCALED"] = "objectScaled";
    eventNames["OBJECT_CREATED"] = "objectCreated";
    eventNames["OBJECT_ROTATED"] = "objectRotated";
    eventNames["OBJECT_ADDED"] = "objectAdded";
    eventNames["OBJECT_MODIFIED"] = "objectModified";
    eventNames["TEXT_EDITING"] = "textEditing";
    eventNames["TEXT_CHANGED"] = "textChanged";
    eventNames["ICON_CREATE_RESIZE"] = "iconCreateResize";
    eventNames["ICON_CREATE_END"] = "iconCreateEnd";
    eventNames["ADD_TEXT"] = "addText";
    eventNames["ADD_OBJECT"] = "addObject";
    eventNames["ADD_OBJECT_AFTER"] = "addObjectAfter";
    eventNames["MOUSE_DOWN"] = "mousedown";
    eventNames["MOUSE_UP"] = "mouseup";
    eventNames["MOUSE_MOVE"] = "mousemove";
    // UNDO/REDO Events
    eventNames["REDO_STACK_CHANGED"] = "redoStackChanged";
    eventNames["UNDO_STACK_CHANGED"] = "undoStackChanged";
    eventNames["SELECTION_CLEARED"] = "selectionCleared";
    eventNames["SELECTION_CREATED"] = "selectionCreated";
    eventNames["EXECUTE_COMMAND"] = "executeCommand";
    eventNames["AFTER_UNDO"] = "afterUndo";
    eventNames["AFTER_REDO"] = "afterRedo";
    eventNames["ZOOM_CHANGED"] = "zoomChanged";
    eventNames["HAND_STARTED"] = "handStarted";
    eventNames["HAND_STOPPED"] = "handStopped";
    eventNames["KEY_DOWN"] = "keydown";
    eventNames["KEY_UP"] = "keyup";
})(eventNames || (eventNames = {}));
var commandNames;
(function (commandNames) {
    commandNames["TEXT"] = "Text";
    commandNames["MASK"] = "Image";
    commandNames["CROP"] = "Crop";
    commandNames["DRAW"] = "Draw";
    commandNames["ICON"] = "Icon";
    commandNames["LOAD"] = "Load";
    commandNames["SHAPE"] = "Shape";
    commandNames["CLEAR_OBJECTS"] = "clearObjects";
    commandNames["LOAD_IMAGE"] = "loadImage";
    commandNames["FLIP_IMAGE"] = "flip";
    commandNames["ROTATE_IMAGE"] = "rotate";
    commandNames["ADD_OBJECT"] = "addObject";
    commandNames["REMOVE_OBJECT"] = "removeObject";
    commandNames["APPLY_FILTER"] = "applyFilter";
    commandNames["REMOVE_FILTER"] = "removeFilter";
    commandNames["ADD_ICON"] = "addIcon";
    commandNames["CHANGE_ICON_COLOR"] = "changeIconColor";
    commandNames["ADD_SHAPE"] = "addShape";
    commandNames["CHANGE_SHAPE"] = "changeShape";
    commandNames["ADD_TEXT"] = "addText";
    commandNames["CHANGE_TEXT"] = "changeText";
    commandNames["CHANGE_TEXT_STYLE"] = "changeTextStyle";
    commandNames["ADD_IMAGE_OBJECT"] = "addImageObject";
    commandNames["RESIZE_CANVAS_DIMENSION"] = "resizeCanvasDimension";
    commandNames["SET_OBJECT_PROPERTIES"] = "setObjectProperties";
    commandNames["SET_OBJECT_POSITION"] = "setObjectPosition";
    commandNames["CHANGE_SELECTION"] = "changeSelection";
})(commandNames || (commandNames = {}));
var historyNames;
(function (historyNames) {
    historyNames["LOAD_IMAGE"] = "Load";
    historyNames["LOAD_MASK_IMAGE"] = "Mask";
    historyNames["ADD_MASK_IMAGE"] = "Mask";
    historyNames["ADD_IMAGE_OBJECT"] = "Mask";
    historyNames["CROP"] = "Crop";
    historyNames["APPLY_FILTER"] = "Apply filter";
    historyNames["REMOVE_FILTER"] = "Remove filter";
    historyNames["CHANGE_SHAPE"] = "Shape";
    historyNames["CHANGE_ICON_COLOR"] = "Icon";
    historyNames["ADD_TEXT"] = "Text";
    historyNames["CHANGE_TEXT_STYLE"] = "Text";
    historyNames["REMOVE_OBJECT"] = "Delete";
    historyNames["CLEAR_OBJECTS"] = "Delete";
})(historyNames || (historyNames = {}));
var filterType;
(function (filterType) {
    filterType["VINTAGE"] = "vintage";
    filterType["SEPIA2"] = "sepia2";
    filterType["REMOVE_COLOR"] = "removeColor";
    filterType["COLOR_FILTER"] = "colorFilter";
    filterType["REMOVE_WHITE"] = "removeWhite";
    filterType["BLEND_COLOR"] = "blendColor";
    filterType["BLEND"] = "blend";
    filterType["TINT"] = "tint";
    filterType["MULTIPLY"] = "multiply";
    filterType["BLEND_OR_TINT_OR_MULTIPLY"] = "blend_tint_multiply";
    filterType["REMOVE_COLOR_OR_WHITE"] = "removeColor_removeWhite";
    filterType["BRIGHTNESS"] = "brightness";
    filterType["NOISE"] = "noise";
    filterType["PIXELATE"] = "pixelate";
    filterType["SHARPEN"] = "sharpen";
    filterType["INVERT"] = "invert";
    filterType["EMBOSS"] = "emboss";
    filterType["SEPIA"] = "sepia";
    filterType["GRAYSCALE"] = "grayscale";
    filterType["BLUR"] = "blur";
})(filterType || (filterType = {}));
var drawingModes;
(function (drawingModes) {
    drawingModes["NORMAL"] = "NORMAL";
    drawingModes["CROPPER"] = "CROPPER";
    drawingModes["FREE_DRAWING"] = "FREE_DRAWING";
    drawingModes["LINE_DRAWING"] = "LINE_DRAWING";
    drawingModes["TEXT"] = "TEXT";
    drawingModes["SHAPE"] = "SHAPE";
    drawingModes["ICON"] = "ICON";
    drawingModes["ZOOM"] = "ZOOM";
})(drawingModes || (drawingModes = {}));
const defaultIconPath = {
    'icon-arrow': 'M40 12V0l24 24-24 24V36H0V12h40z',
    'icon-arrow-2': 'M49,32 H3 V22 h46 l-18,-18 h12 l23,23 L43,50 h-12 l18,-18  z ',
    'icon-arrow-3': 'M43.349998,27 L17.354,53 H1.949999 l25.996,-26 L1.949999,1 h15.404 L43.349998,27  z ',
    'icon-star': 'M35,54.557999 l-19.912001,10.468 l3.804,-22.172001 l-16.108,-15.7 l22.26,-3.236 L35,3.746 l9.956,20.172001 l22.26,3.236 l-16.108,15.7 l3.804,22.172001  z ',
    'icon-star-2': 'M17,31.212 l-7.194,4.08 l-4.728,-6.83 l-8.234,0.524 l-1.328,-8.226 l-7.644,-3.14 l2.338,-7.992 l-5.54,-6.18 l5.54,-6.176 l-2.338,-7.994 l7.644,-3.138 l1.328,-8.226 l8.234,0.522 l4.728,-6.83 L17,-24.312 l7.194,-4.08 l4.728,6.83 l8.234,-0.522 l1.328,8.226 l7.644,3.14 l-2.338,7.992 l5.54,6.178 l-5.54,6.178 l2.338,7.992 l-7.644,3.14 l-1.328,8.226 l-8.234,-0.524 l-4.728,6.83  z ',
    'icon-polygon': 'M3,31 L19,3 h32 l16,28 l-16,28 H19  z ',
    'icon-location': 'M24 62C8 45.503 0 32.837 0 24 0 10.745 10.745 0 24 0s24 10.745 24 24c0 8.837-8 21.503-24 38zm0-28c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z',
    'icon-heart': 'M49.994999,91.349998 l-6.96,-6.333 C18.324001,62.606995 2.01,47.829002 2.01,29.690998 C2.01,14.912998 13.619999,3.299999 28.401001,3.299999 c8.349,0 16.362,5.859 21.594,12 c5.229,-6.141 13.242001,-12 21.591,-12 c14.778,0 26.390999,11.61 26.390999,26.390999 c0,18.138 -16.314001,32.916 -41.025002,55.374001 l-6.96,6.285  z ',
    'icon-bubble': 'M44 48L34 58V48H12C5.373 48 0 42.627 0 36V12C0 5.373 5.373 0 12 0h40c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-8z',
};
var cropModes;
(function (cropModes) {
    cropModes["PRESET_SQUARE"] = "preset-square";
    cropModes["PRESET_3_2"] = "preset-3-2";
    cropModes["PRESET_4_3"] = "preset-4-3";
    cropModes["PRESET_5_4"] = "preset-5-4";
    cropModes["PRESET_7_5"] = "preset-7-5";
    cropModes["PRESET_16_9"] = "preset-16-9";
    cropModes["PRESET_NONE"] = "preset-none";
})(cropModes || (cropModes = {}));
const defaultColors = [
    '#000000',
    '#2a2a2a',
    '#545454',
    '#7e7e7e',
    '#a8a8a8',
    '#d2d2d2',
    '#ffffff',
    '#ff4040',
    '#ff6518',
    '#ffbb3b',
    '#03bd9e',
    '#00a9ff',
    '#515ce6',
    '#9e5fff',
    '#ff5583',
];
var objectTypes;
(function (objectTypes) {
    objectTypes["icon"] = "icon";
    objectTypes["image"] = "image";
    objectTypes["itext"] = "i-text";
    objectTypes["text"] = "text";
    objectTypes["straightLine"] = "line";
    objectTypes["line"] = "path";
    objectTypes["shapeRect"] = "rect";
    objectTypes["shapeCircle"] = "circle";
    objectTypes["shapeTriangle"] = "triangle";
})(objectTypes || (objectTypes = {}));

function isFileApiSupported() {
    return !!(window.File && window.FileList && window.FileReader);
}
function isSilentCommand(command) {
    return typeof command === 'string'
        ? commandNames.LOAD_IMAGE === command
        : commandNames.LOAD_IMAGE === command.name;
}
function getHistoryTitle(command) {
    const { FLIP_IMAGE, ROTATE_IMAGE, ADD_TEXT, APPLY_FILTER, REMOVE_FILTER, CHANGE_SHAPE, CHANGE_ICON_COLOR, CHANGE_TEXT_STYLE, CLEAR_OBJECTS, ADD_IMAGE_OBJECT, REMOVE_OBJECT, } = commandNames;
    const { name, args } = command;
    let historyInfo;
    switch (name) {
        case FLIP_IMAGE:
            historyInfo = {
                name,
                detail: args[1] === 'reset' ? args[1] : args[1].slice(4),
            };
            break;
        case ROTATE_IMAGE:
            historyInfo = { name, detail: args[2] };
            break;
        case APPLY_FILTER:
            historyInfo = {
                name: historyNames.APPLY_FILTER,
                detail: getFilterType(args[1], args[2]),
            };
            break;
        case REMOVE_FILTER:
            historyInfo = { name: historyNames.REMOVE_FILTER, detail: args[1] };
            break;
        case CHANGE_SHAPE:
            historyInfo = { name: historyNames.CHANGE_SHAPE, detail: 'Change' };
            break;
        case CHANGE_ICON_COLOR:
            historyInfo = { name: historyNames.CHANGE_ICON_COLOR, detail: 'Change' };
            break;
        case CHANGE_TEXT_STYLE:
            historyInfo = { name: historyNames.CHANGE_TEXT_STYLE, detail: 'Change' };
            break;
        case REMOVE_OBJECT:
            historyInfo = { name: historyNames.REMOVE_OBJECT, detail: args[2] };
            break;
        case CLEAR_OBJECTS:
            historyInfo = { name: historyNames.CLEAR_OBJECTS, detail: 'All' };
            break;
        case ADD_IMAGE_OBJECT:
            historyInfo = { name: historyNames.ADD_IMAGE_OBJECT, detail: 'Add' };
            break;
        case ADD_TEXT:
            historyInfo = { name: historyNames.ADD_TEXT };
            break;
        default:
            historyInfo = { name };
            break;
    }
    if (args[1] === 'mask') {
        historyInfo = { name: historyNames.LOAD_MASK_IMAGE, detail: 'Apply' };
    }
    return historyInfo;
}
function getFilterType(type, { useAlpha = true, mode = null } = {}) {
    const { VINTAGE, REMOVE_COLOR, BLEND_COLOR, SEPIA2, COLOR_FILTER, REMOVE_WHITE, BLEND, } = filterType;
    let filterName;
    switch (type) {
        case VINTAGE:
            filterName = SEPIA2;
            break;
        case REMOVE_COLOR:
            filterName = useAlpha ? COLOR_FILTER : REMOVE_WHITE;
            break;
        case BLEND_COLOR:
            filterName = mode === 'add' ? BLEND : mode;
            break;
        default:
            filterName = type;
    }
    return toStartOfCapital(filterName);
}
function toStartOfCapital(str) {
    return str.replace(/[a-z]/, (first) => first.toUpperCase());
}
function dataUrlToBlob(dataUrl) {
    const { groups: { mime, base64data }, } = /data:(?<mime>.+);base64,(?<base64data>.+)/.exec(dataUrl);
    const byteCharacters = atob(base64data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mime });
}
const emptyCropRectValues = {
    LEFT: 0,
    TOP: 0,
    WIDTH: 0.5,
    HEIGHT: 0.5,
};
/**
 * Check if cropRect is Empty.
 * @param {Object} cropRect - cropRect object
 *  @param {Number} cropRect.left - cropRect left position value
 *  @param {Number} cropRect.top - cropRect top position value
 *  @param {Number} cropRect.width - cropRect width value
 *  @param {Number} cropRect.height - cropRect height value
 * @returns {boolean}
 */
function isEmptyCropzone(cropRect) {
    const { left, top, width, height } = cropRect;
    const { LEFT, TOP, WIDTH, HEIGHT } = emptyCropRectValues;
    return left === LEFT && top === TOP && width === WIDTH && height === HEIGHT;
}
function clearSelection(imageEditor, fire_event = true) {
    imageEditor.discardSelection();
    if (fire_event) {
        imageEditor.fire(eventNames.OBJECT_ACTIVATED, null);
        imageEditor.fire(eventNames.SELECTION_CLEARED, null);
    }
}
function getActiveObjectId(imageEditor) {
    if (imageEditor != null) {
        let activeObject = imageEditor._graphics.getActiveObject();
        if (activeObject) {
            let activeObjectId = imageEditor._graphics.getObjectId(activeObject);
            return activeObjectId;
        }
    }
    return null;
}
function removeFilter(imageEditor, type, isSilent) {
    return __awaiter(this, void 0, void 0, function* () {
        if (imageEditor != null) {
            if (isSilent) {
                yield imageEditor.executeSilent('removeFilter', type);
            }
            else {
                yield imageEditor.execute('removeFilter', type);
            }
        }
    });
}
function rgbaToObject(rgba) {
    if (rgba.startsWith('rgba')) {
        const { groups: { r, g, b, a }, } = /rgba\(\s*(?<r>\d+)\s*,\s*(?<g>\d+)\s*,\s*(?<b>\d+)\s*,\s*(?<a>[0-9.]+)\s*\)/.exec(rgba);
        let parsedR = parseInt(r);
        let parsedG = parseInt(g);
        let parsedB = parseInt(b);
        return {
            r: parsedR,
            g: parsedG,
            b: parsedB,
            hexString: `#${(parsedR <= 15 ? '0' : '') + parsedR.toString(16)}${(parsedG <= 15 ? '0' : '') + parsedG.toString(16)}${(parsedB <= 15 ? '0' : '') + parsedB.toString(16)}`,
            alpha: parseFloat(a),
        };
    }
    return rgbToObject(rgba);
}
function rgbToObject(rgb) {
    if (rgb.startsWith('rgb')) {
        const { groups: { r, g, b }, } = /rgb\(\s*(?<r>\d+)\s*,\s*(?<g>\d+)\s*,\s*(?<b>\d+)\s*\)/.exec(rgb);
        let parsedR = parseInt(r);
        let parsedG = parseInt(g);
        let parsedB = parseInt(b);
        return {
            r: parsedR,
            g: parsedG,
            b: parsedB,
            hexString: `#${(parsedR <= 15 ? '0' : '') + parsedR.toString(16)}${(parsedG <= 15 ? '0' : '') + parsedG.toString(16)}${(parsedB <= 15 ? '0' : '') + parsedB.toString(16)}`,
            alpha: 1,
        };
    }
    return null;
}

var HistoryItemType;
(function (HistoryItemType) {
    HistoryItemType[HistoryItemType["Shape"] = 0] = "Shape";
    HistoryItemType[HistoryItemType["Icon"] = 1] = "Icon";
    HistoryItemType[HistoryItemType["Text"] = 2] = "Text";
    HistoryItemType[HistoryItemType["Mask"] = 3] = "Mask";
    HistoryItemType[HistoryItemType["Crop"] = 4] = "Crop";
    HistoryItemType[HistoryItemType["Draw"] = 5] = "Draw";
    HistoryItemType[HistoryItemType["Rotate"] = 6] = "Rotate";
    HistoryItemType[HistoryItemType["Flip"] = 7] = "Flip";
    HistoryItemType[HistoryItemType["Load"] = 8] = "Load";
    HistoryItemType[HistoryItemType["Delete"] = 9] = "Delete";
    HistoryItemType[HistoryItemType["Image"] = 10] = "Image";
    HistoryItemType[HistoryItemType["ApplyFilter"] = 11] = "ApplyFilter";
    HistoryItemType[HistoryItemType["RemoveFilter"] = 12] = "RemoveFilter";
})(HistoryItemType || (HistoryItemType = {}));
class HistoryItem {
    constructor(command, translationService, imageEditor) {
        var _a, _b, _c, _d;
        if (typeof command === 'string') {
            if (command === commandNames.TEXT) {
                this.name = translationService.getTranslation('tui-image-editor-angular-history-text-general');
                this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-details');
                this.type = HistoryItemType.Text;
            }
            else if (command === commandNames.MASK) {
                this.name = translationService.getTranslation('tui-image-editor-angular-history-mask-general');
                this.detail = translationService.getTranslation('tui-image-editor-angular-history-mask-details');
                this.type = HistoryItemType.Mask;
            }
            else if (command === commandNames.CROP) {
                this.name = translationService.getTranslation('tui-image-editor-angular-history-crop');
                this.type = HistoryItemType.Crop;
            }
            else if (command === commandNames.DRAW) {
                this.name = translationService.getTranslation('tui-image-editor-angular-history-draw-general');
                this.detail = translationService.getTranslation('tui-image-editor-angular-history-draw-details');
                this.type = HistoryItemType.Draw;
            }
            else if (command === commandNames.ICON) {
                this.name = translationService.getTranslation('tui-image-editor-angular-history-icon-general');
                this.detail = translationService.getTranslation('tui-image-editor-angular-history-icon-details');
                this.type = HistoryItemType.Icon;
            }
            else if (command === commandNames.LOAD) {
                this.name = translationService.getTranslation('tui-image-editor-angular-history-load');
                this.type = HistoryItemType.Load;
            }
            else if (command === commandNames.SHAPE) {
                this.name = translationService.getTranslation('tui-image-editor-angular-history-shape-general');
                this.detail = translationService.getTranslation('tui-image-editor-angular-history-shape-details');
                this.type = HistoryItemType.Shape;
            }
            else {
                this.name = command;
            }
        }
        else {
            switch (command.name) {
                case commandNames.FLIP_IMAGE:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-flip');
                    switch (command.args[1]) {
                        case 'reset':
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-flip-reset');
                            break;
                        case 'flipX':
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-flip-flipX');
                            break;
                        case 'flipY':
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-flip-flipY');
                            break;
                    }
                    this.type = HistoryItemType.Flip;
                    break;
                case commandNames.ROTATE_IMAGE:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-rotate');
                    this.detail = command.args[2] + '°';
                    this.type = HistoryItemType.Rotate;
                    this.args = [command.args[2]];
                    break;
                case commandNames.APPLY_FILTER:
                    if (((_a = command.args) === null || _a === void 0 ? void 0 : _a.length) >= 3 && command.args[1] === 'mask') {
                        this.name = translationService.getTranslation('tui-image-editor-angular-history-mask-general');
                        this.detail = translationService.getTranslation('tui-image-editor-angular-history-mask-apply');
                        this.type = HistoryItemType.Mask;
                    }
                    else {
                        this.name = translationService.getTranslation('tui-image-editor-angular-history-applyFilter');
                        this.detail = getFilterType(command.args[1], command.args[2]);
                        this.type = HistoryItemType.ApplyFilter;
                        if (command.args[1] === filterType.REMOVE_COLOR &&
                            command.args[2] != null) {
                            this.filterType =
                                command.args[2].useAlpha == null
                                    ? filterType.REMOVE_COLOR
                                    : filterType.REMOVE_WHITE;
                            this.detail =
                                command.args[2].useAlpha == null
                                    ? translationService.getTranslation('tui-image-editor-angular-submenus-filter-colorFilter')
                                    : translationService.getTranslation('tui-image-editor-angular-submenus-filter-removeWhite');
                            this.args = [command.args[2].distance];
                        }
                        else if (command.args[1] === filterType.BLEND_COLOR &&
                            command.args[2] != null) {
                            if (command.args[2].mode === 'tint') {
                                this.filterType = filterType.TINT;
                                this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-tint');
                            }
                            else if (command.args[2].mode === 'multiply') {
                                this.filterType = filterType.MULTIPLY;
                                this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-multiply');
                            }
                            else if (command.args[2].mode === 'add') {
                                this.filterType = filterType.BLEND;
                                this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-blend');
                            }
                            this.args = [command.args[2].color];
                        }
                        else if (command.args[1] === filterType.NOISE &&
                            command.args[2] != null) {
                            this.filterType = filterType.NOISE;
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-noise');
                            this.args = [command.args[2].noise];
                        }
                        else if (command.args[1] === filterType.BRIGHTNESS &&
                            command.args[2] != null) {
                            this.filterType = filterType.BRIGHTNESS;
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-brightness');
                            this.args = [command.args[2].brightness];
                        }
                        else if (command.args[1] === filterType.PIXELATE &&
                            command.args[2] != null) {
                            this.filterType = filterType.PIXELATE;
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-pixelate');
                            this.args = [command.args[2].blocksize];
                        }
                        else if (command.args[1] === filterType.GRAYSCALE) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-grayscale');
                        }
                        else if (command.args[1] === filterType.SEPIA) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-sepia');
                        }
                        else if (command.args[1] === filterType.BLUR) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-blur');
                        }
                        else if (command.args[1] === filterType.INVERT) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-invert');
                        }
                        else if (command.args[1] === filterType.VINTAGE) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-sepia2');
                        }
                        else if (command.args[1] === filterType.SHARPEN) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-sharpen');
                        }
                        else if (command.args[1] === filterType.EMBOSS) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-emboss');
                        }
                    }
                    break;
                case commandNames.REMOVE_FILTER:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-removeFilter');
                    if (command.args[1] === filterType.BLEND_COLOR) {
                        this.filterType = filterType.BLEND_OR_TINT_OR_MULTIPLY;
                        this.detail = `${translationService.getTranslation('tui-image-editor-angular-submenus-filter-tint')} | ${translationService.getTranslation('tui-image-editor-angular-submenus-filter-multiply')} | ${translationService.getTranslation('tui-image-editor-angular-submenus-filter-blend')}`;
                    }
                    else if (command.args[1] === filterType.REMOVE_COLOR) {
                        this.filterType = filterType.REMOVE_COLOR_OR_WHITE;
                        this.detail = `${translationService.getTranslation('tui-image-editor-angular-submenus-filter-removeWhite')} | ${translationService.getTranslation('tui-image-editor-angular-submenus-filter-colorFilter')}`;
                    }
                    else if (command.args[1] === filterType.GRAYSCALE) {
                        this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-grayscale');
                    }
                    else if (command.args[1] === filterType.SEPIA) {
                        this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-sepia');
                    }
                    else if (command.args[1] === filterType.BLUR) {
                        this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-blur');
                    }
                    else if (command.args[1] === filterType.INVERT) {
                        this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-invert');
                    }
                    else if (command.args[1] === filterType.VINTAGE) {
                        this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-sepia2');
                    }
                    else if (command.args[1] === filterType.SHARPEN) {
                        this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-sharpen');
                    }
                    else if (command.args[1] === filterType.EMBOSS) {
                        this.detail = translationService.getTranslation('tui-image-editor-angular-submenus-filter-emboss');
                    }
                    this.type = HistoryItemType.RemoveFilter;
                    break;
                case commandNames.CHANGE_SHAPE:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-shape-general');
                    if (((_b = command.args) === null || _b === void 0 ? void 0 : _b.length) >= 3) {
                        let changedProperties = command.args[2];
                        if (changedProperties.strokeWidth) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-shape-strokeWidth');
                        }
                        else if (changedProperties.stroke) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-shape-stroke');
                        }
                        else if (changedProperties.fill) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-shape-fill');
                        }
                    }
                    this.type = HistoryItemType.Shape;
                    break;
                case commandNames.CHANGE_ICON_COLOR:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-icon-general');
                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-icon-colorChange');
                    this.type = HistoryItemType.Icon;
                    break;
                case commandNames.CHANGE_TEXT_STYLE:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-text-general');
                    this.type = HistoryItemType.Text;
                    if (((_c = command.args) === null || _c === void 0 ? void 0 : _c.length) >= 3 &&
                        typeof command.args[2] === 'object') {
                        let textStyleArg = command.args[2];
                        if (textStyleArg.textAlign) {
                            switch (textStyleArg.textAlign) {
                                case 'left':
                                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-textAlignment-left');
                                    break;
                                case 'center':
                                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-textAlignment-center');
                                    break;
                                case 'right':
                                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-textAlignment-right');
                                    break;
                            }
                        }
                        else if (textStyleArg.textDecoration ||
                            textStyleArg.underline != null) {
                            if (textStyleArg.underline) {
                                this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-underline-true');
                            }
                            else if (textStyleArg.underline === false) {
                                this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-underline-false');
                            }
                        }
                        else if (textStyleArg.fontStyle) {
                            if (textStyleArg.fontStyle === 'normal') {
                                this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-fontStyle-normal');
                            }
                            else if (textStyleArg.fontStyle === 'italic') {
                                this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-fontStyle-italic');
                            }
                        }
                        else if (textStyleArg.fontWeight) {
                            if (textStyleArg.fontWeight === 'normal') {
                                this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-fontWeight-normal');
                            }
                            else if (textStyleArg.fontWeight === 'bold') {
                                this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-fontWeight-bold');
                            }
                        }
                        else if (textStyleArg.fontSize) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-styleChange-fontSize', { 0: textStyleArg.fontSize });
                        }
                        else if (textStyleArg.fill) {
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-fill');
                        }
                    }
                    break;
                case commandNames.REMOVE_OBJECT:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-delete');
                    switch (command.args[2]) {
                        case commandNames.DRAW:
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-delete-draw');
                            break;
                        case commandNames.SHAPE:
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-delete-shape');
                            break;
                        case commandNames.ICON:
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-delete-icon');
                            break;
                        case commandNames.TEXT:
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-delete-text');
                            break;
                        case commandNames.MASK:
                            this.detail = translationService.getTranslation('tui-image-editor-angular-history-delete-mask');
                            break;
                    }
                    this.type = HistoryItemType.Delete;
                    break;
                case commandNames.CLEAR_OBJECTS:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-delete');
                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-delete-all');
                    this.type = HistoryItemType.Delete;
                    break;
                case commandNames.ADD_IMAGE_OBJECT:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-mask-general');
                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-mask-added');
                    this.type = HistoryItemType.Image;
                    break;
                case commandNames.ADD_TEXT:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-text-general');
                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-text-added');
                    this.type = HistoryItemType.Text;
                    break;
                case commandNames.SET_OBJECT_PROPERTIES:
                    if (((_d = command.args) === null || _d === void 0 ? void 0 : _d.length) >= 3) {
                        let objectId = command.args[1];
                        var props = imageEditor === null || imageEditor === void 0 ? void 0 : imageEditor.getObjectProperties(objectId, ['type']);
                        console.debug(props);
                        if (props === null || props === void 0 ? void 0 : props.type) {
                            if ([objectTypes.line, objectTypes.straightLine].indexOf(props.type) > -1) {
                                this.name = translationService.getTranslation('tui-image-editor-angular-history-draw-general');
                                this.type = HistoryItemType.Draw;
                                let changedProperties = command.args[2];
                                if (changedProperties === null || changedProperties === void 0 ? void 0 : changedProperties.strokeWidth) {
                                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-draw-strokeWidth', { 0: changedProperties.strokeWidth });
                                }
                                else if (changedProperties === null || changedProperties === void 0 ? void 0 : changedProperties.stroke) {
                                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-draw-stroke');
                                }
                            }
                            else if (props.type === objectTypes.icon) {
                                this.name = translationService.getTranslation('tui-image-editor-angular-history-icon-general');
                                this.type = HistoryItemType.Icon;
                                let changedProperties = command.args[2];
                                if (changedProperties === null || changedProperties === void 0 ? void 0 : changedProperties.fill) {
                                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-icon-fill');
                                }
                            }
                        }
                    }
                    break;
                case commandNames.ADD_ICON:
                    this.name = translationService.getTranslation('tui-image-editor-angular-history-icon-general');
                    this.detail = translationService.getTranslation('tui-image-editor-angular-history-icon-added');
                    this.type = HistoryItemType.Icon;
                    break;
                default:
                    this.name = command.name;
                    break;
            }
        }
    }
}

class HistoryService {
    constructor(translationService) {
        this.translationService = translationService;
        this.items = [];
        this.historyIndex = -1;
        this.onChangeEmitter = new BehaviorSubject([]);
    }
    /**
     * Get list's length
     */
    get listLength() {
        return this.items.length;
    }
    /**
     * Clear history
     */
    clear() {
        if (this.listLength > 0) {
            this.deleteListItemElement(0, this.listLength);
            this.historyIndex = -1;
        }
    }
    /**
     * Whether history menu has disabled item
     */
    hasDisabledItem() {
        return this.listLength - 1 > this.historyIndex;
    }
    /**
     * Push list item element
     */
    pushListItemElement(item) {
        this.items.push(item);
    }
    add(command, imageEditor) {
        console.debug(command);
        if (typeof command === 'string' && command === historyNames.LOAD_IMAGE) {
            this.deleteListItemElement(0, this.listLength);
        }
        if (this.hasDisabledItem()) {
            this.deleteListItemElement(this.historyIndex + 1, this.listLength);
        }
        if (typeof command === 'string' &&
            command === historyNames.ADD_MASK_IMAGE) {
            imageEditor === null || imageEditor === void 0 ? void 0 : imageEditor.clearRedoStack();
            imageEditor === null || imageEditor === void 0 ? void 0 : imageEditor.clearUndoStack();
            this.deleteListItemElement(0, this.listLength);
        }
        else {
            this.pushListItemElement(new HistoryItem(command, this.translationService, imageEditor));
            this.historyIndex = this.listLength - 1;
        }
    }
    /**
     * Select previous history of current selected history
     */
    prev() {
        this.historyIndex -= 1;
    }
    /**
     * Select next history of current selected history
     */
    next() {
        this.historyIndex += 1;
    }
    /**
     * Delete list item element
     * @param {number} start - start index to delete
     * @param {number} end - end index to delete
     */
    deleteListItemElement(start, end) {
        this.items.splice(start, end - start + 1);
    }
}
HistoryService.ɵfac = function HistoryService_Factory(t) { return new (t || HistoryService)(ɵɵinject(TranslationService)); };
HistoryService.ɵprov = ɵɵdefineInjectable({ token: HistoryService, factory: HistoryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(HistoryService, [{
        type: Injectable
    }], function () { return [{ type: TranslationService }]; }, null); })();

class LoadComponent {
    constructor() {
        this.loadImage = new EventEmitter();
    }
    onImageChosen(event) {
        let selectedFile = event.target.files[0];
        if (selectedFile != null) {
            this.loadImage.emit(selectedFile);
        }
    }
}
LoadComponent.ɵfac = function LoadComponent_Factory(t) { return new (t || LoadComponent)(); };
LoadComponent.ɵcmp = ɵɵdefineComponent({ type: LoadComponent, selectors: [["tui-image-editor-menus-buttons-load"]], outputs: { loadImage: "loadImage" }, decls: 7, vars: 3, consts: [[1, "tie-btn-load", "tui-image-editor-item", "help", "enabled", 3, "title"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-file-upload", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-file-upload", 1, "active", "use-default"], [0, "xlink", "href", "#ic-file-upload", 1, "hover", "use-default"], ["type", "file", "accept", "image/x-png,image/gif,image/jpeg", 1, "tui-image-editor-load-btn", 3, "change"]], template: function LoadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(6, "input", 5);
        ɵɵlistener("change", function LoadComponent_Template_input_change_6_listener($event) { return ctx.onImageChosen($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("title", ɵɵpipeBind1(1, 1, "tui-image-editor-angular-menus-buttons-load"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LoadComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-load',
                templateUrl: './load.component.html',
                styleUrls: ['./load.component.css'],
            }]
    }], function () { return []; }, { loadImage: [{
            type: Output
        }] }); })();

class DownloadComponent {
    constructor() { }
    downloadImage() {
        if (this.imageChosen && this.imageEditor != null) {
            const dataURL = this.imageEditor.toDataURL();
            if (window.fetch) {
                fetch(dataURL)
                    .then((res) => res.blob())
                    .then((blob) => {
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.target = '_blank';
                    link.click();
                });
            }
            else {
                let blob = dataUrlToBlob(dataURL);
                var link = document.createElement('a');
                link.target = '_blank';
                link.href = window.URL.createObjectURL(blob);
                link.click();
            }
        }
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(); };
DownloadComponent.ɵcmp = ɵɵdefineComponent({ type: DownloadComponent, selectors: [["tui-image-editor-menus-buttons-download"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, decls: 6, vars: 3, consts: [[1, "tie-btn-download", "tui-image-editor-item", "help", "enabled", 3, "title", "click"], [1, "svg_ic-menu"], ["href", "#ic-file-download", 1, "normal", "use-default"], ["href", "#ic-file-download", 1, "active", "use-default"], ["href", "#ic-file-download", 1, "hover", "use-default"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function DownloadComponent_Template_div_click_0_listener() { return ctx.downloadImage(); });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("title", ɵɵpipeBind1(1, 1, "tui-image-editor-angular-menus-buttons-download"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DownloadComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-download',
                templateUrl: './download.component.html',
                styleUrls: ['./download.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }] }); })();

class ZoomInComponent {
    constructor() { }
    get isSelected() {
        var _a;
        if (this.imageEditor == null) {
            return false;
        }
        const zoomMode = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.getZoomMode();
        return (this.imageEditor.getDrawingMode() == drawingModes.ZOOM &&
            zoomMode !== zoomModes.HAND);
    }
    startZoom() {
        var _a;
        (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.startDrawingMode(drawingModes.ZOOM);
        this.zoomIn();
    }
    zoomIn() {
        var _a;
        (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.deactivateAll();
        this.toggleZoomMode();
    }
    toggleZoomMode() {
        var _a, _b, _c, _d, _e;
        const zoomMode = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.getZoomMode();
        (_b = this.imageEditor) === null || _b === void 0 ? void 0 : _b.stopDrawingMode();
        if (zoomMode !== zoomModes.ZOOM) {
            (_c = this.imageEditor) === null || _c === void 0 ? void 0 : _c.startDrawingMode(drawingModes.ZOOM);
            (_d = this.imageEditor) === null || _d === void 0 ? void 0 : _d._graphics.startZoomInMode();
        }
        else {
            (_e = this.imageEditor) === null || _e === void 0 ? void 0 : _e._graphics.endZoomInMode();
        }
    }
}
ZoomInComponent.ɵfac = function ZoomInComponent_Factory(t) { return new (t || ZoomInComponent)(); };
ZoomInComponent.ɵcmp = ɵɵdefineComponent({ type: ZoomInComponent, selectors: [["tui-image-editor-menus-buttons-zoom-in"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-zoom-in", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-zoom-in", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-zoom-in", 1, "hover", "use-default"]], template: function ZoomInComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function ZoomInComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.startZoom() : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-zoomIn tui-image-editor-item help " + (ctx.imageChosen ? "enabled " : "disabled ") + (ctx.isSelected ? "active " : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-zoomIn"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ZoomInComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-zoom-in',
                templateUrl: './zoom-in.component.html',
                styleUrls: ['./zoom-in.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }] }); })();

class ZoomOutComponent {
    constructor() { }
    zoomOut() {
        var _a;
        (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.zoomOut();
    }
}
ZoomOutComponent.ɵfac = function ZoomOutComponent_Factory(t) { return new (t || ZoomOutComponent)(); };
ZoomOutComponent.ɵcmp = ɵɵdefineComponent({ type: ZoomOutComponent, selectors: [["tui-image-editor-menus-buttons-zoom-out"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-zoom-out", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-zoom-out", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-zoom-out", 1, "hover", "use-default"]], template: function ZoomOutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function ZoomOutComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.zoomOut() : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-zoomOut tui-image-editor-item help " + (ctx.imageChosen ? "enabled " : "disabled "));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-zoomOut"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ZoomOutComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-zoom-out',
                templateUrl: './zoom-out.component.html',
                styleUrls: ['./zoom-out.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }] }); })();

class DragComponent {
    constructor() { }
    get isSelected() {
        var _a;
        if (this.imageEditor == null) {
            return false;
        }
        const zoomMode = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.getZoomMode();
        return (this.imageEditor.getDrawingMode() == drawingModes.ZOOM &&
            zoomMode === zoomModes.HAND);
    }
    startDrag() {
        var _a;
        (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.deactivateAll();
        this.toggleHandMode();
    }
    toggleHandMode() {
        var _a, _b, _c, _d, _e;
        const zoomMode = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.getZoomMode();
        (_b = this.imageEditor) === null || _b === void 0 ? void 0 : _b.stopDrawingMode();
        if (zoomMode !== zoomModes.HAND) {
            (_c = this.imageEditor) === null || _c === void 0 ? void 0 : _c.startDrawingMode(drawingModes.ZOOM);
            (_d = this.imageEditor) === null || _d === void 0 ? void 0 : _d._graphics.startHandMode();
        }
        else {
            (_e = this.imageEditor) === null || _e === void 0 ? void 0 : _e._graphics.endHandMode();
        }
    }
}
DragComponent.ɵfac = function DragComponent_Factory(t) { return new (t || DragComponent)(); };
DragComponent.ɵcmp = ɵɵdefineComponent({ type: DragComponent, selectors: [["tui-image-editor-menus-buttons-drag"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-hand", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-hand", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-hand", 1, "hover", "use-default"]], template: function DragComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function DragComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.startDrag() : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-hand tui-image-editor-item help " + (ctx.imageChosen ? "enabled " : "disabled ") + (ctx.isSelected ? "active " : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-drag"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DragComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-drag',
                templateUrl: './drag.component.html',
                styleUrls: ['./drag.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }] }); })();

function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 19);
    ɵɵelement(2, "use", 20);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 21);
    ɵɵelement(2, "use", 22);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 23);
    ɵɵelement(2, "use", 24);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 25);
    ɵɵelement(2, "use", 26);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 27);
    ɵɵelement(2, "use", 28);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 29);
    ɵɵelement(2, "use", 30);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 31);
    ɵɵelement(2, "use", 32);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 33);
    ɵɵelement(2, "use", 34);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 35);
    ɵɵelement(2, "use", 36);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 37);
    ɵɵelement(2, "use", 38);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 18);
    ɵɵelement(1, "use", 39);
    ɵɵelement(2, "use", 40);
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 41);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r5.detail, " ");
} }
function HistoryComponent_ng_template_7_ul_1_li_1_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 42);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 18);
    ɵɵelement(2, "use", 43);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function HistoryComponent_ng_template_7_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "div", 12);
    ɵɵlistener("click", function HistoryComponent_ng_template_7_ul_1_li_1_Template_div_click_1_listener() { ɵɵrestoreView(_r22); const itemNr_r6 = ctx.index; const ctx_r21 = ɵɵnextContext(3); return ctx_r21.onclickHistoryItem(itemNr_r6); });
    ɵɵelementStart(2, "div", 13);
    ɵɵtemplate(3, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_3_Template, 3, 0, "svg", 14);
    ɵɵtemplate(4, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_4_Template, 3, 0, "svg", 14);
    ɵɵtemplate(5, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_5_Template, 3, 0, "svg", 14);
    ɵɵtemplate(6, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_6_Template, 3, 0, "svg", 14);
    ɵɵtemplate(7, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_7_Template, 3, 0, "svg", 14);
    ɵɵtemplate(8, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_8_Template, 3, 0, "svg", 14);
    ɵɵtemplate(9, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_9_Template, 3, 0, "svg", 14);
    ɵɵtemplate(10, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_10_Template, 3, 0, "svg", 14);
    ɵɵtemplate(11, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_11_Template, 3, 0, "svg", 14);
    ɵɵtemplate(12, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_12_Template, 3, 0, "svg", 14);
    ɵɵtemplate(13, HistoryComponent_ng_template_7_ul_1_li_1__svg_svg_13_Template, 3, 0, "svg", 14);
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 15);
    ɵɵelementStart(15, "div");
    ɵɵtext(16);
    ɵɵelementEnd();
    ɵɵtemplate(17, HistoryComponent_ng_template_7_ul_1_li_1_div_17_Template, 2, 1, "div", 16);
    ɵɵelementEnd();
    ɵɵtemplate(18, HistoryComponent_ng_template_7_ul_1_li_1_div_18_Template, 3, 0, "div", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const itemNr_r6 = ctx.index;
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵclassMap("history-item " + (itemNr_r6 > ctx_r4.historyIndex ? "disabled-item" : "") + (itemNr_r6 == ctx_r4.historyIndex ? "selected-item" : ""));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.type == 8);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 6);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 7);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 3 || item_r5.type == 10);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 11 || item_r5.type == 12);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.type == 9);
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r5.name);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r5.detail);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", itemNr_r6 == ctx_r4.historyIndex);
} }
function HistoryComponent_ng_template_7_ul_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 10);
    ɵɵtemplate(1, HistoryComponent_ng_template_7_ul_1_li_1_Template, 19, 16, "li", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.items);
} }
function HistoryComponent_ng_template_7_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 44);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "tui-image-editor-angular-history-noItems"), " ");
} }
function HistoryComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, HistoryComponent_ng_template_7_ul_1_Template, 2, 1, "ul", 8);
    ɵɵtemplate(2, HistoryComponent_ng_template_7_div_2_Template, 3, 3, "div", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.items.length > 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.items.length === 0);
} }
class HistoryComponent {
    constructor(historyService) {
        this.historyService = historyService;
    }
    get items() {
        return this.historyService.items;
    }
    get historyIndex() {
        return this.historyService.historyIndex;
    }
    onclickHistoryItem(index) {
        var _a, _b;
        if (index !== this.historyIndex) {
            const count = Math.abs(index - this.historyIndex);
            if (index < this.historyIndex) {
                (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.undo(count).then(() => {
                    this.historyService.onChangeEmitter.next(this.items.slice(0, index + 1));
                });
            }
            else {
                (_b = this.imageEditor) === null || _b === void 0 ? void 0 : _b.redo(count).then(() => {
                    this.historyService.onChangeEmitter.next(this.items.slice(0, index + 1));
                });
            }
        }
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(ɵɵdirectiveInject(HistoryService)); };
HistoryComponent.ɵcmp = ɵɵdefineComponent({ type: HistoryComponent, selectors: [["tui-image-editor-menus-buttons-history"]], inputs: { imageEditor: "imageEditor" }, decls: 9, vars: 4, consts: [["popoverClass", "tie-history-popover", "autoClose", "outside", "container", "body", 1, "tie-btn-history", "tui-image-editor-item", "help", "enabled", 3, "ngbPopover"], [1, "tui-image-editor-d-flex", "tui-image-editor-align-items-center", 3, "title"], [1, "svg_ic-menu", "tui-image-editor-d-flex"], [0, "xlink", "href", "#ic-history", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-history", 1, "hover", "use-default"], ["popupContent", ""], [1, "tie-panel-history"], ["class", "history-list", 4, "ngIf"], ["class", "tui-image-editor-px-2", 4, "ngIf"], [1, "history-list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "tui-image-editor-history-item", "history", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center", 3, "click"], [1, "history-item-icon", "tui-image-editor-d-flex", "tui-image-editor-align-items-center"], ["class", "svg_ic-submenu", 4, "ngIf"], [1, "history-item-text"], ["class", "history-item-text-details", 4, "ngIf"], ["class", "history-item-checkbox tui-image-editor-d-flex tui-image-editor-align-items-center", 4, "ngIf"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-history-load", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-load", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-draw", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-draw", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-rotate", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-rotate", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-crop", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-crop", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-flip", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-flip", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-text", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-text", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-mask", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-mask", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-shape", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-shape", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-icon", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-icon", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-filter", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-filter", 1, "active", "use-default"], [0, "xlink", "href", "#ic-history-delete", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-history-delete", 1, "active", "use-default"], [1, "history-item-text-details"], [1, "history-item-checkbox", "tui-image-editor-d-flex", "tui-image-editor-align-items-center"], [0, "xlink", "href", "#ic-history-check", 1, "normal", "use-default"], [1, "tui-image-editor-px-2"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵpipe(2, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(3, "svg", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelement(6, "use", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(7, HistoryComponent_ng_template_7_Template, 3, 2, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(8);
        ɵɵproperty("ngbPopover", _r0);
        ɵɵadvance(1);
        ɵɵproperty("title", ɵɵpipeBind1(2, 2, "tui-image-editor-angular-menus-buttons-history"));
    } }, directives: [NgbPopover, NgIf, NgForOf], pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(HistoryComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.css'],
            }]
    }], function () { return [{ type: HistoryService }]; }, { imageEditor: [{
            type: Input
        }] }); })();

class UndoComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
        this.undoStackSize = 0;
    }
    ngOnChanges(changes) {
        var that = this;
        if (changes['imageEditor'] && changes['imageEditor'].currentValue != null) {
            this.imageEditor.on(eventNames.UNDO_STACK_CHANGED, function (length) {
                that.undoStackSize = length;
            });
        }
    }
    undo() {
        if (this.imageEditor != null && !this.imageEditor.isEmptyUndoStack()) {
            this.cancelCroppingRequested.emit();
            this.imageEditor.deactivateAll();
            this.imageEditor.undo();
        }
    }
}
UndoComponent.ɵfac = function UndoComponent_Factory(t) { return new (t || UndoComponent)(); };
UndoComponent.ɵcmp = ɵɵdefineComponent({ type: UndoComponent, selectors: [["tui-image-editor-menus-buttons-undo"]], inputs: { imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, features: [ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-undo", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-undo", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-undo", 1, "hover", "use-default"]], template: function UndoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function UndoComponent_Template_div_click_0_listener() { return ctx.undoStackSize != 0 ? ctx.undo() : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-undo tui-image-editor-item help " + (ctx.undoStackSize != 0 ? "enabled" : "disabled"));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-undo"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UndoComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-undo',
                templateUrl: './undo.component.html',
                styleUrls: ['./undo.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();

class RedoComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
        this.redoStackSize = 0;
    }
    ngOnChanges(changes) {
        var that = this;
        if (changes['imageEditor'] && changes['imageEditor'].currentValue != null) {
            this.imageEditor.on(eventNames.REDO_STACK_CHANGED, function (length) {
                that.redoStackSize = length;
            });
        }
    }
    redo() {
        if (this.imageEditor != null && !this.imageEditor.isEmptyRedoStack()) {
            this.cancelCroppingRequested.emit();
            this.imageEditor.deactivateAll();
            this.imageEditor.redo();
        }
    }
}
RedoComponent.ɵfac = function RedoComponent_Factory(t) { return new (t || RedoComponent)(); };
RedoComponent.ɵcmp = ɵɵdefineComponent({ type: RedoComponent, selectors: [["tui-image-editor-menus-buttons-redo"]], inputs: { imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, features: [ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-redo", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-redo", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-redo", 1, "hover", "use-default"]], template: function RedoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function RedoComponent_Template_div_click_0_listener() { return ctx.redoStackSize != 0 ? ctx.redo() : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-redo tui-image-editor-item help " + (ctx.redoStackSize != 0 ? "enabled" : "disabled"));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-redo"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RedoComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-redo',
                templateUrl: './redo.component.html',
                styleUrls: ['./redo.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();

class ResetComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
        this.resetImage = new EventEmitter();
    }
    reset() {
        this.cancelCroppingRequested.emit();
        this.resetImage.emit();
    }
}
ResetComponent.ɵfac = function ResetComponent_Factory(t) { return new (t || ResetComponent)(); };
ResetComponent.ɵcmp = ɵɵdefineComponent({ type: ResetComponent, selectors: [["tui-image-editor-menus-buttons-reset"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested", resetImage: "resetImage" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-reset", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-reset", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-reset", 1, "hover", "use-default"]], template: function ResetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function ResetComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.reset() : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-reset tui-image-editor-item help " + (ctx.imageChosen ? "enabled" : "disabled"));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-reset"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ResetComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-reset',
                templateUrl: './reset.component.html',
                styleUrls: ['./reset.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }], resetImage: [{
            type: Output
        }] }); })();

class DeleteComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
    }
    ngOnChanges(changes) {
        var that = this;
        if (changes['imageEditor'] && changes['imageEditor'].currentValue != null) {
            this.imageEditor.on(eventNames.OBJECT_ACTIVATED, function (props) {
                that.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
            });
        }
    }
    deleteActiveObject() {
        if (this.activeObjectId != null) {
            this.cancelCroppingRequested.emit();
            try {
                this.imageEditor.removeActiveObject();
            }
            catch (_err) { }
            this.activeObjectId = null;
        }
    }
}
DeleteComponent.ɵfac = function DeleteComponent_Factory(t) { return new (t || DeleteComponent)(); };
DeleteComponent.ɵcmp = ɵɵdefineComponent({ type: DeleteComponent, selectors: [["tui-image-editor-menus-buttons-delete"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, features: [ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-delete", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-delete", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-delete", 1, "hover", "use-default"]], template: function DeleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function DeleteComponent_Template_div_click_0_listener() { return ctx.activeObjectId != null ? ctx.deleteActiveObject() : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-delete tui-image-editor-item help " + (ctx.activeObjectId != null ? "enabled" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-delete"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DeleteComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-delete',
                templateUrl: './delete.component.html',
                styleUrls: ['./delete.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();

class DeleteAllComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
    }
    deleteAll() {
        if (this.imageEditor != null && this.imageChosen) {
            this.cancelCroppingRequested.emit();
            this.imageEditor.clearObjects();
        }
    }
}
DeleteAllComponent.ɵfac = function DeleteAllComponent_Factory(t) { return new (t || DeleteAllComponent)(); };
DeleteAllComponent.ɵcmp = ɵɵdefineComponent({ type: DeleteAllComponent, selectors: [["tui-image-editor-menus-buttons-delete-all"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-delete-all", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-delete-all", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-delete-all", 1, "hover", "use-default"]], template: function DeleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function DeleteAllComponent_Template_div_click_0_listener() { return ctx.deleteAll(); });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-deleteAll tui-image-editor-item help " + (ctx.imageChosen ? "enabled" : "disabled"));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-deleteAll"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DeleteAllComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-delete-all',
                templateUrl: './delete-all.component.html',
                styleUrls: ['./delete-all.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();

class CropComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
CropComponent.ɵfac = function CropComponent_Factory(t) { return new (t || CropComponent)(); };
CropComponent.ɵcmp = ɵɵdefineComponent({ type: CropComponent, selectors: [["tui-image-editor-menus-buttons-crop"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-crop", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-crop", 1, "active", "use-default"], [0, "xlink", "href", "#ic-crop", 1, "hover", "use-default"]], template: function CropComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function CropComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("crop") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-crop tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-crop-tooltip"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CropComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-crop',
                templateUrl: './crop.component.html',
                styleUrls: ['./crop.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class FlipComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
FlipComponent.ɵfac = function FlipComponent_Factory(t) { return new (t || FlipComponent)(); };
FlipComponent.ɵcmp = ɵɵdefineComponent({ type: FlipComponent, selectors: [["tui-image-editor-menus-buttons-flip"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-flip", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-flip", 1, "active", "use-default"], [0, "xlink", "href", "#ic-flip", 1, "hover", "use-default"]], template: function FlipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function FlipComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("flip") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-flip tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-flip"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FlipComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-flip',
                templateUrl: './flip.component.html',
                styleUrls: ['./flip.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class RotateComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
RotateComponent.ɵfac = function RotateComponent_Factory(t) { return new (t || RotateComponent)(); };
RotateComponent.ɵcmp = ɵɵdefineComponent({ type: RotateComponent, selectors: [["tui-image-editor-menus-buttons-rotate"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-rotate", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-rotate", 1, "active", "use-default"], [0, "xlink", "href", "#ic-rotate", 1, "hover", "use-default"]], template: function RotateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function RotateComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("rotate") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-rotate tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-rotate"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RotateComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-rotate',
                templateUrl: './rotate.component.html',
                styleUrls: ['./rotate.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class DrawComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(); };
DrawComponent.ɵcmp = ɵɵdefineComponent({ type: DrawComponent, selectors: [["tui-image-editor-menus-buttons-draw"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-draw", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-draw", 1, "active", "use-default"], [0, "xlink", "href", "#ic-draw", 1, "hover", "use-default"]], template: function DrawComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function DrawComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("draw") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-draw tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-draw"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DrawComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-draw',
                templateUrl: './draw.component.html',
                styleUrls: ['./draw.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class ShapeComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
ShapeComponent.ɵfac = function ShapeComponent_Factory(t) { return new (t || ShapeComponent)(); };
ShapeComponent.ɵcmp = ɵɵdefineComponent({ type: ShapeComponent, selectors: [["tui-image-editor-menus-buttons-shape"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-shape", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape", 1, "active", "use-default"], [0, "xlink", "href", "#ic-shape", 1, "hover", "use-default"]], template: function ShapeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function ShapeComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("shape") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-shape tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-shape"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ShapeComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-shape',
                templateUrl: './shape.component.html',
                styleUrls: ['./shape.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class IconComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = ɵɵdefineComponent({ type: IconComponent, selectors: [["tui-image-editor-menus-buttons-icon"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-icon", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon", 1, "active", "use-default"], [0, "xlink", "href", "#ic-icon", 1, "hover", "use-default"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function IconComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("icon") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-icon tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-icon"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class TextComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(); };
TextComponent.ɵcmp = ɵɵdefineComponent({ type: TextComponent, selectors: [["tui-image-editor-menus-buttons-text"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-text", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text", 1, "hover", "use-default"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function TextComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("text") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-text tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-text"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-text',
                templateUrl: './text.component.html',
                styleUrls: ['./text.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class MaskComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
MaskComponent.ɵfac = function MaskComponent_Factory(t) { return new (t || MaskComponent)(); };
MaskComponent.ɵcmp = ɵɵdefineComponent({ type: MaskComponent, selectors: [["tui-image-editor-menus-buttons-mask"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-mask", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-mask", 1, "active", "use-default"], [0, "xlink", "href", "#ic-mask", 1, "hover", "use-default"]], template: function MaskComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function MaskComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("mask") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-mask tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-mask"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MaskComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-mask',
                templateUrl: './mask.component.html',
                styleUrls: ['./mask.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class FilterComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = ɵɵdefineComponent({ type: FilterComponent, selectors: [["tui-image-editor-menus-buttons-filter"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-filter", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-filter", 1, "active", "use-default"], [0, "xlink", "href", "#ic-filter", 1, "hover", "use-default"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function FilterComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("filter") : null; });
        ɵɵpipe(1, "translate");
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 1);
        ɵɵelement(3, "use", 2);
        ɵɵelement(4, "use", 3);
        ɵɵelement(5, "use", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap("tie-btn-filter tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-filter"));
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();

class CropComponent$1 {
    constructor() {
        this.activeCropMode = cropModes.PRESET_NONE;
        this.CROPMODE_PRESET_NONE = cropModes.PRESET_NONE;
        this.CROPMODE_PRESET_SQUARE = cropModes.PRESET_SQUARE;
        this.CROPMODE_PRESET_16_9 = cropModes.PRESET_16_9;
        this.CROPMODE_PRESET_3_2 = cropModes.PRESET_3_2;
        this.CROPMODE_PRESET_4_3 = cropModes.PRESET_4_3;
        this.CROPMODE_PRESET_5_4 = cropModes.PRESET_5_4;
        this.CROPMODE_PRESET_7_5 = cropModes.PRESET_7_5;
        this.cancelCroppingRequested = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['imageEditor'] && changes['imageEditor'].currentValue != null) {
            this.imageEditor.startDrawingMode('CROPPER');
        }
    }
    setCropMode(cropMode) {
        this.activeCropMode = cropMode;
        switch (cropMode) {
            case cropModes.PRESET_SQUARE:
                this.setCropzoneRect(1 / 1);
                break;
            case cropModes.PRESET_3_2:
                this.setCropzoneRect(3 / 2);
                break;
            case cropModes.PRESET_4_3:
                this.setCropzoneRect(4 / 3);
                break;
            case cropModes.PRESET_5_4:
                this.setCropzoneRect(5 / 4);
                break;
            case cropModes.PRESET_7_5:
                this.setCropzoneRect(7 / 5);
                break;
            case cropModes.PRESET_16_9:
                this.setCropzoneRect(16 / 9);
                break;
        }
    }
    setCropzoneRect(mode) {
        this.imageEditor.setCropzoneRect(mode);
    }
    applyCrop() {
        if (this.imageEditor != null) {
            const cropRect = this.imageEditor.getCropzoneRect();
            if (cropRect && !isEmptyCropzone(cropRect)) {
                this.imageEditor
                    .crop(cropRect)
                    .then(() => {
                    this.cancelCrop();
                    this.imageEditor._invoker.fire(eventNames.EXECUTE_COMMAND, historyNames.CROP);
                })['catch']((message) => Promise.reject(message));
            }
        }
    }
    cancelCrop() {
        this.cancelCroppingRequested.emit();
    }
}
CropComponent$1.ɵfac = function CropComponent_Factory(t) { return new (t || CropComponent$1)(); };
CropComponent$1.ɵcmp = ɵɵdefineComponent({ type: CropComponent$1, selectors: [["tui-image-editor-submenus-crop"]], inputs: { imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, features: [ɵɵNgOnChangesFeature], decls: 70, vars: 26, consts: [[1, "tui-image-editor-menu-crop"], [1, "tui-image-editor-submenu-item"], [1, "tui-image-editor-d-flex", "tui-image-editor-justify-content-center"], [1, "tie-crop-preset-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-shape-rectangle", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape-rectangle", 1, "active", "use-default"], [0, "xlink", "href", "#ic-crop", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-crop", 1, "active", "use-default"], [1, "tie-crop-button", "action", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-mb-3"], [1, "tui-image-editor-button", "apply", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", 3, "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-apply", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-apply", 1, "active", "use-default"], [1, "tui-image-editor-button", "cancel", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", 3, "click"], [0, "xlink", "href", "#ic-cancel", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-cancel", 1, "active", "use-default"]], template: function CropComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵlistener("click", function CropComponent_Template_div_click_4_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_NONE); });
        ɵɵelementStart(5, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(6, "svg", 5);
        ɵɵelement(7, "use", 6);
        ɵɵelement(8, "use", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(9, "label");
        ɵɵtext(10);
        ɵɵpipe(11, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 4);
        ɵɵlistener("click", function CropComponent_Template_div_click_12_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_SQUARE); });
        ɵɵelementStart(13, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(14, "svg", 5);
        ɵɵelement(15, "use", 8);
        ɵɵelement(16, "use", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(17, "label");
        ɵɵtext(18);
        ɵɵpipe(19, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 4);
        ɵɵlistener("click", function CropComponent_Template_div_click_20_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_3_2); });
        ɵɵelementStart(21, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(22, "svg", 5);
        ɵɵelement(23, "use", 8);
        ɵɵelement(24, "use", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(25, "label");
        ɵɵtext(26, " 3:2 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(27, "div", 4);
        ɵɵlistener("click", function CropComponent_Template_div_click_27_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_4_3); });
        ɵɵelementStart(28, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(29, "svg", 5);
        ɵɵelement(30, "use", 8);
        ɵɵelement(31, "use", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(32, "label");
        ɵɵtext(33, " 4:3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(34, "div", 4);
        ɵɵlistener("click", function CropComponent_Template_div_click_34_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_5_4); });
        ɵɵelementStart(35, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(36, "svg", 5);
        ɵɵelement(37, "use", 8);
        ɵɵelement(38, "use", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(39, "label");
        ɵɵtext(40, " 5:4 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(41, "div", 4);
        ɵɵlistener("click", function CropComponent_Template_div_click_41_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_7_5); });
        ɵɵelementStart(42, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(43, "svg", 5);
        ɵɵelement(44, "use", 8);
        ɵɵelement(45, "use", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(46, "label");
        ɵɵtext(47, " 7:5 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(48, "div", 4);
        ɵɵlistener("click", function CropComponent_Template_div_click_48_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_16_9); });
        ɵɵelementStart(49, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(50, "svg", 5);
        ɵɵelement(51, "use", 8);
        ɵɵelement(52, "use", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(53, "label");
        ɵɵtext(54, " 16:9 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(55, "div", 10);
        ɵɵelementStart(56, "div", 11);
        ɵɵlistener("click", function CropComponent_Template_div_click_56_listener() { return ctx.applyCrop(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(57, "svg", 12);
        ɵɵelement(58, "use", 13);
        ɵɵelement(59, "use", 14);
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(60, "label");
        ɵɵtext(61);
        ɵɵpipe(62, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(63, "div", 15);
        ɵɵlistener("click", function CropComponent_Template_div_click_63_listener() { return ctx.cancelCrop(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(64, "svg", 12);
        ɵɵelement(65, "use", 16);
        ɵɵelement(66, "use", 17);
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(67, "label");
        ɵɵtext(68);
        ɵɵpipe(69, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵclassMap("tui-image-editor-button preset preset-none " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_NONE ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 18, "tui-image-editor-angular-submenus-crop-custom"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button preset preset-square " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_SQUARE ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 20, "tui-image-editor-angular-submenus-crop-square"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button preset preset-3-2 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_3_2 ? "active" : ""));
        ɵɵadvance(7);
        ɵɵclassMap("tui-image-editor-button preset preset-4-3 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_4_3 ? "active" : ""));
        ɵɵadvance(7);
        ɵɵclassMap("tui-image-editor-button preset preset-5-4 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_5_4 ? "active" : ""));
        ɵɵadvance(7);
        ɵɵclassMap("tui-image-editor-button preset preset-7-5 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_7_5 ? "active" : ""));
        ɵɵadvance(7);
        ɵɵclassMap("tui-image-editor-button preset preset-16-9 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_16_9 ? "active" : ""));
        ɵɵadvance(13);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(62, 22, "tui-image-editor-angular-submenus-crop-apply"), " ");
        ɵɵadvance(7);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(69, 24, "tui-image-editor-angular-submenus-crop-cancel"), " ");
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CropComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-crop',
                templateUrl: './crop.component.html',
                styleUrls: ['./crop.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();

class FlipComponent$1 {
    constructor() { }
    flipX() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ((_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.flipX());
            }
            catch (_err) {
                console.error(_err);
            }
        });
    }
    flipY() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ((_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.flipY());
            }
            catch (_err) {
                console.error(_err);
            }
        });
    }
    resetFlip() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ((_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.resetFlip());
            }
            catch (_err) {
                console.error(_err);
            }
        });
    }
}
FlipComponent$1.ɵfac = function FlipComponent_Factory(t) { return new (t || FlipComponent$1)(); };
FlipComponent$1.ɵcmp = ɵɵdefineComponent({ type: FlipComponent$1, selectors: [["tui-image-editor-submenus-flip"]], inputs: { imageEditor: "imageEditor" }, decls: 30, vars: 9, consts: [[1, "tui-image-editor-menu-flip"], [1, "tie-flip-button", "tui-image-editor-submenu-item", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "tui-image-editor-button", "flipX", 3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-flip-x", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-flip-x", 1, "active", "use-default"], [1, "tui-image-editor-button", "flipY", 3, "click"], [0, "xlink", "href", "#ic-flip-y", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-flip-y", 1, "active", "use-default"], [1, "tui-image-editor-partition"], [1, "tui-image-editor-button", "resetFlip", 3, "click"], [0, "xlink", "href", "#ic-flip-reset", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-flip-reset", 1, "active", "use-default"]], template: function FlipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div");
        ɵɵelementStart(3, "div", 2);
        ɵɵlistener("click", function FlipComponent_Template_div_click_3_listener() { return ctx.flipX(); });
        ɵɵelementStart(4, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(5, "svg", 3);
        ɵɵelement(6, "use", 4);
        ɵɵelement(7, "use", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(8, "label");
        ɵɵtext(9);
        ɵɵpipe(10, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 6);
        ɵɵlistener("click", function FlipComponent_Template_div_click_11_listener() { return ctx.flipY(); });
        ɵɵelementStart(12, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(13, "svg", 3);
        ɵɵelement(14, "use", 7);
        ɵɵelement(15, "use", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(16, "label");
        ɵɵtext(17);
        ɵɵpipe(18, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(19, "div", 9);
        ɵɵelement(20, "div");
        ɵɵelementEnd();
        ɵɵelementStart(21, "div");
        ɵɵelementStart(22, "div", 10);
        ɵɵlistener("click", function FlipComponent_Template_div_click_22_listener() { return ctx.resetFlip(); });
        ɵɵelementStart(23, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(24, "svg", 3);
        ɵɵelement(25, "use", 11);
        ɵɵelement(26, "use", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(27, "label");
        ɵɵtext(28);
        ɵɵpipe(29, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(9);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 3, "tui-image-editor-angular-submenus-flip-x"), " ");
        ɵɵadvance(8);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 5, "tui-image-editor-angular-submenus-flip-y"), " ");
        ɵɵadvance(11);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(29, 7, "tui-image-editor-angular-submenus-flip-reset"), " ");
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FlipComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-flip',
                templateUrl: './flip.component.html',
                styleUrls: ['./flip.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }] }); })();

class RotateComponent$1 {
    constructor() {
        this.rotationChange = new EventEmitter();
    }
    rotateImage(rotationAngle) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newAngle = this.rotation + rotationAngle;
            const isRotatable = newAngle >= -360 && newAngle <= 360;
            if (isRotatable) {
                try {
                    yield ((_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.setAngle(newAngle));
                    this.rotation = newAngle;
                    this.rotationChange.emit(newAngle);
                }
                catch (_err) {
                    console.error(_err);
                }
            }
        });
    }
    rotationChanged(currentRotationValue, isSilent) {
        return __awaiter(this, void 0, void 0, function* () {
            let rotationValueToUse = typeof currentRotationValue === 'number'
                ? currentRotationValue
                : this.rotation;
            let functionToExecute = () => {
                var _a;
                (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.setAngle(rotationValueToUse, isSilent).catch((_err) => {
                    console.error(_err);
                }).finally(() => {
                    this.rotationChange.emit(rotationValueToUse);
                });
            };
            if (isSilent) {
                functionToExecute();
            }
            else {
                setTimeout(functionToExecute);
            }
        });
    }
}
RotateComponent$1.ɵfac = function RotateComponent_Factory(t) { return new (t || RotateComponent$1)(); };
RotateComponent$1.ɵcmp = ɵɵdefineComponent({ type: RotateComponent$1, selectors: [["tui-image-editor-submenus-rotate"]], inputs: { imageEditor: "imageEditor", rotation: "rotation" }, outputs: { rotationChange: "rotationChange" }, decls: 23, vars: 5, consts: [[1, "tui-image-editor-menu-rotate"], [1, "tui-image-editor-submenu-item"], [1, "tie-rotate-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "tui-image-editor-button", "clockwise", 3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-rotate-clockwise", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-rotate-clockwise", 1, "active", "use-default"], [1, "tui-image-editor-button", "counterclockwise", 3, "click"], [0, "xlink", "href", "#ic-rotate-counterclockwise", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-rotate-counterclockwise", 1, "active", "use-default"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "range"], ["type", "range", "min", "-360", "max", "360", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "-360", "max", "360", "step", "1", 1, "tie-rotate-range-value", "tui-image-editor-range-value", 3, "ngModel", "ngModelChange", "change"]], template: function RotateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵlistener("click", function RotateComponent_Template_div_click_3_listener() { return ctx.rotateImage(30); });
        ɵɵelementStart(4, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(5, "svg", 4);
        ɵɵelement(6, "use", 5);
        ɵɵelement(7, "use", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(8, "label");
        ɵɵtext(9, " 30\u00B0 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 7);
        ɵɵlistener("click", function RotateComponent_Template_div_click_10_listener() { return ctx.rotateImage(-30); });
        ɵɵelementStart(11, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(12, "svg", 4);
        ɵɵelement(13, "use", 8);
        ɵɵelement(14, "use", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(15, "label");
        ɵɵtext(16, " -30\u00B0 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "div", 10);
        ɵɵelementStart(18, "label", 11);
        ɵɵtext(19);
        ɵɵpipe(20, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(21, "input", 12);
        ɵɵlistener("ngModelChange", function RotateComponent_Template_input_ngModelChange_21_listener($event) { return ctx.rotation = $event; })("ngModelChange", function RotateComponent_Template_input_ngModelChange_21_listener($event) { return ctx.rotationChanged($event, true); })("change", function RotateComponent_Template_input_change_21_listener($event) { return ctx.rotationChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementStart(22, "input", 13);
        ɵɵlistener("ngModelChange", function RotateComponent_Template_input_ngModelChange_22_listener($event) { return ctx.rotation = $event; })("ngModelChange", function RotateComponent_Template_input_ngModelChange_22_listener($event) { return ctx.rotationChanged($event, true); })("change", function RotateComponent_Template_input_change_22_listener($event) { return ctx.rotationChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(19);
        ɵɵtextInterpolate(ɵɵpipeBind1(20, 3, "tui-image-editor-angular-submenus-rotate-slider"));
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.rotation);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.rotation);
    } }, directives: [RangeValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NumberValueAccessor], pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RotateComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-rotate',
                templateUrl: './rotate.component.html',
                styleUrls: ['./rotate.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], rotation: [{
            type: Input
        }], rotationChange: [{
            type: Output
        }] }); })();

class DrawComponent$1 {
    constructor() {
        this.defaultDrawShapeColors = defaultColors;
        this.drawStrokeWidthValue = 12;
        this.drawStrokeColor = 'rgba(0, 169, 255, 1)';
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
    }
    ngOnChanges(changes) {
        var _a, _b;
        var that = this;
        if (changes['imageEditor']) {
            this.activeObjectId = getActiveObjectId(changes['imageEditor'].currentValue);
            this.checkActiveObject(this.activeObjectId, true);
            (_a = changes['imageEditor'].previousValue) === null || _a === void 0 ? void 0 : _a.off(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_b = changes['imageEditor'].currentValue) === null || _b === void 0 ? void 0 : _b.on(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
        }
    }
    ngOnDestroy() {
        if (this.imageEditor) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
        }
    }
    onObjectActivated(props) {
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
        this.checkActiveObject(this.activeObjectId);
    }
    checkActiveObject(activeObjectId, enableDrawModeIfNoActiveObject = false) {
        var _a;
        let ifNoActiveObject = () => {
            this.setDrawMode('free', {
                width: this.drawStrokeWidthValue,
                color: this.drawStrokeColor,
            });
        };
        if (activeObjectId != null) {
            var props = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.getObjectProperties(activeObjectId, [
                'type',
                'strokeWidth',
                'stroke',
            ]);
            if (props && (props.type === 'path' || props.type === 'line')) {
                this.drawStrokeWidthValue = props.strokeWidth;
                this.drawStrokeColor = props.stroke;
            }
            else if (enableDrawModeIfNoActiveObject) {
                ifNoActiveObject();
            }
        }
        else if (enableDrawModeIfNoActiveObject) {
            ifNoActiveObject();
        }
    }
    drawStrokeWidthChanged(currentStrokeWidth, isSilent) {
        this.setDrawMode(this.drawType, {
            width: typeof currentStrokeWidth === "number" ? currentStrokeWidth : this.drawStrokeWidthValue,
            color: this.drawStrokeColor,
        });
        this.strokeChangeActiveObject('strokeWidth', isSilent);
    }
    setDrawType(type) {
        clearSelection(this.imageEditor);
        if (this.drawType != type) {
            this.drawType = type;
            this.setDrawMode(this.drawType, {
                width: this.drawStrokeWidthValue,
                color: this.drawStrokeColor,
            });
        }
        else {
            this.drawType = null;
            this.imageEditor.stopDrawingMode();
        }
    }
    drawStrokeColorChanged(currentStrokeColor) {
        this.setDrawMode(this.drawType, {
            width: this.drawStrokeWidthValue,
            color: currentStrokeColor,
        });
        this.strokeChangeActiveObject('strokeColor', false);
    }
    setDrawMode(type, settings) {
        this.drawType = type;
        this.imageEditor.stopDrawingMode();
        if (type === 'free') {
            clearSelection(this.imageEditor);
            this.imageEditor.startDrawingMode('FREE_DRAWING', settings);
        }
        else if (type === 'line') {
            clearSelection(this.imageEditor);
            this.imageEditor.startDrawingMode('LINE_DRAWING', settings);
        }
    }
    strokeChangeActiveObject(changedProperty, isSilent) {
        if (this.activeObjectId != null &&
            getActiveObjectId(this.imageEditor) == this.activeObjectId) {
            var props = this.imageEditor.getObjectProperties(this.activeObjectId, 'type');
            if (props != null && (props.type === 'path' || props.type === 'line')) {
                let parameters = null;
                switch (changedProperty) {
                    case 'strokeWidth':
                        parameters = {
                            strokeWidth: this.drawStrokeWidthValue,
                        };
                        break;
                    case 'strokeColor':
                        parameters = {
                            stroke: this.drawStrokeColor,
                        };
                        break;
                }
                if (isSilent) {
                    this.imageEditor.setObjectPropertiesQuietly(this.activeObjectId, parameters);
                }
                else {
                    setTimeout(() => {
                        this.imageEditor.setObjectProperties(this.activeObjectId, parameters);
                    });
                }
            }
        }
    }
}
DrawComponent$1.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent$1)(); };
DrawComponent$1.ɵcmp = ɵɵdefineComponent({ type: DrawComponent$1, selectors: [["tui-image-editor-submenus-draw"]], inputs: { imageEditor: "imageEditor", defaultDrawShapeColors: "defaultDrawShapeColors" }, features: [ɵɵNgOnChangesFeature], decls: 34, vars: 24, consts: [[1, "tui-image-editor-menu-draw"], [1, "tui-image-editor-submenu-item"], [1, "tie-draw-line-select-button"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-draw-free", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-draw-free", 1, "active", "use-default"], [0, "xlink", "href", "#ic-draw-line", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-draw-line", 1, "active", "use-default"], [1, "tui-image-editor-partition"], ["title", "Color", 1, "tie-draw-color", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], ["readonly", "", 1, "tie-draw-color-picker", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "range"], ["type", "range", "min", "5", "max", "30", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "5", "max", "30", "step", "1", 1, "tie-draw-range-value", "tui-image-editor-range-value", 3, "ngModel", "ngModelChange", "change"]], template: function DrawComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵlistener("click", function DrawComponent_Template_div_click_4_listener() { return ctx.setDrawType("free"); });
        ɵɵelementStart(5, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(6, "svg", 5);
        ɵɵelement(7, "use", 6);
        ɵɵelement(8, "use", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(9, "label");
        ɵɵtext(10);
        ɵɵpipe(11, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 4);
        ɵɵlistener("click", function DrawComponent_Template_div_click_12_listener() { return ctx.setDrawType("line"); });
        ɵɵelementStart(13, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(14, "svg", 5);
        ɵɵelement(15, "use", 8);
        ɵɵelement(16, "use", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(17, "label");
        ɵɵtext(18);
        ɵɵpipe(19, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 10);
        ɵɵelement(21, "div");
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 11);
        ɵɵelementStart(23, "label");
        ɵɵelementStart(24, "input", 12);
        ɵɵlistener("colorPickerChange", function DrawComponent_Template_input_colorPickerChange_24_listener($event) { return ctx.drawStrokeColor = $event; })("colorPickerChange", function DrawComponent_Template_input_colorPickerChange_24_listener($event) { return ctx.drawStrokeColorChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(25, "div");
        ɵɵtext(26);
        ɵɵpipe(27, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(28, "div", 13);
        ɵɵelementStart(29, "label", 14);
        ɵɵtext(30);
        ɵɵpipe(31, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(32, "input", 15);
        ɵɵlistener("ngModelChange", function DrawComponent_Template_input_ngModelChange_32_listener($event) { return ctx.drawStrokeWidthValue = $event; })("ngModelChange", function DrawComponent_Template_input_ngModelChange_32_listener($event) { return ctx.drawStrokeWidthChanged($event, true); })("change", function DrawComponent_Template_input_change_32_listener($event) { return ctx.drawStrokeWidthChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementStart(33, "input", 16);
        ɵɵlistener("ngModelChange", function DrawComponent_Template_input_ngModelChange_33_listener($event) { return ctx.drawStrokeWidthValue = $event; })("ngModelChange", function DrawComponent_Template_input_ngModelChange_33_listener($event) { return ctx.drawStrokeWidthChanged($event, true); })("change", function DrawComponent_Template_input_change_33_listener($event) { return ctx.drawStrokeWidthChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵclassMap("tui-image-editor-button free " + (ctx.drawType == "free" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 16, "tui-image-editor-angular-submenus-draw-free"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button line " + (ctx.drawType == "line" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 18, "tui-image-editor-angular-submenus-draw-straight"), " ");
        ɵɵadvance(6);
        ɵɵstyleProp("background", ctx.drawStrokeColor);
        ɵɵproperty("colorPicker", ctx.drawStrokeColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultDrawShapeColors)("cpUseRootViewContainer", true);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 20, "tui-image-editor-angular-submenus-draw-color"), " ");
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(31, 22, "tui-image-editor-angular-submenus-draw-strokeWidth"));
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.drawStrokeWidthValue);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.drawStrokeWidthValue);
    } }, directives: [ColorPickerDirective, RangeValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NumberValueAccessor], pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DrawComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-draw',
                templateUrl: './draw.component.html',
                styleUrls: ['./draw.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], defaultDrawShapeColors: [{
            type: Input
        }] }); })();

class ShapeComponent$1 {
    constructor() {
        this.defaultShapeStrokeColors = defaultColors;
        this.defaultShapeFillColors = defaultColors;
        this.shapeStrokeWidthValue = 3;
        this.shapeFillColor = 'rgba(255, 255, 255, 0)';
        this.shapeStrokeColor = 'rgba(0, 169, 255, 1)';
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
        this.onObjectAddedEventListener = this.onObjectAdded.bind(this);
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        var that = this;
        if (changes['imageEditor']) {
            this.activeObjectId = getActiveObjectId(changes['imageEditor'].currentValue);
            this.checkActiveObject(this.activeObjectId);
            (_a = changes['imageEditor'].previousValue) === null || _a === void 0 ? void 0 : _a.off(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_b = changes['imageEditor'].currentValue) === null || _b === void 0 ? void 0 : _b.on(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_c = changes['imageEditor'].previousValue) === null || _c === void 0 ? void 0 : _c.off(eventNames.OBJECT_ADDED, that.onObjectAddedEventListener);
            (_d = changes['imageEditor'].currentValue) === null || _d === void 0 ? void 0 : _d.on(eventNames.OBJECT_ADDED, that.onObjectAddedEventListener);
        }
    }
    ngOnDestroy() {
        if (this.imageEditor) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
            this.imageEditor.off(eventNames.OBJECT_ADDED, this.onObjectAddedEventListener);
        }
    }
    onObjectActivated(props) {
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
        this.checkActiveObject(this.activeObjectId);
    }
    onObjectAdded(props) {
        var _a;
        if (props && ['rect', 'circle', 'triangle'].indexOf(props.type) > -1) {
            this.shapeType = null;
            (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.stopDrawingMode();
        }
    }
    checkActiveObject(activeObjectId) {
        var _a;
        if (activeObjectId != null) {
            var props = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.getObjectProperties(activeObjectId, [
                'type',
                'strokeWidth',
                'stroke',
                'fill',
            ]);
            if (props && ['rect', 'circle', 'triangle'].indexOf(props.type) > -1) {
                this.shapeStrokeWidthValue = props.strokeWidth;
                this.shapeFillColor =
                    typeof props.fill == 'object' && props.fill.type == 'color'
                        ? props.fill.color
                        : props.fill == null || props.fill.trim() == ''
                            ? 'rgba(255, 255, 255, 0)'
                            : props.fill;
                this.shapeStrokeColor =
                    props.stroke == null || props.stroke.trim() == ''
                        ? 'rgba(255, 255, 255, 0)'
                        : props.stroke;
            }
        }
    }
    shapeStrokeWidthChanged(currentStrokeWidth, isSilent) {
        this.setDrawingShape(this.shapeType, {
            fill: this.shapeFillColor,
            stroke: this.shapeStrokeColor,
            strokeWidth: typeof currentStrokeWidth === "number" ? currentStrokeWidth : this.shapeStrokeWidthValue,
        });
        this.shapeChangeActiveObject('strokeWidth', isSilent);
    }
    shapeColorChanged(type, currentColor) {
        switch (type) {
            case 'fill':
                this.setDrawingShape(this.shapeType, {
                    fill: currentColor,
                    stroke: this.shapeStrokeColor,
                    strokeWidth: this.shapeStrokeWidthValue,
                });
                break;
            case 'stroke':
                this.setDrawingShape(this.shapeType, {
                    fill: this.shapeFillColor,
                    stroke: currentColor,
                    strokeWidth: this.shapeStrokeWidthValue,
                });
                break;
        }
        this.shapeChangeActiveObject(type == 'stroke' ? 'strokeColor' : 'fillColor');
    }
    setShapeType(type) {
        clearSelection(this.imageEditor);
        if (this.shapeType != type) {
            this.shapeType = type;
            this.imageEditor.startDrawingMode('SHAPE');
            this.setDrawingShape(this.shapeType, {
                fill: this.shapeFillColor,
                stroke: this.shapeStrokeColor,
                strokeWidth: this.shapeStrokeWidthValue,
            });
        }
        else {
            this.shapeType = null;
            this.imageEditor.stopDrawingMode();
        }
    }
    setDrawingShape(type, options) {
        this.imageEditor.setDrawingShape(type, options);
    }
    shapeChangeActiveObject(changedProperty, isSilent = false) {
        if (this.activeObjectId != null &&
            getActiveObjectId(this.imageEditor) == this.activeObjectId) {
            var props = this.imageEditor.getObjectProperties(this.activeObjectId, 'type');
            if (props != null &&
                ['rect', 'circle', 'triangle'].indexOf(props.type) > -1) {
                let parameters = null;
                switch (changedProperty) {
                    case 'strokeWidth':
                        parameters = {
                            strokeWidth: this.shapeStrokeWidthValue,
                        };
                        break;
                    case 'strokeColor':
                        parameters = {
                            stroke: this.shapeStrokeColor,
                        };
                        break;
                    case 'fillColor':
                        parameters = {
                            fill: this.shapeFillColor,
                        };
                        break;
                }
                let functionToExecute = () => {
                    this.imageEditor.changeShape(this.activeObjectId, parameters, isSilent);
                };
                if (isSilent) {
                    functionToExecute();
                }
                else {
                    setTimeout(functionToExecute);
                }
            }
        }
    }
}
ShapeComponent$1.ɵfac = function ShapeComponent_Factory(t) { return new (t || ShapeComponent$1)(); };
ShapeComponent$1.ɵcmp = ɵɵdefineComponent({ type: ShapeComponent$1, selectors: [["tui-image-editor-submenus-shape"]], inputs: { imageEditor: "imageEditor", defaultShapeStrokeColors: "defaultShapeStrokeColors", defaultShapeFillColors: "defaultShapeFillColors" }, features: [ɵɵNgOnChangesFeature], decls: 50, vars: 38, consts: [[1, "tui-image-editor-menu-shape"], [1, "tui-image-editor-submenu-item"], [1, "tui-image-editor-d-flex", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [1, "tie-shape-button"], [3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-shape-rectangle", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape-rectangle", 1, "active", "use-default"], [0, "xlink", "href", "#ic-shape-circle", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape-circle", 1, "active", "use-default"], [0, "xlink", "href", "#ic-shape-triangle", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape-triangle", 1, "active", "use-default"], [1, "tui-image-editor-partition"], [1, "tie-shape-color-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row"], ["title", "Fill", 1, "tie-color-fill", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], ["readonly", "", 1, "tie-draw-color-picker", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], ["title", "Stroke", 1, "tie-color-stroke", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-justify-content-center", "tui-image-editor-align-items-center", "tui-image-editor-mb-3"], [1, "range"], ["type", "range", "min", "2", "max", "300", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "2", "max", "300", "step", "1", 1, "tie-draw-range-value", "tui-image-editor-range-value", 3, "ngModel", "ngModelChange", "change"]], template: function ShapeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵlistener("click", function ShapeComponent_Template_div_click_5_listener() { return ctx.setShapeType("rect"); });
        ɵɵelementStart(6, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(7, "svg", 6);
        ɵɵelement(8, "use", 7);
        ɵɵelement(9, "use", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(10, "label");
        ɵɵtext(11);
        ɵɵpipe(12, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 5);
        ɵɵlistener("click", function ShapeComponent_Template_div_click_13_listener() { return ctx.setShapeType("circle"); });
        ɵɵelementStart(14, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(15, "svg", 6);
        ɵɵelement(16, "use", 9);
        ɵɵelement(17, "use", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(18, "label");
        ɵɵtext(19);
        ɵɵpipe(20, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(21, "div", 5);
        ɵɵlistener("click", function ShapeComponent_Template_div_click_21_listener() { return ctx.setShapeType("triangle"); });
        ɵɵelementStart(22, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(23, "svg", 6);
        ɵɵelement(24, "use", 11);
        ɵɵelement(25, "use", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(26, "label");
        ɵɵtext(27);
        ɵɵpipe(28, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "div", 13);
        ɵɵelement(30, "div");
        ɵɵelementEnd();
        ɵɵelementStart(31, "div", 14);
        ɵɵelementStart(32, "div", 15);
        ɵɵelementStart(33, "label");
        ɵɵelementStart(34, "input", 16);
        ɵɵlistener("colorPickerChange", function ShapeComponent_Template_input_colorPickerChange_34_listener($event) { return ctx.shapeFillColor = $event; })("colorPickerChange", function ShapeComponent_Template_input_colorPickerChange_34_listener($event) { return ctx.shapeColorChanged("fill", $event); });
        ɵɵelementEnd();
        ɵɵelementStart(35, "div");
        ɵɵtext(36);
        ɵɵpipe(37, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(38, "div", 17);
        ɵɵelementStart(39, "label");
        ɵɵelementStart(40, "input", 16);
        ɵɵlistener("colorPickerChange", function ShapeComponent_Template_input_colorPickerChange_40_listener($event) { return ctx.shapeStrokeColor = $event; })("colorPickerChange", function ShapeComponent_Template_input_colorPickerChange_40_listener($event) { return ctx.shapeColorChanged("stroke", $event); });
        ɵɵelementEnd();
        ɵɵelementStart(41, "div");
        ɵɵtext(42);
        ɵɵpipe(43, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(44, "div", 18);
        ɵɵelementStart(45, "label", 19);
        ɵɵtext(46);
        ɵɵpipe(47, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(48, "input", 20);
        ɵɵlistener("ngModelChange", function ShapeComponent_Template_input_ngModelChange_48_listener($event) { return ctx.shapeStrokeWidthValue = $event; })("ngModelChange", function ShapeComponent_Template_input_ngModelChange_48_listener($event) { return ctx.shapeStrokeWidthChanged($event, true); })("change", function ShapeComponent_Template_input_change_48_listener($event) { return ctx.shapeStrokeWidthChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementStart(49, "input", 21);
        ɵɵlistener("ngModelChange", function ShapeComponent_Template_input_ngModelChange_49_listener($event) { return ctx.shapeStrokeWidthValue = $event; })("ngModelChange", function ShapeComponent_Template_input_ngModelChange_49_listener($event) { return ctx.shapeStrokeWidthChanged($event, true); })("change", function ShapeComponent_Template_input_change_49_listener($event) { return ctx.shapeStrokeWidthChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵclassMap("tui-image-editor-button rect " + (ctx.shapeType == "rect" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 26, "tui-image-editor-angular-submenus-shape-rectangle"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button circle " + (ctx.shapeType == "circle" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 28, "tui-image-editor-angular-submenus-shape-circle"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button triangle " + (ctx.shapeType == "triangle" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 30, "tui-image-editor-angular-submenus-shape-triangle"), " ");
        ɵɵadvance(7);
        ɵɵstyleProp("background", ctx.shapeFillColor);
        ɵɵproperty("colorPicker", ctx.shapeFillColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultShapeFillColors)("cpUseRootViewContainer", true);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(37, 32, "tui-image-editor-angular-submenus-shape-fill"), " ");
        ɵɵadvance(4);
        ɵɵstyleProp("background", ctx.shapeStrokeColor);
        ɵɵproperty("colorPicker", ctx.shapeStrokeColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultShapeStrokeColors)("cpUseRootViewContainer", true);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(43, 34, "tui-image-editor-angular-submenus-shape-stroke"), " ");
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(47, 36, "tui-image-editor-angular-submenus-shape-strokeWidth"));
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.shapeStrokeWidthValue);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.shapeStrokeWidthValue);
    } }, directives: [ColorPickerDirective, RangeValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NumberValueAccessor], pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ShapeComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-shape',
                templateUrl: './shape.component.html',
                styleUrls: ['./shape.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], defaultShapeStrokeColors: [{
            type: Input
        }], defaultShapeFillColors: [{
            type: Input
        }] }); })();

class IconComponent$1 {
    constructor() {
        this.defaultIconColors = defaultColors;
        this.iconColor = 'rgba(255, 187, 59, 1)';
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
        this.onObjectAddedEventListener = this.onObjectAdded.bind(this);
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        var that = this;
        if (changes['imageEditor']) {
            this.activeObjectId = getActiveObjectId(changes['imageEditor'].currentValue);
            this.checkActiveObject(this.activeObjectId);
            (_a = changes['imageEditor'].previousValue) === null || _a === void 0 ? void 0 : _a.off(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_b = changes['imageEditor'].currentValue) === null || _b === void 0 ? void 0 : _b.on(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_c = changes['imageEditor'].previousValue) === null || _c === void 0 ? void 0 : _c.off(eventNames.OBJECT_ADDED, that.onObjectAddedEventListener);
            (_d = changes['imageEditor'].currentValue) === null || _d === void 0 ? void 0 : _d.on(eventNames.OBJECT_ADDED, that.onObjectAddedEventListener);
        }
    }
    ngOnDestroy() {
        if (this.imageEditor) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
            this.imageEditor.off(eventNames.OBJECT_ADDED, this.onObjectAddedEventListener);
        }
    }
    onObjectActivated(props) {
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
        this.checkActiveObject(this.activeObjectId);
    }
    onObjectAdded(props) {
        if (props && props.type === 'icon') {
            this.setActiveIconType(this.iconType, false);
        }
    }
    checkActiveObject(activeObjectId) {
        var _a;
        if (activeObjectId != null) {
            var props = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.getObjectProperties(activeObjectId, [
                'type',
                'fill',
            ]);
            if (props && props.type === 'icon') {
                this.iconColor =
                    typeof props.fill == 'object' && props.fill.type == 'color'
                        ? props.fill.color
                        : props.fill == null || props.fill.trim() == ''
                            ? 'rgba(255, 187, 59, 1)'
                            : props.fill;
            }
        }
    }
    setActiveIconType(newIconType, discardSelection = true) {
        if (discardSelection) {
            clearSelection(this.imageEditor);
        }
        if (this.iconType != newIconType) {
            this.iconType = newIconType;
            this.imageEditor.startDrawingMode('ICON');
            this.imageEditor.setDrawingIcon(newIconType, this.iconColor);
            this.imageEditor.changeCursor('crosshair');
        }
        else {
            this.iconType = null;
            this.imageEditor.stopDrawingMode();
            this.imageEditor.changeCursor('default');
        }
    }
    iconColorChanged(currentColor) {
        this.iconChangeActiveObject();
    }
    iconChangeActiveObject() {
        if (this.activeObjectId != null &&
            getActiveObjectId(this.imageEditor) == this.activeObjectId) {
            var props = this.imageEditor.getObjectProperties(this.activeObjectId, 'type');
            if (props.type === 'icon') {
                this.imageEditor.setObjectProperties(this.activeObjectId, {
                    fill: this.iconColor,
                });
            }
        }
    }
    registerIcon(obj) {
        this.imageEditor.registerIcons(obj);
    }
    onIconChosen(event) {
        let selectedFile = event.target.files[0];
        if (selectedFile != null) {
            var imgUrl = URL.createObjectURL(selectedFile);
            const imagetracer = new ImageTracer();
            imagetracer.imageToSVG(imgUrl, (svgstr) => {
                const [, svgPath] = svgstr.match(/path[^>]*d="([^"]*)"/);
                const iconObj = {};
                iconObj[selectedFile.name] = svgPath;
                this.registerIcon(iconObj);
                this.imageEditor.addIcon(selectedFile.name, {
                    fill: this.iconColor,
                    left: 100,
                    top: 100,
                });
            }, ImageTracer.tracerDefaultOption());
        }
    }
}
IconComponent$1.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent$1)(); };
IconComponent$1.ɵcmp = ɵɵdefineComponent({ type: IconComponent$1, selectors: [["tui-image-editor-submenus-icon"]], inputs: { imageEditor: "imageEditor", defaultIconColors: "defaultIconColors" }, features: [ɵɵNgOnChangesFeature], decls: 97, vars: 57, consts: [[1, "tui-image-editor-menu-icon"], [1, "tui-image-editor-submenu-item", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-flex-nowrap"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [1, "tie-icon-add-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row"], ["data-icontype", "icon-arrow", 3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-icon-arrow", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-arrow", 1, "active", "use-default"], ["data-icontype", "icon-arrow-2", 3, "click"], [0, "xlink", "href", "#ic-icon-arrow-2", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-arrow-2", 1, "active", "use-default"], ["data-icontype", "icon-arrow-3", 3, "click"], [0, "xlink", "href", "#ic-icon-arrow-3", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-arrow-3", 1, "active", "use-default"], ["data-icontype", "icon-star", 3, "click"], [0, "xlink", "href", "#ic-icon-star", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-star", 1, "active", "use-default"], ["data-icontype", "icon-star-2", 3, "click"], [0, "xlink", "href", "#ic-icon-star-2", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-star-2", 1, "active", "use-default"], ["data-icontype", "icon-polygon", 3, "click"], [0, "xlink", "href", "#ic-icon-polygon", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-polygon", 1, "active", "use-default"], ["data-icontype", "icon-location", 3, "click"], [0, "xlink", "href", "#ic-icon-location", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-location", 1, "active", "use-default"], ["data-icontype", "icon-heart", 3, "click"], [0, "xlink", "href", "#ic-icon-heart", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-heart", 1, "active", "use-default"], ["data-icontype", "icon-bubble", 3, "click"], [0, "xlink", "href", "#ic-icon-bubble", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-bubble", 1, "active", "use-default"], [1, "tui-image-editor-partition"], [1, "tie-icon-add-button"], [1, "tui-image-editor-button", 2, "margin", "0"], ["type", "file", "accept", "image/*", 1, "tie-icon-image-file", 3, "change"], [0, "xlink", "href", "#ic-icon-load", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-load", 1, "active", "use-default"], ["title", "Color", 1, "tie-icon-color", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], ["readonly", "", 1, "tie-icon-color-picker", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵlistener("click", function IconComponent_Template_div_click_4_listener() { return ctx.setActiveIconType("icon-arrow"); });
        ɵɵelementStart(5, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(6, "svg", 5);
        ɵɵelement(7, "use", 6);
        ɵɵelement(8, "use", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(9, "label");
        ɵɵtext(10);
        ɵɵpipe(11, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 8);
        ɵɵlistener("click", function IconComponent_Template_div_click_12_listener() { return ctx.setActiveIconType("icon-arrow-2"); });
        ɵɵelementStart(13, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(14, "svg", 5);
        ɵɵelement(15, "use", 9);
        ɵɵelement(16, "use", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(17, "label");
        ɵɵtext(18);
        ɵɵpipe(19, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 11);
        ɵɵlistener("click", function IconComponent_Template_div_click_20_listener() { return ctx.setActiveIconType("icon-arrow-3"); });
        ɵɵelementStart(21, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(22, "svg", 5);
        ɵɵelement(23, "use", 12);
        ɵɵelement(24, "use", 13);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(25, "label");
        ɵɵtext(26);
        ɵɵpipe(27, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(28, "div", 14);
        ɵɵlistener("click", function IconComponent_Template_div_click_28_listener() { return ctx.setActiveIconType("icon-star"); });
        ɵɵelementStart(29, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(30, "svg", 5);
        ɵɵelement(31, "use", 15);
        ɵɵelement(32, "use", 16);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(33, "label");
        ɵɵtext(34);
        ɵɵpipe(35, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(36, "div", 17);
        ɵɵlistener("click", function IconComponent_Template_div_click_36_listener() { return ctx.setActiveIconType("icon-star-2"); });
        ɵɵelementStart(37, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(38, "svg", 5);
        ɵɵelement(39, "use", 18);
        ɵɵelement(40, "use", 19);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(41, "label");
        ɵɵtext(42);
        ɵɵpipe(43, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(44, "div", 20);
        ɵɵlistener("click", function IconComponent_Template_div_click_44_listener() { return ctx.setActiveIconType("icon-polygon"); });
        ɵɵelementStart(45, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(46, "svg", 5);
        ɵɵelement(47, "use", 21);
        ɵɵelement(48, "use", 22);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(49, "label");
        ɵɵtext(50);
        ɵɵpipe(51, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(52, "div", 23);
        ɵɵlistener("click", function IconComponent_Template_div_click_52_listener() { return ctx.setActiveIconType("icon-location"); });
        ɵɵelementStart(53, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(54, "svg", 5);
        ɵɵelement(55, "use", 24);
        ɵɵelement(56, "use", 25);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(57, "label");
        ɵɵtext(58);
        ɵɵpipe(59, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(60, "div", 26);
        ɵɵlistener("click", function IconComponent_Template_div_click_60_listener() { return ctx.setActiveIconType("icon-heart"); });
        ɵɵelementStart(61, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(62, "svg", 5);
        ɵɵelement(63, "use", 27);
        ɵɵelement(64, "use", 28);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(65, "label");
        ɵɵtext(66);
        ɵɵpipe(67, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(68, "div", 29);
        ɵɵlistener("click", function IconComponent_Template_div_click_68_listener() { return ctx.setActiveIconType("icon-bubble"); });
        ɵɵelementStart(69, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(70, "svg", 5);
        ɵɵelement(71, "use", 30);
        ɵɵelement(72, "use", 31);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(73, "label");
        ɵɵtext(74);
        ɵɵpipe(75, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(76, "div", 32);
        ɵɵelement(77, "div");
        ɵɵelementEnd();
        ɵɵelementStart(78, "div", 33);
        ɵɵelementStart(79, "div", 34);
        ɵɵelementStart(80, "div");
        ɵɵelementStart(81, "input", 35);
        ɵɵlistener("change", function IconComponent_Template_input_change_81_listener($event) { return ctx.onIconChosen($event); });
        ɵɵelementEnd();
        ɵɵnamespaceSVG();
        ɵɵelementStart(82, "svg", 5);
        ɵɵelement(83, "use", 36);
        ɵɵelement(84, "use", 37);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(85, "label");
        ɵɵtext(86);
        ɵɵpipe(87, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(88, "div", 32);
        ɵɵelement(89, "div");
        ɵɵelementEnd();
        ɵɵelementStart(90, "div");
        ɵɵelementStart(91, "div", 38);
        ɵɵelementStart(92, "label");
        ɵɵelementStart(93, "input", 39);
        ɵɵlistener("colorPickerChange", function IconComponent_Template_input_colorPickerChange_93_listener($event) { return ctx.iconColor = $event; })("colorPickerChange", function IconComponent_Template_input_colorPickerChange_93_listener($event) { return ctx.iconColorChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(94, "div");
        ɵɵtext(95);
        ɵɵpipe(96, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-arrow" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 35, "tui-image-editor-angular-submenus-icon-arrow1"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-arrow-2" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 37, "tui-image-editor-angular-submenus-icon-arrow2"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-arrow-3" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 39, "tui-image-editor-angular-submenus-icon-arrow3"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-star" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(35, 41, "tui-image-editor-angular-submenus-icon-star1"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-star-2" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(43, 43, "tui-image-editor-angular-submenus-icon-star2"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-polygon" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(51, 45, "tui-image-editor-angular-submenus-icon-polygon"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-location" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(59, 47, "tui-image-editor-angular-submenus-icon-location"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-heart" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(67, 49, "tui-image-editor-angular-submenus-icon-heart"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-bubble" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(75, 51, "tui-image-editor-angular-submenus-icon-bubble"), " ");
        ɵɵadvance(12);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(87, 53, "tui-image-editor-angular-submenus-icon-customIcon"), " ");
        ɵɵadvance(7);
        ɵɵstyleProp("background", ctx.iconColor);
        ɵɵproperty("colorPicker", ctx.iconColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultIconColors)("cpUseRootViewContainer", true);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(96, 55, "tui-image-editor-angular-submenus-icon-color"), " ");
    } }, directives: [ColorPickerDirective], pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], defaultIconColors: [{
            type: Input
        }] }); })();

class TextComponent$1 {
    constructor() {
        this.defaultTextColors = defaultColors;
        this.textColor = 'rgba(255, 187, 59, 1)';
        this.textSizeValue = 50;
        this.textAlign = 'left';
        this.textFontFamily = 'Noto Sans';
        this.textFontStyle = 'normal';
        this.textFontWeight = 'normal';
        this.textDecoration = null;
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
        this.onTextAddedEventListener = this.onTextAdded.bind(this);
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d, _e;
        var that = this;
        if (changes['imageEditor']) {
            this.activeObjectId = getActiveObjectId(changes['imageEditor'].currentValue);
            this.checkActiveObject(this.activeObjectId);
            (_a = changes['imageEditor'].currentValue) === null || _a === void 0 ? void 0 : _a.startDrawingMode('TEXT');
            (_b = changes['imageEditor'].previousValue) === null || _b === void 0 ? void 0 : _b.off(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_c = changes['imageEditor'].currentValue) === null || _c === void 0 ? void 0 : _c.on(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_d = changes['imageEditor'].previousValue) === null || _d === void 0 ? void 0 : _d.off(eventNames.ADD_TEXT, that.onTextAddedEventListener);
            (_e = changes['imageEditor'].currentValue) === null || _e === void 0 ? void 0 : _e.on(eventNames.ADD_TEXT, that.onTextAddedEventListener);
        }
    }
    ngOnDestroy() {
        if (this.imageEditor) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
            this.imageEditor.off(eventNames.ADD_TEXT, this.onTextAddedEventListener);
        }
    }
    onObjectActivated(props) {
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
        this.checkActiveObject(this.activeObjectId);
    }
    onTextAdded(e) {
        this.imageEditor
            .addText('Edit text', {
            position: e.originPosition,
            styles: {
                fill: this.textColor,
                fontFamily: this.textFontFamily,
                fontSize: this.textSizeValue,
                fontStyle: this.textFontStyle,
                fontWeight: this.textFontWeight,
                textAlign: this.textAlign,
                textDecoration: this.textDecoration,
                underline: this.textDecoration == 'underline',
            },
        })
            .then(() => {
            var _a;
            this.imageEditor.changeCursor('default');
            (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.startDrawingMode('TEXT');
        });
    }
    checkActiveObject(activeObjectId) {
        var _a, _b;
        if (activeObjectId != null) {
            var props = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.getObjectProperties(activeObjectId, [
                'type',
                'fill',
                'textAlign',
                'textDecoration',
                'fontFamily',
                'fontStyle',
                'fontWeight',
                'fontSize',
            ]);
            if (props && (props.type === 'i-text' || props.type === 'text')) {
                this.textAlign = props.textAlign;
                this.textColor = props.fill;
                this.textDecoration = props.textDecoration;
                this.textFontFamily = props.fontFamily;
                this.textFontStyle = props.fontStyle;
                this.textFontWeight = props.fontWeight;
                this.textSizeValue = props.fontSize;
                (_b = this.imageEditor) === null || _b === void 0 ? void 0 : _b.startDrawingMode('TEXT');
            }
        }
    }
    changeTextAlignment(newValue) {
        this.textAlign = newValue;
        this.textChangeActiveObject('textAlign');
    }
    changeTextFontStyle(newFontStyle) {
        this.textFontStyle = newFontStyle;
        this.textChangeActiveObject('fontStyle');
    }
    changeTextFontWeight(newFontWeight) {
        this.textFontWeight = newFontWeight;
        this.textChangeActiveObject('fontWeight');
    }
    changeTextDecoration(newTextDecoration) {
        this.textDecoration = newTextDecoration;
        this.textChangeActiveObject('textDecoration');
    }
    textSizeValueChanged(currentTextSizeValue, isSilent) {
        this.textChangeActiveObject('fontSize', isSilent);
    }
    textColorChanged(currentColor) {
        this.textChangeActiveObject('color');
    }
    textChangeActiveObject(type, isSilent = false) {
        if (this.activeObjectId != null &&
            getActiveObjectId(this.imageEditor) == this.activeObjectId) {
            var props = this.imageEditor.getObjectProperties(this.activeObjectId, 'type');
            let parameters = null;
            if (props.type === 'i-text' || props.type === 'text') {
                switch (type) {
                    case 'color':
                        parameters = {
                            fill: this.textColor,
                        };
                        break;
                    case 'fontFamily':
                        parameters = {
                            fontFamily: this.textFontFamily,
                        };
                        break;
                    case 'fontSize':
                        parameters = {
                            fontSize: this.textSizeValue,
                        };
                        break;
                    case 'fontStyle':
                        parameters = {
                            fontStyle: this.textFontStyle,
                        };
                        break;
                    case 'fontWeight':
                        parameters = {
                            fontWeight: this.textFontWeight,
                        };
                        break;
                    case 'textAlign':
                        parameters = {
                            textAlign: this.textAlign,
                        };
                        break;
                    case 'textDecoration':
                        parameters = {
                            textDecoration: this.textDecoration,
                        };
                        break;
                }
                let functionToExecute = () => {
                    this.imageEditor.changeTextStyle(this.activeObjectId, parameters, isSilent);
                };
                if (isSilent) {
                    functionToExecute();
                }
                else {
                    setTimeout(functionToExecute);
                }
            }
        }
    }
}
TextComponent$1.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent$1)(); };
TextComponent$1.ɵcmp = ɵɵdefineComponent({ type: TextComponent$1, selectors: [["tui-image-editor-submenus-text"]], inputs: { imageEditor: "imageEditor", defaultTextColors: "defaultTextColors" }, features: [ɵɵNgOnChangesFeature], decls: 71, vars: 46, consts: [[1, "tui-image-editor-menu-text"], [1, "tui-image-editor-submenu-item"], [1, "tui-image-editor-d-flex", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [1, "tie-text-effect-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row"], [3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-text-bold", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-bold", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text-italic", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-italic", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text-underline", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-underline", 1, "active", "use-default"], [1, "tui-image-editor-partition"], [1, "tie-text-align-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row"], [0, "xlink", "href", "#ic-text-align-left", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-align-left", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text-align-center", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-align-center", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text-align-right", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-align-right", 1, "active", "use-default"], ["title", "Color", 1, "tie-text-color", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], ["readonly", "", 1, "tie-text-color-picker", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-mb-3"], [1, "range"], ["type", "range", "min", "10", "max", "100", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "10", "max", "100", "step", "1", 1, "tie-text-range-value", "tui-image-editor-range-value", 3, "ngModel", "ngModelChange", "change"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵlistener("click", function TextComponent_Template_div_click_5_listener() { return ctx.changeTextFontWeight(ctx.textFontWeight == "bold" ? "normal" : "bold"); });
        ɵɵelementStart(6, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(7, "svg", 6);
        ɵɵelement(8, "use", 7);
        ɵɵelement(9, "use", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(10, "label");
        ɵɵtext(11);
        ɵɵpipe(12, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 5);
        ɵɵlistener("click", function TextComponent_Template_div_click_13_listener() { return ctx.changeTextFontStyle(ctx.textFontStyle == "italic" ? "normal" : "italic"); });
        ɵɵelementStart(14, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(15, "svg", 6);
        ɵɵelement(16, "use", 9);
        ɵɵelement(17, "use", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(18, "label");
        ɵɵtext(19);
        ɵɵpipe(20, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(21, "div", 5);
        ɵɵlistener("click", function TextComponent_Template_div_click_21_listener() { return ctx.changeTextDecoration(ctx.textDecoration == "underline" ? null : "underline"); });
        ɵɵelementStart(22, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(23, "svg", 6);
        ɵɵelement(24, "use", 11);
        ɵɵelement(25, "use", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(26, "label");
        ɵɵtext(27);
        ɵɵpipe(28, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "div", 13);
        ɵɵelement(30, "div");
        ɵɵelementEnd();
        ɵɵelementStart(31, "div", 14);
        ɵɵelementStart(32, "div", 5);
        ɵɵlistener("click", function TextComponent_Template_div_click_32_listener() { return ctx.changeTextAlignment("left"); });
        ɵɵelementStart(33, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(34, "svg", 6);
        ɵɵelement(35, "use", 15);
        ɵɵelement(36, "use", 16);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(37, "label");
        ɵɵtext(38);
        ɵɵpipe(39, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(40, "div", 5);
        ɵɵlistener("click", function TextComponent_Template_div_click_40_listener() { return ctx.changeTextAlignment("center"); });
        ɵɵelementStart(41, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(42, "svg", 6);
        ɵɵelement(43, "use", 17);
        ɵɵelement(44, "use", 18);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(45, "label");
        ɵɵtext(46);
        ɵɵpipe(47, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(48, "div", 5);
        ɵɵlistener("click", function TextComponent_Template_div_click_48_listener() { return ctx.changeTextAlignment("right"); });
        ɵɵelementStart(49, "div");
        ɵɵnamespaceSVG();
        ɵɵelementStart(50, "svg", 6);
        ɵɵelement(51, "use", 19);
        ɵɵelement(52, "use", 20);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(53, "label");
        ɵɵtext(54);
        ɵɵpipe(55, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(56, "div", 13);
        ɵɵelement(57, "div");
        ɵɵelementEnd();
        ɵɵelementStart(58, "div");
        ɵɵelementStart(59, "div", 21);
        ɵɵelementStart(60, "label");
        ɵɵelementStart(61, "input", 22);
        ɵɵlistener("colorPickerChange", function TextComponent_Template_input_colorPickerChange_61_listener($event) { return ctx.textColor = $event; })("colorPickerChange", function TextComponent_Template_input_colorPickerChange_61_listener($event) { return ctx.textColorChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(62, "div");
        ɵɵtext(63);
        ɵɵpipe(64, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(65, "div", 23);
        ɵɵelementStart(66, "label", 24);
        ɵɵtext(67);
        ɵɵpipe(68, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(69, "input", 25);
        ɵɵlistener("ngModelChange", function TextComponent_Template_input_ngModelChange_69_listener($event) { return ctx.textSizeValue = $event; })("ngModelChange", function TextComponent_Template_input_ngModelChange_69_listener($event) { return ctx.textSizeValueChanged($event, true); })("change", function TextComponent_Template_input_change_69_listener($event) { return ctx.textSizeValueChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementStart(70, "input", 26);
        ɵɵlistener("ngModelChange", function TextComponent_Template_input_ngModelChange_70_listener($event) { return ctx.textSizeValue = $event; })("ngModelChange", function TextComponent_Template_input_ngModelChange_70_listener($event) { return ctx.textSizeValueChanged($event, true); })("change", function TextComponent_Template_input_change_70_listener($event) { return ctx.textSizeValueChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵstyleProp("max-width", "100%");
        ɵɵadvance(3);
        ɵɵclassMap("tui-image-editor-button bold " + (ctx.textFontWeight == "bold" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 30, "tui-image-editor-angular-submenus-text-bold"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button italic " + (ctx.textFontStyle == "italic" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 32, "tui-image-editor-angular-submenus-text-italic"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button underline " + (ctx.textDecoration == "underline" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 34, "tui-image-editor-angular-submenus-text-underline"), " ");
        ɵɵadvance(5);
        ɵɵclassMap("tui-image-editor-button left " + (ctx.textAlign == "left" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(39, 36, "tui-image-editor-angular-submenus-text-left"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button center " + (ctx.textAlign == "center" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(47, 38, "tui-image-editor-angular-submenus-text-center"), " ");
        ɵɵadvance(2);
        ɵɵclassMap("tui-image-editor-button right " + (ctx.textAlign == "right" ? "active" : ""));
        ɵɵadvance(6);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(55, 40, "tui-image-editor-angular-submenus-text-right"), " ");
        ɵɵadvance(7);
        ɵɵstyleProp("background", ctx.textColor);
        ɵɵproperty("colorPicker", ctx.textColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultTextColors)("cpUseRootViewContainer", true);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(64, 42, "tui-image-editor-angular-submenus-text-color"), " ");
        ɵɵadvance(4);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(68, 44, "tui-image-editor-angular-submenus-text-textSize"), "");
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.textSizeValue);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.textSizeValue);
    } }, directives: [ColorPickerDirective, RangeValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NumberValueAccessor], pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-text',
                templateUrl: './text.component.html',
                styleUrls: ['./text.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], defaultTextColors: [{
            type: Input
        }] }); })();

const _c0 = ["fileInput"];
class MaskComponent$1 {
    constructor() {
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
    }
    ngOnChanges(changes) {
        var _a, _b;
        var that = this;
        if (changes['imageEditor']) {
            this.activeObjectId = getActiveObjectId(changes['imageEditor'].currentValue);
            (_a = changes['imageEditor'].previousValue) === null || _a === void 0 ? void 0 : _a.off(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_b = changes['imageEditor'].currentValue) === null || _b === void 0 ? void 0 : _b.on(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
        }
    }
    ngOnDestroy() {
        if (this.imageEditor) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
        }
    }
    onObjectActivated(props) {
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
    }
    onMaskChosen(event) {
        let selectedFile = event.target.files[0];
        if (selectedFile != null) {
            if (!isFileApiSupported()) {
                alert('This browser does not support file-api');
            }
            let imgUrl = URL.createObjectURL(selectedFile);
            this.imageEditor
                .loadImageFromURL(this.imageEditor.toDataURL(), 'FilterImage')
                .then(() => {
                this.imageEditor.addImageObject(imgUrl).then(() => {
                    URL.revokeObjectURL(selectedFile);
                });
                this.imageEditor._invoker.fire(eventNames.EXECUTE_COMMAND, historyNames.LOAD_MASK_IMAGE);
                if (this.fileInput != null) {
                    this.fileInput.nativeElement.value = '';
                }
            });
        }
    }
    applyMask() {
        if (this.activeObjectId != null &&
            getActiveObjectId(this.imageEditor) == this.activeObjectId) {
            var props = this.imageEditor.getObjectProperties(this.activeObjectId, 'type');
            if (props.type === 'image') {
                this.imageEditor.applyFilter('mask', {
                    maskObjId: this.activeObjectId,
                });
            }
        }
    }
}
MaskComponent$1.ɵfac = function MaskComponent_Factory(t) { return new (t || MaskComponent$1)(); };
MaskComponent$1.ɵcmp = ɵɵdefineComponent({ type: MaskComponent$1, selectors: [["tui-image-editor-submenus-mask"]], viewQuery: function MaskComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileInput = _t.first);
    } }, inputs: { imageEditor: "imageEditor" }, features: [ɵɵNgOnChangesFeature], decls: 21, vars: 6, consts: [[1, "tui-image-editor-menu-mask"], [1, "tui-image-editor-submenu-item"], [1, "tui-image-editor-d-flex", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "tui-image-editor-button"], ["type", "file", "accept", "image/*", 1, "tie-mask-image-file", 3, "change"], ["fileInput", ""], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-mask-load", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-mask-load", 1, "active", "use-default"], [1, "tie-mask-apply", "tui-image-editor-newline", "apply", "tui-image-editor-my-3", 3, "click"], [1, "tui-image-editor-button", "apply", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-apply", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-apply", 1, "active", "use-default"]], template: function MaskComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div");
        ɵɵelementStart(5, "input", 4, 5);
        ɵɵlistener("change", function MaskComponent_Template_input_change_5_listener($event) { return ctx.onMaskChosen($event); });
        ɵɵelementEnd();
        ɵɵnamespaceSVG();
        ɵɵelementStart(7, "svg", 6);
        ɵɵelement(8, "use", 7);
        ɵɵelement(9, "use", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(10, "label");
        ɵɵtext(11);
        ɵɵpipe(12, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 9);
        ɵɵlistener("click", function MaskComponent_Template_div_click_13_listener() { return ctx.applyMask(); });
        ɵɵelementStart(14, "div", 10);
        ɵɵnamespaceSVG();
        ɵɵelementStart(15, "svg", 11);
        ɵɵelement(16, "use", 12);
        ɵɵelement(17, "use", 13);
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(18, "label");
        ɵɵtext(19);
        ɵɵpipe(20, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(11);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 2, "tui-image-editor-angular-submenus-mask-loadMaskImage"), " ");
        ɵɵadvance(8);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 4, "tui-image-editor-angular-submenus-mask-apply"), " ");
    } }, pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MaskComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-mask',
                templateUrl: './mask.component.html',
                styleUrls: ['./mask.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], fileInput: [{
            type: ViewChild,
            args: ['fileInput']
        }] }); })();

class FilterComponent$1 {
    constructor(historyService) {
        this.historyService = historyService;
        this.filterBlurChecked = false;
        this.filterBlurValue = 0.1;
        this.filterGrayscaleChecked = false;
        this.filterSepiaChecked = false;
        this.filterEmbossChecked = false;
        this.filterInvertChecked = false;
        this.filterVintageChecked = false;
        this.filterSharpenChecked = false;
        this.filterWhiteRemovalChecked = false;
        this.filterWhiteRemovalDistance = 0.5;
        this.filterBrightnessChecked = false;
        this.filterBrightnessValue = 0;
        this.filterNoiseChecked = false;
        this.filterNoiseValue = 100;
        this.filterPixelateChecked = false;
        this.filterPixelateValue = 15;
        this.filterColorFilterChecked = false;
        this.filterColorFilterThreshold = 0;
        this.defaultFilterTintColors = defaultColors;
        this.filterTintChecked = false;
        this.filterTintColor = 'rgba(3, 189, 158, 0.7)';
        this.defaultFilterMultiplyColors = defaultColors;
        this.filterMultiplyChecked = false;
        this.filterMultiplyColor = 'rgb(81, 92, 230)';
        this.defaultFilterBlendColors = defaultColors;
        this.filterBlendChecked = false;
        this.filterBlendColor = 'rgba(255, 187, 59, 1)';
    }
    ngOnInit() {
        this.historyServiceSubscription = this.historyService.onChangeEmitter.subscribe((items) => items != null && items.length != 0
            ? this.rebindFields(items)
            : this.rebindFields(this.historyService.items));
    }
    ngOnDestroy() {
        var _a;
        (_a = this.historyServiceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    rebindFields(items) {
        console.debug(items);
        if (this.imageEditor != null) {
            this.filterBlurChecked = this.imageEditor.hasFilter('blur');
            this.filterBrightnessChecked = this.imageEditor.hasFilter('brightness');
            if (this.filterBrightnessChecked) {
                this.filterBrightnessValue = this.getAppliedFilterArgument(items, filterType.BRIGHTNESS, 0);
            }
            this.filterColorFilterChecked =
                this.imageEditor.hasFilter('removeColor') &&
                    this.hasAppliedFilter(items, filterType.REMOVE_COLOR);
            if (this.filterColorFilterChecked) {
                this.filterColorFilterThreshold = this.getAppliedFilterArgument(items, filterType.REMOVE_COLOR, 0);
            }
            this.filterEmbossChecked = this.imageEditor.hasFilter('emboss');
            this.filterGrayscaleChecked = this.imageEditor.hasFilter('grayscale');
            this.filterInvertChecked = this.imageEditor.hasFilter('invert');
            this.filterNoiseChecked = this.imageEditor.hasFilter('noise');
            if (this.filterNoiseChecked) {
                this.filterNoiseValue = this.getAppliedFilterArgument(items, filterType.NOISE, 0);
            }
            this.filterPixelateChecked = this.imageEditor.hasFilter('pixelate');
            if (this.filterPixelateChecked) {
                this.filterPixelateValue = this.getAppliedFilterArgument(items, filterType.PIXELATE, 0);
            }
            this.filterSepiaChecked = this.imageEditor.hasFilter('sepia');
            this.filterSharpenChecked = this.imageEditor.hasFilter('sharpen');
            this.filterVintageChecked = this.imageEditor.hasFilter('vintage');
            this.filterWhiteRemovalChecked =
                this.imageEditor.hasFilter('removeColor') &&
                    this.hasAppliedFilter(items, filterType.REMOVE_WHITE);
            if (this.filterWhiteRemovalChecked) {
                this.filterWhiteRemovalDistance = this.getAppliedFilterArgument(items, filterType.REMOVE_WHITE, 0);
            }
            this.filterMultiplyChecked =
                this.imageEditor.hasFilter('blendColor') &&
                    this.hasAppliedFilter(items, filterType.MULTIPLY);
            if (this.filterMultiplyChecked) {
                this.filterMultiplyColor = this.getAppliedFilterArgument(items, filterType.MULTIPLY, 0);
            }
            this.filterTintChecked =
                this.imageEditor.hasFilter('blendColor') &&
                    this.hasAppliedFilter(items, filterType.TINT);
            if (this.filterTintChecked) {
                this.filterTintColor = this.getAppliedFilterArgument(items, filterType.TINT, 0);
            }
            this.filterBlendChecked =
                this.imageEditor.hasFilter('blendColor') &&
                    this.hasAppliedFilter(items, filterType.BLEND);
            if (this.filterBlendChecked) {
                this.filterBlendColor = this.getAppliedFilterArgument(items, filterType.BLEND, 0);
            }
        }
    }
    getAppliedFilterArgument(items, type, index) {
        let validItems = items.filter((f) => f.filterType === type && f.type === HistoryItemType.ApplyFilter);
        return validItems[validItems.length - 1].args[index];
    }
    hasAppliedFilter(historyItems, type) {
        let hasFilter = false;
        for (let i = 0; i < historyItems.length; i++) {
            let item = historyItems[i];
            if (item.type === HistoryItemType.ApplyFilter &&
                item.filterType === type) {
                hasFilter = true;
            }
            else if (hasFilter == true &&
                [filterType.TINT, filterType.BLEND, filterType.MULTIPLY].some((t) => t === type) &&
                item.type === HistoryItemType.RemoveFilter &&
                item.filterType === filterType.BLEND_OR_TINT_OR_MULTIPLY) {
                hasFilter = false;
            }
            else if (hasFilter == true &&
                [filterType.REMOVE_COLOR, filterType.REMOVE_WHITE].some((t) => t === type) &&
                item.type === HistoryItemType.RemoveFilter &&
                item.filterType === filterType.REMOVE_COLOR_OR_WHITE) {
                hasFilter = false;
            }
        }
        return hasFilter;
    }
    filterWhiteRemovalCheckedChanged(newValue) {
        this.filterApply('white-removal');
    }
    filterWhiteRemovalDistanceChanged(newValue, isSilent) {
        this.filterApply('white-removal', isSilent);
    }
    filterBrightnessCheckedChanged(newValue) {
        this.filterApply('brightness');
    }
    filterBrightnessValueChanged(newValue, isSilent) {
        this.filterApply('brightness', isSilent);
    }
    filterNoiseCheckedChanged(newValue) {
        this.filterApply('noise');
    }
    filterNoiseValueChanged(newValue, isSilent) {
        this.filterApply('noise', isSilent);
    }
    filterPixelateCheckedChanged(newValue) {
        this.filterApply('pixelate');
    }
    filterPixelateValueChanged(newValue, isSilent) {
        this.filterApply('pixelate', isSilent);
    }
    filterColorFilterCheckedChanged(newValue) {
        this.filterApply('removeColor');
    }
    filterColorFilterThresholdChanged(newValue, isSilent) {
        this.filterApply('removeColor', isSilent);
    }
    filterTintColorChanged(newColor) {
        this.filterApply('tint');
    }
    filterTintCheckedChanged(newValue) {
        this.filterApply('tint');
        if (this.filterTintChecked) {
            this.filterMultiplyChecked = false;
            this.filterBlendChecked = false;
        }
    }
    filterMultiplyColorChanged(newColor) {
        this.filterApply('multiply');
    }
    filterMultiplyCheckedChanged(newValue) {
        this.filterApply('multiply');
        if (this.filterMultiplyChecked) {
            this.filterTintChecked = false;
            this.filterBlendChecked = false;
        }
    }
    filterBlendColorChanged(newColor) {
        this.filterApply('blend');
    }
    filterBlendCheckedChanged(newValue) {
        this.filterApply('blend');
        if (this.filterBlendChecked) {
            this.filterMultiplyChecked = false;
            this.filterTintChecked = false;
        }
    }
    filterBlurCheckedChanged(newValue) {
        this.filterApply('blur');
    }
    filterGrayscaleCheckedChanged(newValue) {
        this.filterApply('grayscale');
    }
    filterSepiaCheckedChanged(newValue) {
        this.filterApply('sepia');
    }
    filterEmbossCheckedChanged(newValue) {
        this.filterApply('emboss');
    }
    filterInvertCheckedChanged(newValue) {
        this.filterApply('invert');
    }
    filterVintageCheckedChanged(newValue) {
        this.filterApply('vintage');
    }
    filterSharpenCheckedChanged(newValue) {
        this.filterApply('sharpen');
    }
    filterApply(type, isSilent = false) {
        switch (type) {
            case 'white-removal':
                this.filterApplyConfirmed(this.filterWhiteRemovalChecked, 'removeColor', {
                    color: '#FFFFFF',
                    useAlpha: false,
                    distance: this.filterWhiteRemovalDistance,
                }, isSilent);
                break;
            case 'brightness':
                this.filterApplyConfirmed(this.filterBrightnessChecked, 'brightness', {
                    brightness: this.filterBrightnessValue,
                }, isSilent);
                break;
            case 'noise':
                this.filterApplyConfirmed(this.filterNoiseChecked, 'noise', {
                    noise: this.filterNoiseValue,
                }, isSilent);
                break;
            case 'pixelate':
                this.filterApplyConfirmed(this.filterPixelateChecked, 'pixelate', {
                    blocksize: this.filterPixelateValue,
                }, isSilent);
                break;
            case 'removeColor':
                this.filterApplyConfirmed(this.filterColorFilterChecked, 'removeColor', {
                    color: '#FFFFFF',
                    distance: this.filterColorFilterThreshold,
                }, isSilent);
                break;
            case 'blur':
                this.filterApplyConfirmed(this.filterBlurChecked, 'blur', {
                    blur: this.filterBlurValue,
                }, isSilent);
                break;
            case 'blend':
                this.filterApplyConfirmed(this.filterBlendChecked, 'blendColor', {
                    mode: 'add',
                    color: this.filterBlendColor,
                }, isSilent);
                break;
            case 'multiply':
                this.filterApplyConfirmed(this.filterMultiplyChecked, 'blendColor', {
                    mode: 'multiply',
                    color: this.filterMultiplyColor,
                }, isSilent);
                break;
            case 'tint':
                let rgbTint = rgbaToObject(this.filterTintColor);
                this.filterApplyConfirmed(this.filterTintChecked, 'blendColor', {
                    mode: 'tint',
                    color: rgbTint.hexString,
                    alpha: rgbTint.alpha,
                }, isSilent);
                break;
            case 'grayscale':
                this.filterApplyConfirmed(this.filterGrayscaleChecked, type, {}, isSilent);
                break;
            case 'sepia':
                this.filterApplyConfirmed(this.filterSepiaChecked, type, {}, isSilent);
                break;
            case 'emboss':
                this.filterApplyConfirmed(this.filterEmbossChecked, type, {}, isSilent);
                break;
            case 'invert':
                this.filterApplyConfirmed(this.filterInvertChecked, type, {}, isSilent);
                break;
            case 'vintage':
                this.filterApplyConfirmed(this.filterVintageChecked, type, {}, isSilent);
                break;
            case 'sharpen':
                this.filterApplyConfirmed(this.filterSharpenChecked, type, {}, isSilent);
                break;
        }
    }
    filterApplyConfirmed(applying, type, options, isSilent = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let functionToExecute = () => __awaiter(this, void 0, void 0, function* () {
                if (applying) {
                    if (type === 'blendColor' && this.imageEditor.hasFilter('blendColor')) {
                        switch (options.mode) {
                            case 'add':
                                this.filterTintChecked = false;
                                this.filterMultiplyChecked = false;
                                break;
                            case 'multiply':
                                this.filterTintChecked = false;
                                this.filterBlendChecked = false;
                                break;
                            case 'tint':
                                this.filterBlendChecked = false;
                                this.filterMultiplyChecked = false;
                                break;
                        }
                        yield removeFilter(this.imageEditor, type, isSilent);
                    }
                    else if (type === 'removeColor' &&
                        this.imageEditor.hasFilter('removeColor')) {
                        if (options.useAlpha != null) {
                            this.filterColorFilterChecked = false;
                        }
                        else {
                            this.filterWhiteRemovalChecked = false;
                        }
                        yield removeFilter(this.imageEditor, type, isSilent);
                    }
                    yield this.imageEditor.applyFilter(type, options, isSilent);
                }
                else if (this.imageEditor.hasFilter(type)) {
                    yield removeFilter(this.imageEditor, type, isSilent);
                    if (type == 'blendColor') {
                        this.filterTintChecked = false;
                        this.filterMultiplyChecked = false;
                        this.filterBlendChecked = false;
                    }
                }
            });
            if (isSilent) {
                yield functionToExecute();
            }
            else {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    yield functionToExecute();
                }));
            }
        });
    }
}
FilterComponent$1.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent$1)(ɵɵdirectiveInject(HistoryService)); };
FilterComponent$1.ɵcmp = ɵɵdefineComponent({ type: FilterComponent$1, selectors: [["tui-image-editor-submenus-filter"]], inputs: { imageEditor: "imageEditor" }, decls: 136, vars: 109, consts: [[1, "tui-image-editor-menu-filter", "tui-image-editor-d-flex", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-submenu-item", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [1, "tui-image-editor-submenu-align"], [1, "tui-image-editor-checkbox-wrap", "fixed-width", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-wrap", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-checkbox", "tui-image-editor-align-self-center"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-flex-nowrap"], ["type", "checkbox", 1, "tie-grayscale", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-invert", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-sepia", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-vintage", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-blur", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-sharpen", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-emboss", 3, "ngModel", "ngModelChange"], [1, "tui-image-editor-partition"], [1, "tui-image-editor-checkbox-group", "tui-image-editor-disabled", 2, "margin-bottom", "7px"], [1, "tui-image-editor-checkbox-wrap"], [1, "tui-image-editor-checkbox"], ["type", "checkbox", 1, "tie-remove-white", 3, "ngModel", "ngModelChange"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "short", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center"], ["type", "range", "min", "0", "max", "1", "step", "0.001", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "tui-image-editor-checkbox-group", "tui-image-editor-disabled"], ["type", "checkbox", 1, "tie-brightness", 3, "ngModel", "ngModelChange"], [1, "tui-image-editor-range-wrap", "short", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "align-items-center", "tui-image-editor-my-2"], ["type", "range", "min", "-1", "max", "1", "step", "0.03", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "checkbox", 1, "tie-noise", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "1000", "step", "10", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "tui-image-editor-partition", "only-left-right"], ["type", "checkbox", 1, "tie-pixelate", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "2", "max", "20", "step", "1", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "tui-image-editor-newline", "tui-image-editor-checkbox-wrap"], ["type", "checkbox", 1, "tie-color-filter", 3, "ngModel", "ngModelChange"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "short"], [1, "tie-colorfilter-threshold-range", "tui-image-editor-range", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "align-items-center", "tui-image-editor-my-2"], ["type", "range", "min", "0", "max", "1", "step", "0.02", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center"], [1, "filter-color-item"], [3, "title"], ["readonly", "", 1, "tie-filter-tint-color-picker", "tui-image-editor-mb-2", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], ["type", "checkbox", 1, "tie-tint", 3, "ngModel", "ngModelChange"], ["readonly", "", 1, "tie-filter-multiply-color-picker", "tui-image-editor-mb-2", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], ["type", "checkbox", 1, "tie-multiply", 3, "ngModel", "ngModelChange"], ["readonly", "", 1, "tie-filter-blend-color-picker", "tui-image-editor-mb-2", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], ["type", "checkbox", 1, "tie-blend", 3, "ngModel", "ngModelChange"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "label", 5);
        ɵɵelementStart(6, "input", 6);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filterGrayscaleChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filterGrayscaleCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(7, "span");
        ɵɵtext(8);
        ɵɵpipe(9, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 4);
        ɵɵelementStart(11, "label", 5);
        ɵɵelementStart(12, "input", 7);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.filterInvertChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.filterInvertCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(13, "span");
        ɵɵtext(14);
        ɵɵpipe(15, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "div", 4);
        ɵɵelementStart(17, "label", 5);
        ɵɵelementStart(18, "input", 8);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.filterSepiaChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.filterSepiaCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(19, "span");
        ɵɵtext(20);
        ɵɵpipe(21, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 4);
        ɵɵelementStart(23, "label", 5);
        ɵɵelementStart(24, "input", 9);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.filterVintageChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.filterVintageCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(25, "span");
        ɵɵtext(26);
        ɵɵpipe(27, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(28, "div", 4);
        ɵɵelementStart(29, "label", 5);
        ɵɵelementStart(30, "input", 10);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_30_listener($event) { return ctx.filterBlurChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_30_listener($event) { return ctx.filterBlurCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(31, "span");
        ɵɵtext(32);
        ɵɵpipe(33, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(34, "div", 4);
        ɵɵelementStart(35, "label", 5);
        ɵɵelementStart(36, "input", 11);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.filterSharpenChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.filterSharpenCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(37, "span");
        ɵɵtext(38);
        ɵɵpipe(39, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(40, "div", 4);
        ɵɵelementStart(41, "label", 5);
        ɵɵelementStart(42, "input", 12);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_42_listener($event) { return ctx.filterEmbossChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_42_listener($event) { return ctx.filterEmbossCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(43, "span");
        ɵɵtext(44);
        ɵɵpipe(45, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(46, "div", 13);
        ɵɵelement(47, "div");
        ɵɵelementEnd();
        ɵɵelementStart(48, "div", 2);
        ɵɵelementStart(49, "div", 14);
        ɵɵelementStart(50, "div", 15);
        ɵɵelementStart(51, "div", 16);
        ɵɵelementStart(52, "label", 5);
        ɵɵelementStart(53, "input", 17);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_53_listener($event) { return ctx.filterWhiteRemovalChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_53_listener($event) { return ctx.filterWhiteRemovalCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(54, "span");
        ɵɵtext(55);
        ɵɵpipe(56, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(57, "div", 18);
        ɵɵelementStart(58, "label");
        ɵɵtext(59);
        ɵɵpipe(60, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(61, "input", 19);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_61_listener($event) { return ctx.filterWhiteRemovalDistance = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_61_listener($event) { return ctx.filterWhiteRemovalDistanceChanged($event, true); })("change", function FilterComponent_Template_input_change_61_listener($event) { return ctx.filterWhiteRemovalDistanceChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(62, "div", 20);
        ɵɵelementStart(63, "div", 16);
        ɵɵelementStart(64, "label", 5);
        ɵɵelementStart(65, "input", 21);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_65_listener($event) { return ctx.filterBrightnessChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_65_listener($event) { return ctx.filterBrightnessCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(66, "span");
        ɵɵtext(67);
        ɵɵpipe(68, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(69, "div", 22);
        ɵɵelementStart(70, "input", 23);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_70_listener($event) { return ctx.filterBrightnessValue = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_70_listener($event) { return ctx.filterBrightnessValueChanged($event, true); })("change", function FilterComponent_Template_input_change_70_listener($event) { return ctx.filterBrightnessValueChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(71, "div", 20);
        ɵɵelementStart(72, "div", 16);
        ɵɵelementStart(73, "label", 5);
        ɵɵelementStart(74, "input", 24);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_74_listener($event) { return ctx.filterNoiseChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_74_listener($event) { return ctx.filterNoiseCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(75, "span");
        ɵɵtext(76);
        ɵɵpipe(77, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(78, "div", 22);
        ɵɵelementStart(79, "input", 25);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_79_listener($event) { return ctx.filterNoiseValue = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_79_listener($event) { return ctx.filterNoiseValueChanged($event, true); })("change", function FilterComponent_Template_input_change_79_listener($event) { return ctx.filterNoiseValueChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(80, "div", 26);
        ɵɵelement(81, "div");
        ɵɵelementEnd();
        ɵɵelementStart(82, "div", 2);
        ɵɵelementStart(83, "div", 20);
        ɵɵelementStart(84, "div", 16);
        ɵɵelementStart(85, "label", 5);
        ɵɵelementStart(86, "input", 27);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_86_listener($event) { return ctx.filterPixelateChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_86_listener($event) { return ctx.filterPixelateCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(87, "span");
        ɵɵtext(88);
        ɵɵpipe(89, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(90, "div", 22);
        ɵɵelementStart(91, "input", 28);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_91_listener($event) { return ctx.filterPixelateValue = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_91_listener($event) { return ctx.filterPixelateValueChanged($event, true); })("change", function FilterComponent_Template_input_change_91_listener($event) { return ctx.filterPixelateValueChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(92, "div", 20);
        ɵɵelementStart(93, "div", 29);
        ɵɵelementStart(94, "div", 16);
        ɵɵelementStart(95, "label", 5);
        ɵɵelementStart(96, "input", 30);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_96_listener($event) { return ctx.filterColorFilterChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_96_listener($event) { return ctx.filterColorFilterCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(97, "span");
        ɵɵtext(98);
        ɵɵpipe(99, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(100, "div", 31);
        ɵɵelementStart(101, "label");
        ɵɵtext(102);
        ɵɵpipe(103, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(104, "div", 32);
        ɵɵelementStart(105, "input", 33);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_105_listener($event) { return ctx.filterColorFilterThreshold = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_105_listener($event) { return ctx.filterColorFilterThresholdChanged($event, true); })("change", function FilterComponent_Template_input_change_105_listener($event) { return ctx.filterColorFilterThresholdChanged($event, false); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(106, "div", 13);
        ɵɵelement(107, "div");
        ɵɵelementEnd();
        ɵɵelementStart(108, "div", 34);
        ɵɵelementStart(109, "div", 35);
        ɵɵelementStart(110, "div", 36);
        ɵɵpipe(111, "translate");
        ɵɵelementStart(112, "input", 37);
        ɵɵlistener("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_112_listener($event) { return ctx.filterTintColor = $event; })("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_112_listener($event) { return ctx.filterTintColorChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(113, "label", 5);
        ɵɵelementStart(114, "input", 38);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_114_listener($event) { return ctx.filterTintChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_114_listener($event) { return ctx.filterTintCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(115, "span");
        ɵɵtext(116);
        ɵɵpipe(117, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(118, "div", 35);
        ɵɵelementStart(119, "div", 36);
        ɵɵpipe(120, "translate");
        ɵɵelementStart(121, "input", 39);
        ɵɵlistener("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_121_listener($event) { return ctx.filterMultiplyColor = $event; })("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_121_listener($event) { return ctx.filterMultiplyColorChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(122, "label", 5);
        ɵɵelementStart(123, "input", 40);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_123_listener($event) { return ctx.filterMultiplyChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_123_listener($event) { return ctx.filterMultiplyCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(124, "span");
        ɵɵtext(125);
        ɵɵpipe(126, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(127, "div", 35);
        ɵɵelementStart(128, "div", 36);
        ɵɵpipe(129, "translate");
        ɵɵelementStart(130, "input", 41);
        ɵɵlistener("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_130_listener($event) { return ctx.filterBlendColor = $event; })("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_130_listener($event) { return ctx.filterBlendColorChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(131, "label", 5);
        ɵɵelementStart(132, "input", 42);
        ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_132_listener($event) { return ctx.filterBlendChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_132_listener($event) { return ctx.filterBlendCheckedChanged($event); });
        ɵɵelementEnd();
        ɵɵelementStart(133, "span");
        ɵɵtext(134);
        ɵɵpipe(135, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngModel", ctx.filterGrayscaleChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(9, 69, "tui-image-editor-angular-submenus-filter-grayscale"));
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.filterInvertChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(15, 71, "tui-image-editor-angular-submenus-filter-invert"));
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.filterSepiaChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(21, 73, "tui-image-editor-angular-submenus-filter-sepia"));
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.filterVintageChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(27, 75, "tui-image-editor-angular-submenus-filter-sepia2"));
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.filterBlurChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(33, 77, "tui-image-editor-angular-submenus-filter-blur"));
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.filterSharpenChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(39, 79, "tui-image-editor-angular-submenus-filter-sharpen"));
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.filterEmbossChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(45, 81, "tui-image-editor-angular-submenus-filter-emboss"));
        ɵɵadvance(9);
        ɵɵproperty("ngModel", ctx.filterWhiteRemovalChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(56, 83, "tui-image-editor-angular-submenus-filter-removeWhite"));
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(60, 85, "tui-image-editor-angular-submenus-filter-removeWhite-distance"));
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.filterWhiteRemovalDistance)("disabled", ctx.filterWhiteRemovalChecked == false);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.filterBrightnessChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(68, 87, "tui-image-editor-angular-submenus-filter-brightness"));
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.filterBrightnessValue)("disabled", ctx.filterBrightnessChecked == false);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.filterNoiseChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(77, 89, "tui-image-editor-angular-submenus-filter-noise"));
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.filterNoiseValue)("disabled", ctx.filterNoiseChecked == false);
        ɵɵadvance(7);
        ɵɵproperty("ngModel", ctx.filterPixelateChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(89, 91, "tui-image-editor-angular-submenus-filter-pixelate"));
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.filterPixelateValue)("disabled", ctx.filterPixelateChecked == false);
        ɵɵadvance(5);
        ɵɵproperty("ngModel", ctx.filterColorFilterChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(99, 93, "tui-image-editor-angular-submenus-filter-colorFilter"));
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(103, 95, "tui-image-editor-angular-submenus-filter-colorFilter-threshold"));
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.filterColorFilterThreshold)("disabled", ctx.filterColorFilterChecked == false);
        ɵɵadvance(5);
        ɵɵclassMap("tie-filter-tint-color tui-image-editor-button tui-image-editor-d-flex tui-image-editor-flex-column tui-image-editor-align-items-center " + (ctx.filterTintChecked ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(111, 97, "tui-image-editor-angular-submenus-filter-tint"));
        ɵɵadvance(2);
        ɵɵstyleProp("background", ctx.filterTintColor);
        ɵɵproperty("colorPicker", ctx.filterTintColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultFilterTintColors)("cpUseRootViewContainer", true);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.filterTintChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(117, 99, "tui-image-editor-angular-submenus-filter-tint"));
        ɵɵadvance(3);
        ɵɵclassMap("tie-filter-multiply-color tui-image-editor-button tui-image-editor-d-flex tui-image-editor-flex-column tui-image-editor-align-items-center " + (ctx.filterMultiplyChecked ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(120, 101, "tui-image-editor-angular-submenus-filter-multiply"));
        ɵɵadvance(2);
        ɵɵstyleProp("background", ctx.filterMultiplyColor);
        ɵɵproperty("colorPicker", ctx.filterMultiplyColor)("cpOutputFormat", "hex")("cpPresetColors", ctx.defaultFilterMultiplyColors)("cpUseRootViewContainer", true);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.filterMultiplyChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(126, 103, "tui-image-editor-angular-submenus-filter-multiply"));
        ɵɵadvance(3);
        ɵɵclassMap("tie-filter-blend-color tui-image-editor-button tui-image-editor-d-flex tui-image-editor-flex-column tui-image-editor-align-items-center " + (ctx.filterBlendChecked ? "active" : ""));
        ɵɵproperty("title", ɵɵpipeBind1(129, 105, "tui-image-editor-angular-submenus-filter-blend"));
        ɵɵadvance(2);
        ɵɵstyleProp("background", ctx.filterBlendColor);
        ɵɵproperty("colorPicker", ctx.filterBlendColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultFilterBlendColors)("cpUseRootViewContainer", true);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.filterBlendChecked);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(135, 107, "tui-image-editor-angular-submenus-filter-blend"));
    } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel, RangeValueAccessor, DefaultValueAccessor, ColorPickerDirective], pipes: [TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FilterComponent$1, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.css'],
            }]
    }], function () { return [{ type: HistoryService }]; }, { imageEditor: [{
            type: Input
        }] }); })();

const _c0$1 = ["imageContainer"];
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_crop_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-image-editor-submenus-crop", 7);
    ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_div_20_tui_image_editor_submenus_crop_1_Template_tui_image_editor_submenus_crop_cancelCroppingRequested_0_listener() { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.exitCropOnAction(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r2.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_flip_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tui-image-editor-submenus-flip", 6);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r3.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_rotate_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-image-editor-submenus-rotate", 20);
    ɵɵlistener("rotationChange", function TuiImageEditorComponent_div_20_tui_image_editor_submenus_rotate_3_Template_tui_image_editor_submenus_rotate_rotationChange_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.rotation = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r4.imageEditor)("rotation", ctx_r4.rotation);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_draw_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tui-image-editor-submenus-draw", 6);
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r5.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_shape_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tui-image-editor-submenus-shape", 6);
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r6.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_icon_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tui-image-editor-submenus-icon", 6);
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r7.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_text_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tui-image-editor-submenus-text", 6);
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r8.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_mask_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tui-image-editor-submenus-mask", 6);
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r9.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_filter_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tui-image-editor-submenus-filter", 6);
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("imageEditor", ctx_r10.imageEditor);
} }
function TuiImageEditorComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, TuiImageEditorComponent_div_20_tui_image_editor_submenus_crop_1_Template, 1, 1, "tui-image-editor-submenus-crop", 17);
    ɵɵtemplate(2, TuiImageEditorComponent_div_20_tui_image_editor_submenus_flip_2_Template, 1, 1, "tui-image-editor-submenus-flip", 18);
    ɵɵtemplate(3, TuiImageEditorComponent_div_20_tui_image_editor_submenus_rotate_3_Template, 1, 2, "tui-image-editor-submenus-rotate", 19);
    ɵɵtemplate(4, TuiImageEditorComponent_div_20_tui_image_editor_submenus_draw_4_Template, 1, 1, "tui-image-editor-submenus-draw", 18);
    ɵɵtemplate(5, TuiImageEditorComponent_div_20_tui_image_editor_submenus_shape_5_Template, 1, 1, "tui-image-editor-submenus-shape", 18);
    ɵɵtemplate(6, TuiImageEditorComponent_div_20_tui_image_editor_submenus_icon_6_Template, 1, 1, "tui-image-editor-submenus-icon", 18);
    ɵɵtemplate(7, TuiImageEditorComponent_div_20_tui_image_editor_submenus_text_7_Template, 1, 1, "tui-image-editor-submenus-text", 18);
    ɵɵtemplate(8, TuiImageEditorComponent_div_20_tui_image_editor_submenus_mask_8_Template, 1, 1, "tui-image-editor-submenus-mask", 18);
    ɵɵtemplate(9, TuiImageEditorComponent_div_20_tui_image_editor_submenus_filter_9_Template, 1, 1, "tui-image-editor-submenus-filter", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "crop");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "flip");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "rotate");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "draw");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "shape");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "icon");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "text");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "mask");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.submenu == "filter");
} }
const ImageEditor = require('tui-image-editor');
class TuiImageEditorComponent {
    constructor(historyService) {
        this.historyService = historyService;
        this.options = {
            usageStatistics: false,
            selectionStyle: {
                cornerStyle: 'circle',
                cornerSize: 32,
                cornerColor: '#fff',
                cornerStrokeColor: '#fff',
                transparentCorners: false,
                lineWidth: 4,
                borderColor: '#fff',
                rotatingPointOffset: 500,
            },
            applyCropSelectionStyle: true,
            applyGroupSelectionStyle: true,
        };
        this.initializeImgUrl = null;
        this.imageChosen = false;
        this.rotation = 0;
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
        this.onExecuteCommandEventListener = this.onExecuteCommand.bind(this);
        this.onAfterUndoEventListener = this.onAfterUndo.bind(this);
        this.onAfterRedoEventListener = this.onAfterRedo.bind(this);
    }
    ngOnInit() {
        this.historyServiceSubscription = this.historyService.onChangeEmitter.subscribe((items) => this.onActiveHistoryElementChanged(items));
    }
    ngOnChanges(changes) {
        if ((changes['options'] && changes['options'].firstChange == false) ||
            (changes['initialImage'] && changes['initialImage'].firstChange == false)) {
            this.destroyImageEditor();
            this.initializeImageEditor();
        }
    }
    initializeImageEditor() {
        this.historyService.clear();
        this.imageEditor = new ImageEditor(this.imageContainer.nativeElement, this.options);
        console.debug(this.imageEditor);
        this.imageEditor.registerIcons(defaultIconPath);
        this.imageEditor.on(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
        this.imageEditor._invoker.on(eventNames.EXECUTE_COMMAND, this.onExecuteCommandEventListener);
        this.imageEditor._invoker.on(eventNames.AFTER_UNDO, this.onAfterUndoEventListener);
        this.imageEditor._invoker.on(eventNames.AFTER_REDO, this.onAfterRedoEventListener);
        if (this.initialImage != null) {
            this.loadImage(this.initialImage);
        }
    }
    destroyImageEditor() {
        if (this.imageEditor != null) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
            this.imageEditor._invoker.off(eventNames.EXECUTE_COMMAND, this.onExecuteCommandEventListener);
            this.imageEditor._invoker.off(eventNames.AFTER_UNDO, this.onAfterUndoEventListener);
            this.imageEditor._invoker.off(eventNames.AFTER_REDO, this.onAfterRedoEventListener);
            this.imageEditor.destroy();
        }
    }
    ngAfterViewInit() {
        var that = this;
        setTimeout(() => {
            //   this.imageEditor.on(eventNames.SELECTION_CLEARED, function () {
            //     that.activeObjectId = null;
            //     if (that.submenu === 'text') {
            //       that.imageEditor.changeCursor('text');
            //     } else if (that.submenu !== 'draw' && that.submenu !== 'crop') {
            //       that.imageEditor.stopDrawingMode();
            //     }
            //   });
            that.initializeImageEditor();
        });
    }
    ngOnDestroy() {
        var _a;
        if (this.initializeImgUrl != null) {
            URL.revokeObjectURL(this.initializeImgUrl);
        }
        this.destroyImageEditor();
        (_a = this.historyServiceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onObjectActivated(props) {
        console.debug(props);
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
        if ((props === null || props === void 0 ? void 0 : props.id) != null) {
            if ([
                objectTypes.shapeRect,
                objectTypes.shapeCircle,
                objectTypes.shapeTriangle,
            ].indexOf(props.type) > -1) {
                this.showMenu('shape', false);
            }
            else if (props.type === objectTypes.line ||
                props.type === objectTypes.straightLine) {
                this.showMenu('draw', false);
            }
            else if (props.type === objectTypes.itext ||
                props.type === objectTypes.text) {
                this.showMenu('text', false);
            }
            else if (props.type === objectTypes.icon) {
                this.showMenu('icon', false);
            }
            else if (props.type === objectTypes.image) {
                this.showMenu('mask', false);
            }
        }
    }
    onExecuteCommand(command) {
        if (!isSilentCommand(command)) {
            this.historyService.add(command, this.imageEditor);
        }
    }
    onAfterUndo() {
        this.historyService.prev();
    }
    onAfterRedo() {
        this.historyService.next();
    }
    loadImage(file) {
        if (file != null) {
            let imageUrl = null;
            if (typeof file === 'string') {
                imageUrl = file;
            }
            else {
                if (!isFileApiSupported()) {
                    alert('This browser does not support file-api');
                    return;
                }
                imageUrl = URL.createObjectURL(file);
            }
            if (this.initializeImgUrl != null && imageUrl != this.initializeImgUrl) {
                URL.revokeObjectURL(this.initializeImgUrl);
            }
            this.initializeImgUrl = imageUrl;
            this.imageEditor
                .loadImageFromURL(this.initializeImgUrl, 'RandomFileName')
                .then((sizeValue) => {
                this.imageChosen = true;
                this.exitCropOnAction();
                this.imageEditor.clearUndoStack();
                this.imageEditor.clearRedoStack();
                this.historyService.clear();
                this.imageEditor._invoker.fire(eventNames.EXECUTE_COMMAND, historyNames.LOAD_IMAGE);
            })['catch']((message) => Promise.reject(message));
        }
    }
    resetImage() {
        if (this.initializeImgUrl != null) {
            this.loadImage(this.initializeImgUrl);
        }
    }
    getImage(options = {
        format: 'png',
        quality: 1,
        multiplier: 1,
    }) {
        if (this.imageChosen) {
            return this.imageEditor.toDataURL(options);
        }
        return null;
    }
    exitCropOnAction() {
        this.hideMenu('crop');
    }
    hideMenu(menuName) {
        if (this.submenu == menuName) {
            this.submenu = null;
            clearSelection(this.imageEditor);
            this.imageEditor.stopDrawingMode();
        }
    }
    onActiveHistoryElementChanged(items) {
        let rotationEvents = items.filter((i) => i.type === HistoryItemType.Rotate);
        if (rotationEvents.length > 0) {
            let lastRotationEvent = rotationEvents[rotationEvents.length - 1];
            this.rotation = lastRotationEvent.args[0];
        }
        else {
            this.rotation = 0;
        }
    }
    showMenu(menuName, discardSelection = true) {
        this.submenu = menuName;
        if (discardSelection) {
            clearSelection(this.imageEditor);
        }
        this.imageEditor.stopDrawingMode();
        //this.stopShape();
        // this._changeMenu(menuName, toggle, discardSelection);
        // if (this.submenu == 'draw') {
        //   this.setDrawMode('free', {
        //     width: this.drawStrokeWidthValue,
        //     color: this.drawStrokeColor,
        //   });
        // }
    }
}
TuiImageEditorComponent.ɵfac = function TuiImageEditorComponent_Factory(t) { return new (t || TuiImageEditorComponent)(ɵɵdirectiveInject(HistoryService)); };
TuiImageEditorComponent.ɵcmp = ɵɵdefineComponent({ type: TuiImageEditorComponent, selectors: [["tui-image-editor"]], viewQuery: function TuiImageEditorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageContainer = _t.first);
    } }, inputs: { options: "options", initialImage: "initialImage" }, features: [ɵɵProvidersFeature([HistoryService]), ɵɵNgOnChangesFeature], decls: 32, vars: 38, consts: [[1, "tui-image-editor-d-flex", "tui-image-editor-flex-column", "tui-image-editor-justify-content-center", "tui-image-editor-h-100", "tui-image-editor-w-100", "tui-image-editor-container"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-wrap", "tui-image-editor-justify-content-center", "tui-image-editor-align-items-center"], [1, "tui-image-editor-help-menu", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-wrap", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-p-1"], [1, "tui-image-editor-help-menu-item", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap"], [3, "loadImage"], [3, "imageChosen", "imageEditor"], [3, "imageEditor"], [3, "imageEditor", "cancelCroppingRequested"], [3, "imageChosen", "imageEditor", "cancelCroppingRequested", "resetImage"], [3, "imageChosen", "imageEditor", "cancelCroppingRequested"], [1, "tui-image-editor-flex-grow-1", "tui-image-editor-d-flex", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center"], ["imageContainer", ""], ["class", "tui-image-editor-submenu", 4, "ngIf"], [1, "tui-image-editor-controls", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-menu", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center"], [3, "imageChosen", "selected", "clicked"], [1, "tui-image-editor-submenu"], [3, "imageEditor", "cancelCroppingRequested", 4, "ngIf"], [3, "imageEditor", 4, "ngIf"], [3, "imageEditor", "rotation", "rotationChange", 4, "ngIf"], [3, "imageEditor", "rotation", "rotationChange"]], template: function TuiImageEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "tui-image-editor-menus-buttons-load", 4);
        ɵɵlistener("loadImage", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_load_loadImage_4_listener($event) { return ctx.loadImage($event); });
        ɵɵelementEnd();
        ɵɵelement(5, "tui-image-editor-menus-buttons-download", 5);
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 3);
        ɵɵelement(7, "tui-image-editor-menus-buttons-zoom-in", 5);
        ɵɵelement(8, "tui-image-editor-menus-buttons-zoom-out", 5);
        ɵɵelement(9, "tui-image-editor-menus-buttons-drag", 5);
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 3);
        ɵɵelement(11, "tui-image-editor-menus-buttons-history", 6);
        ɵɵelementStart(12, "tui-image-editor-menus-buttons-undo", 7);
        ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_undo_cancelCroppingRequested_12_listener() { return ctx.exitCropOnAction(); });
        ɵɵelementEnd();
        ɵɵelementStart(13, "tui-image-editor-menus-buttons-redo", 7);
        ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_redo_cancelCroppingRequested_13_listener() { return ctx.exitCropOnAction(); });
        ɵɵelementEnd();
        ɵɵelementStart(14, "tui-image-editor-menus-buttons-reset", 8);
        ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_reset_cancelCroppingRequested_14_listener() { return ctx.exitCropOnAction(); })("resetImage", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_reset_resetImage_14_listener() { return ctx.resetImage(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 3);
        ɵɵelementStart(16, "tui-image-editor-menus-buttons-delete", 9);
        ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_delete_cancelCroppingRequested_16_listener() { return ctx.exitCropOnAction(); });
        ɵɵelementEnd();
        ɵɵelementStart(17, "tui-image-editor-menus-buttons-delete-all", 9);
        ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_delete_all_cancelCroppingRequested_17_listener() { return ctx.exitCropOnAction(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(18, "div", 10, 11);
        ɵɵtemplate(20, TuiImageEditorComponent_div_20_Template, 10, 9, "div", 12);
        ɵɵelementStart(21, "div", 13);
        ɵɵelementStart(22, "div", 14);
        ɵɵelementStart(23, "tui-image-editor-menus-buttons-crop", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_crop_clicked_23_listener($event) { return ctx.submenu == "crop" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementStart(24, "tui-image-editor-menus-buttons-flip", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_flip_clicked_24_listener($event) { return ctx.submenu == "flip" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementStart(25, "tui-image-editor-menus-buttons-rotate", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_rotate_clicked_25_listener($event) { return ctx.submenu == "rotate" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementStart(26, "tui-image-editor-menus-buttons-draw", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_draw_clicked_26_listener($event) { return ctx.submenu == "draw" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementStart(27, "tui-image-editor-menus-buttons-shape", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_shape_clicked_27_listener($event) { return ctx.submenu == "shape" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementStart(28, "tui-image-editor-menus-buttons-icon", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_icon_clicked_28_listener($event) { return ctx.submenu == "icon" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementStart(29, "tui-image-editor-menus-buttons-text", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_text_clicked_29_listener($event) { return ctx.submenu == "text" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementStart(30, "tui-image-editor-menus-buttons-mask", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_mask_clicked_30_listener($event) { return ctx.submenu == "mask" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementStart(31, "tui-image-editor-menus-buttons-filter", 15);
        ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_filter_clicked_31_listener($event) { return ctx.submenu == "filter" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        ɵɵadvance(2);
        ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        ɵɵadvance(2);
        ɵɵproperty("imageEditor", ctx.imageEditor);
        ɵɵadvance(1);
        ɵɵproperty("imageEditor", ctx.imageEditor);
        ɵɵadvance(1);
        ɵɵproperty("imageEditor", ctx.imageEditor);
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        ɵɵadvance(2);
        ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        ɵɵadvance(1);
        ɵɵstyleProp("height", "0");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.submenu != null);
        ɵɵadvance(3);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "crop");
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "flip");
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "rotate");
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "draw");
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "shape");
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "icon");
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "text");
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "mask");
        ɵɵadvance(1);
        ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "filter");
    } }, directives: [LoadComponent, DownloadComponent, ZoomInComponent, ZoomOutComponent, DragComponent, HistoryComponent, UndoComponent, RedoComponent, ResetComponent, DeleteComponent, DeleteAllComponent, NgIf, CropComponent, FlipComponent, RotateComponent, DrawComponent, ShapeComponent, IconComponent, TextComponent, MaskComponent, FilterComponent, CropComponent$1, FlipComponent$1, RotateComponent$1, DrawComponent$1, ShapeComponent$1, IconComponent$1, TextComponent$1, MaskComponent$1, FilterComponent$1], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TuiImageEditorComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor',
                templateUrl: 'tui-image-editor.component.html',
                providers: [HistoryService],
            }]
    }], function () { return [{ type: HistoryService }]; }, { imageContainer: [{
            type: ViewChild,
            args: ['imageContainer']
        }], options: [{
            type: Input
        }], initialImage: [{
            type: Input
        }] }); })();

class SvgDefinitionsComponent {
    constructor() { }
}
SvgDefinitionsComponent.ɵfac = function SvgDefinitionsComponent_Factory(t) { return new (t || SvgDefinitionsComponent)(); };
SvgDefinitionsComponent.ɵcmp = ɵɵdefineComponent({ type: SvgDefinitionsComponent, selectors: [["tui-image-editor-svg-definitions"]], decls: 239, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "display", "none"], ["id", "tui-image-editor-svg-default-icons"], ["id", "ic-apply", "viewBox", "0 0 24 24"], ["d", "M0 0h24v24H0z", "stroke", "none", "fill", "none"], ["fill", "none", "stroke", "inherit", "d", "M4 12.011l5 5L20.011 6"], ["id", "ic-cancel", "viewBox", "0 0 24 24"], ["d", "M0 0h24v24H0z", "fill", "none", "stroke", "none"], ["fill", "none", "stroke", "inherit", "d", "M6 6l12 12M18 6L6 18"], ["id", "ic-crop", "viewBox", "0 0 24 24"], ["stroke", "none", "fill", "inherit", "d", "M4 0h1v20a1 1 0 0 1-1-1V0zM20 17h-1V5h1v12zm0 2v5h-1v-5h1z"], ["stroke", "none", "fill", "inherit", "d", "M5 19h19v1H5zM4.762 4v1H0V4h4.762zM7 4h12a1 1 0 0 1 1 1H7V4z"], ["id", "ic-delete-all", "viewBox", "0 0 24 24"], ["stroke", "none", "fill", "inherit", "d", "M5 23H3a1 1 0 0 1-1-1V6h1v16h2v1zm16-10h-1V6h1v7zM9 13H8v-3h1v3zm3 0h-1v-3h1v3zm3 0h-1v-3h1v3zM14.794 3.794L13 2h-3L8.206 3.794A.963.963 0 0 1 8 2.5l.703-1.055A1 1 0 0 1 9.535 1h3.93a1 1 0 0 1 .832.445L15 2.5a.965.965 0 0 1-.206 1.294zM14.197 4H8.803h5.394z"], ["stroke", "none", "fill", "inherit", "d", "M0 3h23v1H0zM11.286 21H8.714L8 23H7l1-2.8V20h.071L9.5 16h1l1.429 4H12v.2l1 2.8h-1l-.714-2zm-.357-1L10 17.4 9.071 20h1.858zM20 22h3v1h-4v-7h1v6zm-5 0h3v1h-4v-7h1v6z"], ["id", "ic-delete", "viewBox", "0 0 24 24"], ["stroke", "none", "fill", "inherit", "d", "M3 6v16h17V6h1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6h1zM14.794 3.794L13 2h-3L8.206 3.794A.963.963 0 0 1 8 2.5l.703-1.055A1 1 0 0 1 9.535 1h3.93a1 1 0 0 1 .832.445L15 2.5a.965.965 0 0 1-.206 1.294zM14.197 4H8.803h5.394z"], ["stroke", "none", "fill", "inherit", "d", "M0 3h23v1H0zM8 10h1v6H8v-6zm3 0h1v6h-1v-6zm3 0h1v6h-1v-6z"], ["id", "ic-draw-free", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "d", "M2.5 20.929C2.594 10.976 4.323 6 7.686 6c5.872 0 2.524 19 7.697 19s1.89-14.929 6.414-14.929 1.357 10.858 5.13 10.858c1.802 0 2.657-2.262 2.566-6.786"], ["id", "ic-draw-line", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "d", "M2 15.5h28"], ["id", "ic-draw", "viewBox", "0 0 24 24"], ["fill", "none", "stroke", "inherit", "d", "M2.5 21.5H5c.245 0 .48-.058.691-.168l.124-.065.14.01c.429.028.85-.127 1.16-.437L22.55 5.405a.5.5 0 0 0 0-.707l-3.246-3.245a.5.5 0 0 0-.707 0L3.162 16.888a1.495 1.495 0 0 0-.437 1.155l.01.14-.065.123c-.111.212-.17.448-.17.694v2.5z"], ["stroke", "none", "fill", "inherit", "d", "M16.414 3.707l3.89 3.89-.708.706-3.889-3.889z"], ["id", "ic-filter", "viewBox", "0 0 24 24"], ["stroke", "none", "fill", "inherit", "d", "M12 7v1H2V7h10zm6 0h4v1h-4V7zM12 16v1h10v-1H12zm-6 0H2v1h4v-1z"], ["stroke", "none", "fill", "inherit", "d", "M8.5 20a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM15.5 11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"], ["id", "ic-flip-reset", "viewBox", "0 0 31 32"], ["fill", "none", "stroke", "none", "d", "M31 0H0v32h31z"], ["stroke", "none", "fill", "inherit", "d", "M28 16a8 8 0 0 1-8 8H3v-1h1v-7H3a8 8 0 0 1 8-8h17v1h-1v7h1zM11 9a7 7 0 0 0-7 7v7h16a7 7 0 0 0 7-7V9H11z"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "square", "d", "M24 5l3.5 3.5L24 12M7 20l-3.5 3.5L7 27"], ["id", "ic-flip-x", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "none", "d", "M32 32H0V0h32z"], ["stroke", "none", "fill", "inherit", "d", "M17 32h-1V0h1zM27.167 11l.5 3h-1.03l-.546-3h1.076zm-.5-3h-1.122L25 5h-5V4h5.153a1 1 0 0 1 .986.836L26.667 8zm1.5 9l.5 3h-.94l-.545-3h.985zm1 6l.639 3.836A1 1 0 0 1 28.819 28H26v-1h3l-.726-4h.894zM23 28h-3v-1h3v1zM13 4v1H7L3 27h10v1H3.18a1 1 0 0 1-.986-1.164l3.666-22A1 1 0 0 1 6.847 4H13z"], ["id", "ic-flip-y", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "none", "d", "M0 0v32h32V0z"], ["stroke", "none", "fill", "inherit", "d", "M0 16v1h32v-1zM11 27.167l3 .5v-1.03l-3-.546v1.076zm-3-.5v-1.122L5 25v-5H4v5.153a1 1 0 0 0 .836.986L8 26.667zm9 1.5l3 .5v-.94l-3-.545v.985zm6 1l3.836.639A1 1 0 0 0 28 28.82V26h-1v3l-4-.727v.894zM28 23v-3h-1v3h1zM4 13h1V7l22-4v10h1V3.18a1 1 0 0 0-1.164-.986l-22 3.667A1 1 0 0 0 4 6.847V13z"], ["id", "ic-flip", "viewBox", "0 0 24 24"], ["fill", "inherit", "stroke", "none", "d", "M11 0h1v24h-1zM19 21v-1h2v-2h1v2a1 1 0 0 1-1 1h-2zm-2 0h-3v-1h3v1zm5-5h-1v-3h1v3zm0-5h-1V8h1v3zm0-5h-1V4h-2V3h2a1 1 0 0 1 1 1v2zm-5-3v1h-3V3h3zM9 3v1H2v16h7v1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7z"], ["id", "ic-history", "viewBox", "0 0 24 24"], ["fill", "none", "stroke", "none", "d", "M0 0H24V24H0z", "transform", "translate(-740 -16) translate(547 8) translate(193 8)"], ["fill", "inherit", "stroke", "none", "d", "M12.5 1C18.299 1 23 5.701 23 11.5S18.299 22 12.5 22c-5.29 0-9.665-3.911-10.394-8.999h1.012C3.838 17.534 7.764 21 12.5 21c5.247 0 9.5-4.253 9.5-9.5S17.747 2 12.5 2C8.49 2 5.06 4.485 3.666 8H3h4v1H2V4h1v3.022C4.68 3.462 8.303 1 12.5 1zm.5 5l-.001 5.291 2.537 2.537-.708.708L12.292 12H12V6h1z", "transform", "translate(-740 -16) translate(547 8) translate(193 8)"], ["id", "ic-history-check", "viewBox", "0 0 12 12"], ["fill", "none", "fill-rule", "evenodd"], ["stroke", "#555555", "d", "M4.5 -1L1.5 2 6.5 7", "transform", "translate(-60 -804) translate(60 804) translate(2 3) rotate(-90 4 3)"], ["id", "ic-history-crop", "viewBox", "0 0 12 12"], ["fill", "none", "stroke", "none", "fill-rule", "evenodd"], ["d", "M0 0H12V12H0z", "transform", "translate(-84 -804) translate(84 804)"], ["fill", "#434343", "d", "M2 0h1v10c-.552 0-1-.448-1-1V0zM10 9v3H9V9h1zM9 2h1v6H9V2z", "transform", "translate(-84 -804) translate(84 804)"], ["fill", "#434343", "d", "M2 9H12V10H2zM9 2c.513 0 .936.386.993.883L10 3H3V2h6zM2 3H0V2h2v1z", "transform", "translate(-84 -804) translate(84 804)"], ["id", "ic-history-draw", "viewBox", "0 0 12 12"], ["d", "M0 1H12V13H0z", "transform", "translate(-156 -804) translate(156 803)"], ["stroke", "#434343", "d", "M9.622 1.584l1.835 1.658-8.31 8.407L.5 12.5V11l9.122-9.416z", "transform", "translate(-156 -804) translate(156 803)"], ["fill", "#434343", "d", "M7.628 3.753L10.378 3.753 10.378 4.253 7.628 4.253z", "transform", "translate(-156 -804) translate(156 803) rotate(45 9.003 4.003)"], ["id", "ic-history-filter", "viewBox", "0 0 12 12"], ["d", "M0 0H12V12H0z", "transform", "translate(-276 -804) translate(276 804)"], ["fill", "#434343", "d", "M12 3v1H9V3h3zM7 4H0V3h7v1z", "transform", "translate(-276 -804) translate(276 804)"], ["fill", "#434343", "d", "M12 8v1H9V8h3zM7 9H0V8h7v1z", "transform", "translate(-276 -804) translate(276 804) matrix(-1 0 0 1 12 0)"], ["fill", "#434343", "d", "M8 1c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm0 1c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM4 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm0 1c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z", "transform", "translate(-276 -804) translate(276 804)"], ["id", "ic-history-flip", "viewBox", "0 0 12 12"], ["d", "M0 0H12V12H0z", "transform", "translate(-108 -804) translate(108 804)"], ["fill", "#434343", "d", "M6 0L7 0 7 12 6 12zM11 10V9h1v1.5c0 .276-.224.5-.5.5H10v-1h1zM5 1v1H1v8h4v1H.5c-.276 0-.5-.224-.5-.5v-9c0-.276.224-.5.5-.5H5zm7 5v2h-1V6h1zm0-3v2h-1V3h1zM9 1v1H7V1h2zm2.5 0c.276 0 .5.224.5.5V2h-2V1h1.5zM9 11H7v-1h2v1z", "transform", "translate(-108 -804) translate(108 804)"], ["id", "ic-history-icon", "viewBox", "0 0 12 12"], ["d", "M0 0H12V12H0z", "transform", "translate(-204 -804) translate(204 804)"], ["stroke", "#434343", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.1", "d", "M6 9.568L2.601 11 2.975 7.467 0.5 4.82 4.13 4.068 6 1 7.87 4.068 11.5 4.82 9.025 7.467 9.399 11z", "transform", "translate(-204 -804) translate(204 804)"], ["id", "ic-history-mask", "viewBox", "0 0 12 12"], ["transform", "translate(-252 -804) translate(252 804)"], ["d", "M0 0H12V12H0z"], ["cx", "6", "cy", "6", "r", "2.5", "stroke", "#444"], ["fill", "#434343", "d", "M11.5 0c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5H.5c-.276 0-.5-.224-.5-.5V.5C0 .224.224 0 .5 0h11zM11 1H1v10h10V1z"], ["id", "ic-history-rotate", "viewBox", "0 0 12 12"], ["id", "rfn4rylffa", "d", "M7 12c-.335 0-.663-.025-.983-.074C3.171 11.492 1 9.205 1 6.444c0-1.363.534-2.613 1.415-3.58"], ["id", "6f9gn2dysb", "width", "6", "height", "9.136", "x", "0", "y", "0", "maskUnits", "objectBoundingBox"], [0, "xlink", "href", "#rfn4rylffa", "stroke", "434343"], ["transform", "translate(-132 -804) translate(132 804)"], ["d", "M0 0.5H12V12.5H0z"], ["fill", "#434343", "d", "M6.5 1C9.538 1 12 3.462 12 6.5c0 2.37-1.5 4.39-3.6 5.163l-.407-.916C9.744 10.13 11 8.462 11 6.5 11 4.015 8.985 2 6.5 2c-.777 0-1.509.197-2.147.544L4 1.75l-.205-.04C4.594 1.258 5.517 1 6.5 1z"], ["stroke", "#434343", "stroke-dasharray", "2 1.25", "stroke-width", "1", "mask", "url(#6f9gn2dysb)", 0, "xlink", "href", "#rfn4rylffa"], ["fill", "#434343", "d", "M4.279 0L6 1.75 4.25 3.571 3.543 2.864 4.586 1.75 3.572 0.707z", "transform", "matrix(-1 0 0 1 9.543 0)"], ["id", "ic-history-shape", "viewBox", "0 0 12 12"], ["d", "M0 0H12V12H0z", "transform", "translate(-180 -804) translate(180 804)"], ["fill", "#434343", "d", "M11.5 4c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5h-7c-.276 0-.5-.224-.5-.5V8.8h1V11h6V5H8.341l-.568-1H11.5z", "transform", "translate(-180 -804) translate(180 804)"], ["stroke", "#434343", "stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.5 0.5L8.5 7.611 0.5 7.611z", "transform", "translate(-180 -804) translate(180 804)"], ["id", "ic-history-text", "viewBox", "0 0 12 12"], ["d", "M0 0H12V12H0z", "transform", "translate(-228 -804) translate(228 804)"], ["fill", "#434343", "d", "M2 1h8c.552 0 1 .448 1 1H1c0-.552.448-1 1-1z", "transform", "translate(-228 -804) translate(228 804)"], ["fill", "#434343", "d", "M1 1H2V3H1zM10 1H11V3H10zM5.5 1L6.5 1 6.5 11 5.5 11z", "transform", "translate(-228 -804) translate(228 804)"], ["fill", "#434343", "d", "M4 10H8V11H4z", "transform", "translate(-228 -804) translate(228 804)"], ["id", "ic-history-load", "viewBox", "0 0 12 12"], ["d", "M0 0H12V12H0z", "transform", "translate(-324 -805) translate(324 805)"], ["fill", "#434343", "d", "M5 0c.552 0 1 .448 1 1v1h5.5c.276 0 .5.224.5.5v8c0 .276-.224.5-.5.5H.5c-.276 0-.5-.224-.5-.5V1c0-.552.448-1 1-1h4zm0 1H1v9h10V3H5V1z", "transform", "translate(-324 -805) translate(324 805)"], ["fill", "#434343", "d", "M1 2L5 2 5 3 1 3z", "transform", "translate(-324 -805) translate(324 805)"], ["id", "ic-history-delete", "viewBox", "0 0 12 12"], ["fill", "#434343"], ["d", "M2 9h8V1h1v8.5c0 .276-.224.5-.5.5h-9c-.276 0-.5-.224-.5-.5V1h1v8zM0 0H12V1H0z", "transform", "translate(-300 -804) translate(300 804) translate(0 2)"], ["d", "M4 3H5V7H4zM7 3H8V7H7z", "transform", "translate(-300 -804) translate(300 804) translate(0 2)"], ["d", "M4 1h4V0h1v1.5c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5V0h1v1z", "transform", "translate(-300 -804) translate(300 804) matrix(1 0 0 -1 0 2)"], ["id", "ic-history-group", "viewBox", "0 0 24 24"], ["transform", "translate(-348 -804) translate(348 804)"], ["fill", "#434343", "d", "M1 9v2h1v1H.5c-.276 0-.5-.224-.5-.5V9h1zm11 1v1.5c0 .276-.224.5-.5.5H9v-1h2v-1h1zm-4 1v1H6v-1h2zm-3 0v1H3v-1h2zm7-4v2h-1V7h1zM1 6v2H0V6h1zm11-2v2h-1V4h1zM1 3v2H0V3h1zm10.5-3c.276 0 .5.224.5.5V3h-1V1h-1V0h1.5zM6 0v1H4V0h2zm3 0v1H7V0h2zM0 .5C0 .224.224 0 .5 0H3v1H1v1H0V.5zM9.5 4c.276 0 .5.224.5.5v5c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5V8.355c.317.094.652.145 1 .145V9h4V5h-.5c0-.348-.05-.683-.145-1H9.5z"], ["cx", "5", "cy", "5", "r", "2.5", "stroke", "#434343"], ["id", "ic-icon-arrow-2", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.793 18.5H2.5v-5h18.935l-7.6-8h5.872l10.5 10.5-10.5 10.5h-5.914l8-8z"], ["id", "ic-icon-arrow-3", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "round", "stroke-linejoin", "round", "d", "M25.288 16.42L14.208 27.5H6.792l11.291-11.291L6.826 4.5h7.381l11.661 11.661-.58.258z"], ["id", "ic-icon-arrow", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "d", "M2.5 11.5v9h18v5.293L30.293 16 20.5 6.207V11.5h-18z"], ["id", "ic-icon-bubble", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "round", "stroke-linejoin", "round", "d", "M22.207 24.5L16.5 30.207V24.5H8A6.5 6.5 0 0 1 1.5 18V9A6.5 6.5 0 0 1 8 2.5h16A6.5 6.5 0 0 1 30.5 9v9a6.5 6.5 0 0 1-6.5 6.5h-1.793z"], ["id", "ic-icon-heart", "viewBox", "0 0 32 32"], ["fill-rule", "nonzero", "fill", "none", "stroke", "inherit", "d", "M15.996 30.675l1.981-1.79c7.898-7.177 10.365-9.718 12.135-13.012.922-1.716 1.377-3.37 1.377-5.076 0-4.65-3.647-8.297-8.297-8.297-2.33 0-4.86 1.527-6.817 3.824l-.38.447-.381-.447C13.658 4.027 11.126 2.5 8.797 2.5 4.147 2.5.5 6.147.5 10.797c0 1.714.46 3.375 1.389 5.098 1.775 3.288 4.26 5.843 12.123 12.974l1.984 1.806z"], ["id", "ic-icon-load", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.314 18.867l1.951-2.53 4 5.184h-17l6.5-8.84 4.549 6.186z"], ["stroke", "none", "fill", "inherit", "d", "M18.01 4a11.798 11.798 0 0 0 0 1H3v24h24V14.986a8.738 8.738 0 0 0 1 0V29a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h15.01z"], ["stroke", "none", "fill", "inherit", "d", "M25 3h1v9h-1z"], ["fill", "none", "stroke", "inherit", "d", "M22 6l3.5-3.5L29 6"], ["id", "ic-icon-location", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "d", "M16 31.28C23.675 23.302 27.5 17.181 27.5 13c0-6.351-5.149-11.5-11.5-11.5S4.5 6.649 4.5 13c0 4.181 3.825 10.302 11.5 18.28z"], ["fill", "none", "stroke", "inherit", "cx", "16", "cy", "13", "r", "4.5"], ["id", "ic-icon-polygon", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "d", "M.576 16L8.29 29.5h15.42L31.424 16 23.71 2.5H8.29L.576 16z"], ["id", "ic-icon-star-2", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "d", "M19.446 31.592l2.265-3.272 3.946.25.636-3.94 3.665-1.505-1.12-3.832 2.655-2.962-2.656-2.962 1.12-3.832-3.664-1.505-.636-3.941-3.946.25-2.265-3.271L16 3.024 12.554 1.07 10.289 4.34l-3.946-.25-.636 3.941-3.665 1.505 1.12 3.832L.508 16.33l2.656 2.962-1.12 3.832 3.664 1.504.636 3.942 3.946-.25 2.265 3.27L16 29.638l3.446 1.955z"], ["id", "ic-icon-star", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "inherit", "d", "M25.292 29.878l-1.775-10.346 7.517-7.327-10.388-1.51L16 1.282l-4.646 9.413-10.388 1.51 7.517 7.327-1.775 10.346L16 24.993l9.292 4.885z"], ["id", "ic-icon", "viewBox", "0 0 24 24"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11.923 19.136L5.424 22l.715-7.065-4.731-5.296 6.94-1.503L11.923 2l3.574 6.136 6.94 1.503-4.731 5.296L18.42 22z"], ["id", "ic-mask-load", "viewBox", "0 0 32 32"], ["stroke", "none", "fill", "none", "d", "M0 0h32v32H0z"], ["stroke", "none", "fill", "inherit", "d", "M18.01 4a11.798 11.798 0 0 0 0 1H3v24h24V14.986a8.738 8.738 0 0 0 1 0V29a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h15.01zM15 23a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"], ["id", "ic-mask", "viewBox", "0 0 24 24"], ["cx", "12", "cy", "12", "r", "4.5", "stroke", "inherit", "fill", "none"], ["stroke", "none", "fill", "inherit", "d", "M2 1h20a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 1v20h20V2H2z"], ["id", "ic-redo", "viewBox", "0 0 24 24"], ["d", "M0 0h24v24H0z", "opacity", ".5", "fill", "none", "stroke", "none"], ["stroke", "none", "fill", "inherit", "d", "M21 6H9a6 6 0 1 0 0 12h12v1H9A7 7 0 0 1 9 5h12v1z"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "square", "d", "M19 3l2.5 2.5L19 8"], ["id", "ic-reset", "viewBox", "0 0 24 24"], ["d", "M0 0h24v24H0z", "opacity", ".5", "stroke", "none", "fill", "none"], ["stroke", "none", "fill", "inherit", "d", "M2 13v-1a7 7 0 0 1 7-7h13v1h-1v5h1v1a7 7 0 0 1-7 7H2v-1h1v-5H2zm7-7a6 6 0 0 0-6 6v6h12a6 6 0 0 0 6-6V6H9z"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "square", "d", "M19 3l2.5 2.5L19 8M5 16l-2.5 2.5L5 21"], ["id", "ic-rotate-clockwise", "viewBox", "0 0 32 32"], ["stroke", "none", "fill", "inherit", "d", "M29 17h-.924c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12C4.076 10.398 9.407 5.041 16 5V4C8.82 4 3 9.82 3 17s5.82 13 13 13 13-5.82 13-13z"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "square", "d", "M16 1.5l4 3-4 3"], ["stroke", "none", "fill", "inherit", "fill-rule", "nonzero", "d", "M16 4h4v1h-4z"], ["id", "ic-rotate-counterclockwise", "viewBox", "0 0 32 32"], ["stroke", "none", "d", "M3 17h.924c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.602-5.331-11.96-11.924-12V4c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 24.18 3 17z"], ["stroke", "none", "fill", "inherit", "fill-rule", "nonzero", "d", "M12 4h4v1h-4z"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "square", "d", "M16 1.5l-4 3 4 3"], ["id", "ic-rotate", "viewBox", "0 0 24 24"], ["fill", "inherit", "stroke", "none", "d", "M8.349 22.254a10.002 10.002 0 0 1-2.778-1.719l.65-.76a9.002 9.002 0 0 0 2.495 1.548l-.367.931zm2.873.704l.078-.997a9 9 0 1 0-.557-17.852l-.14-.99A10.076 10.076 0 0 1 12.145 3c5.523 0 10 4.477 10 10s-4.477 10-10 10c-.312 0-.62-.014-.924-.042zm-7.556-4.655a9.942 9.942 0 0 1-1.253-2.996l.973-.234a8.948 8.948 0 0 0 1.124 2.693l-.844.537zm-1.502-5.91A9.949 9.949 0 0 1 2.88 9.23l.925.382a8.954 8.954 0 0 0-.644 2.844l-.998-.062zm2.21-5.686c.687-.848 1.51-1.58 2.436-2.166l.523.852a9.048 9.048 0 0 0-2.188 1.95l-.771-.636z"], ["stroke", "inherit", "fill", "none", "stroke-linecap", "square", "d", "M13 1l-2.5 2.5L13 6"], ["id", "ic-shape-circle", "viewBox", "0 0 32 32"], ["cx", "16", "cy", "16", "r", "14.5", "fill", "none", "stroke", "inherit"], ["id", "ic-shape-rectangle", "viewBox", "0 0 32 32"], ["width", "27", "height", "27", "x", "2.5", "y", "2.5", "fill", "none", "stroke", "inherit", "rx", "1"], ["id", "ic-shape-triangle", "viewBox", "0 0 32 32"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 2.5l15.5 27H.5z"], ["id", "ic-shape", "viewBox", "0 0 24 24"], ["stroke", "none", "fill", "inherit", "d", "M14.706 8H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4h1v4h12V9h-5.706l-.588-1z"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8.5 1.5l7.5 13H1z"], ["id", "ic-text-align-center", "viewBox", "0 0 32 32"], ["stroke", "none", "fill", "inherit", "d", "M2 5h28v1H2zM8 12h16v1H8zM2 19h28v1H2zM8 26h16v1H8z"], ["id", "ic-text-align-left", "viewBox", "0 0 32 32"], ["stroke", "none", "fill", "inherit", "d", "M2 5h28v1H2zM2 12h16v1H2zM2 19h28v1H2zM2 26h16v1H2z"], ["id", "ic-text-align-right", "viewBox", "0 0 32 32"], ["stroke", "none", "fill", "inherit", "d", "M2 5h28v1H2zM14 12h16v1H14zM2 19h28v1H2zM14 26h16v1H14z"], ["id", "ic-text-bold", "viewBox", "0 0 32 32"], ["fill", "none", "stroke", "none", "d", "M0 0h32v32H0z"], ["stroke", "none", "fill", "inherit", "d", "M7 2h2v2H7zM7 28h2v2H7z"], ["fill", "none", "stroke", "inherit", "stroke-width", "2", "d", "M9 3v12h9a6 6 0 1 0 0-12H9zM9 15v14h10a7 7 0 0 0 0-14H9z"], ["id", "ic-text-italic", "viewBox", "0 0 32 32"], ["stroke", "none", "fill", "inherit", "d", "M15 2h5v1h-5zM11 29h5v1h-5zM17 3h1l-4 26h-1z"], ["id", "ic-text-underline", "viewBox", "0 0 32 32"], ["stroke", "none", "fill", "inherit", "d", "M8 2v14a8 8 0 1 0 16 0V2h1v14a9 9 0 0 1-18 0V2h1zM3 29h26v1H3z"], ["stroke", "none", "fill", "inherit", "d", "M5 2h5v1H5zM22 2h5v1h-5z"], ["id", "ic-text", "viewBox", "0 0 24 24"], ["stroke", "none", "fill", "inherit", "d", "M4 3h15a1 1 0 0 1 1 1H3a1 1 0 0 1 1-1zM3 4h1v1H3zM19 4h1v1h-1z"], ["stroke", "none", "fill", "inherit", "d", "M11 3h1v18h-1z"], ["stroke", "none", "fill", "inherit", "d", "M10 20h3v1h-3z"], ["id", "ic-undo", "viewBox", "0 0 24 24"], ["d", "M24 0H0v24h24z", "opacity", ".5", "fill", "none", "stroke", "none"], ["stroke", "none", "fill", "inherit", "d", "M3 6h12a6 6 0 1 1 0 12H3v1h12a7 7 0 0 0 0-14H3v1z"], ["fill", "none", "stroke", "inherit", "stroke-linecap", "square", "d", "M5 3L2.5 5.5 5 8"], ["id", "ic-zoom-in", "viewBox", "0 0 24 24"], ["transform", "translate(-229 -290) translate(229 290)"], ["cx", "10.5", "cy", "10.5", "r", "9", "stroke", "inherit", "fill", "none"], ["fill", "inherit", "d", "M18.828 15.828H19.828V22.828H18.828z", "transform", "rotate(-45 19.328 19.328)"], ["fill", "inherit", "d", "M7 10H14V11H7z"], ["fill", "inherit", "d", "M10 7H11V14H10z"], ["id", "ic-zoom-out", "viewBox", "0 0 24 24"], ["transform", "translate(-263 -290) translate(263 290)"], ["id", "ic-hand", "viewBox", "0 0 24 24"], ["fill", "none", "fill-rule", "evenodd", "stroke-linejoin", "round"], ["fill", "inherit", "fill-rule", "nonzero", "d", "M8.672 3.36c1.328 0 2.114.78 2.29 1.869l.014.101.023.006v1.042l-.638-.185c-.187-.055-.323-.211-.354-.399L10 5.713c0-.825-.42-1.353-1.328-1.353C7.695 4.36 7 5.041 7 5.713v7.941c0 .439-.524.665-.843.364l-1.868-1.761c-.595-.528-1.316-.617-1.918-.216-.522.348-.562 1.203-.18 1.8L7.738 22h11.013l.285-.518c1.247-2.326 1.897-4.259 1.96-5.785l.004-.239V8.035c0-.656-.5-1.17-1-1.17-.503 0-1 .456-1 1.17 0 .333-.32.573-.64.48L18 8.41V7.368l.086.026.042-.136c.279-.805.978-1.332 1.738-1.388L20 5.865c1.057 0 2 .967 2 2.17v7.423c0 1.929-.845 4.352-2.521 7.29-.09.156-.255.252-.435.252H7.474c-.166 0-.321-.082-.414-.219l-5.704-8.39c-.653-1.019-.584-2.486.46-3.182 1-.666 2.216-.516 3.148.31L6 12.495V5.713c0-1.18 1.058-2.263 2.49-2.348z", "transform", "translate(-297 -290) translate(297 290)"], ["fill", "inherit", "fill-rule", "nonzero", "d", "M12.5 1.5c1.325 0 2.41 1.032 2.495 2.336L15 4v7.22h-1V4c0-.828-.672-1.5-1.5-1.5-.78 0-1.42.595-1.493 1.356L11 4v7.22h-1V4c0-1.38 1.12-2.5 2.5-2.5z", "transform", "translate(-297 -290) translate(297 290)"], ["fill", "inherit", "fill-rule", "nonzero", "d", "M16.5 3.5c1.325 0 2.41 1.032 2.495 2.336L19 6v6.3h-1V6c0-.828-.672-1.5-1.5-1.5-.78 0-1.42.595-1.493 1.356L15 6v2.44h-1V6c0-1.38 1.12-2.5 2.5-2.5z", "transform", "translate(-297 -290) translate(297 290)"], ["id", "ic-history-rotate", "viewBox", "0 0 24 24"], ["id", "ic-file-upload", "viewBox", "-53 1 511 511.99906"], ["d", "M 276.410156 3.957031 C 274.0625 1.484375 270.84375 0 267.507812 0 L 67.777344 0 C 30.921875 0 0.5 30.300781 0.5 67.152344 L 0.5 444.84375 C 0.5 481.699219 30.921875 512 67.777344 512 L 338.863281 512 C 375.71875 512 406.140625 481.699219 406.140625 444.84375 L 406.140625 144.941406 C 406.140625 141.726562 404.65625 138.636719 402.554688 136.285156 Z M 279.996094 43.65625 L 364.464844 132.328125 L 309.554688 132.328125 C 293.230469 132.328125 279.996094 119.21875 279.996094 102.894531 Z M 338.863281 487.265625 L 67.777344 487.265625 C 44.652344 487.265625 25.234375 468.097656 25.234375 444.84375 L 25.234375 67.152344 C 25.234375 44.027344 44.527344 24.734375 67.777344 24.734375 L 255.261719 24.734375 L 255.261719 102.894531 C 255.261719 132.945312 279.503906 157.0625 309.554688 157.0625 L 381.40625 157.0625 L 381.40625 444.84375 C 381.40625 468.097656 362.113281 487.265625 338.863281 487.265625 Z M 338.863281 487.265625 "], ["d", "M 305.101562 401.933594 L 101.539062 401.933594 C 94.738281 401.933594 89.171875 407.496094 89.171875 414.300781 C 89.171875 421.101562 94.738281 426.667969 101.539062 426.667969 L 305.226562 426.667969 C 312.027344 426.667969 317.59375 421.101562 317.59375 414.300781 C 317.59375 407.496094 312.027344 401.933594 305.101562 401.933594 Z M 305.101562 401.933594 "], ["d", "M 140 268.863281 L 190.953125 214.074219 L 190.953125 349.125 C 190.953125 355.925781 196.519531 361.492188 203.320312 361.492188 C 210.125 361.492188 215.6875 355.925781 215.6875 349.125 L 215.6875 214.074219 L 266.640625 268.863281 C 269.113281 271.457031 272.332031 272.820312 275.667969 272.820312 C 278.636719 272.820312 281.730469 271.707031 284.078125 269.480469 C 289.027344 264.78125 289.398438 256.988281 284.699219 252.042969 L 212.226562 174.253906 C 209.875 171.78125 206.660156 170.296875 203.199219 170.296875 C 199.734375 170.296875 196.519531 171.78125 194.171875 174.253906 L 121.699219 252.042969 C 117 256.988281 117.371094 264.902344 122.316406 269.480469 C 127.511719 274.179688 135.300781 273.808594 140 268.863281 Z M 140 268.863281 "], ["id", "ic-file-download", "viewBox", "-53 1 511 511.99906"], ["d", "M 194.292969 357.535156 C 196.644531 360.007812 199.859375 361.492188 203.320312 361.492188 C 206.785156 361.492188 210 360.007812 212.347656 357.535156 L 284.820312 279.746094 C 289.519531 274.796875 289.148438 266.882812 284.203125 262.308594 C 279.253906 257.609375 271.339844 257.976562 266.765625 262.925781 L 215.6875 317.710938 L 215.6875 182.664062 C 215.6875 175.859375 210.121094 170.296875 203.320312 170.296875 C 196.519531 170.296875 190.953125 175.859375 190.953125 182.664062 L 190.953125 317.710938 L 140 262.925781 C 135.300781 257.980469 127.507812 257.609375 122.5625 262.308594 C 117.617188 267.007812 117.246094 274.800781 121.945312 279.746094 Z M 194.292969 357.535156 "]], template: function SvgDefinitionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "defs", 1);
        ɵɵelementStart(2, "symbol", 2);
        ɵɵelement(3, "path", 3);
        ɵɵelement(4, "path", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "symbol", 5);
        ɵɵelement(6, "path", 6);
        ɵɵelement(7, "path", 7);
        ɵɵelementEnd();
        ɵɵelementStart(8, "symbol", 8);
        ɵɵelement(9, "path", 3);
        ɵɵelement(10, "path", 9);
        ɵɵelement(11, "path", 10);
        ɵɵelementEnd();
        ɵɵelementStart(12, "symbol", 11);
        ɵɵelement(13, "path", 12);
        ɵɵelement(14, "path", 13);
        ɵɵelementEnd();
        ɵɵelementStart(15, "symbol", 14);
        ɵɵelement(16, "path", 15);
        ɵɵelement(17, "path", 16);
        ɵɵelementEnd();
        ɵɵelementStart(18, "symbol", 17);
        ɵɵelement(19, "path", 18);
        ɵɵelementEnd();
        ɵɵelementStart(20, "symbol", 19);
        ɵɵelement(21, "path", 20);
        ɵɵelementEnd();
        ɵɵelementStart(22, "symbol", 21);
        ɵɵelement(23, "path", 22);
        ɵɵelement(24, "path", 23);
        ɵɵelementEnd();
        ɵɵelementStart(25, "symbol", 24);
        ɵɵelement(26, "path", 6);
        ɵɵelement(27, "path", 25);
        ɵɵelement(28, "path", 26);
        ɵɵelementEnd();
        ɵɵelementStart(29, "symbol", 27);
        ɵɵelement(30, "path", 28);
        ɵɵelement(31, "path", 29);
        ɵɵelement(32, "path", 30);
        ɵɵelementEnd();
        ɵɵelementStart(33, "symbol", 31);
        ɵɵelement(34, "path", 32);
        ɵɵelement(35, "path", 33);
        ɵɵelementEnd();
        ɵɵelementStart(36, "symbol", 34);
        ɵɵelement(37, "path", 35);
        ɵɵelement(38, "path", 36);
        ɵɵelementEnd();
        ɵɵelementStart(39, "symbol", 37);
        ɵɵelement(40, "path", 6);
        ɵɵelement(41, "path", 38);
        ɵɵelementEnd();
        ɵɵelementStart(42, "symbol", 39);
        ɵɵelement(43, "path", 40);
        ɵɵelement(44, "path", 41);
        ɵɵelementEnd();
        ɵɵelementStart(45, "symbol", 42);
        ɵɵelementStart(46, "g", 43);
        ɵɵelement(47, "path", 44);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(48, "symbol", 45);
        ɵɵelementStart(49, "g", 46);
        ɵɵelement(50, "path", 47);
        ɵɵelement(51, "path", 48);
        ɵɵelement(52, "path", 49);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(53, "symbol", 50);
        ɵɵelementStart(54, "g", 46);
        ɵɵelement(55, "path", 51);
        ɵɵelement(56, "path", 52);
        ɵɵelement(57, "path", 53);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(58, "symbol", 54);
        ɵɵelementStart(59, "g", 46);
        ɵɵelement(60, "path", 55);
        ɵɵelement(61, "path", 56);
        ɵɵelement(62, "path", 57);
        ɵɵelement(63, "path", 58);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(64, "symbol", 59);
        ɵɵelementStart(65, "g", 46);
        ɵɵelement(66, "path", 60);
        ɵɵelement(67, "path", 61);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(68, "symbol", 62);
        ɵɵelementStart(69, "g", 46);
        ɵɵelement(70, "path", 63);
        ɵɵelement(71, "path", 64);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(72, "symbol", 65);
        ɵɵelementStart(73, "g", 46);
        ɵɵelementStart(74, "g", 66);
        ɵɵelement(75, "path", 67);
        ɵɵelement(76, "circle", 68);
        ɵɵelement(77, "path", 69);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(78, "symbol", 70);
        ɵɵelementStart(79, "defs");
        ɵɵelement(80, "path", 71);
        ɵɵelementStart(81, "mask", 72);
        ɵɵelement(82, "use", 73);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(83, "g", 46);
        ɵɵelementStart(84, "g", 74);
        ɵɵelement(85, "path", 75);
        ɵɵelement(86, "path", 76);
        ɵɵelement(87, "use", 77);
        ɵɵelement(88, "path", 78);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(89, "symbol", 79);
        ɵɵelementStart(90, "g", 46);
        ɵɵelement(91, "path", 80);
        ɵɵelement(92, "path", 81);
        ɵɵelement(93, "path", 82);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(94, "symbol", 83);
        ɵɵelementStart(95, "g", 46);
        ɵɵelement(96, "path", 84);
        ɵɵelement(97, "path", 85);
        ɵɵelement(98, "path", 86);
        ɵɵelement(99, "path", 87);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(100, "symbol", 88);
        ɵɵelementStart(101, "g", 46);
        ɵɵelement(102, "path", 89);
        ɵɵelement(103, "path", 90);
        ɵɵelement(104, "path", 91);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(105, "symbol", 92);
        ɵɵelementStart(106, "g", 46);
        ɵɵelementStart(107, "g", 93);
        ɵɵelement(108, "path", 94);
        ɵɵelement(109, "path", 95);
        ɵɵelement(110, "path", 96);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(111, "symbol", 97);
        ɵɵelementStart(112, "g", 46);
        ɵɵelementStart(113, "g", 98);
        ɵɵelement(114, "path", 67);
        ɵɵelement(115, "path", 99);
        ɵɵelement(116, "circle", 100);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(117, "symbol", 101);
        ɵɵelement(118, "path", 102);
        ɵɵelementEnd();
        ɵɵelementStart(119, "symbol", 103);
        ɵɵelement(120, "path", 104);
        ɵɵelementEnd();
        ɵɵelementStart(121, "symbol", 105);
        ɵɵelement(122, "path", 106);
        ɵɵelementEnd();
        ɵɵelementStart(123, "symbol", 107);
        ɵɵelement(124, "path", 108);
        ɵɵelementEnd();
        ɵɵelementStart(125, "symbol", 109);
        ɵɵelement(126, "path", 110);
        ɵɵelementEnd();
        ɵɵelementStart(127, "symbol", 111);
        ɵɵelement(128, "path", 112);
        ɵɵelement(129, "path", 113);
        ɵɵelement(130, "path", 114);
        ɵɵelement(131, "path", 115);
        ɵɵelementEnd();
        ɵɵelementStart(132, "symbol", 116);
        ɵɵelement(133, "path", 117);
        ɵɵelement(134, "circle", 118);
        ɵɵelementEnd();
        ɵɵelementStart(135, "symbol", 119);
        ɵɵelement(136, "path", 120);
        ɵɵelementEnd();
        ɵɵelementStart(137, "symbol", 121);
        ɵɵelement(138, "path", 122);
        ɵɵelementEnd();
        ɵɵelementStart(139, "symbol", 123);
        ɵɵelement(140, "path", 124);
        ɵɵelementEnd();
        ɵɵelementStart(141, "symbol", 125);
        ɵɵelement(142, "path", 126);
        ɵɵelementEnd();
        ɵɵelementStart(143, "symbol", 127);
        ɵɵelement(144, "path", 128);
        ɵɵelement(145, "path", 129);
        ɵɵelement(146, "path", 114);
        ɵɵelement(147, "path", 115);
        ɵɵelementEnd();
        ɵɵelementStart(148, "symbol", 130);
        ɵɵelement(149, "circle", 131);
        ɵɵelement(150, "path", 132);
        ɵɵelementEnd();
        ɵɵelementStart(151, "symbol", 133);
        ɵɵelement(152, "path", 134);
        ɵɵelement(153, "path", 135);
        ɵɵelement(154, "path", 136);
        ɵɵelementEnd();
        ɵɵelementStart(155, "symbol", 137);
        ɵɵelement(156, "path", 138);
        ɵɵelement(157, "path", 139);
        ɵɵelement(158, "path", 140);
        ɵɵelementEnd();
        ɵɵelementStart(159, "symbol", 141);
        ɵɵelement(160, "path", 142);
        ɵɵelement(161, "path", 143);
        ɵɵelement(162, "path", 144);
        ɵɵelementEnd();
        ɵɵelementStart(163, "symbol", 145);
        ɵɵelement(164, "path", 146);
        ɵɵelement(165, "path", 147);
        ɵɵelement(166, "path", 148);
        ɵɵelementEnd();
        ɵɵelementStart(167, "symbol", 149);
        ɵɵelement(168, "path", 6);
        ɵɵelement(169, "path", 150);
        ɵɵelement(170, "path", 151);
        ɵɵelementEnd();
        ɵɵelementStart(171, "symbol", 152);
        ɵɵelement(172, "circle", 153);
        ɵɵelementEnd();
        ɵɵelementStart(173, "symbol", 154);
        ɵɵelement(174, "rect", 155);
        ɵɵelementEnd();
        ɵɵelementStart(175, "symbol", 156);
        ɵɵelement(176, "path", 157);
        ɵɵelementEnd();
        ɵɵelementStart(177, "symbol", 158);
        ɵɵelement(178, "path", 159);
        ɵɵelement(179, "path", 160);
        ɵɵelementEnd();
        ɵɵelementStart(180, "symbol", 161);
        ɵɵelement(181, "path", 128);
        ɵɵelement(182, "path", 162);
        ɵɵelementEnd();
        ɵɵelementStart(183, "symbol", 163);
        ɵɵelement(184, "path", 128);
        ɵɵelement(185, "path", 164);
        ɵɵelementEnd();
        ɵɵelementStart(186, "symbol", 165);
        ɵɵelement(187, "path", 128);
        ɵɵelement(188, "path", 166);
        ɵɵelementEnd();
        ɵɵelementStart(189, "symbol", 167);
        ɵɵelement(190, "path", 168);
        ɵɵelement(191, "path", 169);
        ɵɵelement(192, "path", 170);
        ɵɵelementEnd();
        ɵɵelementStart(193, "symbol", 171);
        ɵɵelement(194, "path", 168);
        ɵɵelement(195, "path", 172);
        ɵɵelementEnd();
        ɵɵelementStart(196, "symbol", 173);
        ɵɵelement(197, "path", 128);
        ɵɵelement(198, "path", 174);
        ɵɵelement(199, "path", 175);
        ɵɵelementEnd();
        ɵɵelementStart(200, "symbol", 176);
        ɵɵelement(201, "path", 177);
        ɵɵelement(202, "path", 178);
        ɵɵelement(203, "path", 179);
        ɵɵelementEnd();
        ɵɵelementStart(204, "symbol", 180);
        ɵɵelement(205, "path", 181);
        ɵɵelement(206, "path", 182);
        ɵɵelement(207, "path", 183);
        ɵɵelementEnd();
        ɵɵelementStart(208, "symbol", 184);
        ɵɵelementStart(209, "g", 185);
        ɵɵelement(210, "circle", 186);
        ɵɵelement(211, "path", 187);
        ɵɵelement(212, "path", 188);
        ɵɵelement(213, "path", 189);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(214, "symbol", 190);
        ɵɵelementStart(215, "g", 191);
        ɵɵelement(216, "circle", 186);
        ɵɵelement(217, "path", 187);
        ɵɵelement(218, "path", 188);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(219, "symbol", 192);
        ɵɵelementStart(220, "g", 193);
        ɵɵelement(221, "path", 194);
        ɵɵelement(222, "path", 195);
        ɵɵelement(223, "path", 196);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(224, "symbol", 197);
        ɵɵelementStart(225, "g", 46);
        ɵɵelementStart(226, "g", 74);
        ɵɵelement(227, "path", 75);
        ɵɵelement(228, "path", 76);
        ɵɵelement(229, "use", 77);
        ɵɵelement(230, "path", 78);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(231, "symbol", 198);
        ɵɵelement(232, "path", 199);
        ɵɵelement(233, "path", 200);
        ɵɵelement(234, "path", 201);
        ɵɵelementEnd();
        ɵɵelementStart(235, "symbol", 202);
        ɵɵelement(236, "path", 199);
        ɵɵelement(237, "path", 200);
        ɵɵelement(238, "path", 203);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SvgDefinitionsComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-svg-definitions',
                templateUrl: './svg-definitions.component.html'
            }]
    }], function () { return []; }, null); })();

const translateModule = TranslateModule.forRoot();
class TuiImageEditorModule {
    static forRoot() {
        return {
            ngModule: TuiImageEditorModule,
            providers: [],
        };
    }
}
TuiImageEditorModule.ɵmod = ɵɵdefineNgModule({ type: TuiImageEditorModule });
TuiImageEditorModule.ɵinj = ɵɵdefineInjector({ factory: function TuiImageEditorModule_Factory(t) { return new (t || TuiImageEditorModule)(); }, providers: [TranslationService], imports: [[
            CommonModule,
            FormsModule,
            translateModule,
            ColorPickerModule,
            NgbPopoverModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TuiImageEditorModule, { declarations: [TuiImageEditorComponent,
        LoadComponent,
        HistoryComponent,
        SvgDefinitionsComponent,
        DownloadComponent,
        ZoomInComponent,
        ZoomOutComponent,
        DragComponent,
        UndoComponent,
        RedoComponent,
        ResetComponent,
        DeleteComponent,
        DeleteAllComponent,
        CropComponent,
        CropComponent$1,
        FlipComponent,
        FlipComponent$1,
        RotateComponent,
        RotateComponent$1,
        DrawComponent,
        DrawComponent$1,
        ShapeComponent,
        ShapeComponent$1,
        IconComponent,
        IconComponent$1,
        TextComponent,
        TextComponent$1,
        MaskComponent,
        MaskComponent$1,
        FilterComponent,
        FilterComponent$1], imports: [CommonModule,
        FormsModule, TranslateModule, ColorPickerModule,
        NgbPopoverModule], exports: [TuiImageEditorComponent, SvgDefinitionsComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TuiImageEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TuiImageEditorComponent,
                    LoadComponent,
                    HistoryComponent,
                    SvgDefinitionsComponent,
                    DownloadComponent,
                    ZoomInComponent,
                    ZoomOutComponent,
                    DragComponent,
                    UndoComponent,
                    RedoComponent,
                    ResetComponent,
                    DeleteComponent,
                    DeleteAllComponent,
                    CropComponent,
                    CropComponent$1,
                    FlipComponent,
                    FlipComponent$1,
                    RotateComponent,
                    RotateComponent$1,
                    DrawComponent,
                    DrawComponent$1,
                    ShapeComponent,
                    ShapeComponent$1,
                    IconComponent,
                    IconComponent$1,
                    TextComponent,
                    TextComponent$1,
                    MaskComponent,
                    MaskComponent$1,
                    FilterComponent,
                    FilterComponent$1,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    translateModule,
                    ColorPickerModule,
                    NgbPopoverModule,
                ],
                exports: [TuiImageEditorComponent, SvgDefinitionsComponent],
                providers: [TranslationService],
            }]
    }], null, null); })();

/*
 * Public API Surface of tui-image-editor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SvgDefinitionsComponent, TranslationService, TuiImageEditorComponent, TuiImageEditorModule, translateModule };
//# sourceMappingURL=tui-image-editor-angular.js.map
