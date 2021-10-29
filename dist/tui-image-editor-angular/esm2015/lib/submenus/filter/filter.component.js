import { __awaiter } from "tslib";
import { Component, Input } from '@angular/core';
import { defaultColors, filterType } from '../../consts';
import { HistoryItemType } from '../../interfaces/history-item';
import { removeFilter, rgbaToObject } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "../../services/history.service";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-color-picker";
import * as i4 from "@ngx-translate/core";
export class FilterComponent {
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
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(i0.ɵɵdirectiveInject(i1.HistoryService)); };
FilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["tui-image-editor-submenus-filter"]], inputs: { imageEditor: "imageEditor" }, decls: 136, vars: 109, consts: [[1, "tui-image-editor-menu-filter", "tui-image-editor-d-flex", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-submenu-item", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [1, "tui-image-editor-submenu-align"], [1, "tui-image-editor-checkbox-wrap", "fixed-width", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-wrap", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-checkbox", "tui-image-editor-align-self-center"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-flex-nowrap"], ["type", "checkbox", 1, "tie-grayscale", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-invert", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-sepia", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-vintage", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-blur", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-sharpen", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "tie-emboss", 3, "ngModel", "ngModelChange"], [1, "tui-image-editor-partition"], [1, "tui-image-editor-checkbox-group", "tui-image-editor-disabled", 2, "margin-bottom", "7px"], [1, "tui-image-editor-checkbox-wrap"], [1, "tui-image-editor-checkbox"], ["type", "checkbox", 1, "tie-remove-white", 3, "ngModel", "ngModelChange"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "short", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center"], ["type", "range", "min", "0", "max", "1", "step", "0.001", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "tui-image-editor-checkbox-group", "tui-image-editor-disabled"], ["type", "checkbox", 1, "tie-brightness", 3, "ngModel", "ngModelChange"], [1, "tui-image-editor-range-wrap", "short", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "align-items-center", "tui-image-editor-my-2"], ["type", "range", "min", "-1", "max", "1", "step", "0.03", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "checkbox", 1, "tie-noise", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "1000", "step", "10", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "tui-image-editor-partition", "only-left-right"], ["type", "checkbox", 1, "tie-pixelate", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "2", "max", "20", "step", "1", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "tui-image-editor-newline", "tui-image-editor-checkbox-wrap"], ["type", "checkbox", 1, "tie-color-filter", 3, "ngModel", "ngModelChange"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "short"], [1, "tie-colorfilter-threshold-range", "tui-image-editor-range", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "align-items-center", "tui-image-editor-my-2"], ["type", "range", "min", "0", "max", "1", "step", "0.02", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center"], [1, "filter-color-item"], [3, "title"], ["readonly", "", 1, "tie-filter-tint-color-picker", "tui-image-editor-mb-2", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], ["type", "checkbox", 1, "tie-tint", 3, "ngModel", "ngModelChange"], ["readonly", "", 1, "tie-filter-multiply-color-picker", "tui-image-editor-mb-2", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], ["type", "checkbox", 1, "tie-multiply", 3, "ngModel", "ngModelChange"], ["readonly", "", 1, "tie-filter-blend-color-picker", "tui-image-editor-mb-2", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], ["type", "checkbox", 1, "tie-blend", 3, "ngModel", "ngModelChange"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "label", 5);
        i0.ɵɵelementStart(6, "input", 6);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filterGrayscaleChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filterGrayscaleCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span");
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 4);
        i0.ɵɵelementStart(11, "label", 5);
        i0.ɵɵelementStart(12, "input", 7);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.filterInvertChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.filterInvertCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "span");
        i0.ɵɵtext(14);
        i0.ɵɵpipe(15, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 4);
        i0.ɵɵelementStart(17, "label", 5);
        i0.ɵɵelementStart(18, "input", 8);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.filterSepiaChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.filterSepiaCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "span");
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 4);
        i0.ɵɵelementStart(23, "label", 5);
        i0.ɵɵelementStart(24, "input", 9);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.filterVintageChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.filterVintageCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "span");
        i0.ɵɵtext(26);
        i0.ɵɵpipe(27, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 4);
        i0.ɵɵelementStart(29, "label", 5);
        i0.ɵɵelementStart(30, "input", 10);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_30_listener($event) { return ctx.filterBlurChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_30_listener($event) { return ctx.filterBlurCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "span");
        i0.ɵɵtext(32);
        i0.ɵɵpipe(33, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "div", 4);
        i0.ɵɵelementStart(35, "label", 5);
        i0.ɵɵelementStart(36, "input", 11);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.filterSharpenChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.filterSharpenCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "span");
        i0.ɵɵtext(38);
        i0.ɵɵpipe(39, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 4);
        i0.ɵɵelementStart(41, "label", 5);
        i0.ɵɵelementStart(42, "input", 12);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_42_listener($event) { return ctx.filterEmbossChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_42_listener($event) { return ctx.filterEmbossCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "span");
        i0.ɵɵtext(44);
        i0.ɵɵpipe(45, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "div", 13);
        i0.ɵɵelement(47, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 2);
        i0.ɵɵelementStart(49, "div", 14);
        i0.ɵɵelementStart(50, "div", 15);
        i0.ɵɵelementStart(51, "div", 16);
        i0.ɵɵelementStart(52, "label", 5);
        i0.ɵɵelementStart(53, "input", 17);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_53_listener($event) { return ctx.filterWhiteRemovalChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_53_listener($event) { return ctx.filterWhiteRemovalCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "span");
        i0.ɵɵtext(55);
        i0.ɵɵpipe(56, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "div", 18);
        i0.ɵɵelementStart(58, "label");
        i0.ɵɵtext(59);
        i0.ɵɵpipe(60, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "input", 19);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_61_listener($event) { return ctx.filterWhiteRemovalDistance = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_61_listener($event) { return ctx.filterWhiteRemovalDistanceChanged($event, true); })("change", function FilterComponent_Template_input_change_61_listener($event) { return ctx.filterWhiteRemovalDistanceChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "div", 20);
        i0.ɵɵelementStart(63, "div", 16);
        i0.ɵɵelementStart(64, "label", 5);
        i0.ɵɵelementStart(65, "input", 21);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_65_listener($event) { return ctx.filterBrightnessChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_65_listener($event) { return ctx.filterBrightnessCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "span");
        i0.ɵɵtext(67);
        i0.ɵɵpipe(68, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "div", 22);
        i0.ɵɵelementStart(70, "input", 23);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_70_listener($event) { return ctx.filterBrightnessValue = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_70_listener($event) { return ctx.filterBrightnessValueChanged($event, true); })("change", function FilterComponent_Template_input_change_70_listener($event) { return ctx.filterBrightnessValueChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(71, "div", 20);
        i0.ɵɵelementStart(72, "div", 16);
        i0.ɵɵelementStart(73, "label", 5);
        i0.ɵɵelementStart(74, "input", 24);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_74_listener($event) { return ctx.filterNoiseChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_74_listener($event) { return ctx.filterNoiseCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "span");
        i0.ɵɵtext(76);
        i0.ɵɵpipe(77, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(78, "div", 22);
        i0.ɵɵelementStart(79, "input", 25);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_79_listener($event) { return ctx.filterNoiseValue = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_79_listener($event) { return ctx.filterNoiseValueChanged($event, true); })("change", function FilterComponent_Template_input_change_79_listener($event) { return ctx.filterNoiseValueChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(80, "div", 26);
        i0.ɵɵelement(81, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "div", 2);
        i0.ɵɵelementStart(83, "div", 20);
        i0.ɵɵelementStart(84, "div", 16);
        i0.ɵɵelementStart(85, "label", 5);
        i0.ɵɵelementStart(86, "input", 27);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_86_listener($event) { return ctx.filterPixelateChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_86_listener($event) { return ctx.filterPixelateCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(87, "span");
        i0.ɵɵtext(88);
        i0.ɵɵpipe(89, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(90, "div", 22);
        i0.ɵɵelementStart(91, "input", 28);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_91_listener($event) { return ctx.filterPixelateValue = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_91_listener($event) { return ctx.filterPixelateValueChanged($event, true); })("change", function FilterComponent_Template_input_change_91_listener($event) { return ctx.filterPixelateValueChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(92, "div", 20);
        i0.ɵɵelementStart(93, "div", 29);
        i0.ɵɵelementStart(94, "div", 16);
        i0.ɵɵelementStart(95, "label", 5);
        i0.ɵɵelementStart(96, "input", 30);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_96_listener($event) { return ctx.filterColorFilterChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_96_listener($event) { return ctx.filterColorFilterCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(97, "span");
        i0.ɵɵtext(98);
        i0.ɵɵpipe(99, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(100, "div", 31);
        i0.ɵɵelementStart(101, "label");
        i0.ɵɵtext(102);
        i0.ɵɵpipe(103, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(104, "div", 32);
        i0.ɵɵelementStart(105, "input", 33);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_105_listener($event) { return ctx.filterColorFilterThreshold = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_105_listener($event) { return ctx.filterColorFilterThresholdChanged($event, true); })("change", function FilterComponent_Template_input_change_105_listener($event) { return ctx.filterColorFilterThresholdChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(106, "div", 13);
        i0.ɵɵelement(107, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(108, "div", 34);
        i0.ɵɵelementStart(109, "div", 35);
        i0.ɵɵelementStart(110, "div", 36);
        i0.ɵɵpipe(111, "translate");
        i0.ɵɵelementStart(112, "input", 37);
        i0.ɵɵlistener("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_112_listener($event) { return ctx.filterTintColor = $event; })("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_112_listener($event) { return ctx.filterTintColorChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(113, "label", 5);
        i0.ɵɵelementStart(114, "input", 38);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_114_listener($event) { return ctx.filterTintChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_114_listener($event) { return ctx.filterTintCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(115, "span");
        i0.ɵɵtext(116);
        i0.ɵɵpipe(117, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(118, "div", 35);
        i0.ɵɵelementStart(119, "div", 36);
        i0.ɵɵpipe(120, "translate");
        i0.ɵɵelementStart(121, "input", 39);
        i0.ɵɵlistener("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_121_listener($event) { return ctx.filterMultiplyColor = $event; })("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_121_listener($event) { return ctx.filterMultiplyColorChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(122, "label", 5);
        i0.ɵɵelementStart(123, "input", 40);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_123_listener($event) { return ctx.filterMultiplyChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_123_listener($event) { return ctx.filterMultiplyCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(124, "span");
        i0.ɵɵtext(125);
        i0.ɵɵpipe(126, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(127, "div", 35);
        i0.ɵɵelementStart(128, "div", 36);
        i0.ɵɵpipe(129, "translate");
        i0.ɵɵelementStart(130, "input", 41);
        i0.ɵɵlistener("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_130_listener($event) { return ctx.filterBlendColor = $event; })("colorPickerChange", function FilterComponent_Template_input_colorPickerChange_130_listener($event) { return ctx.filterBlendColorChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(131, "label", 5);
        i0.ɵɵelementStart(132, "input", 42);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_Template_input_ngModelChange_132_listener($event) { return ctx.filterBlendChecked = $event; })("ngModelChange", function FilterComponent_Template_input_ngModelChange_132_listener($event) { return ctx.filterBlendCheckedChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(133, "span");
        i0.ɵɵtext(134);
        i0.ɵɵpipe(135, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.filterGrayscaleChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 69, "tui-image-editor-angular-submenus-filter-grayscale"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.filterInvertChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 71, "tui-image-editor-angular-submenus-filter-invert"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.filterSepiaChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(21, 73, "tui-image-editor-angular-submenus-filter-sepia"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.filterVintageChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(27, 75, "tui-image-editor-angular-submenus-filter-sepia2"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.filterBlurChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(33, 77, "tui-image-editor-angular-submenus-filter-blur"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.filterSharpenChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(39, 79, "tui-image-editor-angular-submenus-filter-sharpen"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.filterEmbossChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(45, 81, "tui-image-editor-angular-submenus-filter-emboss"));
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngModel", ctx.filterWhiteRemovalChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(56, 83, "tui-image-editor-angular-submenus-filter-removeWhite"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(60, 85, "tui-image-editor-angular-submenus-filter-removeWhite-distance"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.filterWhiteRemovalDistance)("disabled", ctx.filterWhiteRemovalChecked == false);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.filterBrightnessChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(68, 87, "tui-image-editor-angular-submenus-filter-brightness"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.filterBrightnessValue)("disabled", ctx.filterBrightnessChecked == false);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.filterNoiseChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(77, 89, "tui-image-editor-angular-submenus-filter-noise"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.filterNoiseValue)("disabled", ctx.filterNoiseChecked == false);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.filterPixelateChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(89, 91, "tui-image-editor-angular-submenus-filter-pixelate"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.filterPixelateValue)("disabled", ctx.filterPixelateChecked == false);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.filterColorFilterChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(99, 93, "tui-image-editor-angular-submenus-filter-colorFilter"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(103, 95, "tui-image-editor-angular-submenus-filter-colorFilter-threshold"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.filterColorFilterThreshold)("disabled", ctx.filterColorFilterChecked == false);
        i0.ɵɵadvance(5);
        i0.ɵɵclassMap("tie-filter-tint-color tui-image-editor-button tui-image-editor-d-flex tui-image-editor-flex-column tui-image-editor-align-items-center " + (ctx.filterTintChecked ? "active" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(111, 97, "tui-image-editor-angular-submenus-filter-tint"));
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("background", ctx.filterTintColor);
        i0.ɵɵproperty("colorPicker", ctx.filterTintColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultFilterTintColors)("cpUseRootViewContainer", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.filterTintChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(117, 99, "tui-image-editor-angular-submenus-filter-tint"));
        i0.ɵɵadvance(3);
        i0.ɵɵclassMap("tie-filter-multiply-color tui-image-editor-button tui-image-editor-d-flex tui-image-editor-flex-column tui-image-editor-align-items-center " + (ctx.filterMultiplyChecked ? "active" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(120, 101, "tui-image-editor-angular-submenus-filter-multiply"));
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("background", ctx.filterMultiplyColor);
        i0.ɵɵproperty("colorPicker", ctx.filterMultiplyColor)("cpOutputFormat", "hex")("cpPresetColors", ctx.defaultFilterMultiplyColors)("cpUseRootViewContainer", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.filterMultiplyChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(126, 103, "tui-image-editor-angular-submenus-filter-multiply"));
        i0.ɵɵadvance(3);
        i0.ɵɵclassMap("tie-filter-blend-color tui-image-editor-button tui-image-editor-d-flex tui-image-editor-flex-column tui-image-editor-align-items-center " + (ctx.filterBlendChecked ? "active" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(129, 105, "tui-image-editor-angular-submenus-filter-blend"));
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("background", ctx.filterBlendColor);
        i0.ɵɵproperty("colorPicker", ctx.filterBlendColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultFilterBlendColors)("cpUseRootViewContainer", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.filterBlendChecked);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(135, 107, "tui-image-editor-angular-submenus-filter-blend"));
    } }, directives: [i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i2.RangeValueAccessor, i2.DefaultValueAccessor, i3.ColorPickerDirective], pipes: [i4.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.css'],
            }]
    }], function () { return [{ type: i1.HistoryService }]; }, { imageEditor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci9zcmMvbGliL3N1Ym1lbnVzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFnQixNQUFNLGNBQWMsQ0FBQztBQUN2RSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQTJDMUIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdkMzQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFFOUIsMkJBQXNCLEdBQVksS0FBSyxDQUFDO1FBQ3hDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0Qyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFFdEMsOEJBQXlCLEdBQVksS0FBSyxDQUFDO1FBQzNDLCtCQUEwQixHQUFXLEdBQUcsQ0FBQztRQUV6Qyw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMsMEJBQXFCLEdBQVcsQ0FBQyxDQUFDO1FB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QU1GLGVBQThCO1FBQTlCLDhDQUE4Qiw2Q0FBQTtRQXVCNUIsZUFBbUM7UUFBbkMsbURBQW1DO1FBRy9CLGVBRUo7UUFGSSxpR0FFSjtRQU1GLGVBQWlDO1FBQWpDLGlEQUFpQyxnREFBQTtRQW1CN0IsZUFBc0M7UUFBdEMsc0RBQXNDO1FBR2xDLGVBR0o7UUFISSxvR0FHSjtRQUtDLGVBR0w7UUFISywrR0FHTDtRQUlFLGVBQXdDO1FBQXhDLHdEQUF3QyxtREFBQTtRQW9CNUMsZUFHQztRQUhELGtNQUdDO1FBQ0QsZ0dBQXFFO1FBTW5FLGVBQW9DO1FBQXBDLGlEQUFvQztRQURwQyxpREFBaUMsMEJBQUEsK0NBQUEsZ0NBQUE7UUFhL0IsZUFBK0I7UUFBL0IsK0NBQStCO1FBRzNCLGVBRUo7UUFGSSw4RkFFSjtRQU1KLGVBR0M7UUFIRCwwTUFHQztRQUNELHFHQUVDO1FBTUMsZUFBd0M7UUFBeEMscURBQXdDO1FBRHhDLHFEQUFxQyx5QkFBQSxtREFBQSxnQ0FBQTtRQWFuQyxlQUFtQztRQUFuQyxtREFBbUM7UUFHL0IsZUFFSjtRQUZJLG1HQUVKO1FBTUosZUFHQztRQUhELG9NQUdDO1FBQ0Qsa0dBQXNFO1FBTXBFLGVBQXFDO1FBQXJDLGtEQUFxQztRQURyQyxrREFBa0MsMEJBQUEsZ0RBQUEsZ0NBQUE7UUFhaEMsZUFBZ0M7UUFBaEMsZ0RBQWdDO1FBRzVCLGVBRUo7UUFGSSxnR0FFSjs7dUZEaFlELGVBQWU7Y0FMM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDO2lFQUVVLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlZmF1bHRDb2xvcnMsIGZpbHRlclR5cGUsIGhpc3RvcnlOYW1lcyB9IGZyb20gJy4uLy4uL2NvbnN0cyc7XG5pbXBvcnQgeyBIaXN0b3J5SXRlbSwgSGlzdG9yeUl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9oaXN0b3J5LWl0ZW0nO1xuaW1wb3J0IHsgSGlzdG9yeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oaXN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVtb3ZlRmlsdGVyLCByZ2JhVG9PYmplY3QgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbHRlci5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaW1hZ2VFZGl0b3I6IGFueTtcbiAgcHVibGljIGFjdGl2ZU9iamVjdElkOiBudW1iZXI7XG5cbiAgcHVibGljIGZpbHRlckJsdXJDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWx0ZXJCbHVyVmFsdWU6IG51bWJlciA9IDAuMTtcblxuICBwdWJsaWMgZmlsdGVyR3JheXNjYWxlQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyU2VwaWFDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWx0ZXJFbWJvc3NDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWx0ZXJJbnZlcnRDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWx0ZXJWaW50YWdlQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyU2hhcnBlbkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZmlsdGVyV2hpdGVSZW1vdmFsQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyV2hpdGVSZW1vdmFsRGlzdGFuY2U6IG51bWJlciA9IDAuNTtcblxuICBwdWJsaWMgZmlsdGVyQnJpZ2h0bmVzc0NoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGZpbHRlckJyaWdodG5lc3NWYWx1ZTogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgZmlsdGVyTm9pc2VDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWx0ZXJOb2lzZVZhbHVlOiBudW1iZXIgPSAxMDA7XG5cbiAgcHVibGljIGZpbHRlclBpeGVsYXRlQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyUGl4ZWxhdGVWYWx1ZTogbnVtYmVyID0gMTU7XG5cbiAgcHVibGljIGZpbHRlckNvbG9yRmlsdGVyQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyQ29sb3JGaWx0ZXJUaHJlc2hvbGQ6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIGRlZmF1bHRGaWx0ZXJUaW50Q29sb3JzOiBzdHJpbmdbXSA9IGRlZmF1bHRDb2xvcnM7XG4gIHB1YmxpYyBmaWx0ZXJUaW50Q2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyVGludENvbG9yOiBzdHJpbmcgPSAncmdiYSgzLCAxODksIDE1OCwgMC43KSc7XG5cbiAgcHVibGljIGRlZmF1bHRGaWx0ZXJNdWx0aXBseUNvbG9yczogc3RyaW5nW10gPSBkZWZhdWx0Q29sb3JzO1xuICBwdWJsaWMgZmlsdGVyTXVsdGlwbHlDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWx0ZXJNdWx0aXBseUNvbG9yOiBzdHJpbmcgPSAncmdiKDgxLCA5MiwgMjMwKSc7XG5cbiAgcHVibGljIGRlZmF1bHRGaWx0ZXJCbGVuZENvbG9yczogc3RyaW5nW10gPSBkZWZhdWx0Q29sb3JzO1xuICBwdWJsaWMgZmlsdGVyQmxlbmRDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWx0ZXJCbGVuZENvbG9yOiBzdHJpbmcgPSAncmdiYSgyNTUsIDE4NywgNTksIDEpJztcblxuICBwcml2YXRlIGhpc3RvcnlTZXJ2aWNlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoaXN0b3J5U2VydmljZTogSGlzdG9yeVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5oaXN0b3J5U2VydmljZVN1YnNjcmlwdGlvbiA9IHRoaXMuaGlzdG9yeVNlcnZpY2Uub25DaGFuZ2VFbWl0dGVyLnN1YnNjcmliZShcbiAgICAgIChpdGVtcykgPT5cbiAgICAgICAgaXRlbXMgIT0gbnVsbCAmJiBpdGVtcy5sZW5ndGggIT0gMFxuICAgICAgICAgID8gdGhpcy5yZWJpbmRGaWVsZHMoaXRlbXMpXG4gICAgICAgICAgOiB0aGlzLnJlYmluZEZpZWxkcyh0aGlzLmhpc3RvcnlTZXJ2aWNlLml0ZW1zKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmhpc3RvcnlTZXJ2aWNlU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHJlYmluZEZpZWxkcyhpdGVtczogSGlzdG9yeUl0ZW1bXSkge1xuICAgIGNvbnNvbGUuZGVidWcoaXRlbXMpO1xuICAgIGlmICh0aGlzLmltYWdlRWRpdG9yICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsdGVyQmx1ckNoZWNrZWQgPSB0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcignYmx1cicpO1xuICAgICAgdGhpcy5maWx0ZXJCcmlnaHRuZXNzQ2hlY2tlZCA9IHRoaXMuaW1hZ2VFZGl0b3IuaGFzRmlsdGVyKCdicmlnaHRuZXNzJyk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJCcmlnaHRuZXNzQ2hlY2tlZCkge1xuICAgICAgICB0aGlzLmZpbHRlckJyaWdodG5lc3NWYWx1ZSA9IHRoaXMuZ2V0QXBwbGllZEZpbHRlckFyZ3VtZW50KFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIGZpbHRlclR5cGUuQlJJR0hUTkVTUyxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlckNvbG9yRmlsdGVyQ2hlY2tlZCA9XG4gICAgICAgIHRoaXMuaW1hZ2VFZGl0b3IuaGFzRmlsdGVyKCdyZW1vdmVDb2xvcicpICYmXG4gICAgICAgIHRoaXMuaGFzQXBwbGllZEZpbHRlcihpdGVtcywgZmlsdGVyVHlwZS5SRU1PVkVfQ09MT1IpO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyQ29sb3JGaWx0ZXJDaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ29sb3JGaWx0ZXJUaHJlc2hvbGQgPSB0aGlzLmdldEFwcGxpZWRGaWx0ZXJBcmd1bWVudChcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBmaWx0ZXJUeXBlLlJFTU9WRV9DT0xPUixcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlckVtYm9zc0NoZWNrZWQgPSB0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcignZW1ib3NzJyk7XG4gICAgICB0aGlzLmZpbHRlckdyYXlzY2FsZUNoZWNrZWQgPSB0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcignZ3JheXNjYWxlJyk7XG4gICAgICB0aGlzLmZpbHRlckludmVydENoZWNrZWQgPSB0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcignaW52ZXJ0Jyk7XG4gICAgICB0aGlzLmZpbHRlck5vaXNlQ2hlY2tlZCA9IHRoaXMuaW1hZ2VFZGl0b3IuaGFzRmlsdGVyKCdub2lzZScpO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyTm9pc2VDaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTm9pc2VWYWx1ZSA9IHRoaXMuZ2V0QXBwbGllZEZpbHRlckFyZ3VtZW50KFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIGZpbHRlclR5cGUuTk9JU0UsXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXJQaXhlbGF0ZUNoZWNrZWQgPSB0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcigncGl4ZWxhdGUnKTtcbiAgICAgIGlmICh0aGlzLmZpbHRlclBpeGVsYXRlQ2hlY2tlZCkge1xuICAgICAgICB0aGlzLmZpbHRlclBpeGVsYXRlVmFsdWUgPSB0aGlzLmdldEFwcGxpZWRGaWx0ZXJBcmd1bWVudChcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBmaWx0ZXJUeXBlLlBJWEVMQVRFLFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyU2VwaWFDaGVja2VkID0gdGhpcy5pbWFnZUVkaXRvci5oYXNGaWx0ZXIoJ3NlcGlhJyk7XG4gICAgICB0aGlzLmZpbHRlclNoYXJwZW5DaGVja2VkID0gdGhpcy5pbWFnZUVkaXRvci5oYXNGaWx0ZXIoJ3NoYXJwZW4nKTtcbiAgICAgIHRoaXMuZmlsdGVyVmludGFnZUNoZWNrZWQgPSB0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcigndmludGFnZScpO1xuICAgICAgdGhpcy5maWx0ZXJXaGl0ZVJlbW92YWxDaGVja2VkID1cbiAgICAgICAgdGhpcy5pbWFnZUVkaXRvci5oYXNGaWx0ZXIoJ3JlbW92ZUNvbG9yJykgJiZcbiAgICAgICAgdGhpcy5oYXNBcHBsaWVkRmlsdGVyKGl0ZW1zLCBmaWx0ZXJUeXBlLlJFTU9WRV9XSElURSk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJXaGl0ZVJlbW92YWxDaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyV2hpdGVSZW1vdmFsRGlzdGFuY2UgPSB0aGlzLmdldEFwcGxpZWRGaWx0ZXJBcmd1bWVudChcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBmaWx0ZXJUeXBlLlJFTU9WRV9XSElURSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlsdGVyTXVsdGlwbHlDaGVja2VkID1cbiAgICAgICAgdGhpcy5pbWFnZUVkaXRvci5oYXNGaWx0ZXIoJ2JsZW5kQ29sb3InKSAmJlxuICAgICAgICB0aGlzLmhhc0FwcGxpZWRGaWx0ZXIoaXRlbXMsIGZpbHRlclR5cGUuTVVMVElQTFkpO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyTXVsdGlwbHlDaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTXVsdGlwbHlDb2xvciA9IHRoaXMuZ2V0QXBwbGllZEZpbHRlckFyZ3VtZW50KFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIGZpbHRlclR5cGUuTVVMVElQTFksXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXJUaW50Q2hlY2tlZCA9XG4gICAgICAgIHRoaXMuaW1hZ2VFZGl0b3IuaGFzRmlsdGVyKCdibGVuZENvbG9yJykgJiZcbiAgICAgICAgdGhpcy5oYXNBcHBsaWVkRmlsdGVyKGl0ZW1zLCBmaWx0ZXJUeXBlLlRJTlQpO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyVGludENoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJUaW50Q29sb3IgPSB0aGlzLmdldEFwcGxpZWRGaWx0ZXJBcmd1bWVudChcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBmaWx0ZXJUeXBlLlRJTlQsXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXJCbGVuZENoZWNrZWQgPVxuICAgICAgICB0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcignYmxlbmRDb2xvcicpICYmXG4gICAgICAgIHRoaXMuaGFzQXBwbGllZEZpbHRlcihpdGVtcywgZmlsdGVyVHlwZS5CTEVORCk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJCbGVuZENoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJCbGVuZENvbG9yID0gdGhpcy5nZXRBcHBsaWVkRmlsdGVyQXJndW1lbnQoXG4gICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgZmlsdGVyVHlwZS5CTEVORCxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBcHBsaWVkRmlsdGVyQXJndW1lbnQoXG4gICAgaXRlbXM6IEhpc3RvcnlJdGVtW10sXG4gICAgdHlwZTogZmlsdGVyVHlwZSxcbiAgICBpbmRleDogbnVtYmVyXG4gICk6IGFueSB7XG4gICAgbGV0IHZhbGlkSXRlbXMgPSBpdGVtcy5maWx0ZXIoXG4gICAgICAoZikgPT4gZi5maWx0ZXJUeXBlID09PSB0eXBlICYmIGYudHlwZSA9PT0gSGlzdG9yeUl0ZW1UeXBlLkFwcGx5RmlsdGVyXG4gICAgKTtcbiAgICByZXR1cm4gdmFsaWRJdGVtc1t2YWxpZEl0ZW1zLmxlbmd0aCAtIDFdLmFyZ3NbaW5kZXhdO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNBcHBsaWVkRmlsdGVyKFxuICAgIGhpc3RvcnlJdGVtczogSGlzdG9yeUl0ZW1bXSxcbiAgICB0eXBlOiBmaWx0ZXJUeXBlXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCBoYXNGaWx0ZXIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvcnlJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBoaXN0b3J5SXRlbXNbaV07XG4gICAgICBpZiAoXG4gICAgICAgIGl0ZW0udHlwZSA9PT0gSGlzdG9yeUl0ZW1UeXBlLkFwcGx5RmlsdGVyICYmXG4gICAgICAgIGl0ZW0uZmlsdGVyVHlwZSA9PT0gdHlwZVxuICAgICAgKSB7XG4gICAgICAgIGhhc0ZpbHRlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBoYXNGaWx0ZXIgPT0gdHJ1ZSAmJlxuICAgICAgICBbZmlsdGVyVHlwZS5USU5ULCBmaWx0ZXJUeXBlLkJMRU5ELCBmaWx0ZXJUeXBlLk1VTFRJUExZXS5zb21lKFxuICAgICAgICAgICh0KSA9PiB0ID09PSB0eXBlXG4gICAgICAgICkgJiZcbiAgICAgICAgaXRlbS50eXBlID09PSBIaXN0b3J5SXRlbVR5cGUuUmVtb3ZlRmlsdGVyICYmXG4gICAgICAgIGl0ZW0uZmlsdGVyVHlwZSA9PT0gZmlsdGVyVHlwZS5CTEVORF9PUl9USU5UX09SX01VTFRJUExZXG4gICAgICApIHtcbiAgICAgICAgaGFzRmlsdGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBoYXNGaWx0ZXIgPT0gdHJ1ZSAmJlxuICAgICAgICBbZmlsdGVyVHlwZS5SRU1PVkVfQ09MT1IsIGZpbHRlclR5cGUuUkVNT1ZFX1dISVRFXS5zb21lKFxuICAgICAgICAgICh0KSA9PiB0ID09PSB0eXBlXG4gICAgICAgICkgJiZcbiAgICAgICAgaXRlbS50eXBlID09PSBIaXN0b3J5SXRlbVR5cGUuUmVtb3ZlRmlsdGVyICYmXG4gICAgICAgIGl0ZW0uZmlsdGVyVHlwZSA9PT0gZmlsdGVyVHlwZS5SRU1PVkVfQ09MT1JfT1JfV0hJVEVcbiAgICAgICkge1xuICAgICAgICBoYXNGaWx0ZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhhc0ZpbHRlcjtcbiAgfVxuXG4gIGZpbHRlcldoaXRlUmVtb3ZhbENoZWNrZWRDaGFuZ2VkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWx0ZXJBcHBseSgnd2hpdGUtcmVtb3ZhbCcpO1xuICB9XG5cbiAgZmlsdGVyV2hpdGVSZW1vdmFsRGlzdGFuY2VDaGFuZ2VkKG5ld1ZhbHVlOiBudW1iZXIsIGlzU2lsZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy5maWx0ZXJBcHBseSgnd2hpdGUtcmVtb3ZhbCcsIGlzU2lsZW50KTtcbiAgfVxuXG4gIGZpbHRlckJyaWdodG5lc3NDaGVja2VkQ2hhbmdlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ2JyaWdodG5lc3MnKTtcbiAgfVxuXG4gIGZpbHRlckJyaWdodG5lc3NWYWx1ZUNoYW5nZWQobmV3VmFsdWU6IG51bWJlciwgaXNTaWxlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbHRlckFwcGx5KCdicmlnaHRuZXNzJywgaXNTaWxlbnQpO1xuICB9XG5cbiAgZmlsdGVyTm9pc2VDaGVja2VkQ2hhbmdlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ25vaXNlJyk7XG4gIH1cblxuICBmaWx0ZXJOb2lzZVZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogbnVtYmVyLCBpc1NpbGVudDogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ25vaXNlJywgaXNTaWxlbnQpO1xuICB9XG5cbiAgZmlsdGVyUGl4ZWxhdGVDaGVja2VkQ2hhbmdlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ3BpeGVsYXRlJyk7XG4gIH1cblxuICBmaWx0ZXJQaXhlbGF0ZVZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogbnVtYmVyLCBpc1NpbGVudDogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ3BpeGVsYXRlJywgaXNTaWxlbnQpO1xuICB9XG5cbiAgZmlsdGVyQ29sb3JGaWx0ZXJDaGVja2VkQ2hhbmdlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ3JlbW92ZUNvbG9yJyk7XG4gIH1cblxuICBmaWx0ZXJDb2xvckZpbHRlclRocmVzaG9sZENoYW5nZWQobmV3VmFsdWU6IG51bWJlciwgaXNTaWxlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbHRlckFwcGx5KCdyZW1vdmVDb2xvcicsIGlzU2lsZW50KTtcbiAgfVxuXG4gIGZpbHRlclRpbnRDb2xvckNoYW5nZWQobmV3Q29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ3RpbnQnKTtcbiAgfVxuXG4gIGZpbHRlclRpbnRDaGVja2VkQ2hhbmdlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ3RpbnQnKTtcbiAgICBpZiAodGhpcy5maWx0ZXJUaW50Q2hlY2tlZCkge1xuICAgICAgdGhpcy5maWx0ZXJNdWx0aXBseUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsdGVyQmxlbmRDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyTXVsdGlwbHlDb2xvckNoYW5nZWQobmV3Q29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ211bHRpcGx5Jyk7XG4gIH1cblxuICBmaWx0ZXJNdWx0aXBseUNoZWNrZWRDaGFuZ2VkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWx0ZXJBcHBseSgnbXVsdGlwbHknKTtcbiAgICBpZiAodGhpcy5maWx0ZXJNdWx0aXBseUNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVyVGludENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsdGVyQmxlbmRDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyQmxlbmRDb2xvckNoYW5nZWQobmV3Q29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyQXBwbHkoJ2JsZW5kJyk7XG4gIH1cblxuICBmaWx0ZXJCbGVuZENoZWNrZWRDaGFuZ2VkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWx0ZXJBcHBseSgnYmxlbmQnKTtcbiAgICBpZiAodGhpcy5maWx0ZXJCbGVuZENoZWNrZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVyTXVsdGlwbHlDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbHRlclRpbnRDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyQmx1ckNoZWNrZWRDaGFuZ2VkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWx0ZXJBcHBseSgnYmx1cicpO1xuICB9XG5cbiAgZmlsdGVyR3JheXNjYWxlQ2hlY2tlZENoYW5nZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbHRlckFwcGx5KCdncmF5c2NhbGUnKTtcbiAgfVxuXG4gIGZpbHRlclNlcGlhQ2hlY2tlZENoYW5nZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbHRlckFwcGx5KCdzZXBpYScpO1xuICB9XG5cbiAgZmlsdGVyRW1ib3NzQ2hlY2tlZENoYW5nZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbHRlckFwcGx5KCdlbWJvc3MnKTtcbiAgfVxuXG4gIGZpbHRlckludmVydENoZWNrZWRDaGFuZ2VkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWx0ZXJBcHBseSgnaW52ZXJ0Jyk7XG4gIH1cblxuICBmaWx0ZXJWaW50YWdlQ2hlY2tlZENoYW5nZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbHRlckFwcGx5KCd2aW50YWdlJyk7XG4gIH1cblxuICBmaWx0ZXJTaGFycGVuQ2hlY2tlZENoYW5nZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbHRlckFwcGx5KCdzaGFycGVuJyk7XG4gIH1cblxuICBmaWx0ZXJBcHBseShcbiAgICB0eXBlOlxuICAgICAgfCAnd2hpdGUtcmVtb3ZhbCdcbiAgICAgIHwgJ2JyaWdodG5lc3MnXG4gICAgICB8ICdub2lzZSdcbiAgICAgIHwgJ3BpeGVsYXRlJ1xuICAgICAgfCAncmVtb3ZlQ29sb3InXG4gICAgICB8ICdibHVyJ1xuICAgICAgfCAnYmxlbmQnXG4gICAgICB8ICdtdWx0aXBseSdcbiAgICAgIHwgJ3RpbnQnXG4gICAgICB8ICdncmF5c2NhbGUnXG4gICAgICB8ICdzZXBpYSdcbiAgICAgIHwgJ2VtYm9zcydcbiAgICAgIHwgJ2ludmVydCdcbiAgICAgIHwgJ3ZpbnRhZ2UnXG4gICAgICB8ICdzaGFycGVuJyxcbiAgICBpc1NpbGVudDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnd2hpdGUtcmVtb3ZhbCc6XG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbHlDb25maXJtZWQoXG4gICAgICAgICAgdGhpcy5maWx0ZXJXaGl0ZVJlbW92YWxDaGVja2VkLFxuICAgICAgICAgICdyZW1vdmVDb2xvcicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgICAgICAgIHVzZUFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3RhbmNlOiB0aGlzLmZpbHRlcldoaXRlUmVtb3ZhbERpc3RhbmNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTaWxlbnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdicmlnaHRuZXNzJzpcbiAgICAgICAgdGhpcy5maWx0ZXJBcHBseUNvbmZpcm1lZChcbiAgICAgICAgICB0aGlzLmZpbHRlckJyaWdodG5lc3NDaGVja2VkLFxuICAgICAgICAgICdicmlnaHRuZXNzJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmlnaHRuZXNzOiB0aGlzLmZpbHRlckJyaWdodG5lc3NWYWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU2lsZW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbm9pc2UnOlxuICAgICAgICB0aGlzLmZpbHRlckFwcGx5Q29uZmlybWVkKFxuICAgICAgICAgIHRoaXMuZmlsdGVyTm9pc2VDaGVja2VkLFxuICAgICAgICAgICdub2lzZScsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbm9pc2U6IHRoaXMuZmlsdGVyTm9pc2VWYWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU2lsZW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGl4ZWxhdGUnOlxuICAgICAgICB0aGlzLmZpbHRlckFwcGx5Q29uZmlybWVkKFxuICAgICAgICAgIHRoaXMuZmlsdGVyUGl4ZWxhdGVDaGVja2VkLFxuICAgICAgICAgICdwaXhlbGF0ZScsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmxvY2tzaXplOiB0aGlzLmZpbHRlclBpeGVsYXRlVmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1NpbGVudFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlbW92ZUNvbG9yJzpcbiAgICAgICAgdGhpcy5maWx0ZXJBcHBseUNvbmZpcm1lZChcbiAgICAgICAgICB0aGlzLmZpbHRlckNvbG9yRmlsdGVyQ2hlY2tlZCxcbiAgICAgICAgICAncmVtb3ZlQ29sb3InLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgICAgICBkaXN0YW5jZTogdGhpcy5maWx0ZXJDb2xvckZpbHRlclRocmVzaG9sZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU2lsZW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmx1cic6XG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbHlDb25maXJtZWQoXG4gICAgICAgICAgdGhpcy5maWx0ZXJCbHVyQ2hlY2tlZCxcbiAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmx1cjogdGhpcy5maWx0ZXJCbHVyVmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1NpbGVudFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JsZW5kJzpcbiAgICAgICAgdGhpcy5maWx0ZXJBcHBseUNvbmZpcm1lZChcbiAgICAgICAgICB0aGlzLmZpbHRlckJsZW5kQ2hlY2tlZCxcbiAgICAgICAgICAnYmxlbmRDb2xvcicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbW9kZTogJ2FkZCcsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5maWx0ZXJCbGVuZENvbG9yLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTaWxlbnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtdWx0aXBseSc6XG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbHlDb25maXJtZWQoXG4gICAgICAgICAgdGhpcy5maWx0ZXJNdWx0aXBseUNoZWNrZWQsXG4gICAgICAgICAgJ2JsZW5kQ29sb3InLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1vZGU6ICdtdWx0aXBseScsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5maWx0ZXJNdWx0aXBseUNvbG9yLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTaWxlbnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aW50JzpcbiAgICAgICAgbGV0IHJnYlRpbnQgPSByZ2JhVG9PYmplY3QodGhpcy5maWx0ZXJUaW50Q29sb3IpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbHlDb25maXJtZWQoXG4gICAgICAgICAgdGhpcy5maWx0ZXJUaW50Q2hlY2tlZCxcbiAgICAgICAgICAnYmxlbmRDb2xvcicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbW9kZTogJ3RpbnQnLFxuICAgICAgICAgICAgY29sb3I6IHJnYlRpbnQuaGV4U3RyaW5nLFxuICAgICAgICAgICAgYWxwaGE6IHJnYlRpbnQuYWxwaGEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1NpbGVudFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2dyYXlzY2FsZSc6XG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbHlDb25maXJtZWQoXG4gICAgICAgICAgdGhpcy5maWx0ZXJHcmF5c2NhbGVDaGVja2VkLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAge30sXG4gICAgICAgICAgaXNTaWxlbnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZXBpYSc6XG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbHlDb25maXJtZWQodGhpcy5maWx0ZXJTZXBpYUNoZWNrZWQsIHR5cGUsIHt9LCBpc1NpbGVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW1ib3NzJzpcbiAgICAgICAgdGhpcy5maWx0ZXJBcHBseUNvbmZpcm1lZCh0aGlzLmZpbHRlckVtYm9zc0NoZWNrZWQsIHR5cGUsIHt9LCBpc1NpbGVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW52ZXJ0JzpcbiAgICAgICAgdGhpcy5maWx0ZXJBcHBseUNvbmZpcm1lZCh0aGlzLmZpbHRlckludmVydENoZWNrZWQsIHR5cGUsIHt9LCBpc1NpbGVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndmludGFnZSc6XG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbHlDb25maXJtZWQoXG4gICAgICAgICAgdGhpcy5maWx0ZXJWaW50YWdlQ2hlY2tlZCxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGlzU2lsZW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2hhcnBlbic6XG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbHlDb25maXJtZWQoXG4gICAgICAgICAgdGhpcy5maWx0ZXJTaGFycGVuQ2hlY2tlZCxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGlzU2lsZW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZpbHRlckFwcGx5Q29uZmlybWVkKFxuICAgIGFwcGx5aW5nOiBib29sZWFuLFxuICAgIHR5cGU6XG4gICAgICB8ICdyZW1vdmVDb2xvcidcbiAgICAgIHwgJ2JyaWdodG5lc3MnXG4gICAgICB8ICdub2lzZSdcbiAgICAgIHwgJ3BpeGVsYXRlJ1xuICAgICAgfCAnYmx1cidcbiAgICAgIHwgJ2JsZW5kQ29sb3InXG4gICAgICB8ICdncmF5c2NhbGUnXG4gICAgICB8ICdzZXBpYSdcbiAgICAgIHwgJ2VtYm9zcydcbiAgICAgIHwgJ2ludmVydCdcbiAgICAgIHwgJ3ZpbnRhZ2UnXG4gICAgICB8ICdzaGFycGVuJyxcbiAgICBvcHRpb25zOiBhbnksXG4gICAgaXNTaWxlbnQ6IGJvb2xlYW4gPSBmYWxzZVxuICApIHtcbiAgICBsZXQgZnVuY3Rpb25Ub0V4ZWN1dGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoYXBwbHlpbmcpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdibGVuZENvbG9yJyAmJiB0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcignYmxlbmRDb2xvcicpKSB7XG4gICAgICAgICAgc3dpdGNoIChvcHRpb25zLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgICAgIHRoaXMuZmlsdGVyVGludENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5maWx0ZXJNdWx0aXBseUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtdWx0aXBseSc6XG4gICAgICAgICAgICAgIHRoaXMuZmlsdGVyVGludENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCbGVuZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aW50JzpcbiAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCbGVuZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5maWx0ZXJNdWx0aXBseUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF3YWl0IHJlbW92ZUZpbHRlcih0aGlzLmltYWdlRWRpdG9yLCB0eXBlLCBpc1NpbGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdHlwZSA9PT0gJ3JlbW92ZUNvbG9yJyAmJlxuICAgICAgICAgIHRoaXMuaW1hZ2VFZGl0b3IuaGFzRmlsdGVyKCdyZW1vdmVDb2xvcicpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnVzZUFscGhhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQ29sb3JGaWx0ZXJDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyV2hpdGVSZW1vdmFsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCByZW1vdmVGaWx0ZXIodGhpcy5pbWFnZUVkaXRvciwgdHlwZSwgaXNTaWxlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuaW1hZ2VFZGl0b3IuYXBwbHlGaWx0ZXIodHlwZSwgb3B0aW9ucywgaXNTaWxlbnQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmltYWdlRWRpdG9yLmhhc0ZpbHRlcih0eXBlKSkge1xuICAgICAgICBhd2FpdCByZW1vdmVGaWx0ZXIodGhpcy5pbWFnZUVkaXRvciwgdHlwZSwgaXNTaWxlbnQpO1xuICAgICAgICBpZiAodHlwZSA9PSAnYmxlbmRDb2xvcicpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlclRpbnRDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5maWx0ZXJNdWx0aXBseUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZpbHRlckJsZW5kQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaXNTaWxlbnQpIHtcbiAgICAgIGF3YWl0IGZ1bmN0aW9uVG9FeGVjdXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBmdW5jdGlvblRvRXhlY3V0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1tZW51LWZpbHRlciB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnUtaXRlbSB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3Itb3ZlcmZsb3dhYmxlLXggdHVpLWltYWdlLWVkaXRvci1weS0zXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnUtYWxpZ25cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWNoZWNrYm94LXdyYXAgZml4ZWQtd2lkdGggdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtd3JhcCB0dWktaW1hZ2UtZWRpdG9yLWp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1jaGVja2JveCB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1mbGV4LW5vd3JhcFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwidGllLWdyYXlzY2FsZVwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyR3JheXNjYWxlQ2hlY2tlZFwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckdyYXlzY2FsZUNoZWNrZWRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPnt7XG4gICAgICAgICAgICAgIFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWZpbHRlci1ncmF5c2NhbGVcIiB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWNoZWNrYm94IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24tc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aWUtaW52ZXJ0XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJJbnZlcnRDaGVja2VkXCJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZmlsdGVySW52ZXJ0Q2hlY2tlZENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4+e3tcbiAgICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtZmlsdGVyLWludmVydFwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItY2hlY2tib3ggdHVpLWltYWdlLWVkaXRvci1hbGlnbi1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpZS1zZXBpYVwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyU2VwaWFDaGVja2VkXCJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZmlsdGVyU2VwaWFDaGVja2VkQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1maWx0ZXItc2VwaWFcIiB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWNoZWNrYm94IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24tc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aWUtdmludGFnZVwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyVmludGFnZUNoZWNrZWRcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJWaW50YWdlQ2hlY2tlZENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4+e3tcbiAgICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtZmlsdGVyLXNlcGlhMlwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItY2hlY2tib3ggdHVpLWltYWdlLWVkaXRvci1hbGlnbi1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpZS1ibHVyXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJCbHVyQ2hlY2tlZFwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckJsdXJDaGVja2VkQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1maWx0ZXItYmx1clwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItY2hlY2tib3ggdHVpLWltYWdlLWVkaXRvci1hbGlnbi1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpZS1zaGFycGVuXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJTaGFycGVuQ2hlY2tlZFwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlclNoYXJwZW5DaGVja2VkQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1maWx0ZXItc2hhcnBlblwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItY2hlY2tib3ggdHVpLWltYWdlLWVkaXRvci1hbGlnbi1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpZS1lbWJvc3NcIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlckVtYm9zc0NoZWNrZWRcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJFbWJvc3NDaGVja2VkQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1maWx0ZXItZW1ib3NzXCIgfCB0cmFuc2xhdGVcbiAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItcGFydGl0aW9uXCI+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnUtYWxpZ25cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWNoZWNrYm94LWdyb3VwIHR1aS1pbWFnZS1lZGl0b3ItZGlzYWJsZWRcIlxuICAgICAgICBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDdweFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWNoZWNrYm94LXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1jaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRpZS1yZW1vdmUtd2hpdGVcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyV2hpdGVSZW1vdmFsQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZmlsdGVyV2hpdGVSZW1vdmFsQ2hlY2tlZENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuPnt7XG4gICAgICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtZmlsdGVyLXJlbW92ZVdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItbmV3bGluZSB0dWktaW1hZ2UtZWRpdG9yLXJhbmdlLXdyYXAgc2hvcnQgdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwIHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbD57e1xuICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtZmlsdGVyLXJlbW92ZVdoaXRlLWRpc3RhbmNlXCJcbiAgICAgICAgICAgICAgfCB0cmFuc2xhdGVcbiAgICAgICAgICB9fTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJXaGl0ZVJlbW92YWxEaXN0YW5jZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJXaGl0ZVJlbW92YWxEaXN0YW5jZUNoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgICAgICAoY2hhbmdlKT1cImZpbHRlcldoaXRlUmVtb3ZhbERpc3RhbmNlQ2hhbmdlZCgkZXZlbnQsIGZhbHNlKVwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjFcIlxuICAgICAgICAgICAgc3RlcD1cIjAuMDAxXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWx0ZXJXaGl0ZVJlbW92YWxDaGVja2VkID09IGZhbHNlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItY2hlY2tib3gtZ3JvdXAgdHVpLWltYWdlLWVkaXRvci1kaXNhYmxlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1jaGVja2JveFwiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpZS1icmlnaHRuZXNzXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJCcmlnaHRuZXNzQ2hlY2tlZFwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckJyaWdodG5lc3NDaGVja2VkQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1maWx0ZXItYnJpZ2h0bmVzc1wiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItcmFuZ2Utd3JhcCBzaG9ydCB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLW15LTJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlckJyaWdodG5lc3NWYWx1ZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJCcmlnaHRuZXNzVmFsdWVDaGFuZ2VkKCRldmVudCwgdHJ1ZSlcIlxuICAgICAgICAgICAgKGNoYW5nZSk9XCJmaWx0ZXJCcmlnaHRuZXNzVmFsdWVDaGFuZ2VkKCRldmVudCwgZmFsc2UpXCJcbiAgICAgICAgICAgIG1pbj1cIi0xXCJcbiAgICAgICAgICAgIG1heD1cIjFcIlxuICAgICAgICAgICAgc3RlcD1cIjAuMDNcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpbHRlckJyaWdodG5lc3NDaGVja2VkID09IGZhbHNlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItY2hlY2tib3gtZ3JvdXAgdHVpLWltYWdlLWVkaXRvci1kaXNhYmxlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1jaGVja2JveFwiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpZS1ub2lzZVwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyTm9pc2VDaGVja2VkXCJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZmlsdGVyTm9pc2VDaGVja2VkQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1maWx0ZXItbm9pc2VcIiB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXJhbmdlLXdyYXAgc2hvcnQgdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1teS0yXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJOb2lzZVZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlck5vaXNlVmFsdWVDaGFuZ2VkKCRldmVudCwgdHJ1ZSlcIlxuICAgICAgICAgICAgKGNoYW5nZSk9XCJmaWx0ZXJOb2lzZVZhbHVlQ2hhbmdlZCgkZXZlbnQsIGZhbHNlKVwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjEwMDBcIlxuICAgICAgICAgICAgc3RlcD1cIjEwXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWx0ZXJOb2lzZUNoZWNrZWQgPT0gZmFsc2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItcGFydGl0aW9uIG9ubHktbGVmdC1yaWdodFwiPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1zdWJtZW51LWFsaWduXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1jaGVja2JveC1ncm91cCB0dWktaW1hZ2UtZWRpdG9yLWRpc2FibGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWNoZWNrYm94XCI+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1mbGV4LW5vd3JhcFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwidGllLXBpeGVsYXRlXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJQaXhlbGF0ZUNoZWNrZWRcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJQaXhlbGF0ZUNoZWNrZWRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPnt7XG4gICAgICAgICAgICAgIFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWZpbHRlci1waXhlbGF0ZVwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItcmFuZ2Utd3JhcCBzaG9ydCB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLW15LTJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlclBpeGVsYXRlVmFsdWVcIlxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZmlsdGVyUGl4ZWxhdGVWYWx1ZUNoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgICAgICAoY2hhbmdlKT1cImZpbHRlclBpeGVsYXRlVmFsdWVDaGFuZ2VkKCRldmVudCwgZmFsc2UpXCJcbiAgICAgICAgICAgIG1pbj1cIjJcIlxuICAgICAgICAgICAgbWF4PVwiMjBcIlxuICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpbHRlclBpeGVsYXRlQ2hlY2tlZCA9PSBmYWxzZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWNoZWNrYm94LWdyb3VwIHR1aS1pbWFnZS1lZGl0b3ItZGlzYWJsZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItbmV3bGluZSB0dWktaW1hZ2UtZWRpdG9yLWNoZWNrYm94LXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1jaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRpZS1jb2xvci1maWx0ZXJcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyQ29sb3JGaWx0ZXJDaGVja2VkXCJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJDb2xvckZpbHRlckNoZWNrZWRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgICAgIFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWZpbHRlci1jb2xvckZpbHRlclwiXG4gICAgICAgICAgICAgICAgICB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1uZXdsaW5lIHR1aS1pbWFnZS1lZGl0b3ItcmFuZ2Utd3JhcCBzaG9ydFwiPlxuICAgICAgICAgIDxsYWJlbD57e1xuICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtZmlsdGVyLWNvbG9yRmlsdGVyLXRocmVzaG9sZFwiXG4gICAgICAgICAgICAgIHwgdHJhbnNsYXRlXG4gICAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWUtY29sb3JmaWx0ZXItdGhyZXNob2xkLXJhbmdlIHR1aS1pbWFnZS1lZGl0b3ItcmFuZ2UgdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1teS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJDb2xvckZpbHRlclRocmVzaG9sZFwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckNvbG9yRmlsdGVyVGhyZXNob2xkQ2hhbmdlZCgkZXZlbnQsIHRydWUpXCJcbiAgICAgICAgICAgICAgKGNoYW5nZSk9XCJmaWx0ZXJDb2xvckZpbHRlclRocmVzaG9sZENoYW5nZWQoJGV2ZW50LCBmYWxzZSlcIlxuICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgbWF4PVwiMVwiXG4gICAgICAgICAgICAgIHN0ZXA9XCIwLjAyXCJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpbHRlckNvbG9yRmlsdGVyQ2hlY2tlZCA9PSBmYWxzZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXBhcnRpdGlvblwiPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItY29sb3ItaXRlbVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgW2NsYXNzXT1cIlxuICAgICAgICAgICAgJ3RpZS1maWx0ZXItdGludC1jb2xvciB0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtY29sdW1uIHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyICcgK1xuICAgICAgICAgICAgKGZpbHRlclRpbnRDaGVja2VkID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICBcIlxuICAgICAgICAgIFt0aXRsZV09XCIndHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWZpbHRlci10aW50JyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICBjbGFzcz1cInRpZS1maWx0ZXItdGludC1jb2xvci1waWNrZXIgdHVpLWltYWdlLWVkaXRvci1tYi0yXCJcbiAgICAgICAgICAgIFsoY29sb3JQaWNrZXIpXT1cImZpbHRlclRpbnRDb2xvclwiXG4gICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJmaWx0ZXJUaW50Q29sb3JcIlxuICAgICAgICAgICAgW2NwT3V0cHV0Rm9ybWF0XT1cIidyZ2JhJ1wiXG4gICAgICAgICAgICBbY3BQcmVzZXRDb2xvcnNdPVwiZGVmYXVsdEZpbHRlclRpbnRDb2xvcnNcIlxuICAgICAgICAgICAgKGNvbG9yUGlja2VyQ2hhbmdlKT1cImZpbHRlclRpbnRDb2xvckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbY3BVc2VSb290Vmlld0NvbnRhaW5lcl09XCJ0cnVlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpZS10aW50XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJUaW50Q2hlY2tlZFwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlclRpbnRDaGVja2VkQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1maWx0ZXItdGludFwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1jb2xvci1pdGVtXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndGllLWZpbHRlci1tdWx0aXBseS1jb2xvciB0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtY29sdW1uIHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyICcgK1xuICAgICAgICAgICAgKGZpbHRlck11bHRpcGx5Q2hlY2tlZCA/ICdhY3RpdmUnIDogJycpXG4gICAgICAgICAgXCJcbiAgICAgICAgICBbdGl0bGVdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWZpbHRlci1tdWx0aXBseScgfCB0cmFuc2xhdGVcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgY2xhc3M9XCJ0aWUtZmlsdGVyLW11bHRpcGx5LWNvbG9yLXBpY2tlciB0dWktaW1hZ2UtZWRpdG9yLW1iLTJcIlxuICAgICAgICAgICAgWyhjb2xvclBpY2tlcildPVwiZmlsdGVyTXVsdGlwbHlDb2xvclwiXG4gICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJmaWx0ZXJNdWx0aXBseUNvbG9yXCJcbiAgICAgICAgICAgIFtjcE91dHB1dEZvcm1hdF09XCInaGV4J1wiXG4gICAgICAgICAgICBbY3BQcmVzZXRDb2xvcnNdPVwiZGVmYXVsdEZpbHRlck11bHRpcGx5Q29sb3JzXCJcbiAgICAgICAgICAgIChjb2xvclBpY2tlckNoYW5nZSk9XCJmaWx0ZXJNdWx0aXBseUNvbG9yQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIFtjcFVzZVJvb3RWaWV3Q29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1mbGV4LW5vd3JhcFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwidGllLW11bHRpcGx5XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJNdWx0aXBseUNoZWNrZWRcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJNdWx0aXBseUNoZWNrZWRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPnt7XG4gICAgICAgICAgICAgIFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWZpbHRlci1tdWx0aXBseVwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1jb2xvci1pdGVtXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndGllLWZpbHRlci1ibGVuZC1jb2xvciB0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtY29sdW1uIHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyICcgK1xuICAgICAgICAgICAgKGZpbHRlckJsZW5kQ2hlY2tlZCA/ICdhY3RpdmUnIDogJycpXG4gICAgICAgICAgXCJcbiAgICAgICAgICBbdGl0bGVdPVwiJ3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1maWx0ZXItYmxlbmQnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgIGNsYXNzPVwidGllLWZpbHRlci1ibGVuZC1jb2xvci1waWNrZXIgdHVpLWltYWdlLWVkaXRvci1tYi0yXCJcbiAgICAgICAgICAgIFsoY29sb3JQaWNrZXIpXT1cImZpbHRlckJsZW5kQ29sb3JcIlxuICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiZmlsdGVyQmxlbmRDb2xvclwiXG4gICAgICAgICAgICBbY3BPdXRwdXRGb3JtYXRdPVwiJ3JnYmEnXCJcbiAgICAgICAgICAgIFtjcFByZXNldENvbG9yc109XCJkZWZhdWx0RmlsdGVyQmxlbmRDb2xvcnNcIlxuICAgICAgICAgICAgKGNvbG9yUGlja2VyQ2hhbmdlKT1cImZpbHRlckJsZW5kQ29sb3JDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgW2NwVXNlUm9vdFZpZXdDb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aWUtYmxlbmRcIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlckJsZW5kQ2hlY2tlZFwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckJsZW5kQ2hlY2tlZENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4+e3tcbiAgICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtZmlsdGVyLWJsZW5kXCIgfCB0cmFuc2xhdGVcbiAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=