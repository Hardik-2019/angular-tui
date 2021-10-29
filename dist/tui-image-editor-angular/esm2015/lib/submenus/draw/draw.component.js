import { Component, Input, } from '@angular/core';
import { defaultColors, eventNames } from '../../consts';
import { clearSelection, getActiveObjectId } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color-picker";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class DrawComponent {
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
DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(); };
DrawComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawComponent, selectors: [["tui-image-editor-submenus-draw"]], inputs: { imageEditor: "imageEditor", defaultDrawShapeColors: "defaultDrawShapeColors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 34, vars: 24, consts: [[1, "tui-image-editor-menu-draw"], [1, "tui-image-editor-submenu-item"], [1, "tie-draw-line-select-button"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-draw-free", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-draw-free", 1, "active", "use-default"], [0, "xlink", "href", "#ic-draw-line", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-draw-line", 1, "active", "use-default"], [1, "tui-image-editor-partition"], ["title", "Color", 1, "tie-draw-color", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], ["readonly", "", 1, "tie-draw-color-picker", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "range"], ["type", "range", "min", "5", "max", "30", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "5", "max", "30", "step", "1", 1, "tie-draw-range-value", "tui-image-editor-range-value", 3, "ngModel", "ngModelChange", "change"]], template: function DrawComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵlistener("click", function DrawComponent_Template_div_click_4_listener() { return ctx.setDrawType("free"); });
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(6, "svg", 5);
        i0.ɵɵelement(7, "use", 6);
        i0.ɵɵelement(8, "use", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(9, "label");
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 4);
        i0.ɵɵlistener("click", function DrawComponent_Template_div_click_12_listener() { return ctx.setDrawType("line"); });
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(14, "svg", 5);
        i0.ɵɵelement(15, "use", 8);
        i0.ɵɵelement(16, "use", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(17, "label");
        i0.ɵɵtext(18);
        i0.ɵɵpipe(19, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 10);
        i0.ɵɵelement(21, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 11);
        i0.ɵɵelementStart(23, "label");
        i0.ɵɵelementStart(24, "input", 12);
        i0.ɵɵlistener("colorPickerChange", function DrawComponent_Template_input_colorPickerChange_24_listener($event) { return ctx.drawStrokeColor = $event; })("colorPickerChange", function DrawComponent_Template_input_colorPickerChange_24_listener($event) { return ctx.drawStrokeColorChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div");
        i0.ɵɵtext(26);
        i0.ɵɵpipe(27, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 13);
        i0.ɵɵelementStart(29, "label", 14);
        i0.ɵɵtext(30);
        i0.ɵɵpipe(31, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "input", 15);
        i0.ɵɵlistener("ngModelChange", function DrawComponent_Template_input_ngModelChange_32_listener($event) { return ctx.drawStrokeWidthValue = $event; })("ngModelChange", function DrawComponent_Template_input_ngModelChange_32_listener($event) { return ctx.drawStrokeWidthChanged($event, true); })("change", function DrawComponent_Template_input_change_32_listener($event) { return ctx.drawStrokeWidthChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "input", 16);
        i0.ɵɵlistener("ngModelChange", function DrawComponent_Template_input_ngModelChange_33_listener($event) { return ctx.drawStrokeWidthValue = $event; })("ngModelChange", function DrawComponent_Template_input_ngModelChange_33_listener($event) { return ctx.drawStrokeWidthChanged($event, true); })("change", function DrawComponent_Template_input_change_33_listener($event) { return ctx.drawStrokeWidthChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵclassMap("tui-image-editor-button free " + (ctx.drawType == "free" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 16, "tui-image-editor-angular-submenus-draw-free"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button line " + (ctx.drawType == "line" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 18, "tui-image-editor-angular-submenus-draw-straight"), " ");
        i0.ɵɵadvance(6);
        i0.ɵɵstyleProp("background", ctx.drawStrokeColor);
        i0.ɵɵproperty("colorPicker", ctx.drawStrokeColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultDrawShapeColors)("cpUseRootViewContainer", true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(27, 20, "tui-image-editor-angular-submenus-draw-color"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(31, 22, "tui-image-editor-angular-submenus-draw-strokeWidth"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.drawStrokeWidthValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.drawStrokeWidthValue);
    } }, directives: [i1.ColorPickerDirective, i2.RangeValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i2.NumberValueAccessor], pipes: [i3.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9zdWJtZW51cy9kcmF3L2RyYXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvZHJhdy9kcmF3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxHQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBT2hFLE1BQU0sT0FBTyxhQUFhO0lBU3hCO1FBUFMsMkJBQXNCLEdBQWEsYUFBYSxDQUFDO1FBQ25ELHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUVsQyxvQkFBZSxHQUFXLHNCQUFzQixDQUFDO1FBS3RELElBQUksQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7O1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLGlCQUFpQixDQUNyQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUNwQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsTUFBQSxPQUFPLENBQUMsYUFBYSxDQUFDLENB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Q0csc0JBQXNCO2tCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0Q29sb3JzLCBldmVudE5hbWVzIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uLCBnZXRBY3RpdmVPYmplY3RJZCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1kcmF3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcmF3LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaW1hZ2VFZGl0b3I6IGFueTtcbiAgQElucHV0KCkgZGVmYXVsdERyYXdTaGFwZUNvbG9yczogc3RyaW5nW10gPSBkZWZhdWx0Q29sb3JzO1xuICBwdWJsaWMgZHJhd1N0cm9rZVdpZHRoVmFsdWU6IG51bWJlciA9IDEyO1xuICBwdWJsaWMgZHJhd1R5cGU6ICdmcmVlJyB8ICdsaW5lJztcbiAgcHVibGljIGRyYXdTdHJva2VDb2xvcjogc3RyaW5nID0gJ3JnYmEoMCwgMTY5LCAyNTUsIDEpJztcbiAgcHVibGljIGFjdGl2ZU9iamVjdElkOiBudW1iZXI7XG4gIHB1YmxpYyBvbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lciA9IHRoaXMub25PYmplY3RBY3RpdmF0ZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgaWYgKGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10pIHtcbiAgICAgIHRoaXMuYWN0aXZlT2JqZWN0SWQgPSBnZXRBY3RpdmVPYmplY3RJZChcbiAgICAgICAgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5jdXJyZW50VmFsdWVcbiAgICAgICk7XG4gICAgICB0aGlzLmNoZWNrQWN0aXZlT2JqZWN0KHRoaXMuYWN0aXZlT2JqZWN0SWQsIHRydWUpO1xuICAgICAgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5wcmV2aW91c1ZhbHVlPy5vZmYoXG4gICAgICAgIGV2ZW50TmFtZXMuT0JKRUNUX0FDVElWQVRFRCxcbiAgICAgICAgdGhhdC5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgICBjaGFuZ2VzWydpbWFnZUVkaXRvciddLmN1cnJlbnRWYWx1ZT8ub24oXG4gICAgICAgIGV2ZW50TmFtZXMuT0JKRUNUX0FDVElWQVRFRCxcbiAgICAgICAgdGhhdC5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW1hZ2VFZGl0b3IpIHtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iub2ZmKFxuICAgICAgICBldmVudE5hbWVzLk9CSkVDVF9BQ1RJVkFURUQsXG4gICAgICAgIHRoaXMub25PYmplY3RBY3RpdmF0ZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25PYmplY3RBY3RpdmF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmFjdGl2ZU9iamVjdElkID0gcHJvcHM/LmlkO1xuICAgIHRoaXMuY2hlY2tBY3RpdmVPYmplY3QodGhpcy5hY3RpdmVPYmplY3RJZCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWN0aXZlT2JqZWN0KFxuICAgIGFjdGl2ZU9iamVjdElkOiBudW1iZXIsXG4gICAgZW5hYmxlRHJhd01vZGVJZk5vQWN0aXZlT2JqZWN0OiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gICAgbGV0IGlmTm9BY3RpdmVPYmplY3QgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldERyYXdNb2RlKCdmcmVlJywge1xuICAgICAgICB3aWR0aDogdGhpcy5kcmF3U3Ryb2tlV2lkdGhWYWx1ZSxcbiAgICAgICAgY29sb3I6IHRoaXMuZHJhd1N0cm9rZUNvbG9yLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoYWN0aXZlT2JqZWN0SWQgIT0gbnVsbCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5pbWFnZUVkaXRvcj8uZ2V0T2JqZWN0UHJvcGVydGllcyhhY3RpdmVPYmplY3RJZCwgW1xuICAgICAgICAndHlwZScsXG4gICAgICAgICdzdHJva2VXaWR0aCcsXG4gICAgICAgICdzdHJva2UnLFxuICAgICAgXSk7XG4gICAgICBpZiAocHJvcHMgJiYgKHByb3BzLnR5cGUgPT09ICdwYXRoJyB8fCBwcm9wcy50eXBlID09PSAnbGluZScpKSB7XG4gICAgICAgIHRoaXMuZHJhd1N0cm9rZVdpZHRoVmFsdWUgPSBwcm9wcy5zdHJva2VXaWR0aDtcbiAgICAgICAgdGhpcy5kcmF3U3Ryb2tlQ29sb3IgPSBwcm9wcy5zdHJva2U7XG4gICAgICB9IGVsc2UgaWYgKGVuYWJsZURyYXdNb2RlSWZOb0FjdGl2ZU9iamVjdCkge1xuICAgICAgICBpZk5vQWN0aXZlT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbmFibGVEcmF3TW9kZUlmTm9BY3RpdmVPYmplY3QpIHtcbiAgICAgIGlmTm9BY3RpdmVPYmplY3QoKTtcbiAgICB9XG4gIH1cblxuICBkcmF3U3Ryb2tlV2lkdGhDaGFuZ2VkKGN1cnJlbnRTdHJva2VXaWR0aDogbnVtYmVyIHwgRXZlbnQsIGlzU2lsZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREcmF3TW9kZSh0aGlzLmRyYXdUeXBlLCB7XG4gICAgICB3aWR0aDogdHlwZW9mIGN1cnJlbnRTdHJva2VXaWR0aCA9PT0gXCJudW1iZXJcIiA/IGN1cnJlbnRTdHJva2VXaWR0aCA6IHRoaXMuZHJhd1N0cm9rZVdpZHRoVmFsdWUsXG4gICAgICBjb2xvcjogdGhpcy5kcmF3U3Ryb2tlQ29sb3IsXG4gICAgfSk7XG4gICAgdGhpcy5zdHJva2VDaGFuZ2VBY3RpdmVPYmplY3QoJ3N0cm9rZVdpZHRoJywgaXNTaWxlbnQpO1xuICB9XG5cbiAgc2V0RHJhd1R5cGUodHlwZTogJ2ZyZWUnIHwgJ2xpbmUnKSB7XG4gICAgY2xlYXJTZWxlY3Rpb24odGhpcy5pbWFnZUVkaXRvcik7XG4gICAgaWYgKHRoaXMuZHJhd1R5cGUgIT0gdHlwZSkge1xuICAgICAgdGhpcy5kcmF3VHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLnNldERyYXdNb2RlKHRoaXMuZHJhd1R5cGUsIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuZHJhd1N0cm9rZVdpZHRoVmFsdWUsXG4gICAgICAgIGNvbG9yOiB0aGlzLmRyYXdTdHJva2VDb2xvcixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iuc3RvcERyYXdpbmdNb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1N0cm9rZUNvbG9yQ2hhbmdlZChjdXJyZW50U3Ryb2tlQ29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuc2V0RHJhd01vZGUodGhpcy5kcmF3VHlwZSwge1xuICAgICAgd2lkdGg6IHRoaXMuZHJhd1N0cm9rZVdpZHRoVmFsdWUsXG4gICAgICBjb2xvcjogY3VycmVudFN0cm9rZUNvbG9yLFxuICAgIH0pO1xuICAgIHRoaXMuc3Ryb2tlQ2hhbmdlQWN0aXZlT2JqZWN0KCdzdHJva2VDb2xvcicsIGZhbHNlKTtcbiAgfVxuXG4gIHNldERyYXdNb2RlKFxuICAgIHR5cGU6ICdmcmVlJyB8ICdsaW5lJyB8IG51bGwsXG4gICAgc2V0dGluZ3M6IHtcbiAgICAgIHdpZHRoOiBudW1iZXI7XG4gICAgICBjb2xvcjogc3RyaW5nO1xuICAgICAgYXJyb3dUeXBlPzoge1xuICAgICAgICB0YWlsOiAnY2hldnJvbicgfCAndHJpYW5nbGUnO1xuICAgICAgICBoZWFkOiAnY2hldnJvbicgfCAndHJpYW5nbGUnO1xuICAgICAgfTtcbiAgICB9XG4gICkge1xuICAgIHRoaXMuZHJhd1R5cGUgPSB0eXBlO1xuICAgIHRoaXMuaW1hZ2VFZGl0b3Iuc3RvcERyYXdpbmdNb2RlKCk7XG4gICAgaWYgKHR5cGUgPT09ICdmcmVlJykge1xuICAgICAgY2xlYXJTZWxlY3Rpb24odGhpcy5pbWFnZUVkaXRvcik7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLnN0YXJ0RHJhd2luZ01vZGUoJ0ZSRUVfRFJBV0lORycsIHNldHRpbmdzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgICAgY2xlYXJTZWxlY3Rpb24odGhpcy5pbWFnZUVkaXRvcik7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLnN0YXJ0RHJhd2luZ01vZGUoJ0xJTkVfRFJBV0lORycsIHNldHRpbmdzKTtcbiAgICB9XG4gIH1cblxuICBzdHJva2VDaGFuZ2VBY3RpdmVPYmplY3QoXG4gICAgY2hhbmdlZFByb3BlcnR5OiAnc3Ryb2tlV2lkdGgnIHwgJ3N0cm9rZUNvbG9yJyxcbiAgICBpc1NpbGVudDogYm9vbGVhblxuICApIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmFjdGl2ZU9iamVjdElkICE9IG51bGwgJiZcbiAgICAgIGdldEFjdGl2ZU9iamVjdElkKHRoaXMuaW1hZ2VFZGl0b3IpID09IHRoaXMuYWN0aXZlT2JqZWN0SWRcbiAgICApIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMuaW1hZ2VFZGl0b3IuZ2V0T2JqZWN0UHJvcGVydGllcyhcbiAgICAgICAgdGhpcy5hY3RpdmVPYmplY3RJZCxcbiAgICAgICAgJ3R5cGUnXG4gICAgICApO1xuICAgICAgaWYgKHByb3BzICE9IG51bGwgJiYgKHByb3BzLnR5cGUgPT09ICdwYXRoJyB8fCBwcm9wcy50eXBlID09PSAnbGluZScpKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChjaGFuZ2VkUHJvcGVydHkpIHtcbiAgICAgICAgICBjYXNlICdzdHJva2VXaWR0aCc6XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5kcmF3U3Ryb2tlV2lkdGhWYWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzdHJva2VDb2xvcic6XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICBzdHJva2U6IHRoaXMuZHJhd1N0cm9rZUNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NpbGVudCkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iuc2V0T2JqZWN0UHJvcGVydGllc1F1aWV0bHkoXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9iamVjdElkLFxuICAgICAgICAgICAgcGFyYW1ldGVyc1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlRWRpdG9yLnNldE9iamVjdFByb3BlcnRpZXMoXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlT2JqZWN0SWQsXG4gICAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLW1lbnUtZHJhd1wiPlxuICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1zdWJtZW51LWl0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGllLWRyYXctbGluZS1zZWxlY3QtYnV0dG9uXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWp1c3RpZnktY29udGVudC1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1teS0zXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIChjbGljayk9XCJzZXREcmF3VHlwZSgnZnJlZScpXCJcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gZnJlZSAnICtcbiAgICAgICAgICAgIChkcmF3VHlwZSA9PSAnZnJlZScgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1kcmF3LWZyZWVcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtZHJhdy1mcmVlXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWRyYXctZnJlZVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAoY2xpY2spPVwic2V0RHJhd1R5cGUoJ2xpbmUnKVwiXG4gICAgICAgICAgW2NsYXNzXT1cIlxuICAgICAgICAgICAgJ3R1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIGxpbmUgJyArXG4gICAgICAgICAgICAoZHJhd1R5cGUgPT0gJ2xpbmUnID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtZHJhdy1saW5lXCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWRyYXctbGluZVwiIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1kcmF3LXN0cmFpZ2h0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItcGFydGl0aW9uXCI+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInRpZS1kcmF3LWNvbG9yIHR1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1jb2x1bW5cIlxuICAgICAgICAgIHRpdGxlPVwiQ29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgIGNsYXNzPVwidGllLWRyYXctY29sb3ItcGlja2VyXCJcbiAgICAgICAgICAgICAgWyhjb2xvclBpY2tlcildPVwiZHJhd1N0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiZHJhd1N0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgICAgW2NwT3V0cHV0Rm9ybWF0XT1cIidyZ2JhJ1wiXG4gICAgICAgICAgICAgIFtjcFByZXNldENvbG9yc109XCJkZWZhdWx0RHJhd1NoYXBlQ29sb3JzXCJcbiAgICAgICAgICAgICAgKGNvbG9yUGlja2VyQ2hhbmdlKT1cImRyYXdTdHJva2VDb2xvckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtjcFVzZVJvb3RWaWV3Q29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWRyYXctY29sb3JcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9kaXY+PC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLW5ld2xpbmUgdHVpLWltYWdlLWVkaXRvci1yYW5nZS13cmFwIHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItbXktM1wiXG4gICAgICA+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJhbmdlXCI+e3tcbiAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1kcmF3LXN0cm9rZVdpZHRoXCIgfCB0cmFuc2xhdGVcbiAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZHJhd1N0cm9rZVdpZHRoVmFsdWVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImRyYXdTdHJva2VXaWR0aENoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJkcmF3U3Ryb2tlV2lkdGhDaGFuZ2VkKCRldmVudCwgZmFsc2UpXCJcbiAgICAgICAgICBtaW49XCI1XCJcbiAgICAgICAgICBtYXg9XCIzMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjVcIlxuICAgICAgICAgIG1heD1cIjMwXCJcbiAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgY2xhc3M9XCJ0aWUtZHJhdy1yYW5nZS12YWx1ZSB0dWktaW1hZ2UtZWRpdG9yLXJhbmdlLXZhbHVlXCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImRyYXdTdHJva2VXaWR0aFZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJkcmF3U3Ryb2tlV2lkdGhDaGFuZ2VkKCRldmVudCwgdHJ1ZSlcIlxuICAgICAgICAgIChjaGFuZ2UpPVwiZHJhd1N0cm9rZVdpZHRoQ2hhbmdlZCgkZXZlbnQsIGZhbHNlKVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==