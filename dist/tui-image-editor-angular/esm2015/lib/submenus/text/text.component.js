import { Component, Input, } from '@angular/core';
import { defaultColors, eventNames } from '../../consts';
import { getActiveObjectId } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color-picker";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class TextComponent {
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
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(); };
TextComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextComponent, selectors: [["tui-image-editor-submenus-text"]], inputs: { imageEditor: "imageEditor", defaultTextColors: "defaultTextColors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 71, vars: 46, consts: [[1, "tui-image-editor-menu-text"], [1, "tui-image-editor-submenu-item"], [1, "tui-image-editor-d-flex", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [1, "tie-text-effect-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row"], [3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-text-bold", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-bold", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text-italic", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-italic", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text-underline", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-underline", 1, "active", "use-default"], [1, "tui-image-editor-partition"], [1, "tie-text-align-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row"], [0, "xlink", "href", "#ic-text-align-left", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-align-left", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text-align-center", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-align-center", 1, "active", "use-default"], [0, "xlink", "href", "#ic-text-align-right", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-text-align-right", 1, "active", "use-default"], ["title", "Color", 1, "tie-text-color", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], ["readonly", "", 1, "tie-text-color-picker", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-mb-3"], [1, "range"], ["type", "range", "min", "10", "max", "100", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "10", "max", "100", "step", "1", 1, "tie-text-range-value", "tui-image-editor-range-value", 3, "ngModel", "ngModelChange", "change"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵlistener("click", function TextComponent_Template_div_click_5_listener() { return ctx.changeTextFontWeight(ctx.textFontWeight == "bold" ? "normal" : "bold"); });
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(7, "svg", 6);
        i0.ɵɵelement(8, "use", 7);
        i0.ɵɵelement(9, "use", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(10, "label");
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 5);
        i0.ɵɵlistener("click", function TextComponent_Template_div_click_13_listener() { return ctx.changeTextFontStyle(ctx.textFontStyle == "italic" ? "normal" : "italic"); });
        i0.ɵɵelementStart(14, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(15, "svg", 6);
        i0.ɵɵelement(16, "use", 9);
        i0.ɵɵelement(17, "use", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(18, "label");
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 5);
        i0.ɵɵlistener("click", function TextComponent_Template_div_click_21_listener() { return ctx.changeTextDecoration(ctx.textDecoration == "underline" ? null : "underline"); });
        i0.ɵɵelementStart(22, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(23, "svg", 6);
        i0.ɵɵelement(24, "use", 11);
        i0.ɵɵelement(25, "use", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(26, "label");
        i0.ɵɵtext(27);
        i0.ɵɵpipe(28, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 13);
        i0.ɵɵelement(30, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div", 14);
        i0.ɵɵelementStart(32, "div", 5);
        i0.ɵɵlistener("click", function TextComponent_Template_div_click_32_listener() { return ctx.changeTextAlignment("left"); });
        i0.ɵɵelementStart(33, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(34, "svg", 6);
        i0.ɵɵelement(35, "use", 15);
        i0.ɵɵelement(36, "use", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(37, "label");
        i0.ɵɵtext(38);
        i0.ɵɵpipe(39, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 5);
        i0.ɵɵlistener("click", function TextComponent_Template_div_click_40_listener() { return ctx.changeTextAlignment("center"); });
        i0.ɵɵelementStart(41, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(42, "svg", 6);
        i0.ɵɵelement(43, "use", 17);
        i0.ɵɵelement(44, "use", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(45, "label");
        i0.ɵɵtext(46);
        i0.ɵɵpipe(47, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 5);
        i0.ɵɵlistener("click", function TextComponent_Template_div_click_48_listener() { return ctx.changeTextAlignment("right"); });
        i0.ɵɵelementStart(49, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(50, "svg", 6);
        i0.ɵɵelement(51, "use", 19);
        i0.ɵɵelement(52, "use", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(53, "label");
        i0.ɵɵtext(54);
        i0.ɵɵpipe(55, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "div", 13);
        i0.ɵɵelement(57, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "div");
        i0.ɵɵelementStart(59, "div", 21);
        i0.ɵɵelementStart(60, "label");
        i0.ɵɵelementStart(61, "input", 22);
        i0.ɵɵlistener("colorPickerChange", function TextComponent_Template_input_colorPickerChange_61_listener($event) { return ctx.textColor = $event; })("colorPickerChange", function TextComponent_Template_input_colorPickerChange_61_listener($event) { return ctx.textColorChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "div");
        i0.ɵɵtext(63);
        i0.ɵɵpipe(64, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "div", 23);
        i0.ɵɵelementStart(66, "label", 24);
        i0.ɵɵtext(67);
        i0.ɵɵpipe(68, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "input", 25);
        i0.ɵɵlistener("ngModelChange", function TextComponent_Template_input_ngModelChange_69_listener($event) { return ctx.textSizeValue = $event; })("ngModelChange", function TextComponent_Template_input_ngModelChange_69_listener($event) { return ctx.textSizeValueChanged($event, true); })("change", function TextComponent_Template_input_change_69_listener($event) { return ctx.textSizeValueChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "input", 26);
        i0.ɵɵlistener("ngModelChange", function TextComponent_Template_input_ngModelChange_70_listener($event) { return ctx.textSizeValue = $event; })("ngModelChange", function TextComponent_Template_input_ngModelChange_70_listener($event) { return ctx.textSizeValueChanged($event, true); })("change", function TextComponent_Template_input_change_70_listener($event) { return ctx.textSizeValueChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("max-width", "100%");
        i0.ɵɵadvance(3);
        i0.ɵɵclassMap("tui-image-editor-button bold " + (ctx.textFontWeight == "bold" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 30, "tui-image-editor-angular-submenus-text-bold"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button italic " + (ctx.textFontStyle == "italic" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 32, "tui-image-editor-angular-submenus-text-italic"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button underline " + (ctx.textDecoration == "underline" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(28, 34, "tui-image-editor-angular-submenus-text-underline"), " ");
        i0.ɵɵadvance(5);
        i0.ɵɵclassMap("tui-image-editor-button left " + (ctx.textAlign == "left" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(39, 36, "tui-image-editor-angular-submenus-text-left"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button center " + (ctx.textAlign == "center" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(47, 38, "tui-image-editor-angular-submenus-text-center"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button right " + (ctx.textAlign == "right" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(55, 40, "tui-image-editor-angular-submenus-text-right"), " ");
        i0.ɵɵadvance(7);
        i0.ɵɵstyleProp("background", ctx.textColor);
        i0.ɵɵproperty("colorPicker", ctx.textColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultTextColors)("cpUseRootViewContainer", true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(64, 42, "tui-image-editor-angular-submenus-text-color"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(68, 44, "tui-image-editor-angular-submenus-text-textSize"), "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.textSizeValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.textSizeValue);
    } }, directives: [i1.ColorPickerDirective, i2.RangeValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i2.NumberValueAccessor], pipes: [i3.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9zdWJtZW51cy90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvdGV4dC90ZXh0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxHQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7QUFPaEQsTUFBTSxPQUFPLGFBQWE7SUFrQnhCO1FBZlMsc0JBQWlCLEdBQWEsYUFBYSxDQUFDO1FBQzlDLGNBQVMsR0FBVyx1QkFBdUIsQ0FBQztRQUM1QyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixjQUFTLEdBQWdDLE1BQU0sQ0FBQztRQUNoRCxtQkFBYyxHQUFHLFdBQVcsQ0FBQztRQUM3QixrQkFBYSxHQUF3QixRQUFRLENBQUM7UUFDOUMsbUJBQWMsR0FBc0IsUUFBUSxDQUFDO1FBQzdDLG1CQUFjLEdBSVYsSUFBSSxDQUFDO1FBS2QsSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7O1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9B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RUU7UUFGRix5R0FFRTtRQUlGLGVBQTJCO1FBQTNCLDJDQUEyQjtRQVkzQixlQUEyQjtRQUEzQiwyQ0FBMkI7O3VGRDNNdEIsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUVHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdENvbG9ycywgZXZlbnROYW1lcyB9IGZyb20gJy4uLy4uL2NvbnN0cyc7XG5pbXBvcnQgeyBnZXRBY3RpdmVPYmplY3RJZCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaW1hZ2VFZGl0b3I6IGFueTtcbiAgcHVibGljIGFjdGl2ZU9iamVjdElkOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRlZmF1bHRUZXh0Q29sb3JzOiBzdHJpbmdbXSA9IGRlZmF1bHRDb2xvcnM7XG4gIHB1YmxpYyB0ZXh0Q29sb3I6IHN0cmluZyA9ICdyZ2JhKDI1NSwgMTg3LCA1OSwgMSknO1xuICBwdWJsaWMgdGV4dFNpemVWYWx1ZTogbnVtYmVyID0gNTA7XG4gIHB1YmxpYyB0ZXh0QWxpZ246ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgcHVibGljIHRleHRGb250RmFtaWx5ID0gJ05vdG8gU2Fucyc7XG4gIHB1YmxpYyB0ZXh0Rm9udFN0eWxlOiAnbm9ybWFsJyB8ICdpdGFsaWMnID0gJ25vcm1hbCc7XG4gIHB1YmxpYyB0ZXh0Rm9udFdlaWdodDogJ25vcm1hbCcgfCAnYm9sZCcgPSAnbm9ybWFsJztcbiAgcHVibGljIHRleHREZWNvcmF0aW9uOlxuICAgIHwgJ3VuZGVybGluZSdcbiAgICB8ICdsaW5lLXRocm91Z2gnXG4gICAgfCAnb3ZlcmxpbmUnXG4gICAgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIG9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lcjogYW55O1xuICBwdWJsaWMgb25UZXh0QWRkZWRFdmVudExpc3RlbmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXIgPSB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblRleHRBZGRlZEV2ZW50TGlzdGVuZXIgPSB0aGlzLm9uVGV4dEFkZGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGlmIChjaGFuZ2VzWydpbWFnZUVkaXRvciddKSB7XG4gICAgICB0aGlzLmFjdGl2ZU9iamVjdElkID0gZ2V0QWN0aXZlT2JqZWN0SWQoXG4gICAgICAgIGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10uY3VycmVudFZhbHVlXG4gICAgICApO1xuICAgICAgdGhpcy5jaGVja0FjdGl2ZU9iamVjdCh0aGlzLmFjdGl2ZU9iamVjdElkKTtcbiAgICAgIGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10uY3VycmVudFZhbHVlPy5zdGFydERyYXdpbmdNb2RlKCdURVhUJyk7XG5cbiAgICAgIGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10ucHJldmlvdXNWYWx1ZT8ub2ZmKFxuICAgICAgICBldmVudE5hbWVzLk9CSkVDVF9BQ1RJVkFURUQsXG4gICAgICAgIHRoYXQub25PYmplY3RBY3RpdmF0ZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuICAgICAgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5jdXJyZW50VmFsdWU/Lm9uKFxuICAgICAgICBldmVudE5hbWVzLk9CSkVDVF9BQ1RJVkFURUQsXG4gICAgICAgIHRoYXQub25PYmplY3RBY3RpdmF0ZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuXG4gICAgICBjaGFuZ2VzWydpbWFnZUVkaXRvciddLnByZXZpb3VzVmFsdWU/Lm9mZihcbiAgICAgICAgZXZlbnROYW1lcy5BRERfVEVYVCxcbiAgICAgICAgdGhhdC5vblRleHRBZGRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgICBjaGFuZ2VzWydpbWFnZUVkaXRvciddLmN1cnJlbnRWYWx1ZT8ub24oXG4gICAgICAgIGV2ZW50TmFtZXMuQUREX1RFWFQsXG4gICAgICAgIHRoYXQub25UZXh0QWRkZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmltYWdlRWRpdG9yKSB7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLm9mZihcbiAgICAgICAgZXZlbnROYW1lcy5PQkpFQ1RfQUNUSVZBVEVELFxuICAgICAgICB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lclxuICAgICAgKTtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iub2ZmKGV2ZW50TmFtZXMuQUREX1RFWFQsIHRoaXMub25UZXh0QWRkZWRFdmVudExpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uT2JqZWN0QWN0aXZhdGVkKHByb3BzKSB7XG4gICAgdGhpcy5hY3RpdmVPYmplY3RJZCA9IHByb3BzPy5pZDtcbiAgICB0aGlzLmNoZWNrQWN0aXZlT2JqZWN0KHRoaXMuYWN0aXZlT2JqZWN0SWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRleHRBZGRlZChlKSB7XG4gICAgdGhpcy5pbWFnZUVkaXRvclxuICAgICAgLmFkZFRleHQoJ0VkaXQgdGV4dCcsIHtcbiAgICAgICAgcG9zaXRpb246IGUub3JpZ2luUG9zaXRpb24sXG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIGZpbGw6IHRoaXMudGV4dENvbG9yLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMudGV4dEZvbnRGYW1pbHksXG4gICAgICAgICAgZm9udFNpemU6IHRoaXMudGV4dFNpemVWYWx1ZSxcbiAgICAgICAgICBmb250U3R5bGU6IHRoaXMudGV4dEZvbnRTdHlsZSxcbiAgICAgICAgICBmb250V2VpZ2h0OiB0aGlzLnRleHRGb250V2VpZ2h0LFxuICAgICAgICAgIHRleHRBbGlnbjogdGhpcy50ZXh0QWxpZ24sXG4gICAgICAgICAgdGV4dERlY29yYXRpb246IHRoaXMudGV4dERlY29yYXRpb24sXG4gICAgICAgICAgdW5kZXJsaW5lOiB0aGlzLnRleHREZWNvcmF0aW9uID09ICd1bmRlcmxpbmUnLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbWFnZUVkaXRvci5jaGFuZ2VDdXJzb3IoJ2RlZmF1bHQnKTtcbiAgICAgICAgdGhpcy5pbWFnZUVkaXRvcj8uc3RhcnREcmF3aW5nTW9kZSgnVEVYVCcpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWN0aXZlT2JqZWN0KGFjdGl2ZU9iamVjdElkOiBudW1iZXIpIHtcbiAgICBpZiAoYWN0aXZlT2JqZWN0SWQgIT0gbnVsbCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5pbWFnZUVkaXRvcj8uZ2V0T2JqZWN0UHJvcGVydGllcyhhY3RpdmVPYmplY3RJZCwgW1xuICAgICAgICAndHlwZScsXG4gICAgICAgICdmaWxsJyxcbiAgICAgICAgJ3RleHRBbGlnbicsXG4gICAgICAgICd0ZXh0RGVjb3JhdGlvbicsXG4gICAgICAgICdmb250RmFtaWx5JyxcbiAgICAgICAgJ2ZvbnRTdHlsZScsXG4gICAgICAgICdmb250V2VpZ2h0JyxcbiAgICAgICAgJ2ZvbnRTaXplJyxcbiAgICAgIF0pO1xuICAgICAgaWYgKHByb3BzICYmIChwcm9wcy50eXBlID09PSAnaS10ZXh0JyB8fCBwcm9wcy50eXBlID09PSAndGV4dCcpKSB7XG4gICAgICAgIHRoaXMudGV4dEFsaWduID0gcHJvcHMudGV4dEFsaWduO1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9IHByb3BzLmZpbGw7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb24gPSBwcm9wcy50ZXh0RGVjb3JhdGlvbjtcbiAgICAgICAgdGhpcy50ZXh0Rm9udEZhbWlseSA9IHByb3BzLmZvbnRGYW1pbHk7XG4gICAgICAgIHRoaXMudGV4dEZvbnRTdHlsZSA9IHByb3BzLmZvbnRTdHlsZTtcbiAgICAgICAgdGhpcy50ZXh0Rm9udFdlaWdodCA9IHByb3BzLmZvbnRXZWlnaHQ7XG4gICAgICAgIHRoaXMudGV4dFNpemVWYWx1ZSA9IHByb3BzLmZvbnRTaXplO1xuICAgICAgICB0aGlzLmltYWdlRWRpdG9yPy5zdGFydERyYXdpbmdNb2RlKCdURVhUJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVGV4dEFsaWdubWVudChuZXdWYWx1ZTogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnKSB7XG4gICAgdGhpcy50ZXh0QWxpZ24gPSBuZXdWYWx1ZTtcbiAgICB0aGlzLnRleHRDaGFuZ2VBY3RpdmVPYmplY3QoJ3RleHRBbGlnbicpO1xuICB9XG5cbiAgY2hhbmdlVGV4dEZvbnRTdHlsZShuZXdGb250U3R5bGU6ICdub3JtYWwnIHwgJ2l0YWxpYycpIHtcbiAgICB0aGlzLnRleHRGb250U3R5bGUgPSBuZXdGb250U3R5bGU7XG4gICAgdGhpcy50ZXh0Q2hhbmdlQWN0aXZlT2JqZWN0KCdmb250U3R5bGUnKTtcbiAgfVxuXG4gIGNoYW5nZVRleHRGb250V2VpZ2h0KG5ld0ZvbnRXZWlnaHQ6ICdub3JtYWwnIHwgJ2JvbGQnKSB7XG4gICAgdGhpcy50ZXh0Rm9udFdlaWdodCA9IG5ld0ZvbnRXZWlnaHQ7XG4gICAgdGhpcy50ZXh0Q2hhbmdlQWN0aXZlT2JqZWN0KCdmb250V2VpZ2h0Jyk7XG4gIH1cblxuICBjaGFuZ2VUZXh0RGVjb3JhdGlvbihcbiAgICBuZXdUZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfCAnbGluZS10aHJvdWdoJyB8ICdvdmVybGluZScgfCBudWxsXG4gICkge1xuICAgIHRoaXMudGV4dERlY29yYXRpb24gPSBuZXdUZXh0RGVjb3JhdGlvbjtcbiAgICB0aGlzLnRleHRDaGFuZ2VBY3RpdmVPYmplY3QoJ3RleHREZWNvcmF0aW9uJyk7XG4gIH1cblxuICB0ZXh0U2l6ZVZhbHVlQ2hhbmdlZChjdXJyZW50VGV4dFNpemVWYWx1ZTogbnVtYmVyLCBpc1NpbGVudDogYm9vbGVhbikge1xuICAgIHRoaXMudGV4dENoYW5nZUFjdGl2ZU9iamVjdCgnZm9udFNpemUnLCBpc1NpbGVudCk7XG4gIH1cblxuICB0ZXh0Q29sb3JDaGFuZ2VkKGN1cnJlbnRDb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0Q2hhbmdlQWN0aXZlT2JqZWN0KCdjb2xvcicpO1xuICB9XG5cbiAgdGV4dENoYW5nZUFjdGl2ZU9iamVjdChcbiAgICB0eXBlOlxuICAgICAgfCAnY29sb3InXG4gICAgICB8ICdmb250RmFtaWx5J1xuICAgICAgfCAnZm9udFNpemUnXG4gICAgICB8ICdmb250U3R5bGUnXG4gICAgICB8ICdmb250V2VpZ2h0J1xuICAgICAgfCAndGV4dEFsaWduJ1xuICAgICAgfCAndGV4dERlY29yYXRpb24nLFxuICAgIGlzU2lsZW50OiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5hY3RpdmVPYmplY3RJZCAhPSBudWxsICYmXG4gICAgICBnZXRBY3RpdmVPYmplY3RJZCh0aGlzLmltYWdlRWRpdG9yKSA9PSB0aGlzLmFjdGl2ZU9iamVjdElkXG4gICAgKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLmltYWdlRWRpdG9yLmdldE9iamVjdFByb3BlcnRpZXMoXG4gICAgICAgIHRoaXMuYWN0aXZlT2JqZWN0SWQsXG4gICAgICAgICd0eXBlJ1xuICAgICAgKTtcbiAgICAgIGxldCBwYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgIGlmIChwcm9wcy50eXBlID09PSAnaS10ZXh0JyB8fCBwcm9wcy50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgICAgZmlsbDogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZm9udEZhbWlseSc6XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLnRleHRGb250RmFtaWx5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ZvbnRTaXplJzpcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnRleHRTaXplVmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZm9udFN0eWxlJzpcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogdGhpcy50ZXh0Rm9udFN0eWxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ZvbnRXZWlnaHQnOlxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogdGhpcy50ZXh0Rm9udFdlaWdodCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0ZXh0QWxpZ24nOlxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiB0aGlzLnRleHRBbGlnbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0ZXh0RGVjb3JhdGlvbic6XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdGhpcy50ZXh0RGVjb3JhdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnVuY3Rpb25Ub0V4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbWFnZUVkaXRvci5jaGFuZ2VUZXh0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9iamVjdElkLFxuICAgICAgICAgICAgcGFyYW1ldGVycyxcbiAgICAgICAgICAgIGlzU2lsZW50XG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzU2lsZW50KSB7XG4gICAgICAgICAgZnVuY3Rpb25Ub0V4ZWN1dGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uVG9FeGVjdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItbWVudS10ZXh0XCI+XG4gIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnUtaXRlbVwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMTAwJSdcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3Itb3ZlcmZsb3dhYmxlLXggdHVpLWltYWdlLWVkaXRvci1weS0zXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidGllLXRleHQtZWZmZWN0LWJ1dHRvbiB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIFtjbGFzc109XCJcbiAgICAgICAgICAgICAgJ3R1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIGJvbGQgJyArXG4gICAgICAgICAgICAgICh0ZXh0Rm9udFdlaWdodCA9PSAnYm9sZCcgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIChjbGljayk9XCJcbiAgICAgICAgICAgICAgY2hhbmdlVGV4dEZvbnRXZWlnaHQodGV4dEZvbnRXZWlnaHQgPT0gJ2JvbGQnID8gJ25vcm1hbCcgOiAnYm9sZCcpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtdGV4dC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy10ZXh0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAge3sgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtdGV4dC1ib2xkXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgW2NsYXNzXT1cIlxuICAgICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gaXRhbGljICcgK1xuICAgICAgICAgICAgICAodGV4dEZvbnRTdHlsZSA9PSAnaXRhbGljJyA/ICdhY3RpdmUnIDogJycpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIlxuICAgICAgICAgICAgICBjaGFuZ2VUZXh0Rm9udFN0eWxlKFxuICAgICAgICAgICAgICAgIHRleHRGb250U3R5bGUgPT0gJ2l0YWxpYycgPyAnbm9ybWFsJyA6ICdpdGFsaWMnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy10ZXh0LWl0YWxpY1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtdGV4dC1pdGFsaWNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAge3sgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtdGV4dC1pdGFsaWNcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiB1bmRlcmxpbmUgJyArXG4gICAgICAgICAgICAgICh0ZXh0RGVjb3JhdGlvbiA9PSAndW5kZXJsaW5lJyA/ICdhY3RpdmUnIDogJycpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIlxuICAgICAgICAgICAgICBjaGFuZ2VUZXh0RGVjb3JhdGlvbihcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbiA9PSAndW5kZXJsaW5lJyA/IG51bGwgOiAndW5kZXJsaW5lJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtdGV4dC11bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLXRleHQtdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtdGV4dC11bmRlcmxpbmVcIiB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXBhcnRpdGlvblwiPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ0aWUtdGV4dC1hbGlnbi1idXR0b24gdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBsZWZ0ICcgK1xuICAgICAgICAgICAgICAodGV4dEFsaWduID09ICdsZWZ0JyA/ICdhY3RpdmUnIDogJycpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVRleHRBbGlnbm1lbnQoJ2xlZnQnKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy10ZXh0LWFsaWduLWxlZnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLXRleHQtYWxpZ24tbGVmdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy10ZXh0LWxlZnRcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBjZW50ZXIgJyArXG4gICAgICAgICAgICAgICh0ZXh0QWxpZ24gPT0gJ2NlbnRlcicgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VUZXh0QWxpZ25tZW50KCdjZW50ZXInKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy10ZXh0LWFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtdGV4dC1hbGlnbi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAge3sgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtdGV4dC1jZW50ZXJcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiByaWdodCAnICtcbiAgICAgICAgICAgICAgKHRleHRBbGlnbiA9PSAncmlnaHQnID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlVGV4dEFsaWdubWVudCgncmlnaHQnKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy10ZXh0LWFsaWduLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy10ZXh0LWFsaWduLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLXRleHQtcmlnaHRcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXBhcnRpdGlvblwiPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGllLXRleHQtY29sb3IgdHVpLWltYWdlLWVkaXRvci1idXR0b24gdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LWNvbHVtblwiXG4gICAgICAgICAgICB0aXRsZT1cIkNvbG9yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0aWUtdGV4dC1jb2xvci1waWNrZXJcIlxuICAgICAgICAgICAgICAgIFsoY29sb3JQaWNrZXIpXT1cInRleHRDb2xvclwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwidGV4dENvbG9yXCJcbiAgICAgICAgICAgICAgICBbY3BPdXRwdXRGb3JtYXRdPVwiJ3JnYmEnXCJcbiAgICAgICAgICAgICAgICBbY3BQcmVzZXRDb2xvcnNdPVwiZGVmYXVsdFRleHRDb2xvcnNcIlxuICAgICAgICAgICAgICAgIChjb2xvclBpY2tlckNoYW5nZSk9XCJ0ZXh0Q29sb3JDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtjcFVzZVJvb3RWaWV3Q29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLXRleHQtY29sb3JcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj48L2xhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLW5ld2xpbmUgdHVpLWltYWdlLWVkaXRvci1yYW5nZS13cmFwIHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItbWItM1wiXG4gICAgPlxuICAgICAgPGxhYmVsIGNsYXNzPVwicmFuZ2VcIj5cbiAgICAgICAge3tcbiAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy10ZXh0LXRleHRTaXplXCIgfCB0cmFuc2xhdGVcbiAgICAgICAgfX08L2xhYmVsXG4gICAgICA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ0ZXh0U2l6ZVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidGV4dFNpemVWYWx1ZUNoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgIChjaGFuZ2UpPVwidGV4dFNpemVWYWx1ZUNoYW5nZWQoJGV2ZW50LCBmYWxzZSlcIlxuICAgICAgICBtaW49XCIxMFwiXG4gICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBtaW49XCIxMFwiXG4gICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgY2xhc3M9XCJ0aWUtdGV4dC1yYW5nZS12YWx1ZSB0dWktaW1hZ2UtZWRpdG9yLXJhbmdlLXZhbHVlXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ0ZXh0U2l6ZVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidGV4dFNpemVWYWx1ZUNoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgIChjaGFuZ2UpPVwidGV4dFNpemVWYWx1ZUNoYW5nZWQoJGV2ZW50LCBmYWxzZSlcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==