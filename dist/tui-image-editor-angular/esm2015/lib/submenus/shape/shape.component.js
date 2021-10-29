import { Component, Input, } from '@angular/core';
import { defaultColors, eventNames } from '../../consts';
import { clearSelection, getActiveObjectId } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color-picker";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class ShapeComponent {
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
ShapeComponent.ɵfac = function ShapeComponent_Factory(t) { return new (t || ShapeComponent)(); };
ShapeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ShapeComponent, selectors: [["tui-image-editor-submenus-shape"]], inputs: { imageEditor: "imageEditor", defaultShapeStrokeColors: "defaultShapeStrokeColors", defaultShapeFillColors: "defaultShapeFillColors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 50, vars: 38, consts: [[1, "tui-image-editor-menu-shape"], [1, "tui-image-editor-submenu-item"], [1, "tui-image-editor-d-flex", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [1, "tie-shape-button"], [3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-shape-rectangle", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape-rectangle", 1, "active", "use-default"], [0, "xlink", "href", "#ic-shape-circle", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape-circle", 1, "active", "use-default"], [0, "xlink", "href", "#ic-shape-triangle", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape-triangle", 1, "active", "use-default"], [1, "tui-image-editor-partition"], [1, "tie-shape-color-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row"], ["title", "Fill", 1, "tie-color-fill", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], ["readonly", "", 1, "tie-draw-color-picker", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"], ["title", "Stroke", 1, "tie-color-stroke", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-justify-content-center", "tui-image-editor-align-items-center", "tui-image-editor-mb-3"], [1, "range"], ["type", "range", "min", "2", "max", "300", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "2", "max", "300", "step", "1", 1, "tie-draw-range-value", "tui-image-editor-range-value", 3, "ngModel", "ngModelChange", "change"]], template: function ShapeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵlistener("click", function ShapeComponent_Template_div_click_5_listener() { return ctx.setShapeType("rect"); });
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
        i0.ɵɵlistener("click", function ShapeComponent_Template_div_click_13_listener() { return ctx.setShapeType("circle"); });
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
        i0.ɵɵlistener("click", function ShapeComponent_Template_div_click_21_listener() { return ctx.setShapeType("triangle"); });
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
        i0.ɵɵelementStart(32, "div", 15);
        i0.ɵɵelementStart(33, "label");
        i0.ɵɵelementStart(34, "input", 16);
        i0.ɵɵlistener("colorPickerChange", function ShapeComponent_Template_input_colorPickerChange_34_listener($event) { return ctx.shapeFillColor = $event; })("colorPickerChange", function ShapeComponent_Template_input_colorPickerChange_34_listener($event) { return ctx.shapeColorChanged("fill", $event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div");
        i0.ɵɵtext(36);
        i0.ɵɵpipe(37, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "div", 17);
        i0.ɵɵelementStart(39, "label");
        i0.ɵɵelementStart(40, "input", 16);
        i0.ɵɵlistener("colorPickerChange", function ShapeComponent_Template_input_colorPickerChange_40_listener($event) { return ctx.shapeStrokeColor = $event; })("colorPickerChange", function ShapeComponent_Template_input_colorPickerChange_40_listener($event) { return ctx.shapeColorChanged("stroke", $event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div");
        i0.ɵɵtext(42);
        i0.ɵɵpipe(43, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "div", 18);
        i0.ɵɵelementStart(45, "label", 19);
        i0.ɵɵtext(46);
        i0.ɵɵpipe(47, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "input", 20);
        i0.ɵɵlistener("ngModelChange", function ShapeComponent_Template_input_ngModelChange_48_listener($event) { return ctx.shapeStrokeWidthValue = $event; })("ngModelChange", function ShapeComponent_Template_input_ngModelChange_48_listener($event) { return ctx.shapeStrokeWidthChanged($event, true); })("change", function ShapeComponent_Template_input_change_48_listener($event) { return ctx.shapeStrokeWidthChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "input", 21);
        i0.ɵɵlistener("ngModelChange", function ShapeComponent_Template_input_ngModelChange_49_listener($event) { return ctx.shapeStrokeWidthValue = $event; })("ngModelChange", function ShapeComponent_Template_input_ngModelChange_49_listener($event) { return ctx.shapeStrokeWidthChanged($event, true); })("change", function ShapeComponent_Template_input_change_49_listener($event) { return ctx.shapeStrokeWidthChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵclassMap("tui-image-editor-button rect " + (ctx.shapeType == "rect" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 26, "tui-image-editor-angular-submenus-shape-rectangle"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button circle " + (ctx.shapeType == "circle" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 28, "tui-image-editor-angular-submenus-shape-circle"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button triangle " + (ctx.shapeType == "triangle" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(28, 30, "tui-image-editor-angular-submenus-shape-triangle"), " ");
        i0.ɵɵadvance(7);
        i0.ɵɵstyleProp("background", ctx.shapeFillColor);
        i0.ɵɵproperty("colorPicker", ctx.shapeFillColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultShapeFillColors)("cpUseRootViewContainer", true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(37, 32, "tui-image-editor-angular-submenus-shape-fill"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵstyleProp("background", ctx.shapeStrokeColor);
        i0.ɵɵproperty("colorPicker", ctx.shapeStrokeColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultShapeStrokeColors)("cpUseRootViewContainer", true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(43, 34, "tui-image-editor-angular-submenus-shape-stroke"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(47, 36, "tui-image-editor-angular-submenus-shape-strokeWidth"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.shapeStrokeWidthValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.shapeStrokeWidthValue);
    } }, directives: [i1.ColorPickerDirective, i2.RangeValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i2.NumberValueAccessor], pipes: [i3.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShapeComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvc2hhcGUvc2hhcGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvc2hhcGUvc2hhcGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEdBS04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7QUFPaEUsTUFBTSxPQUFPLGNBQWM7SUFZekI7UUFWUyw2QkFBd0IsR0FBYSxhQUFhLENBQUM7UUFDbkQsMkJBQXNCLEdBQWEsYUFBYSxDQUFDO1FBQ25ELDBCQUFxQixHQUFXLENBQUMsQ0FBQztRQUNsQyxtQkFBYyxHQUFXLHdCQUF3QixDQUFDO1FBQ2xELHFCQUFnQixHQUFXLHNCQUFzQixDQUFDO1FBT3ZELElBQUksQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCOztRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FDckMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FDcEMsQ0FBQztZQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFNUMsTUFBQSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSwwQ0FBRSxHQUFHLENBQ3ZDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFDM0IsSUFBSSxDQUFDLDhCQUE4QixFQUNuQztZQUNGLE1BQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksMENBQUUsRUFBRSxDQUNyQyxVQUFVLENBQUMsZ0JBQWdCLEVBQzNCLElBQUksQ0FBQyw4QkFBOEIsRUFDbkM7WUFFRixNQUFBLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLDBDQUFFLEdBQUcsQ0FDdkMsVUFBVSxDQUFDLFlBQVksRUFDdkIsSUFBSSxDQUFDLDBCQUEwQixFQUMvQjtZQUNGLE1BQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksMENBQUUsRUFBRSxDQUNyQyxVQUFVLENBQUMsWUFBWSxFQUN2QixJQUFJLENBQUMsMEJBQTBCLEVBQy9CO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDbEIsVUFBVSxDQUFDLGdCQUFnQixFQUMzQixJQUFJLENBQUMsOEJBQThCLENBQ3BDLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDbEIsVUFBVSxDQUFDLFlBQVksRUFDdkIsSUFBSSxDQUFDLDBCQUEwQixDQUNoQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBSztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQUs7O1FBQ3pCLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE1BQUEsSUFBSSxDQUFDLFdBQVcsMENBQUUsZUFBZSxHQUFHO1NBQ3JDO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixDQUFDLGNBQXNCOztRQUM5QyxJQUFJLGNBQWMsSUFBSSxJQUFJLEVBQUU7WUFDMUIsSUFBSSxLQUFLLFNBQUcsSUFBSSxDQUFDLFdBQVcsMENBQUUsbUJBQW1CLENBQUMsY0FBYyxFQUFFO2dCQUNoRSxNQUFNO2dCQUNOLGFBQWE7Z0JBQ2IsUUFBUTtnQkFDUixNQUFNO2FBQ1AsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsY0FBYztvQkFDakIsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPO3dCQUN6RCxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFOzRCQUMvQyxDQUFDLENBQUMsd0JBQXdCOzRCQUMxQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxDQUFDLGdCQUFnQjtvQkFDbkIsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO3dCQUMvQyxDQUFDLENBQUMsd0JBQXdCO3dCQUMxQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNwQjtTQUNGO0lBQ0gsQ0FBQztJQUVELHVCQUF1QixDQUFDLGtCQUFrQyxFQUFFLFFBQWlCO1FBQzNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDN0IsV0FBVyxFQUFFLE9BQU8sa0JBQWtCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQjtTQUN0RyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUF1QixFQUFFLFlBQW9CO1FBQzdELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbkMsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCO29CQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtpQkFDeEMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWM7b0JBQ3pCLE1BQU0sRUFBRSxZQUFZO29CQUNwQixXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtpQkFDeEMsQ0FBQyxDQUFDO2dCQUNILE1BQU07U0FDVDtRQUNELElBQUksQ0FBQyx1QkFBdUIsQ0FDMUIsSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQy9DLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQW9DO1FBQy9DLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUI7YUFDeEMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUNiLElBQW9DLEVBQ3BDLE9BSUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHVCQUF1QixDQUNyQixlQUE0RCxFQUM1RCxXQUFvQixLQUFLO1FBRXpCLElBQ0UsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJO1lBQzNCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUMxRDtZQUNBLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQzlDLElBQUksQ0FBQyxjQUFjLEVBQ25CLE1BQU0sQ0FDUCxDQUFDO1lBQ0YsSUFDRSxLQUFLLElBQUksSUFBSTtnQkFDYixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdkQ7Z0JBQ0EsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixRQUFRLGVBQWUsRUFBRTtvQkFDdkIsS0FBSyxhQUFhO3dCQUNoQixVQUFVLEdBQUc7NEJBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUI7eUJBQ3hDLENBQUM7d0JBQ0YsTUFBTTtvQkFDUixLQUFLLGFBQWE7d0JBQ2hCLFVBQVUsR0FBRzs0QkFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjt5QkFDOUIsQ0FBQzt3QkFDRixNQUFNO29CQUNSLEtBQUssV0FBVzt3QkFDZCxVQUFVLEdBQUc7NEJBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjO3lCQUMxQixDQUFDO3dCQUNGLE1BQU07aUJBQ1Q7Z0JBQ0QsSUFBSSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUMxQixJQUFJLENBQUMsY0FBYyxFQUNuQixVQUFVLEVBQ1YsUUFBUSxDQUNULENBQUM7Z0JBQ0osQ0FBQyxDQUFDO2dCQUNGLElBQUksUUFBUSxFQUFFO29CQUNaLGlCQUFpQixFQUFFLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNMLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUMvQjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs0RUF4TVUsY0FBYzttREFBZCxjQUFjO1FDaEIzQiw4QkFBeUM7UUFDdkMsOEJBQTJDO1FBQ3pDLDhCQUE2RTtRQUMzRSw4QkFBeUo7UUFDdkosOEJBQThCO1FBQzVCLDhCQU1DO1FBREMsd0ZBQVMsaUJBQWEsTUFBTSxDQUFDLElBQUM7UUFFOUIsMkJBQUs7UUFDSCxtQkFBNEI7UUFBNUIsOEJBQTRCO1FBQzFCLHlCQUdPO1FBQ1AseUJBR087UUFDVCxpQkFBTTtRQUNSLGlCQUFNO1FBQ04sb0JBQU87UUFBUCw4QkFBTztRQUNMLGFBR0Y7O1FBQUEsaUJBQVE7UUFDVixpQkFBTTtRQUNOLCtCQU1DO1FBREMseUZBQVMsaUJBQWEsUUFBUSxDQUFDLElBQUM7UUFFaEMsNEJBQUs7UUFDSCxtQkFBNEI7UUFBNUIsK0JBQTRCO1FBQzFCLDBCQUdPO1FBQ1AsMkJBR087UUFDVCxpQkFBTTtRQUNSLGlCQUFNO1FBQ04sb0JBQU87UUFBUCw4QkFBTztRQUNMLGFBQ0Y7O1FBQUEsaUJBQVE7UUFDVixpQkFBTTtRQUNOLCtCQU1DO1FBREMseUZBQVMsaUJBQWEsVUFBVSxDQUFDLElBQUM7UUFFbEMsNEJBQUs7UUFDSCxtQkFBNEI7UUFBNUIsK0JBQTRCO1FBQzFCLDJCQUdPO1FBQ1AsMkJBR087UUFDVCxpQkFBTTtRQUNSLGlCQUFNO1FBQ04sb0JBQU87UUFBUCw4QkFBTztRQUNMLGFBR0Y7O1FBQUEsaUJBQVE7UUFDVixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sZ0NBQXdDO1FBQ3RDLHVCQUFXO1FBQ2IsaUJBQU07UUFDTixnQ0FBc0Y7UUFDcEYsZ0NBR0M7UUFDQyw4QkFBTztRQUNMLGtDQVNFO1FBTkEsd0pBQWdDLDRHQUlYLHNCQUFrQixNQUFNLFNBQVMsSUFKdEI7UUFIbEMsaUJBU0U7UUFDRiw0QkFBSztRQUNILGFBQ0Y7O1FBQUEsaUJBQU07UUFBQSxpQkFDUDtRQUNILGlCQUFNO1FBQ04sZ0NBR0M7UUFDQyw4QkFBTztRQUNMLGtDQVNFO1FBTkEsMEpBQWtDLDRHQUliLHNCQUFrQixRQUFRLFNBQVMsSUFKdEI7UUFIcEMsaUJBU0U7UUFDRiw0QkFBSztRQUNILGFBR0Y7O1FBQUEsaUJBQU07UUFBQSxpQkFDUDtRQUNILGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sZ0NBRUM7UUFDQyxrQ0FBcUI7UUFBQSxhQUVuQjs7UUFBQSxpQkFBUTtRQUNWLGtDQU9FO1FBTEEsdUpBQW1DLG9HQUNsQixvQ0FBZ0MsSUFBSSxDQUFDLElBRG5CLHNGQUV6QixvQ0FBZ0MsS0FBSyxDQUFDLElBRmI7UUFGckMsaUJBT0U7UUFDRixrQ0FTRTtRQUhBLHVKQUFtQyxvR0FDbEIsb0NBQWdDLElBQUksQ0FBQyxJQURuQixzRkFFekIsb0NBQWdDLEtBQUssQ0FBQyxJQUZiO1FBTnJDLGlCQVNFO1FBQ0osaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQXBKTSxlQUdDO1FBSEQsMEZBR0M7UUFnQkMsZUFHRjtRQUhFLDRHQUdGO1FBR0EsZUFHQztRQUhELDhGQUdDO1FBZ0JDLGVBQ0Y7UUFERSx5R0FDRjtRQUdBLGVBR0M7UUFIRCxrR0FHQztRQWdCQyxlQUdGO1FBSEUsMkdBR0Y7UUFnQkksZUFBbUM7UUFBbkMsZ0RBQW1DO1FBRG5DLGdEQUFnQywwQkFBQSw4Q0FBQSxnQ0FBQTtRQVFoQyxlQUNGO1FBREUsdUdBQ0Y7UUFZRSxlQUFxQztRQUFyQyxrREFBcUM7UUFEckMsa0RBQWtDLDBCQUFBLGdEQUFBLGdDQUFBO1FBUWxDLGVBR0Y7UUFIRSx5R0FHRjtRQVNhLGVBRW5CO1FBRm1CLG1HQUVuQjtRQUdBLGVBQW1DO1FBQW5DLG1EQUFtQztRQVluQyxlQUFtQztRQUFuQyxtREFBbUM7O3VGRHBJOUIsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLHdCQUF3QjtrQkFBaEMsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdENvbG9ycywgZXZlbnROYW1lcyB9IGZyb20gJy4uLy4uL2NvbnN0cyc7XG5pbXBvcnQgeyBjbGVhclNlbGVjdGlvbiwgZ2V0QWN0aXZlT2JqZWN0SWQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtc2hhcGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hhcGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaGFwZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpbWFnZUVkaXRvcjogYW55O1xuICBASW5wdXQoKSBkZWZhdWx0U2hhcGVTdHJva2VDb2xvcnM6IHN0cmluZ1tdID0gZGVmYXVsdENvbG9ycztcbiAgQElucHV0KCkgZGVmYXVsdFNoYXBlRmlsbENvbG9yczogc3RyaW5nW10gPSBkZWZhdWx0Q29sb3JzO1xuICBwdWJsaWMgc2hhcGVTdHJva2VXaWR0aFZhbHVlOiBudW1iZXIgPSAzO1xuICBwdWJsaWMgc2hhcGVGaWxsQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJztcbiAgcHVibGljIHNoYXBlU3Ryb2tlQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDAsIDE2OSwgMjU1LCAxKSc7XG4gIHB1YmxpYyBzaGFwZVR5cGU6ICdjaXJjbGUnIHwgJ3RyaWFuZ2xlJyB8ICdyZWN0JztcbiAgcHVibGljIGFjdGl2ZU9iamVjdElkOiBudW1iZXI7XG4gIHB1YmxpYyBvbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXI6IGFueTtcbiAgcHVibGljIG9uT2JqZWN0QWRkZWRFdmVudExpc3RlbmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXIgPSB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk9iamVjdEFkZGVkRXZlbnRMaXN0ZW5lciA9IHRoaXMub25PYmplY3RBZGRlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBpZiAoY2hhbmdlc1snaW1hZ2VFZGl0b3InXSkge1xuICAgICAgdGhpcy5hY3RpdmVPYmplY3RJZCA9IGdldEFjdGl2ZU9iamVjdElkKFxuICAgICAgICBjaGFuZ2VzWydpbWFnZUVkaXRvciddLmN1cnJlbnRWYWx1ZVxuICAgICAgKTtcbiAgICAgIHRoaXMuY2hlY2tBY3RpdmVPYmplY3QodGhpcy5hY3RpdmVPYmplY3RJZCk7XG5cbiAgICAgIGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10ucHJldmlvdXNWYWx1ZT8ub2ZmKFxuICAgICAgICBldmVudE5hbWVzLk9CSkVDVF9BQ1RJVkFURUQsXG4gICAgICAgIHRoYXQub25PYmplY3RBY3RpdmF0ZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuICAgICAgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5jdXJyZW50VmFsdWU/Lm9uKFxuICAgICAgICBldmVudE5hbWVzLk9CSkVDVF9BQ1RJVkFURUQsXG4gICAgICAgIHRoYXQub25PYmplY3RBY3RpdmF0ZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuXG4gICAgICBjaGFuZ2VzWydpbWFnZUVkaXRvciddLnByZXZpb3VzVmFsdWU/Lm9mZihcbiAgICAgICAgZXZlbnROYW1lcy5PQkpFQ1RfQURERUQsXG4gICAgICAgIHRoYXQub25PYmplY3RBZGRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgICBjaGFuZ2VzWydpbWFnZUVkaXRvciddLmN1cnJlbnRWYWx1ZT8ub24oXG4gICAgICAgIGV2ZW50TmFtZXMuT0JKRUNUX0FEREVELFxuICAgICAgICB0aGF0Lm9uT2JqZWN0QWRkZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmltYWdlRWRpdG9yKSB7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLm9mZihcbiAgICAgICAgZXZlbnROYW1lcy5PQkpFQ1RfQUNUSVZBVEVELFxuICAgICAgICB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lclxuICAgICAgKTtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iub2ZmKFxuICAgICAgICBldmVudE5hbWVzLk9CSkVDVF9BRERFRCxcbiAgICAgICAgdGhpcy5vbk9iamVjdEFkZGVkRXZlbnRMaXN0ZW5lclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uT2JqZWN0QWN0aXZhdGVkKHByb3BzKSB7XG4gICAgdGhpcy5hY3RpdmVPYmplY3RJZCA9IHByb3BzPy5pZDtcbiAgICB0aGlzLmNoZWNrQWN0aXZlT2JqZWN0KHRoaXMuYWN0aXZlT2JqZWN0SWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk9iamVjdEFkZGVkKHByb3BzKSB7XG4gICAgaWYgKHByb3BzICYmIFsncmVjdCcsICdjaXJjbGUnLCAndHJpYW5nbGUnXS5pbmRleE9mKHByb3BzLnR5cGUpID4gLTEpIHtcbiAgICAgIHRoaXMuc2hhcGVUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3I/LnN0b3BEcmF3aW5nTW9kZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBY3RpdmVPYmplY3QoYWN0aXZlT2JqZWN0SWQ6IG51bWJlcikge1xuICAgIGlmIChhY3RpdmVPYmplY3RJZCAhPSBudWxsKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLmltYWdlRWRpdG9yPy5nZXRPYmplY3RQcm9wZXJ0aWVzKGFjdGl2ZU9iamVjdElkLCBbXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3N0cm9rZVdpZHRoJyxcbiAgICAgICAgJ3N0cm9rZScsXG4gICAgICAgICdmaWxsJyxcbiAgICAgIF0pO1xuICAgICAgaWYgKHByb3BzICYmIFsncmVjdCcsICdjaXJjbGUnLCAndHJpYW5nbGUnXS5pbmRleE9mKHByb3BzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgdGhpcy5zaGFwZVN0cm9rZVdpZHRoVmFsdWUgPSBwcm9wcy5zdHJva2VXaWR0aDtcbiAgICAgICAgdGhpcy5zaGFwZUZpbGxDb2xvciA9XG4gICAgICAgICAgdHlwZW9mIHByb3BzLmZpbGwgPT0gJ29iamVjdCcgJiYgcHJvcHMuZmlsbC50eXBlID09ICdjb2xvcidcbiAgICAgICAgICAgID8gcHJvcHMuZmlsbC5jb2xvclxuICAgICAgICAgICAgOiBwcm9wcy5maWxsID09IG51bGwgfHwgcHJvcHMuZmlsbC50cmltKCkgPT0gJydcbiAgICAgICAgICAgID8gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknXG4gICAgICAgICAgICA6IHByb3BzLmZpbGw7XG4gICAgICAgIHRoaXMuc2hhcGVTdHJva2VDb2xvciA9XG4gICAgICAgICAgcHJvcHMuc3Ryb2tlID09IG51bGwgfHwgcHJvcHMuc3Ryb2tlLnRyaW0oKSA9PSAnJ1xuICAgICAgICAgICAgPyAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKSdcbiAgICAgICAgICAgIDogcHJvcHMuc3Ryb2tlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNoYXBlU3Ryb2tlV2lkdGhDaGFuZ2VkKGN1cnJlbnRTdHJva2VXaWR0aDogbnVtYmVyIHwgRXZlbnQsIGlzU2lsZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREcmF3aW5nU2hhcGUodGhpcy5zaGFwZVR5cGUsIHtcbiAgICAgIGZpbGw6IHRoaXMuc2hhcGVGaWxsQ29sb3IsXG4gICAgICBzdHJva2U6IHRoaXMuc2hhcGVTdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZVdpZHRoOiB0eXBlb2YgY3VycmVudFN0cm9rZVdpZHRoID09PSBcIm51bWJlclwiID8gY3VycmVudFN0cm9rZVdpZHRoIDogdGhpcy5zaGFwZVN0cm9rZVdpZHRoVmFsdWUsXG4gICAgfSk7XG4gICAgdGhpcy5zaGFwZUNoYW5nZUFjdGl2ZU9iamVjdCgnc3Ryb2tlV2lkdGgnLCBpc1NpbGVudCk7XG4gIH1cblxuICBzaGFwZUNvbG9yQ2hhbmdlZCh0eXBlOiAnc3Ryb2tlJyB8ICdmaWxsJywgY3VycmVudENvbG9yOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2ZpbGwnOlxuICAgICAgICB0aGlzLnNldERyYXdpbmdTaGFwZSh0aGlzLnNoYXBlVHlwZSwge1xuICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcixcbiAgICAgICAgICBzdHJva2U6IHRoaXMuc2hhcGVTdHJva2VDb2xvcixcbiAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5zaGFwZVN0cm9rZVdpZHRoVmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cm9rZSc6XG4gICAgICAgIHRoaXMuc2V0RHJhd2luZ1NoYXBlKHRoaXMuc2hhcGVUeXBlLCB7XG4gICAgICAgICAgZmlsbDogdGhpcy5zaGFwZUZpbGxDb2xvcixcbiAgICAgICAgICBzdHJva2U6IGN1cnJlbnRDb2xvcixcbiAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5zaGFwZVN0cm9rZVdpZHRoVmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5zaGFwZUNoYW5nZUFjdGl2ZU9iamVjdChcbiAgICAgIHR5cGUgPT0gJ3N0cm9rZScgPyAnc3Ryb2tlQ29sb3InIDogJ2ZpbGxDb2xvcidcbiAgICApO1xuICB9XG5cbiAgc2V0U2hhcGVUeXBlKHR5cGU6ICdjaXJjbGUnIHwgJ3RyaWFuZ2xlJyB8ICdyZWN0Jykge1xuICAgIGNsZWFyU2VsZWN0aW9uKHRoaXMuaW1hZ2VFZGl0b3IpO1xuICAgIGlmICh0aGlzLnNoYXBlVHlwZSAhPSB0eXBlKSB7XG4gICAgICB0aGlzLnNoYXBlVHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLnN0YXJ0RHJhd2luZ01vZGUoJ1NIQVBFJyk7XG4gICAgICB0aGlzLnNldERyYXdpbmdTaGFwZSh0aGlzLnNoYXBlVHlwZSwge1xuICAgICAgICBmaWxsOiB0aGlzLnNoYXBlRmlsbENvbG9yLFxuICAgICAgICBzdHJva2U6IHRoaXMuc2hhcGVTdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMuc2hhcGVTdHJva2VXaWR0aFZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hhcGVUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iuc3RvcERyYXdpbmdNb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RHJhd2luZ1NoYXBlKFxuICAgIHR5cGU6ICdjaXJjbGUnIHwgJ3RyaWFuZ2xlJyB8ICdyZWN0JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBmaWxsOiBzdHJpbmc7XG4gICAgICBzdHJva2U6IHN0cmluZztcbiAgICAgIHN0cm9rZVdpZHRoOiBudW1iZXI7XG4gICAgfVxuICApIHtcbiAgICB0aGlzLmltYWdlRWRpdG9yLnNldERyYXdpbmdTaGFwZSh0eXBlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNoYXBlQ2hhbmdlQWN0aXZlT2JqZWN0KFxuICAgIGNoYW5nZWRQcm9wZXJ0eTogJ3N0cm9rZVdpZHRoJyB8ICdzdHJva2VDb2xvcicgfCAnZmlsbENvbG9yJyxcbiAgICBpc1NpbGVudDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuYWN0aXZlT2JqZWN0SWQgIT0gbnVsbCAmJlxuICAgICAgZ2V0QWN0aXZlT2JqZWN0SWQodGhpcy5pbWFnZUVkaXRvcikgPT0gdGhpcy5hY3RpdmVPYmplY3RJZFxuICAgICkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5pbWFnZUVkaXRvci5nZXRPYmplY3RQcm9wZXJ0aWVzKFxuICAgICAgICB0aGlzLmFjdGl2ZU9iamVjdElkLFxuICAgICAgICAndHlwZSdcbiAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzICE9IG51bGwgJiZcbiAgICAgICAgWydyZWN0JywgJ2NpcmNsZScsICd0cmlhbmdsZSddLmluZGV4T2YocHJvcHMudHlwZSkgPiAtMVxuICAgICAgKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChjaGFuZ2VkUHJvcGVydHkpIHtcbiAgICAgICAgICBjYXNlICdzdHJva2VXaWR0aCc6XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5zaGFwZVN0cm9rZVdpZHRoVmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3Ryb2tlQ29sb3InOlxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLnNoYXBlU3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZmlsbENvbG9yJzpcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgICAgIGZpbGw6IHRoaXMuc2hhcGVGaWxsQ29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZ1bmN0aW9uVG9FeGVjdXRlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW1hZ2VFZGl0b3IuY2hhbmdlU2hhcGUoXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9iamVjdElkLFxuICAgICAgICAgICAgcGFyYW1ldGVycyxcbiAgICAgICAgICAgIGlzU2lsZW50XG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzU2lsZW50KSB7XG4gICAgICAgICAgZnVuY3Rpb25Ub0V4ZWN1dGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uVG9FeGVjdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItbWVudS1zaGFwZVwiPlxuICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1zdWJtZW51LWl0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLW92ZXJmbG93YWJsZS14IHR1aS1pbWFnZS1lZGl0b3ItcHktM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGllLXNoYXBlLWJ1dHRvblwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIFtjbGFzc109XCJcbiAgICAgICAgICAgICAgJ3R1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIHJlY3QgJyArXG4gICAgICAgICAgICAgIChzaGFwZVR5cGUgPT0gJ3JlY3QnID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0U2hhcGVUeXBlKCdyZWN0JylcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtc2hhcGUtcmVjdGFuZ2xlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy1zaGFwZS1yZWN0YW5nbGVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1zaGFwZS1yZWN0YW5nbGVcIiB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBjaXJjbGUgJyArXG4gICAgICAgICAgICAgIChzaGFwZVR5cGUgPT0gJ2NpcmNsZScgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXRTaGFwZVR5cGUoJ2NpcmNsZScpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLXNoYXBlLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtc2hhcGUtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLXNoYXBlLWNpcmNsZVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIFtjbGFzc109XCJcbiAgICAgICAgICAgICAgJ3R1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIHRyaWFuZ2xlICcgK1xuICAgICAgICAgICAgICAoc2hhcGVUeXBlID09ICd0cmlhbmdsZScgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXRTaGFwZVR5cGUoJ3RyaWFuZ2xlJylcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtc2hhcGUtdHJpYW5nbGVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLXNoYXBlLXRyaWFuZ2xlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtc2hhcGUtdHJpYW5nbGVcIiB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXBhcnRpdGlvblwiPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGllLXNoYXBlLWNvbG9yLWJ1dHRvbiB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0aWUtY29sb3ItZmlsbCB0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRmlsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGllLWRyYXctY29sb3ItcGlja2VyXCJcbiAgICAgICAgICAgICAgICBbKGNvbG9yUGlja2VyKV09XCJzaGFwZUZpbGxDb2xvclwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwic2hhcGVGaWxsQ29sb3JcIlxuICAgICAgICAgICAgICAgIFtjcE91dHB1dEZvcm1hdF09XCIncmdiYSdcIlxuICAgICAgICAgICAgICAgIFtjcFByZXNldENvbG9yc109XCJkZWZhdWx0U2hhcGVGaWxsQ29sb3JzXCJcbiAgICAgICAgICAgICAgICAoY29sb3JQaWNrZXJDaGFuZ2UpPVwic2hhcGVDb2xvckNoYW5nZWQoJ2ZpbGwnLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbY3BVc2VSb290Vmlld0NvbnRhaW5lcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1zaGFwZS1maWxsXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+PC9sYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGllLWNvbG9yLXN0cm9rZSB0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgIHRpdGxlPVwiU3Ryb2tlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0aWUtZHJhdy1jb2xvci1waWNrZXJcIlxuICAgICAgICAgICAgICAgIFsoY29sb3JQaWNrZXIpXT1cInNoYXBlU3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInNoYXBlU3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAgIFtjcE91dHB1dEZvcm1hdF09XCIncmdiYSdcIlxuICAgICAgICAgICAgICAgIFtjcFByZXNldENvbG9yc109XCJkZWZhdWx0U2hhcGVTdHJva2VDb2xvcnNcIlxuICAgICAgICAgICAgICAgIChjb2xvclBpY2tlckNoYW5nZSk9XCJzaGFwZUNvbG9yQ2hhbmdlZCgnc3Ryb2tlJywgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2NwVXNlUm9vdFZpZXdDb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgIFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLXNoYXBlLXN0cm9rZVwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPC9kaXY+PC9sYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1uZXdsaW5lIHR1aS1pbWFnZS1lZGl0b3ItcmFuZ2Utd3JhcCB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItanVzdGlmeS1jb250ZW50LWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLW1iLTNcIlxuICAgID5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInJhbmdlXCI+e3tcbiAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtc2hhcGUtc3Ryb2tlV2lkdGhcIiB8IHRyYW5zbGF0ZVxuICAgICAgfX08L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwic2hhcGVTdHJva2VXaWR0aFZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2hhcGVTdHJva2VXaWR0aENoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgIChjaGFuZ2UpPVwic2hhcGVTdHJva2VXaWR0aENoYW5nZWQoJGV2ZW50LCBmYWxzZSlcIlxuICAgICAgICBtaW49XCIyXCJcbiAgICAgICAgbWF4PVwiMzAwXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG1pbj1cIjJcIlxuICAgICAgICBtYXg9XCIzMDBcIlxuICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgIGNsYXNzPVwidGllLWRyYXctcmFuZ2UtdmFsdWUgdHVpLWltYWdlLWVkaXRvci1yYW5nZS12YWx1ZVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwic2hhcGVTdHJva2VXaWR0aFZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2hhcGVTdHJva2VXaWR0aENoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgIChjaGFuZ2UpPVwic2hhcGVTdHJva2VXaWR0aENoYW5nZWQoJGV2ZW50LCBmYWxzZSlcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==